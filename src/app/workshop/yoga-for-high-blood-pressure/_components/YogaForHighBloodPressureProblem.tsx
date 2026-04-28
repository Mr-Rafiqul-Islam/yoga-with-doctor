import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { PROBLEM_CARDS, PROBLEM_SECTION } from "../_data/yogaForHighBloodPressure";

export function YogaForHighBloodPressureProblem() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-bright)] px-6 py-16" as="section">
      <div className="mx-auto mb-16 max-w-[1200px] text-center">
        <h2 className="mb-4 text-[32px] font-semibold leading-[1.3] text-[var(--color-on-surface)]">
          {PROBLEM_SECTION.title}
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-[1.6] text-[var(--color-secondary)]">
          {PROBLEM_SECTION.subtitle}
        </p>
      </div>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-3">
        {PROBLEM_CARDS.map((card) => (
          <div
            key={card.id}
            className="flex flex-col items-center rounded-3xl border border-[var(--color-border-card)] bg-white p-8 text-center shadow-sm"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-surface-container)] text-[var(--color-primary)]">
              <span className="material-symbols-outlined text-4xl">{card.icon}</span>
            </div>
            <h3 className="mb-3 text-2xl font-semibold leading-[1.4] text-[var(--color-on-surface)]">
              {card.title}
            </h3>
            <p className="text-[var(--color-secondary)]">{card.body}</p>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
