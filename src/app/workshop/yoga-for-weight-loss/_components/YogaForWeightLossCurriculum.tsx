import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const STEPS = [
  {
    id: "1",
    num: "1",
    title: "0-15m: The Science of Breath",
    body: "Learn the 'Metabolic Breath' technique used to fire up digestion and core heat.",
    highlight: false,
  },
  {
    id: "2",
    num: "2",
    title: "15-60m: Full Body Sculpt Flow",
    body: "A dynamic sequence targeting the waistline, thighs, and back muscles.",
    highlight: false,
  },
  {
    id: "3",
    num: "3",
    title: "60-80m: Cortisol Cool Down",
    body: "Restorative poses to signal your nervous system to rest and digest.",
    highlight: false,
  },
  {
    id: "4",
    num: "4",
    title: "80-90m: Live Q&A & Roadmap",
    body: "Sarah answers your personal fitness questions live.",
    highlight: true,
  },
] as const;

export function YogaForWeightLossCurriculum() {
  return (
    <ScrollReveal className="bg-[var(--color-surface)] py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-14 text-center text-3xl font-bold tracking-tight md:text-4xl">
          90 Minutes to Transformation
        </h2>
        <div className="space-y-4">
          {STEPS.map((s, idx) => {
            const isLast = idx === STEPS.length - 1;
            const dotClass = s.highlight ? "bg-[var(--color-secondary)]" : "bg-[var(--color-primary)]";
            return (
              <div key={s.id} className={`relative flex items-start gap-6 ${isLast ? "" : "pb-8"}`}>
                {!isLast && (
                  <div className="absolute bottom-0 left-4 top-10 w-0.5 bg-gray-200" aria-hidden />
                )}
                <div
                  className={`z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${dotClass}`}
                >
                  {s.num}
                </div>
                <div>
                  <h4 className="mb-1 text-[20px] font-semibold text-[var(--color-on-background)]">
                    {s.title}
                  </h4>
                  <p className="text-[var(--color-on-surface-variant)]">{s.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ScrollReveal>
  );
}

