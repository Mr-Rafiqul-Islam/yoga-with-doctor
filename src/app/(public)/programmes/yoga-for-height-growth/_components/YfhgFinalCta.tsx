import Link from "next/link";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YfhgFinalCta() {
  return (
    <ScrollReveal className="px-[var(--yfhg-space-md)] py-[var(--yfhg-space-xl)] text-center" as="section">
      <div className="mx-auto max-w-3xl">
        <h2 className="yfhg-display-xl mb-6 text-[color:var(--color-on-background)]">
          Stop settling for less than your true potential.
        </h2>
        <p className="yfhg-body-lg mb-10 text-[color:var(--color-on-surface-variant)]">
          You&apos;re just 30 days away from a taller, more confident version of yourself. Don&apos;t let another year
          pass by feeling small.
        </p>
        <Link
          className="yfhg-display-xl inline-flex items-center gap-3 rounded-2xl bg-[color:var(--color-primary)] px-10 py-6 text-2xl font-black text-white transition-transform duration-300 hover:scale-105"
          href="#checkout"
        >
          Start Your Journey Today
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </ScrollReveal>
  );
}
