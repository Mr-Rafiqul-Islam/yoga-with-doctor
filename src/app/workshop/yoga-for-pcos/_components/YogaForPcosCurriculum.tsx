import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const STEPS = [
  {
    title: "The PCOS Root Cause Analysis",
    description:
      "Understanding how insulin resistance and cortisol drive your symptoms and how to intercept them.",
  },
  {
    title: "3 Power-Flow Asanas",
    description:
      "Step-by-step guidance on three critical yoga poses that improve pelvic blood flow and metabolic rate.",
  },
  {
    title: "The 'Cycle Syncing' Blueprint",
    description:
      "How to adjust your diet and exercise according to your menstrual phase for maximum healing.",
  },
];

export default function YogaForPcosCurriculum() {
  return (
    <ScrollReveal className="px-6 py-[var(--pcos-section-y)]" as="section" id="program">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-headline-lg mb-16 text-center text-[var(--color-on-surface)]">
          The Workshop Breakdown
        </h2>
        <div className="space-y-12">
          {STEPS.map((step, index) => (
            <div key={step.title} className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-lg font-bold text-[var(--color-on-primary)]">
                {index + 1}
              </div>
              <div>
                <h3 className="font-headline-md mb-2 text-[var(--color-on-surface)]">
                  {step.title}
                </h3>
                <p className="text-[var(--color-on-surface-variant)]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
