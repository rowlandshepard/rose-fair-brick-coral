// SM-2 schedule for Tract. Quality maps to Again 1, Hard 3, Good 4, Easy 5.
// Ease updates with the SM-2 formula (floor 1.3). A miss returns in 10 minutes
// and is a learning card. The first pass is 1 day (4 if Easy). The second is
// 6 days (4 Hard, 8 Easy). After that the gap is interval × ease.

export type Grade = "again" | "hard" | "good" | "easy";

export type CardMemory = {
  ease: number;
  intervalDays: number;
  reps: number;
  lapses: number;
  due: number;
  state: "learning" | "review";
};

export type DueBucket = "learning" | "review" | "new" | "ahead";

export const GRADES: Grade[] = ["again", "hard", "good", "easy"];

export const GRADE_NAME: Record<Grade, string> = {
  again: "Again",
  hard: "Hard",
  good: "Good",
  easy: "Easy",
};

export const INITIAL_EASE = 2.5;
export const MIN_EASE = 1.3;
export const LEARNING_MS = 10 * 60 * 1000;

const QUALITY: Record<Grade, number> = { again: 1, hard: 3, good: 4, easy: 5 };

export function startOfLocalDay(ms: number): number {
  const date = new Date(ms);
  date.setHours(0, 0, 0, 0);
  return date.getTime();
}

export function addLocalDays(ms: number, days: number): number {
  const date = new Date(startOfLocalDay(ms));
  date.setDate(date.getDate() + days);
  return date.getTime();
}

export function localDayIndex(due: number, now: number): number {
  const diff = startOfLocalDay(due) - startOfLocalDay(now);
  return Math.round(diff / 86_400_000);
}

export function easeAfter(ease: number, grade: Grade): number {
  const gap = 5 - QUALITY[grade];
  const delta = 0.1 - gap * (0.08 + gap * 0.02);
  const next = Math.max(MIN_EASE, ease + delta);
  return Math.round(next * 100) / 100;
}

function nextInterval(prev: CardMemory | undefined, grade: Exclude<Grade, "again">, ease: number): number {
  const reps = prev?.reps ?? 0;
  const interval = prev?.intervalDays ?? 0;
  const reviewing = prev?.state === "review" && reps > 0;

  if (!reviewing) {
    return grade === "easy" ? 4 : 1;
  }
  if (reps === 1) {
    if (grade === "easy") return 8;
    if (grade === "hard") return 4;
    return 6;
  }
  if (grade === "hard") return Math.max(interval + 1, Math.round(interval * 1.2));
  if (grade === "easy") return Math.max(1, Math.round(interval * ease * 1.3));
  return Math.max(1, Math.round(interval * ease));
}

export function schedule(prev: CardMemory | undefined, grade: Grade, now: number): CardMemory {
  const ease = easeAfter(prev?.ease ?? INITIAL_EASE, grade);

  if (grade === "again") {
    return {
      ease,
      intervalDays: 0,
      reps: 0,
      lapses: prev?.state === "review" ? (prev.lapses ?? 0) + 1 : (prev?.lapses ?? 0),
      due: now + LEARNING_MS,
      state: "learning",
    };
  }

  const intervalDays = nextInterval(prev, grade, ease);
  return {
    ease,
    intervalDays,
    reps: (prev?.reps ?? 0) + 1,
    lapses: prev?.lapses ?? 0,
    due: addLocalDays(now, intervalDays),
    state: "review",
  };
}

export function scheduleLabel(memory: CardMemory): string {
  if (memory.state === "learning" || memory.intervalDays <= 0) return "10 min";
  if (memory.intervalDays === 1) return "1 day";
  if (memory.intervalDays < 90) return `${memory.intervalDays} days`;
  const months = Math.max(1, Math.round(memory.intervalDays / 30));
  return months === 1 ? "1 month" : `${months} months`;
}

export function previews(memory: CardMemory | undefined, now: number): Record<Grade, string> {
  return {
    again: scheduleLabel(schedule(memory, "again", now)),
    hard: scheduleLabel(schedule(memory, "hard", now)),
    good: scheduleLabel(schedule(memory, "good", now)),
    easy: scheduleLabel(schedule(memory, "easy", now)),
  };
}

