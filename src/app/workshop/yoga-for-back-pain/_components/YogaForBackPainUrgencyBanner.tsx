import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YogaForBackPainUrgencyBanner() {
  return (
    <ScrollReveal as="section" className="bg-[var(--color-tertiary-container)] px-6 py-12 text-center">
      <div className="mx-auto max-w-4xl">
        <span className="material-symbols-outlined material-symbols-outlined--fill mb-4 text-4xl text-white">
          priority_high
        </span>
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Pain gets worse if ignored</h2>
        <p className="mb-8 text-lg text-[var(--color-on-tertiary-container)]">
          Clinical data shows untreated postural imbalance can cause long-term disc degeneration. The longer you
          wait, the harder recovery becomes.
        </p>
        <a
          href="#register"
          className="inline-flex rounded-lg bg-white px-10 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-tertiary)]"
        >
          Secure Your Free Spot Now
        </a>
      </div>
    </ScrollReveal>
  );
}
