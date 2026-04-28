import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { BENTO_BREATH_IMAGE, BENTO_INTRO } from "../_data/yogaForHighBloodPressure";

export function YogaForHighBloodPressureSolution() {
  return (
    <ScrollReveal className="px-6 py-16" as="section" id="method">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-[32px] font-semibold leading-[1.3] text-[var(--color-on-surface)]">
            {BENTO_INTRO.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-[1.6] text-[var(--color-secondary)]">
            {BENTO_INTRO.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col justify-between rounded-3xl border border-[var(--color-border-card)] bg-white p-8 shadow-sm md:col-span-2">
            <div>
              <h3 className="mb-4 text-2xl font-semibold leading-[1.4] text-[var(--color-on-surface)]">
                The Breath-Pressure Link
              </h3>
              <p className="mb-6 text-[var(--color-secondary)]">
                Specific pranayama (breathing) techniques stimulate the vagus nerve, signaling your
                nervous system to switch from &quot;fight-or-flight&quot; to &quot;rest-and-digest,&quot;
                naturally lowering heart rate.
              </p>
            </div>
            <div className="relative mt-4 h-48 w-full overflow-hidden rounded-2xl">
              <Image
                src={BENTO_BREATH_IMAGE}
                alt="breathing yoga"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-3xl bg-[var(--color-primary-container)] p-8 text-center text-[var(--color-on-primary)]">
            <span className="material-symbols-outlined mb-4 text-6xl">flowsheet</span>
            <h3 className="mb-4 text-2xl font-semibold leading-[1.4]">Flow Sequence</h3>
            <p className="opacity-90">
              Gentle inversions and poses that allow blood to return to the heart with minimal effort.
            </p>
          </div>
          <div className="flex flex-col justify-center rounded-3xl bg-[var(--color-secondary-fixed)] p-8 text-[var(--color-on-secondary-fixed)]">
            <h3 className="mb-4 text-2xl font-semibold leading-[1.4]">Vascular Rest</h3>
            <p className="text-[var(--color-on-secondary-fixed-variant)]">
              Learning to hold poses that promote vasodilation—the widening of blood vessels.
            </p>
          </div>
          <div className="flex flex-col items-center gap-8 rounded-3xl border border-[var(--color-border-card)] bg-[var(--color-surface-container-low)] p-8 md:col-span-2 md:flex-row">
            <div className="flex-1">
              <h3 className="mb-4 text-2xl font-semibold leading-[1.4] text-[var(--color-on-surface)]">
                Safe For All Levels
              </h3>
              <p className="text-[var(--color-secondary)]">
                Every movement is modified for safety. We focus on low-impact, sustainable practices
                that don&apos;t cause exertion spikes.
              </p>
            </div>
            <div className="hbp-shadow-soft flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-white">
              <span className="material-symbols-outlined text-5xl text-[var(--color-primary)]">
                shield_with_heart
              </span>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
