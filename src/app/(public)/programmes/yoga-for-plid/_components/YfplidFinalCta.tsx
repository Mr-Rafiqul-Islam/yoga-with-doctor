import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YfplidFinalCta() {
  return (
    <ScrollReveal className="space-y-8 py-24 text-center">
      <h2 className="yfplid-text-h1 mx-auto max-w-4xl text-[color:var(--yfplid-primary)]">
        Stop Managing Pain. Start Healing Your Spine.
      </h2>
      <p className="yfplid-text-body-lg mx-auto max-w-2xl text-[color:var(--yfplid-on-surface-variant)]">
        Imagine waking up tomorrow with 20% less stiffness. Imagine walking a mile without needing to
        sit down. This is possible with the right approach.
      </p>
      <a
        className="inline-block rounded-2xl bg-[color:var(--yfplid-primary)] px-12 py-6 text-xl font-bold text-[color:var(--yfplid-on-primary)] transition-transform hover:scale-105"
        href="#enrollment"
      >
        Start Your Healing Journey
      </a>
    </ScrollReveal>
  );
}
