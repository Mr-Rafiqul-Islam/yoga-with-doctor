import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { FINAL_CTA } from "../_data/yogaForHighBloodPressure";

export function YogaForHighBloodPressureFinalCta() {
  return (
    <ScrollReveal className="px-6 py-16 text-center" as="section">
      <div className="mx-auto max-w-[800px]">
        <h2 className="mb-6 text-[48px] font-bold leading-[1.2] tracking-[-0.02em] text-[var(--color-on-surface)]">
          {FINAL_CTA.title}
        </h2>
        <p className="mb-10 text-lg leading-[1.6] text-[var(--color-secondary)]">{FINAL_CTA.body}</p>
        <a
          href="#register"
          className="inline-flex h-16 items-center justify-center rounded-2xl bg-[var(--color-primary)] px-12 text-lg font-bold text-[var(--color-on-primary)] transition-transform hover:scale-105"
        >
          {FINAL_CTA.cta}
        </a>
      </div>
    </ScrollReveal>
  );
}
