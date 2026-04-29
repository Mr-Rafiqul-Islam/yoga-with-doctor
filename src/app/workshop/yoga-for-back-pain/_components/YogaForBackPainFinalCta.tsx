import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YogaForBackPainFinalCta() {
  return (
    <ScrollReveal as="footer" className="px-6 pb-24 pt-4 text-center">
      <h3 className="mb-6 text-2xl font-bold md:text-3xl">Ready to live without pain?</h3>
      <a
        href="#register"
        className="inline-flex rounded-xl bg-[var(--color-primary)] px-12 py-5 text-xl font-semibold text-white shadow-lg transition hover:brightness-110"
      >
        CLAIM YOUR FREE SPOT
      </a>
    </ScrollReveal>
  );
}
