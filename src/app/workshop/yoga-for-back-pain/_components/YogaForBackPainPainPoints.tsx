import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const painPoints = [
  { icon: "chair", label: "Sitting Pain" },
  { icon: "fitness_center", label: "Morning Stiffness" },
  { icon: "warning", label: "Sharp Spasms" },
  { icon: "bed", label: "Poor Sleep" },
];

export function YogaForBackPainPainPoints() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container-low)] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Is your back controlling your life?</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {painPoints.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-transparent bg-white p-6 text-center shadow-sm transition hover:border-[var(--color-primary-container)]"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-fixed-dim)]">
                <span className="material-symbols-outlined text-[var(--color-primary)]">{item.icon}</span>
              </div>
              <p className="text-sm font-medium text-[var(--color-on-surface-variant)]">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
