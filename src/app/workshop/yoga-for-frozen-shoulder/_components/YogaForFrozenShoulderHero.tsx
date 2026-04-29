import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YogaForFrozenShoulderHero() {
  return (
    <ScrollReveal as="header" className="relative overflow-hidden px-6 pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="absolute left-1/2 top-0 -z-10 h-full w-full max-w-5xl -translate-x-1/2 opacity-20">
        <div className="breath-guider absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-[var(--color-primary-container)]" />
      </div>

      <div className="mx-auto max-w-6xl text-center">
        <span className="mb-6 block text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
          Holistic Recovery System
        </span>
        <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-[-0.02em] text-[var(--color-on-surface)] md:text-6xl">
          Restore your shoulder movement &amp; reduce pain naturally
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-[var(--color-on-surface-variant)]">
          Simple guided yoga for frozen shoulder recovery. Join our clinical specialists for a transformative 90-minute workshop.
        </p>

        <div className="mb-14 flex flex-col items-center justify-center gap-4 md:flex-row">
          <a
            href="#register"
            className="cta-shadow inline-flex h-14 w-full items-center justify-center rounded-full bg-[var(--color-tertiary-container)] px-10 text-lg font-semibold text-white transition hover:brightness-105 md:w-auto"
          >
            Join Free Workshop
          </a>
          <a
            href="#science"
            className="inline-flex h-14 w-full items-center justify-center rounded-full border-2 border-[var(--color-primary-container)] px-10 text-lg font-semibold text-[var(--color-primary-container)] transition hover:bg-[rgb(var(--color-primary-container-rgb)/0.05)] md:w-auto"
          >
            Learn The Science
          </a>
        </div>

        <div className="hero-shadow group relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-3xl bg-[var(--color-surface-container)]">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1LR9_aV0yEKc6rQ0HEZKz5AnVr31fNG5JNRveDY01Lr7YqgztUNaKU8IoqcTP-XChnXPrGSuJSlVQQ9-uKKzkN51lReSJUw5crDuY8YJqGC8imsid-w__RqdZWrRHzioVFsrxxoJhSbG5Au4-Tz4eu_pgG8JmHO2EOziRnU0g-mJYJpuXv1NlF-X8YWQgpQD8p2cPKgMWDn8P-9adFVFPkF_XrMjHynXiwscavz41xvoI9A2O-pjJpXAI0_9OTWYO_zwGVvMYoNEi"
            alt="Serene woman practicing gentle yoga posture"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition group-hover:bg-black/20">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-2xl">
              <span className="material-symbols-outlined material-symbols-outlined--fill text-5xl text-[var(--color-primary)]">
                play_arrow
              </span>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
