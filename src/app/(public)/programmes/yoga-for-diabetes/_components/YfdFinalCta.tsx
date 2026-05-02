import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YfdFinalCta() {
  return (
    <ScrollReveal className="px-5 py-24 text-center bg-[color:var(--yfd-surface-container-lowest)]" delay={0.5}>
      <div className="mx-auto max-w-4xl">
        <h2 className="yfd-text-headline-xl mb-8 text-[color:var(--yfd-primary)]">Your Healthier Life is Waiting.</h2>
        <p className="yfd-text-body-lg mb-12 text-[color:var(--yfd-on-surface-variant)]">
          Don&apos;t let another day pass in the cycle of fatigue and fear. Take the first step toward metabolic freedom
          today.
        </p>
        <a
          className="inline-block rounded-full bg-[color:var(--yfd-primary)] px-12 py-6 text-2xl font-bold text-[color:var(--yfd-on-primary)] shadow-2xl transition-transform hover:scale-105"
          href="#pricing"
        >
          Start Your Healthy Life Today
        </a>
      </div>
    </ScrollReveal>
  );
}
