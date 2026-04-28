import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { BENEFIT_CARDS, BENEFITS_TITLE } from "../_data/yogaForHighBloodPressure";

export function YogaForHighBloodPressureBenefits() {
  return (
    <ScrollReveal className="px-6 py-16" as="section">
      <div className="mx-auto mb-16 max-w-[1200px] text-center">
        <h2 className="text-[32px] font-semibold leading-[1.3] text-[var(--color-on-surface)]">
          {BENEFITS_TITLE}
        </h2>
      </div>
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-4">
        {BENEFIT_CARDS.map((card) => (
          <div
            key={card.id}
            className="rounded-3xl border border-[var(--color-border-card)] bg-white p-6 text-center shadow-sm"
          >
            <span className="material-symbols-outlined mb-4 block text-4xl text-[var(--color-primary)]">
              {card.icon}
            </span>
            <h4 className="mb-2 font-bold text-[var(--color-on-surface)]">{card.title}</h4>
            <p className="text-sm text-[var(--color-secondary)]">{card.body}</p>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
