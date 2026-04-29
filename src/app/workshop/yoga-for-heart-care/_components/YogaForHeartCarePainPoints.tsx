import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const CONCERNS = [
  {
    icon: "psychology" as const,
    title: "Chronic Stress",
    body: "Constant fight-or-flight mode putting unnecessary strain on your cardiovascular system.",
  },
  {
    icon: "blood_pressure" as const,
    title: "High Blood Pressure",
    body: "Managing readings that stay stubbornly high despite traditional lifestyle changes.",
  },
  {
    icon: "energy_savings_leaf" as const,
    title: "Persistent Fatigue",
    body: "Lacking the vitality to enjoy daily activities due to inefficient oxygen circulation.",
  },
];

export function YogaForHeartCarePainPoints() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container-low)] px-6 py-20" as="section">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-[32px] font-semibold leading-[1.3] tracking-[-0.01em] text-[var(--color-on-background)]">
          Are these affecting your quality of life?
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {CONCERNS.map((c) => (
            <div
              key={c.title}
              className="space-y-4 rounded-xl border border-[rgb(var(--color-primary-rgb)/0.05)] bg-white p-8 text-center shadow-[0_1px_0_rgb(0_0_0/0.03)] transition-shadow hover:shadow-md"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-[var(--color-error)]">
                <span className="material-symbols-outlined text-3xl">{c.icon}</span>
              </div>
              <h3 className="text-2xl font-semibold leading-[1.4] text-[var(--color-on-background)]">
                {c.title}
              </h3>
              <p className="text-[var(--color-on-surface-variant)]">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
