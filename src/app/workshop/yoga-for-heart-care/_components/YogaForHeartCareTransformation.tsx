import Image from "next/image";
import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const BENTO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDN2NBbXP3oDq2rvLevn-IUoWBtGieD7Hujo3nJAob-vMf5G1n5li4JOj97AmPf0JI9HmN0c8ELjtJTFf5zsWrRAqcBL7HnJ3Mf264OR88z7ZNxy6Lwe_xJUMHXH6RRvgd3FpjeeCyxdN_PkUdLW9uwxrQRnPj1dydwv20x7X51EC2spaFvoOwz7LQ5doNkn8pA28QHJNFPk8ZzXDTZZxcgt11ZsC7lQwViYKW5Au8lnJJ8aLp9SdXKCdW-AQaozJsmuuPwoW_YrMTP";

export function YogaForHeartCareTransformation() {
  return (
    <ScrollReveal className="px-6 py-20" id="benefits" as="section">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-[32px] font-semibold leading-[1.3] tracking-[-0.01em] text-[var(--color-on-background)]">
          The Holistic Transformation
        </h2>
        <div className="grid auto-rows-[250px] grid-cols-1 gap-6 md:grid-cols-3">
          {/* Row 1 */}
          <div className="group relative md:col-span-2 rounded-2xl bg-[var(--color-primary-container)] p-8 text-white overflow-hidden">
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-bold">Vagal Tone Improvement</h3>
              <p className="max-w-md opacity-90">
                Strengthen your heart&apos;s ability to recover from stress through targeted breathing techniques that
                stimulate the Vagus nerve.
              </p>
            </div>
            <span className="material-symbols-outlined pointer-events-none absolute -bottom-4 -right-4 text-[160px] opacity-10 transition-transform group-hover:scale-110">
              vital_signs
            </span>
          </div>
          <div className="flex flex-col justify-between rounded-2xl bg-[var(--color-secondary-container)] p-8">
            <span className="material-symbols-outlined text-4xl text-[var(--color-on-secondary-container)]">spa</span>
            <div>
              <h3 className="text-xl font-bold text-[var(--color-on-secondary-container)]">Anxiety Shield</h3>
              <p className="text-sm text-[var(--color-on-secondary-container)] opacity-80">
                Lower cortisol levels by up to 30%.
              </p>
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex flex-col justify-between rounded-2xl border border-[rgb(var(--color-primary-rgb)/0.10)] bg-white p-8 transition-shadow hover:shadow-lg">
            <span className="material-symbols-outlined text-4xl text-[var(--color-primary)]">blood_pressure</span>
            <div>
              <h3 className="text-xl font-bold text-[var(--color-on-background)]">Blood Pressure</h3>
              <p className="text-sm text-[var(--color-on-surface-variant)]">
                Natural management of hypertension symptoms.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 rounded-2xl bg-[var(--color-surface-container-highest)] p-8 md:col-span-2 sm:flex-row group">
            <div className="relative hidden h-40 w-40 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-md sm:block">
              <Image
                src={BENTO_IMAGE}
                alt="Person in mudra during meditation"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[var(--color-on-background)]">Deep Oxygenation</h3>
              <p className="text-[var(--color-on-surface-variant)]">
                Pranayama exercises designed to maximize lung capacity and heart efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
