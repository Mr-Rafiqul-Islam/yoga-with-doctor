import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const modules = [
  ["Thyroid-Brain Loop", "Understanding the HPT Axis."],
  ["The Butterfly Pose", "Targeted glandular stimulation."],
  ["Vagal Nerve Tonality", "Calming the storm within."],
  ["Detox Breathing", "Clearing metabolic waste."],
  ["The Anti-Fatigue Flow", "Instant energy boosters."],
  ["Hormonal Dietetics", "Foods that fuel the gland."],
  ["Sleep Optimization", "Deep cellular repair rituals."],
  ["Metabolic Fire", "Managing weight fluctuation."],
  ["Sustainability Plan", "Making it a way of life."],
];

export function YogaForThyroidCurriculum() {
  return (
    <ScrollReveal id="curriculum" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-4xl font-bold">What You Will Learn</h2>
          <p className="text-[var(--color-on-surface-variant)]">A 9-step roadmap to natural thyroid support.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((item, idx) => (
            <article key={item[0]} className="flex gap-3 border-b border-[var(--color-surface-container)] p-3">
              <span className="text-2xl font-bold text-[var(--color-secondary-fixed-dim)]">{String(idx + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-bold">{item[0]}</h3>
                <p className="text-sm text-[var(--color-on-surface-variant)]">{item[1]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
