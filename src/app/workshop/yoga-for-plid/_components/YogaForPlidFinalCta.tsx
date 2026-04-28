import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YogaForPlidFinalCta() {
  return (
    <ScrollReveal
      className="relative overflow-hidden bg-[var(--color-primary)] px-8 py-20 text-center text-[var(--color-on-primary)]"
      as="section"
    >
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-white blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl space-y-8">
        <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          Don't Wait Until Surgery Is Your Only Option.
        </h2>
        <p className="text-lg opacity-90">
          Start your recovery journey today for free. Join the next workshop before spots fill up.
        </p>
        <a
          href="#register"
          className="inline-block rounded-full bg-[var(--color-tertiary-container)] px-10 py-5 text-xl font-bold text-[var(--color-on-tertiary)] shadow-2xl transition-transform hover:scale-105 active:scale-[0.99]"
        >
          Register Now - Free Workshop
        </a>
      </div>
    </ScrollReveal>
  );
}

