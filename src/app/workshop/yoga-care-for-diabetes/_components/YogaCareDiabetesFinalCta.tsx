import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YogaCareDiabetesFinalCta() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container-high)] py-24">
      <div className="mx-auto max-w-[1280px] space-y-6 px-6 text-center md:px-12">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Don&apos;t Wait For Complications.
        </h2>
        <p className="mx-auto max-w-[680px] text-lg leading-relaxed text-[var(--color-secondary)]">
          Take the first step toward a steadier, more balanced life. It&apos;s free, practical, and
          designed to fit real schedules.
        </p>

        <div className="flex flex-col items-center gap-4 pt-2">
          <a
            href="#register"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-tertiary-container)] px-12 py-5 text-xl font-semibold text-white shadow-xl transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Join The Free Workshop
          </a>

          <p className="flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)]">
            <span className="material-symbols-outlined material-symbols-outlined--fill text-[var(--color-primary)]">
              timer
            </span>
            Registration closes in 24 hours
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

