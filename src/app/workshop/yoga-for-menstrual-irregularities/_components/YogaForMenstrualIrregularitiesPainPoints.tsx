import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const painPointCards = [
  {
    icon: "event_busy" as const,
    title: "Irregular Periods",
    body: "Cycles that vary significantly in length or unpredictability every single month.",
  },
  {
    icon: "hourglass_empty" as const,
    title: "Long Delays",
    body: "The constant anxiety of waiting for a cycle that seems to be perpetually late.",
  },
  {
    icon: "block" as const,
    title: "Missed Cycles",
    body: "When your body skips its natural rhythm entirely, leaving you feeling disconnected.",
  },
];

export function YogaForMenstrualIrregularitiesPainPoints() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container-low)] py-32" as="section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-[var(--color-primary)] md:text-4xl">
            Are You Feeling Out of Sync?
          </h2>
          <p className="mx-auto max-w-2xl text-base text-[var(--color-on-surface-variant)] md:text-lg">
            Menstrual irregularities aren&apos;t just a physical hurdle—they disrupt your daily flow and mental
            well-being.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {painPointCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border-t-4 border-[var(--color-accent-border)] bg-white p-10 transition-transform hover:-translate-y-2 mi-soft-shadow"
            >
              <span className="material-symbols-outlined mb-6 block text-4xl text-[var(--color-accent-border)]">
                {card.icon}
              </span>
              <h3 className="mb-4 text-xl font-semibold text-[var(--color-on-surface)]">{card.title}</h3>
              <p className="text-[var(--color-on-surface-variant)]">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
