import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { FINAL_CTA } from "../_data/yogaForHeightGrowth";

export function YogaForHeightGrowthFinalCta() {
  return (
    <ScrollReveal className="px-6 py-20 text-center" as="section">
      <div className="mx-auto max-w-4xl space-y-8">
        <h2 className="text-4xl font-bold tracking-[-0.02em] text-[var(--color-on-surface)]">{FINAL_CTA.title}</h2>
        <p className="mx-auto max-w-2xl text-lg text-[var(--color-on-surface-variant)]">{FINAL_CTA.body}</p>
        <div className="flex flex-col items-center gap-4">
          <a
            href="#register"
            className="font-label inline-flex rounded-full border-b-4 border-[rgb(139_80_0)] bg-[var(--color-tertiary-container)] px-12 py-6 text-xl font-semibold text-white shadow-2xl transition-all hover:scale-105"
          >
            {FINAL_CTA.cta}
          </a>
          <p className="font-label flex items-center gap-2 text-sm text-[var(--color-on-surface-variant)]">
            <span className="material-symbols-outlined text-sm text-[var(--color-primary)]">lock</span>
            {FINAL_CTA.note}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
