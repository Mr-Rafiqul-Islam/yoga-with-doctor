import Link from "next/link";

import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function PcpFinalCta() {
  return (
    <ScrollReveal className="mx-auto max-w-4xl px-8 py-32 text-center" delay={0.2}>
      <h2 className="pcp-text-h1 mb-8 text-[color:var(--color-on-surface)]">
        Start Your Safe <span className="italic text-[color:var(--color-primary)]">Pregnancy Journey</span> Today
      </h2>
      <p className="pcp-text-body-lg mb-12 text-[color:var(--color-on-surface-variant)]">
        Don&apos;t let another day go by feeling disconnected or uncomfortable. Join the Sanctuary and nurture
        yourself and your baby.
      </p>
      <Link
        className="inline-block scale-110 rounded-full bg-[color:var(--color-primary)] px-12 py-5 font-[family-name:var(--font-body)] text-lg font-medium text-[color:var(--color-on-primary)] transition-all hover:shadow-2xl"
        href="#checkout"
      >
        Get Instant Access Now
      </Link>
      <p className="pcp-label-caps mt-8 text-[color:var(--color-tertiary)]">
        100% Satisfaction Guarantee • Secure Payment
      </p>
    </ScrollReveal>
  );
}
