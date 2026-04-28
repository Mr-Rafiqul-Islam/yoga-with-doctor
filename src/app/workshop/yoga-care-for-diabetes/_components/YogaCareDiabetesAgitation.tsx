import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

export function YogaCareDiabetesAgitation() {
  return (
    <ScrollReveal className="py-24">
      <div className="mx-auto max-w-[800px] space-y-6 px-6 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-on-surface)] md:text-4xl">
          Diabetes doesn&apos;t stay still. It progresses.
        </h2>
        <p className="text-lg italic leading-relaxed text-[var(--color-on-surface-variant)]">
          “When metabolic stress stays high for years, complications become more likely—nerve
          symptoms, kidney strain, and cardiovascular risk.”
        </p>

        <div className="rounded-2xl border border-[rgb(var(--color-tertiary-container-rgb,232_108_110)/0.10)] bg-[rgb(232_108_110/0.05)] p-10">
          <p className="leading-relaxed text-[var(--color-on-surface-variant)]">
            Many treatments only manage numbers. This workshop shows a practical routine to support
            your body&apos;s regulation systems—breath, movement, and nervous‑system balance—alongside
            your doctor&apos;s guidance.
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

