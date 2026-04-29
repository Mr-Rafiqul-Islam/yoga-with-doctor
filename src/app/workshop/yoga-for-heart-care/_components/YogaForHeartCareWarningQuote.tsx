import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YogaForHeartCareWarningQuote() {
  return (
    <ScrollReveal className="relative overflow-hidden px-6 py-20" as="section">
      <div className="mx-auto max-w-4xl space-y-12 text-center">
        <div className="inline-flex items-center gap-2 font-semibold text-[var(--color-error)]">
          <span className="material-symbols-outlined">warning</span>
          <span>Important Health Update</span>
        </div>
        <h2 className="text-[32px] font-semibold leading-[1.3] tracking-[-0.01em] text-[var(--color-on-background)]">
          Neglecting heart health today can lead to irreversible strain tomorrow.
        </h2>
        <div className="rounded-r-xl border-l-4 border-[var(--color-primary)] bg-white p-8 text-left shadow-sm">
          <p className="text-lg italic leading-[1.6] text-[var(--color-on-surface-variant)]">
            &ldquo;But there is a path forward. Your heart is resilient, and with the right gentle movement and
            conscious breathing, you can activate the parasympathetic nervous system to promote deep, internal
            healing.&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="h-1 w-10 rounded-full bg-[var(--color-primary-container)]" />
            <span className="font-bold text-[var(--color-primary)]">Healing Hearts Philosophy</span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