export function memoryStatus(memory: CardMemory | undefined): string {
  if (!memory) return "New card. The first grade starts the schedule.";
  const ease = memory.ease.toFixed(2);
  if (memory.state === "learning") {
    return memory.lapses > 0
      ? `Learning again · ease ${ease} · ${memory.lapses} lapse${memory.lapses === 1 ? "" : "s"}`
      : `Learning · ease ${ease}`;
  }
  const gap = memory.intervalDays === 1 ? "1 day" : `${memory.intervalDays} days`;
  return `Review · last gap ${gap} · ease ${ease} · ${memory.reps} in a row`;
}

export function formatDue(due: number, now: number): string {
  if (due <= now) return "now";
  const delta = due - now;
  if (delta < 60 * 60 * 1000) {
    const mins = Math.max(1, Math.ceil(delta / 60_000));
    return mins === 1 ? "in 1 minute" : `in ${mins} minutes`;
  }
  const day = localDayIndex(due, now);
  if (day <= 0) return new Date(due).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
  if (day === 1) return "tomorrow";
  if (day < 7) return new Date(due).toLocaleDateString(undefined, { weekday: "long" });
  return new Date(due).toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

export function classify(memory: CardMemory | undefined, now: number): DueBucket {
  if (!memory) return "new";
  if (memory.due > now) return "ahead";
  if (memory.state === "learning") return "learning";
  return "review";
}

export function orderDue(
  ids: string[],
  memories: Readonly<Record<string, CardMemory>>,
  now: number,
  pullLearning = false,
): string[] {
  const learning: string[] = [];
  const review: string[] = [];
  const fresh: string[] = [];
  for (const id of ids) {
    const memory = memories[id];
    const bucket = classify(memory, now);
    if (bucket === "learning" || (pullLearning && memory?.state === "learning")) learning.push(id);
    else if (bucket === "review") review.push(id);
    else if (bucket === "new") fresh.push(id);
  }
  const byDue = (a: string, b: string) => (memories[a]?.due ?? 0) - (memories[b]?.due ?? 0);
  learning.sort(byDue);
  review.sort(byDue);
  return [...learning, ...review, ...fresh];
}

export function orderAhead(ids: string[], memories: Readonly<Record<string, CardMemory>>, now: number): string[] {
  return ids
    .filter((id) => {
      const memory = memories[id];
      return memory?.state === "review" && memory.due > now;
    })
    .sort((a, b) => (memories[a]?.due ?? 0) - (memories[b]?.due ?? 0));
}

export function weekLoad(ids: string[], memories: Readonly<Record<string, CardMemory>>, now: number): number[] {
  const buckets = [0, 0, 0, 0, 0, 0, 0];
  for (const id of ids) {
    const memory = memories[id];
    if (!memory) continue;
    let index = memory.due <= now ? 0 : localDayIndex(memory.due, now);
    if (index < 0) index = 0;
    if (index < 7) buckets[index] += 1;
  }
  return buckets;
}

export function seedFromTag(tag: "known" | "needs-work", now: number): CardMemory {
  if (tag === "known") {
    return {
      ease: easeAfter(INITIAL_EASE, "easy"),
      intervalDays: 4,
      reps: 1,
      lapses: 0,
      due: addLocalDays(now, 4),
      state: "review",
    };
  }
  return {
    ease: easeAfter(INITIAL_EASE, "again"),
    intervalDays: 0,
    reps: 0,
    lapses: 0,
    due: now,
    state: "learning",
  };
}

export type DeckCounts = {
  due: number;
  learning: number;
  review: number;
  fresh: number;
  ahead: number;
  resting: number;
  nextDue: number | null;
};

export function summarize(ids: string[], memories: Readonly<Record<string, CardMemory>>, now: number): DeckCounts {
  const counts: DeckCounts = {
    due: 0,
    learning: 0,
    review: 0,
    fresh: 0,
    ahead: 0,
    resting: 0,
    nextDue: null,
  };
  for (const id of ids) {
    const memory = memories[id];
    if (!memory) {
      counts.fresh += 1;
      counts.due += 1;
      continue;
    }
    if (memory.state === "learning") counts.learning += 1;
    else counts.review += 1;
    if (memory.due <= now) {
      counts.due += 1;
    } else {
      if (memory.state === "learning") counts.resting += 1;
      else counts.ahead += 1;
      if (counts.nextDue === null || memory.due < counts.nextDue) counts.nextDue = memory.due;
    }
  }
  return counts;
}
