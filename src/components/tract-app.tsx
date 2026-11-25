import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Check, RotateCcw, Shuffle, X } from "lucide-react";
import { CARDS, LECTURES, type Card, type LectureId } from "@/data/cards";
import {
  GRADE_NAME,
  GRADES,
  addLocalDays,
  formatDue,
  memoryStatus,
  orderAhead,
  orderDue,
  previews,
  schedule,
  scheduleLabel,
  seedFromTag,
  summarize,
  weekLoad,
  type CardMemory,
  type Grade,
} from "@/lib/srs";

const SRS_KEY = "tract-srs-v1";
const TAG_KEY = "tract-tags-v1";

type LectureFilter = LectureId | "all";
type Mode = "due" | "ahead";
type Memories = Record<string, CardMemory>;

function shuffleIds(ids: string[]) {
  const next = [...ids];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const swap = next[i];
    next[i] = next[j] ?? swap;
    next[j] = swap;
  }
  return next;
}

function idsFor(filter: LectureFilter) {
  return CARDS.filter((card) => filter === "all" || card.lecture === filter).map((card) => card.id);
}

function isMemory(value: unknown): value is CardMemory {
  if (!value || typeof value !== "object") return false;
  const row = value as Record<string, unknown>;
  return (
    typeof row.ease === "number" &&
    Number.isFinite(row.ease) &&
    typeof row.intervalDays === "number" &&
    typeof row.reps === "number" &&
    typeof row.lapses === "number" &&
    typeof row.due === "number" &&
    (row.state === "learning" || row.state === "review")
  );
}

function sanitize(value: unknown): Memories {
  const source =
    value && typeof value === "object" && "cards" in value
      ? (value as { cards: unknown }).cards
      : value;
  if (!source || typeof source !== "object") return {};
  const memories: Memories = {};
  for (const [id, row] of Object.entries(source)) {
    if (!isMemory(row)) continue;
    memories[id] = {
      ease: Math.max(1.3, row.ease),
      intervalDays: Math.max(0, Math.round(row.intervalDays)),
      reps: Math.max(0, Math.round(row.reps)),
      lapses: Math.max(0, Math.round(row.lapses)),
      due: row.due,
      state: row.state,
    };
  }
  return memories;
}

