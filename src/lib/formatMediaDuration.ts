/**
 * Human-readable media length from a total in seconds (API `Video.duration`).
 */

export function lessonDurationSeconds(lesson: {
  durationMin: number | null;
  video: { duration: number | null } | null;
}): number | null {
  if (lesson.video?.duration != null && !Number.isNaN(lesson.video.duration)) {
    return Math.max(0, Math.floor(lesson.video.duration));
  }
  if (lesson.durationMin != null && !Number.isNaN(lesson.durationMin)) {
    return Math.max(0, Math.floor(lesson.durationMin * 60));
  }
  return null;
}

export function formatHumanMediaDuration(
  totalSeconds: number | null | undefined,
  options?: { empty?: string }
): string {
  const empty = options?.empty ?? "—";
  if (totalSeconds == null || Number.isNaN(totalSeconds)) return empty;
  const s = Math.floor(totalSeconds);
  if (s < 0) return empty;
  if (s === 0) return "0 sec";

  if (s < 60) {
    return `${s} sec`;
  }

  if (s < 3600) {
    const m = Math.floor(s / 60);
    const rem = s % 60;
    if (rem === 0) return `${m} min`;
    return `${m} min ${rem} sec`;
  }

  const h = Math.floor(s / 3600);
  const rem = s % 3600;
  const m = Math.floor(rem / 60);
  const sec = rem % 60;
  let out = `${h} h`;
  if (m > 0) out += ` ${m} min`;
  if (sec > 0) out += ` ${sec} sec`;
  return out;
}
