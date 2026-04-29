import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YogaForThyroidFinalCta() {
  return (
    <ScrollReveal className="bg-gradient-to-r from-[var(--color-primary)] to-purple-900 px-6 py-20 text-center text-white">
      <div className="mx-auto max-w-4xl space-y-6">
        <h2 className="text-4xl font-bold">You don&apos;t have to navigate this alone.</h2>
        <p className="text-lg opacity-90">Take the first step toward a more balanced and energetic version of yourself.</p>
        <a
          href="#register"
          className="inline-flex rounded-lg bg-[var(--color-secondary-fixed)] px-10 py-4 text-lg font-bold text-[var(--color-on-secondary-fixed)] shadow-xl transition hover:scale-105"
        >
          Join Free Workshop Today
        </a>
      </div>
    </ScrollReveal>
  );
}
