import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const SYMPTOMS = [
  { icon: "calendar_today" as const, label: "Irregular Periods" },
  { icon: "scale" as const, label: "Weight Gain" },
  { icon: "face" as const, label: "Acne & Hair Loss" },
  { icon: "mood_bad" as const, label: "Mood Swings" },
];

export default function YogaForPcosSymptoms() {
  return (
    <ScrollReveal
      className="bg-[var(--color-surface-container-low)] py-[var(--pcos-section-y)]"
      as="section"
    >
      <div className="mx-auto mb-16 max-w-7xl px-6 text-center">
        <h2 className="font-headline-lg text-[var(--color-on-surface)]">
          Are these symptoms holding you back?
        </h2>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {SYMPTOMS.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center rounded-2xl bg-[var(--color-surface-lowest)] p-6 text-center ambient-shadow"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--color-primary-rgb)/0.1)]">
              <span className="material-symbols-outlined text-3xl text-[var(--color-primary)]">
                {item.icon}
              </span>
            </div>
            <span className="font-semibold text-[var(--color-on-surface)]">{item.label}</span>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
