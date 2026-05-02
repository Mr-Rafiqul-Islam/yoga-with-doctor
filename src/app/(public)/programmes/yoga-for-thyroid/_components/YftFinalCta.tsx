import Link from "next/link";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YftFinalCta() {
  return (
    <ScrollReveal
      className="relative overflow-hidden bg-[color:var(--color-primary)] px-8 py-32 text-center"
      delay={0.24}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 size-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </div>
      <div className="relative mx-auto max-w-4xl space-y-10">
        <h2 className="yft-text-h1 text-white">Ready to Restore Your Inner Balance?</h2>
        <p className="yft-text-body-lg text-white/80">
          Join thousands who have already transformed their relationship with their body and hormones.
        </p>
        <Link
          className="yft-text-h3 inline-block rounded-xl bg-[color:var(--color-surface-container-lowest)] px-12 py-5 text-xl text-[color:var(--color-primary)] shadow-2xl transition-transform hover:scale-105"
          href="#checkout"
        >
          Start My Transformation Now
        </Link>
        <p className="yft-label-caps text-sm text-white/60">
          Join today for lifetime access &amp; updates
        </p>
      </div>
    </ScrollReveal>
  );
}
