import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const STEPS = [
  {
    step: "01",
    title: "The Cardiac-Breath Connection",
    description:
      "Understanding how your respiratory rhythm dictates your heart's electrical activity.",
  },
  {
    step: "02",
    title: "Gentle Heart-Opening Flow",
    description:
      "A 20-minute sequence designed for mobility without excessive aerobic strain.",
  },
  {
    step: "03",
    title: "The Recovery Protocol",
    description:
      "Step-by-step guidance on using yoga for post-stress heart rate normalization.",
  },
] as const;

export function YogaForHeartCareCurriculum() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container-low)] px-6 py-20" as="section" id="curriculum">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-16 text-center text-[32px] font-semibold leading-[1.3] tracking-[-0.01em] text-[var(--color-on-background)]">
          Workshop Breakdown
        </h2>
        <div className="space-y-6">
          {STEPS.map((s) => (
            <div
              key={s.step}
              className="flex gap-6 rounded-xl border border-[rgb(var(--color-primary-rgb)/0.05)] bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary-fixed)] font-bold text-[var(--color-primary)]">
                {s.step}
              </div>
              <div>
                <h4 className="mb-2 text-xl font-bold text-[var(--color-on-background)]">{s.title}</h4>
                <p className="text-[var(--color-on-surface-variant)]">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
