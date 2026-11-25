import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  addLocalDays,
  easeAfter,
  LEARNING_MS,
  orderAhead,
  orderDue,
  previews,
  schedule,
  seedFromTag,
  weekLoad,
  type CardMemory,
} from "./srs.ts";

const t0 = new Date(2026, 10, 25, 15, 30, 0).getTime();

describe("ease", () => {
  it("applies the SM-2 deltas and floors at 1.3", () => {
    assert.equal(easeAfter(2.5, "again"), 1.96);
    assert.equal(easeAfter(2.5, "hard"), 2.36);
    assert.equal(easeAfter(2.5, "good"), 2.5);
    assert.equal(easeAfter(2.5, "easy"), 2.6);
    let ease = 2.5;
    for (let i = 0; i < 10; i += 1) ease = easeAfter(ease, "again");
    assert.equal(ease, 1.3);
  });
});

describe("schedule", () => {
  it("spaces a good card 1 day, then 6, then interval × ease", () => {
    const first = schedule(undefined, "good", t0);
    assert.equal(first.intervalDays, 1);
    assert.equal(first.reps, 1);
    assert.equal(first.ease, 2.5);
    assert.equal(first.state, "review");
    assert.equal(first.due, addLocalDays(t0, 1));

    const second = schedule(first, "good", addLocalDays(t0, 1));
    assert.equal(second.intervalDays, 6);
    assert.equal(second.reps, 2);

    const third = schedule(second, "good", addLocalDays(t0, 7));
    assert.equal(third.intervalDays, 15);
    assert.equal(third.reps, 3);
    assert.equal(third.due, addLocalDays(addLocalDays(t0, 7), 15));
  });

  it("gives Easy a longer first gap and Hard a shorter second gap", () => {
    const easy = schedule(undefined, "easy", t0);
    assert.equal(easy.intervalDays, 4);
    assert.equal(easy.ease, 2.6);

    const once = schedule(undefined, "good", t0);
    assert.deepEqual(previews(once, t0), {
      again: "10 min",
      hard: "4 days",
      good: "6 days",
      easy: "8 days",
    });
  });

  it("sends a miss back in 10 minutes and counts a lapse only after a review", () => {
    const missed = schedule(undefined, "again", t0);
    assert.equal(missed.state, "learning");
    assert.equal(missed.reps, 0);
    assert.equal(missed.lapses, 0);
    assert.equal(missed.due, t0 + LEARNING_MS);

    const recovered = schedule(missed, "good", t0 + 1000);
    assert.equal(recovered.state, "review");
    assert.equal(recovered.intervalDays, 1);
    assert.equal(recovered.reps, 1);

    const reviewed = schedule(recovered, "good", addLocalDays(t0, 1));
    const lapsed = schedule(reviewed, "again", addLocalDays(t0, 7));
    assert.equal(lapsed.lapses, 1);
    assert.equal(lapsed.reps, 0);
    assert.equal(lapsed.state, "learning");
  });

  it("grows a mature card by 1.2 on Hard and by ease × 1.3 on Easy", () => {
    const mature: CardMemory = {
      ease: 2.5,
      intervalDays: 15,
      reps: 3,
      lapses: 0,
      due: t0,
      state: "review",
    };
    const hard = schedule(mature, "hard", t0);
    assert.equal(hard.intervalDays, 18);
    assert.equal(hard.ease, 2.36);
    assert.equal(hard.reps, 4);

    const easy = schedule(mature, "easy", t0);
    assert.equal(easy.ease, 2.6);
    assert.equal(easy.intervalDays, Math.round(15 * 2.6 * 1.3));
  });

  it("does not mutate the previous memory", () => {
    const prev = schedule(undefined, "good", t0);
    const copy = { ...prev };
    schedule(prev, "again", t0);
    assert.deepEqual(prev, copy);
  });
});

describe("queue", () => {
  const now = new Date(2026, 10, 25, 12, 0, 0).getTime();
  const memories: Record<string, CardMemory> = {
    learn: { ease: 2.5, intervalDays: 0, reps: 0, lapses: 1, due: now - 1000, state: "learning" },
    learnLater: { ease: 2.5, intervalDays: 0, reps: 0, lapses: 0, due: now + 60_000, state: "learning" },
    old: { ease: 2.5, intervalDays: 6, reps: 2, lapses: 0, due: now - 3 * 86_400_000, state: "review" },
    recent: { ease: 2.5, intervalDays: 1, reps: 1, lapses: 0, due: now - 1000, state: "review" },
    future: { ease: 2.5, intervalDays: 4, reps: 1, lapses: 0, due: addLocalDays(now, 4), state: "review" },
  };
  const ids = ["new1", "future", "recent", "old", "learnLater", "learn", "new2"];

  it("orders due learning, then overdue reviews, then new cards", () => {
    assert.deepEqual(orderDue(ids, memories, now), ["learn", "old", "recent", "new1", "new2"]);
  });

  it("can pull resting learning cards early", () => {
    assert.deepEqual(orderDue(ids, memories, now, true), [
      "learn",
      "learnLater",
      "old",
      "recent",
      "new1",
      "new2",
    ]);
  });

  it("lists only future reviews when studying ahead", () => {
    assert.deepEqual(orderAhead(ids, memories, now), ["future"]);
  });

  it("buckets the next seven local days, ignoring cards with no memory", () => {
    assert.deepEqual(weekLoad(ids, memories, now), [4, 0, 0, 0, 1, 0, 0]);
  });
});

describe("tag migration", () => {
  it("parks known cards four days out and keeps needs-work due now", () => {
    const known = seedFromTag("known", t0);
    assert.equal(known.state, "review");
    assert.equal(known.intervalDays, 4);
    assert.equal(known.ease, 2.6);
    assert.ok(known.due > t0);

    const work = seedFromTag("needs-work", t0);
    assert.equal(work.state, "learning");
    assert.equal(work.due, t0);
    assert.equal(work.ease, 1.96);
  });
});
