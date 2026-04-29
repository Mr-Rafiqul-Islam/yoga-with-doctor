import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const painPoints = [
  {
    icon: "nightlight",
    title: "Sleepless Nights",
    description: "Sharp, throbbing pain every time you roll over, leaving you exhausted by morning.",
  },
  {
    icon: "front_hand",
    title: "Locked Movement",
    description: "Struggling to reach overhead, comb your hair, or even get dressed without help.",
  },
  {
    icon: "psychology_alt",
    title: "Mental Fatigue",
    description: "The constant anxiety of wondering if you'll ever regain full range of motion.",
  },
];

export function YogaForFrozenShoulderPainPoints() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container-low)] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-[var(--color-on-surface)] md:text-4xl">
            Are you struggling with daily tasks?
          </h2>
          <p className="text-[var(--color-on-surface-variant)]">
            Frozen shoulder is not just physical pain. It is a loss of independence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {painPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-3xl border border-white bg-white p-8 shadow-[0_4px_20px_rgba(0,122,126,0.05)]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-error-container)]">
                <span className="material-symbols-outlined text-[var(--color-error)]">{point.icon}</span>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-[var(--color-on-surface)]">{point.title}</h3>
              <p className="text-[var(--color-on-surface-variant)]">{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
