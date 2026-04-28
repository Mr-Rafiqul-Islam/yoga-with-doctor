import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";
import { ROADMAP_STEPS, ROADMAP_TITLE } from "../_data/yogaForHighBloodPressure";

export function YogaForHighBloodPressureRoadmap() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container)] px-6 py-16" as="section">
      <div className="mx-auto max-w-[800px]">
        <h2 className="mb-12 text-center text-[32px] font-semibold leading-[1.3] text-[var(--color-on-surface)]">
          {ROADMAP_TITLE}
        </h2>
        <div className="space-y-8">
          {ROADMAP_STEPS.map((step) => (
            <div key={step.id} className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] font-bold text-[var(--color-on-primary)]">
                {step.n}
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-semibold leading-[1.4] text-[var(--color-on-surface)]">
                  {step.title}
                </h3>
                <p className="text-[var(--color-secondary)]">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