function readTags(): Record<string, "known" | "needs-work"> {
  try {
    const raw = localStorage.getItem(TAG_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object") return {};
    const tags: Record<string, "known" | "needs-work"> = {};
    for (const [id, value] of Object.entries(parsed)) {
      if (value === "known" || value === "needs-work") tags[id] = value;
    }
    return tags;
  } catch {
    return {};
  }
}

function loadMemories(now: number): Memories {
  try {
    const raw = localStorage.getItem(SRS_KEY);
    if (raw) return sanitize(JSON.parse(raw) as unknown);
  } catch {
    return {};
  }
  const seeded: Memories = {};
  for (const [id, tag] of Object.entries(readTags())) {
    if (CARDS.some((card) => card.id === id)) seeded[id] = seedFromTag(tag, now);
  }
  localStorage.setItem(SRS_KEY, JSON.stringify({ migrated: true, cards: seeded }));
  return seeded;
}

function queueFor(filter: LectureFilter, mode: Mode, memories: Memories, now: number, pullLearning: boolean) {
  const ids = idsFor(filter);
  if (mode === "ahead") return orderAhead(ids, memories, now);
  const ordered = orderDue(ids, memories, now, pullLearning);
  const fresh = ordered.filter((id) => !memories[id]);
  const rest = ordered.filter((id) => memories[id]);
  return [...rest, ...shuffleIds(fresh)];
}

function lectureOf(id: LectureId) {
  return LECTURES.find((lecture) => lecture.id === id);
}

const DAY_LETTERS = ["S", "M", "T", "W", "T", "F", "S"];

export function TractApp() {
  const [ready, setReady] = useState(false);
  const [now, setNow] = useState(0);
  const [memories, setMemories] = useState<Memories>({});
  const [filter, setFilter] = useState<LectureFilter>("all");
  const [mode, setMode] = useState<Mode>("due");
  const [queue, setQueue] = useState<string[]>([]);
  const [cursor, setCursor] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [graded, setGraded] = useState<Grade | null>(null);
  const [tally, setTally] = useState({ correct: 0, wrong: 0 });
  const [done, setDone] = useState(false);
  const baselineRef = useRef<CardMemory | undefined>(undefined);
  const seenCard = useRef<string | undefined>(undefined);

  const byId = useMemo(() => {
    const map = new Map<string, Card>();
    for (const card of CARDS) map.set(card.id, card);
    return map;
  }, []);

  const deal = useCallback(
    (nextFilter: LectureFilter, nextMode: Mode, nextMemories: Memories, at: number, pullLearning = false) => {
      seenCard.current = undefined;
      const ids = queueFor(nextFilter, nextMode, nextMemories, at, pullLearning);
      setQueue(ids);
      setCursor(0);
      setPicked(null);
      setGraded(null);
      setTally({ correct: 0, wrong: 0 });
      setDone(ids.length === 0);
      setNow(at);
    },
    [],
  );

  useEffect(() => {
    const at = Date.now();
    const stored = loadMemories(at);
    setMemories(stored);
    setFilter("all");
    setMode("due");
    deal("all", "due", stored, at);
    setReady(true);
  }, [deal]);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(SRS_KEY, JSON.stringify({ migrated: true, cards: memories }));
  }, [memories, ready]);

  useEffect(() => {
    if (!ready) return;
    const id = window.setInterval(() => setNow(Date.now()), 30_000);
    return () => window.clearInterval(id);
  }, [ready]);

  const filterIds = useMemo(() => idsFor(filter), [filter]);
  const counts = useMemo(
    () =>
      now
        ? summarize(filterIds, memories, now)
        : { due: 0, learning: 0, review: 0, fresh: 0, ahead: 0, resting: 0, nextDue: null },
    [filterIds, memories, now],
  );
  const load = useMemo(() => (now ? weekLoad(filterIds, memories, now) : [0, 0, 0, 0, 0, 0, 0]), [filterIds, memories, now]);
  const scheduledCount = load.reduce((sum, count) => sum + count, 0);

  const card = done ? undefined : byId.get(queue[cursor] ?? "");
  if (card && seenCard.current !== card.id) {
    seenCard.current = card.id;
    baselineRef.current = memories[card.id];
  }

  const looks = previews(card ? baselineRef.current : undefined, now || 1);
  const scheduled = card && graded ? schedule(baselineRef.current, graded, now || 1) : undefined;
  const lecture = card ? lectureOf(card.lecture) : undefined;
  const suggested: Grade | null = card && picked !== null ? (picked === card.answer ? "good" : "again") : null;

  function choose(index: number) {
    if (!card || picked !== null) return;
    setPicked(index);
    setTally((tally) =>
      index === card.answer ? { ...tally, correct: tally.correct + 1 } : { ...tally, wrong: tally.wrong + 1 },
    );
  }

  function applyGrade(grade: Grade) {
    if (!card || picked === null) return;
    const at = Date.now();
    const next = schedule(baselineRef.current, grade, at);
    setNow(at);
    setMemories((current) => ({ ...current, [card.id]: next }));
    setGraded(grade);
  }

  function goNext() {
    if (!card) return;
    const memory = memories[card.id];
    const shouldRequeue = graded !== null && memory?.state === "learning";
    let nextQueue = queue;
    if (shouldRequeue) {
      nextQueue = queue.filter((item, index) => index <= cursor || item !== card.id);
      const at = Math.min(nextQueue.length, cursor + 3);
      nextQueue = [...nextQueue.slice(0, at), card.id, ...nextQueue.slice(at)];
      setQueue(nextQueue);
    }
    const start = cursor + 1;
    if (start >= nextQueue.length) {
      seenCard.current = undefined;
      setDone(true);
      setPicked(null);
      setGraded(null);
      return;
    }
    seenCard.current = undefined;
    setCursor(start);
    setPicked(null);
    setGraded(null);
  }

  function reshuffle() {
    deal(filter, mode, memories, Date.now());
  }

  function switchMode(next: Mode) {
    setMode(next);
    deal(filter, next, memories, Date.now());
  }

  function switchFilter(next: LectureFilter) {
    setFilter(next);
    deal(next, mode, memories, Date.now());
  }

  function resetSchedule() {
    const at = Date.now();
    setMemories({});
    setMode("due");
    deal(filter, "due", {}, at);
  }

  useEffect(() => {
    if (!ready) return;
    function onKey(event: KeyboardEvent) {
      const target = event.target;
      if (target instanceof HTMLElement && target.closest("input, textarea")) return;
      if (!card || done) {
        if (event.key === "s") reshuffle();
        return;
      }
      if (event.key === "Enter" && target instanceof HTMLElement) {
        const button = target.closest("button");
        if (button instanceof HTMLButtonElement && !button.disabled) return;
      }
      if (picked === null && ["1", "2", "3", "4"].includes(event.key)) {
        const index = Number(event.key) - 1;
        if (index < card.choices.length) choose(index);
      } else if (picked !== null && ["1", "2", "3", "4"].includes(event.key)) {
        const grade = GRADES[Number(event.key) - 1];
        if (grade) applyGrade(grade);
      } else if (event.key === "Enter" && picked !== null) {
        event.preventDefault();
        if (graded) goNext();
        else if (suggested) applyGrade(suggested);
      } else if (event.key === "n" && picked !== null) {
        goNext();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const answered = tally.correct + tally.wrong;
  const dayMarks = Array.from({ length: 7 }, (_, index) => {
    if (!now) return "";
    if (index === 0) return "Now";
    return DAY_LETTERS[new Date(addLocalDays(now, index)).getDay()] ?? "";
  });
  const peak = Math.max(1, ...load);

  return (
    <div className="min-h-screen border-l-2 border-oxblood bg-paper text-ink">
      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-4 py-5 sm:px-8 sm:py-8">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-sans text-xs font-semibold tracking-widest text-oxblood uppercase">
              Unit V · Visceral body
            </p>
            <h1 className="font-display text-4xl leading-none font-semibold text-ink sm:text-5xl">Tract</h1>
            <p className="mt-2 max-w-md text-sm text-muted">
              Answer, then grade the card. A miss comes back in this sitting. A good answer waits a day, then six,
              then stretches with your ease.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={reshuffle}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-4 text-sm font-medium text-paper"
            >
              <Shuffle className="size-4" aria-hidden="true" />
              Reshuffle
            </button>
            <button
              type="button"
              onClick={() => switchMode(mode === "due" ? "ahead" : "due")}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-card px-4 text-sm font-medium text-ink"
            >
              <RotateCcw className="size-4" aria-hidden="true" />
              {mode === "due" ? "Study ahead" : "Back to due"}
            </button>
          </div>
        </header>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
          <FilterChip active={filter === "all"} onClick={() => switchFilter("all")} label="All lectures" />
          {LECTURES.map((item) => (
            <FilterChip
              key={item.id}
              active={filter === item.id}
              onClick={() => switchFilter(item.id)}
              label={item.label}
            />
          ))}
        </div>

        <dl className="mt-4 grid grid-cols-4 gap-2 text-center">
          <Stat label="Due" value={ready ? counts.due : 0} />
          <Stat label="Learning" value={ready ? counts.learning : 0} />
          <Stat label="Review" value={ready ? counts.review : 0} />
          <Stat label="New" value={ready ? counts.fresh : 0} />
        </dl>

        {ready && scheduledCount > 0 ? (
          <div className="mt-3">
            <p className="text-xs font-semibold tracking-widest text-muted uppercase">Coming due</p>
            <div className="mt-2 grid grid-cols-7 gap-1.5">
              {load.map((count, index) => (
                <div key={index} className="text-center">
                  <div className="relative h-12 rounded-md bg-paper-deep">
                    <div
                      className={"absolute inset-x-0 bottom-0 rounded-md " + (index === 0 ? "bg-oxblood" : "bg-pine")}
                      style={{ height: count === 0 ? "0%" : `${Math.max(16, Math.round((count / peak) * 100))}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-muted">{dayMarks[index]}</p>
                  <p className="text-xs tabular-nums text-ink">{count}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <main className="mt-5 flex flex-1 flex-col">
          {!ready ? (
            <section className="rounded-2xl border border-line bg-card px-6 py-16 text-center text-muted">
              Opening today’s desk…
            </section>
          ) : !card || done ? (
            <EmptyState
              mode={mode}
              tally={tally}
              counts={counts}
              now={now}
              onResume={() => deal(filter, "due", memories, Date.now())}
              onResting={() => {
                setMode("due");
                deal(filter, "due", memories, Date.now(), true);
              }}
              onAhead={() => switchMode("ahead")}
              onDue={() => switchMode("due")}
            />
          ) : (
            <article className="flex flex-1 flex-col rounded-2xl border border-line bg-card">
              <div className="flex items-start justify-between gap-3 border-b border-line px-5 py-4 sm:px-6">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-brass uppercase">
                    {lecture?.kicker} · {lecture?.label}
                  </p>
                  <p className="mt-1 text-sm text-muted">{card.topic}</p>
                </div>
                <p className="font-display text-sm text-muted tabular-nums">
                  {Math.min(cursor + 1, queue.length)} / {queue.length}
                  <span className="mt-0.5 block text-right text-xs">
                    {queue.length - cursor} left
                    {answered > 0 ? ` · ${tally.correct}/${answered} right` : ""}
                  </span>
                </p>
              </div>

              <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
                <h2 className="font-display text-2xl leading-snug font-semibold text-balance text-ink sm:text-3xl">
                  {card.prompt}
                </h2>
                <p className="mt-2 text-sm text-muted">{memoryStatus(baselineRef.current)}</p>

                <div className="mt-5 grid gap-2.5" role="group" aria-label="Answers">
                  {card.choices.map((choice, index) => {
                    const revealed = picked !== null;
                    const isAnswer = index === card.answer;
                    const isPick = index === picked;
                    const correct = revealed && isAnswer;
                    const wrong = revealed && isPick && !isAnswer;
                    return (
                      <button
                        key={choice}
                        type="button"
                        disabled={revealed}
                        onClick={() => choose(index)}
                        className={
                          "flex min-h-12 items-start gap-3 rounded-xl border px-3 py-3 text-left text-base leading-snug transition-colors " +
                          (correct
                            ? "border-pine bg-pine-soft text-ink"
                            : wrong
                              ? "border-oxblood bg-oxblood-soft text-ink"
                              : revealed
                                ? "border-line bg-paper text-muted"
                                : "border-line bg-paper text-ink hover:border-ink")
                        }
                      >
                        <span
                          className={
                            "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold " +
                            (correct
                              ? "bg-pine text-paper"
                              : wrong
                                ? "bg-oxblood text-paper"
                                : "bg-paper-deep text-ink")
                          }
                          aria-hidden="true"
                        >
                          {correct ? <Check className="size-3.5" /> : wrong ? <X className="size-3.5" /> : index + 1}
                        </span>
                        <span className="flex-1">{choice}</span>
                      </button>
                    );
                  })}
                </div>

                <div aria-live="polite" className="mt-4 min-h-16">
                  {picked !== null ? (
                    <div
                      className={
                        "rounded-xl px-4 py-3 " +
                        (picked === card.answer ? "bg-pine-soft text-pine" : "bg-oxblood-soft text-oxblood")
                      }
                    >
                      <p className="font-semibold">{picked === card.answer ? "Correct" : "Incorrect"}</p>
                      <p className="mt-1 text-sm text-ink">{card.explain}</p>
                    </div>
                  ) : (
                    <p className="text-sm text-muted">
                      Keys 1–4 answer. Then grade: Again {looks.again}, Hard {looks.hard}, Good {looks.good}, Easy{" "}
                      {looks.easy}.
                    </p>
                  )}
                </div>

                {picked !== null ? (
                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4" role="group" aria-label="Schedule this card">
                    {GRADES.map((grade, index) => {
                      const selected = graded === grade;
                      const hint = graded === null && suggested === grade;
                      return (
                        <button
                          key={grade}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => applyGrade(grade)}
                          className={
                            "min-h-14 rounded-xl border px-2 py-2 text-center " +
                            gradeTone(grade, selected || hint)
                          }
                        >
                          <span className="block text-sm font-semibold">
                            {index + 1} {GRADE_NAME[grade]}
                          </span>
                          <span className={"block text-xs " + (selected || hint ? "text-ink" : "text-muted")}>
                            {looks[grade]}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                ) : null}

                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-brass" aria-live="polite">
                    {gradeNote(scheduled, graded, picked)}
                  </p>
                  <button
                    type="button"
                    onClick={goNext}
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-pine px-5 text-sm font-semibold text-paper"
                  >
                    {picked === null ? "Skip for now" : graded ? "Next card" : "Skip without grading"}
                  </button>
                </div>
              </div>
            </article>
          )}
        </main>

        <footer className="mt-6 flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
          <p>{CARDS.length} cards from lectures 19–23. The schedule stays on this device.</p>
          <button
            type="button"
            className="min-h-11 underline decoration-line underline-offset-4"
            onClick={resetSchedule}
          >
            Reset schedule
          </button>
        </footer>
      </div>
    </div>
  );
}

function gradeNote(scheduled: CardMemory | undefined, graded: Grade | null, picked: number | null) {
  if (scheduled && graded === "again") return "Back in a few cards. If you stop, it stays due in 10 minutes.";
  if (scheduled) return `Next look in ${scheduleLabel(scheduled)}. Ease ${scheduled.ease.toFixed(2)}.`;
  if (picked !== null) return "Enter uses the suggested grade. N moves on.";
  return "";
}

function gradeTone(grade: Grade, active: boolean) {
  if (!active) return "border-line bg-paper text-ink";
  if (grade === "again") return "border-oxblood bg-oxblood-soft text-ink";
  if (grade === "hard") return "border-brass bg-brass-soft text-ink";
  return "border-pine bg-pine-soft text-ink";
}

function FilterChip({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        "min-h-11 shrink-0 rounded-full px-3.5 text-sm font-medium " +
        (active ? "bg-ink text-paper" : "border border-line bg-card text-ink")
      }
    >
      {label}
    </button>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-line bg-card px-2 py-2">
      <dt className="text-xs tracking-wide text-muted uppercase">{label}</dt>
      <dd className="font-display text-2xl leading-none tabular-nums">{value}</dd>
    </div>
  );
}

function EmptyState({
  mode,
  tally,
  counts,
  now,
  onResume,
  onResting,
  onAhead,
  onDue,
}: {
  mode: Mode;
  tally: { correct: number; wrong: number };
  counts: ReturnType<typeof summarize>;
  now: number;
  onResume: () => void;
  onResting: () => void;
  onAhead: () => void;
  onDue: () => void;
}) {
  const answered = tally.correct + tally.wrong;
  let title = "This pass is finished.";
  let body = "Skipped cards are still due. Graded ones wait until their date.";
  if (mode === "ahead") {
    title = counts.ahead === 0 ? "Nothing is scheduled ahead." : "That’s the ahead pile.";
    body = "Grading an early card still moves its next date out.";
  } else if (counts.due === 0 && counts.resting > 0 && counts.nextDue) {
    title = "These cards are resting.";
    body = `${counts.resting} missed ${counts.resting === 1 ? "card comes" : "cards come"} back ${formatDue(counts.nextDue, now)}.`;
  } else if (counts.due === 0 && counts.ahead > 0 && counts.nextDue) {
    title = "Nothing is due right now.";
    body = `Next card ${formatDue(counts.nextDue, now)}. ${counts.ahead} more sit further out.`;
  } else if (counts.due === 0 && counts.fresh === 0) {
    title = "The schedule is clear.";
    body = "Every card in this set has a future date.";
  }

  return (
    <section className="rounded-2xl border border-line bg-card px-6 py-12 text-center">
      <p className="font-display text-3xl font-semibold text-balance">{title}</p>
      <p className="mx-auto mt-3 max-w-sm text-muted">
        {answered > 0 ? `${tally.correct} correct, ${tally.wrong} incorrect. ` : ""}
        {body}
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {mode === "due" && counts.due > 0 ? (
          <button
            type="button"
            onClick={onResume}
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-paper"
          >
            <Shuffle className="size-4" aria-hidden="true" />
            Resume {counts.due} due
          </button>
        ) : null}
        {mode === "due" && counts.resting > 0 ? (
          <button
            type="button"
            onClick={onResting}
            className="inline-flex min-h-12 items-center rounded-full border border-line bg-paper px-5 text-sm font-medium"
          >
            Study resting cards
          </button>
        ) : null}
        {mode === "due" && counts.ahead > 0 ? (
          <button
            type="button"
            onClick={onAhead}
            className="inline-flex min-h-12 items-center rounded-full border border-line bg-paper px-5 text-sm font-medium"
          >
            Study ahead
          </button>
        ) : null}
        {mode === "ahead" ? (
          <button
            type="button"
            onClick={onDue}
            className="inline-flex min-h-12 items-center rounded-full bg-ink px-5 text-sm font-semibold text-paper"
          >
            Back to due cards
          </button>
        ) : null}
      </div>
    </section>
  );
}
