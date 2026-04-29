import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const painPoints = [
  { icon: "bedtime", title: "Chronic Fatigue" },
  { icon: "fitness_center", title: "Weight Flux" },
  { icon: "sentiment_dissatisfied", title: "Mood Swings" },
  { icon: "spa", title: "Hair Fall" },
];

export function YogaForThyroidPainPoints() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container-low)] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-3 text-4xl font-bold tracking-[-0.01em]">Are You Facing These Silent Struggles?</h2>
          <p className="text-[var(--color-on-surface-variant)]">
            Thyroid imbalance isn&apos;t just a clinical term; it&apos;s the daily weight you carry.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {painPoints.map((item) => (
            <article
              key={item.title}
              className="space-y-3 rounded-2xl bg-white p-6 text-center shadow-[0_4px_24px_rgba(156,39,176,0.04)]"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)]">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3 className="font-bold">{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
