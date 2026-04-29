import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const COUNTDOWN_SEGMENTS = [
  { display: "02h" },
  { display: "45m" },
  { display: "12s" },
] as const;

export function YogaForHeartCareCountdownBar() {
  return (
    <ScrollReveal className="bg-[var(--color-tertiary-container)] py-4 text-center text-white" as="div">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-6 md:flex-row">
        <span className="font-semibold">The next free workshop begins in:</span>
        <div className="flex gap-4 font-mono text-xl font-bold">
          {COUNTDOWN_SEGMENTS.map((seg) => (
            <span key={seg.display} className="rounded bg-black/20 px-3 py-1">
              {seg.display}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
