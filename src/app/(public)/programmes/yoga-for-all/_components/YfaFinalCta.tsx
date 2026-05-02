import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YfaFinalCta() {
  return (
    <ScrollReveal className="border-t border-teal-50 bg-white px-6 py-16 text-center" delay={0.04}>
      <div className="mx-auto max-w-2xl">
        <h2 className="yfa-text-h2 mb-6 text-[color:var(--yfa-primary)]">Your Future Self Will Thank You</h2>
        <p className="yfa-text-body-lg mb-10 text-[color:var(--yfa-secondary)]">
          Don&apos;t let another month go by feeling stiff and stressed. Take the first small step today toward a
          healthier, more vibrant you.
        </p>
        <a
          className="mb-6 inline-block rounded-2xl bg-[color:var(--yfa-primary)] px-12 py-6 text-xl font-bold text-white shadow-xl transition-colors hover:bg-[color:var(--yfa-primary-container)]"
          href="#checkout"
        >
          Start Your Journey Today
        </a>
        <p className="text-sm italic text-[color:var(--yfa-secondary)]">
          &quot;The journey of a thousand miles begins with a single breath.&quot;
        </p>
      </div>
    </ScrollReveal>
  );
}
