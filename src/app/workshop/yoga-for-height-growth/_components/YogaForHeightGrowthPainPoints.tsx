import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { PAIN_SECTION } from "../_data/yogaForHeightGrowth";

export function YogaForHeightGrowthPainPoints() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container-low)] px-6 py-20" as="section">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-[-0.01em] text-[var(--color-on-surface)]">{PAIN_SECTION.title}</h2>
          <p className="mx-auto max-w-2xl text-[var(--color-on-surface-variant)]">{PAIN_SECTION.body}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {PAIN_SECTION.points.map((point) => (
            <article
              key={point.title}
              className="rounded-2xl bg-white p-8 shadow-[0_20px_40px_rgba(33,150,243,0.08)] transition-transform hover:-translate-y-2"
            >
              <span className="material-symbols-outlined mb-4 text-4xl text-[var(--color-error)]">{point.icon}</span>
              <h3 className="mb-3 text-2xl font-bold text-[var(--color-on-surface)]">{point.title}</h3>
              <p className="text-[var(--color-on-surface-variant)]">{point.body}</p>
            </article>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
