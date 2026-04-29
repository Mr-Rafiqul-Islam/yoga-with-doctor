import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { BENEFITS } from "../_data/yogaForHeightGrowth";

export function YogaForHeightGrowthBenefits() {
  return (
    <ScrollReveal className="px-6 py-20" as="section">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((benefit) => (
          <article
            key={benefit.title}
            className="group rounded-3xl border border-[var(--color-surface-variant)] bg-[var(--color-surface-bright)] p-8 transition-colors"
            style={{ borderColor: "var(--color-surface-variant)" }}
          >
            <div
              className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:scale-110"
              style={{ backgroundColor: benefit.background, color: benefit.accent }}
            >
              <span className="material-symbols-outlined">{benefit.icon}</span>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-[var(--color-on-surface)]">{benefit.title}</h3>
            <p className="text-sm text-[var(--color-on-surface-variant)]">{benefit.body}</p>
          </article>
        ))}
      </div>
    </ScrollReveal>
  );
}
