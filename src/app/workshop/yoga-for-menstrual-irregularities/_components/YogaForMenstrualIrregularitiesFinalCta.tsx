import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YogaForMenstrualIrregularitiesFinalCta() {
  return (
    <ScrollReveal
      className="relative overflow-hidden bg-[var(--color-surface-container-high)] py-32"
      as="section"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
        <span className="mi-font-display text-[12rem] italic text-[var(--color-primary)] md:text-[20rem]">
          Balance
        </span>
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="mi-font-display mb-6 text-3xl font-semibold text-[var(--color-primary)] md:text-4xl lg:text-5xl">
          Your cycle is a vital sign. Listen to it.
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-[var(--color-on-surface-variant)] md:text-xl">
          Don&apos;t spend another month in confusion. Join us for a free hour of sanctuary and science.
        </p>
        <a
          className="inline-block rounded-xl bg-[var(--color-primary)] px-12 py-5 text-lg font-bold text-[var(--color-on-primary)] shadow-xl transition-transform hover:scale-105"
          href="#register"
        >
          Join the Workshop for Free
        </a>
        <p className="mt-6 text-xs font-semibold uppercase italic tracking-widest text-slate-400">
          Limited capacity for personalized Q&amp;A
        </p>
      </div>
    </ScrollReveal>
  );
}
