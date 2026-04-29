import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export default function YogaForPcosFinalCta() {
  return (
    <ScrollReveal
      className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] py-[var(--pcos-section-y)] text-center text-[var(--color-on-primary)]"
      as="section"
    >
      <div className="mx-auto max-w-4xl space-y-8 px-6">
        <h2 className="font-headline-xl">Ready to embrace hormonal harmony?</h2>
        <p className="text-body-lg opacity-90">
          Join thousands of women who have transformed their PCOS journey through our specialized Yoga
          system.
        </p>
        <a
          href="#register"
          className="ambient-shadow inline-block rounded-full bg-[var(--color-surface-lowest)] px-12 py-5 text-lg font-bold text-[var(--color-primary)] transition-transform hover:scale-105"
        >
          Join Free Workshop
        </a>
        <p className="text-sm opacity-70">100% Free • No Credit Card Required • Live Online</p>
      </div>
    </ScrollReveal>
  );
}
