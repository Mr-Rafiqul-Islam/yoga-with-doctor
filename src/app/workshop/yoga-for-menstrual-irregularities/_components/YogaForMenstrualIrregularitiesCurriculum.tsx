import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const curriculumSteps = [
  {
    step: 1,
    title: "Phase Mapping",
    body: "Understand exactly where your cycle is blocked and how to identify your unique hormonal profile.",
  },
  {
    step: 2,
    title: "The 'Reset' Sequence",
    body: "A live walkthrough of the core yoga poses that support uterine health and blood flow.",
  },
  {
    step: 3,
    title: "Stress Management Toolkit",
    body: "Somatic breathing exercises that you can use anytime to calm your nervous system in 2 minutes.",
  },
  {
    step: 4,
    title: "Your 30-Day Action Plan",
    body: "A clear, sustainable roadmap to integrate these practices into your busy life.",
  },
];

export function YogaForMenstrualIrregularitiesCurriculum() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container)] py-32" as="section" id="curriculum">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-16 text-center text-3xl font-semibold text-[var(--color-primary)] md:text-4xl">
          Workshop Roadmap
        </h2>
        <div className="space-y-4">
          {curriculumSteps.map((item) => (
            <div
              key={item.step}
              className="flex items-start gap-6 rounded-2xl bg-white p-6 mi-soft-shadow"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)] text-lg font-bold text-[var(--color-on-primary)]">
                {item.step}
              </div>
              <div>
                <h4 className="mb-2 text-xl font-semibold text-[var(--color-primary)]">{item.title}</h4>
                <p className="text-[var(--color-on-surface-variant)]">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
