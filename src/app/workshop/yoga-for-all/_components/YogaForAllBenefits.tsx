import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const BENEFITS = [
  {
    id: "energy",
    icon: "flare",
    title: "Infinite Energy",
    description: "Natural vitality that lasts from morning to night.",
  },
  {
    id: "flexibility",
    icon: "self_improvement",
    title: "Peak Flexibility",
    description: "Release years of tension in your back and hips.",
  },
  {
    id: "sleep",
    icon: "nights_stay",
    title: "Deep Sleep",
    description: "Fall asleep faster and wake up truly refreshed.",
  },
  {
    id: "stress",
    icon: "cool_to_dry",
    title: "Stress Mastery",
    description: "A calm mind that remains steady under pressure.",
  },
] as const;

export function YogaForAllBenefits() {
  return (
    <ScrollReveal className="bg-white py-24" as="section">
      <div className="mx-auto max-w-[1280px] px-8">
        <h2 className="mb-16 text-center text-3xl font-semibold tracking-tight md:text-4xl">
          What You&apos;ll Gain in Just 60 Minutes
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div
              key={b.id}
              className="rounded-2xl border border-transparent bg-[var(--color-surface-container-low)] p-8 transition-all hover:border-[var(--color-primary-container)]"
            >
              <span className="material-symbols-outlined mb-4 block text-4xl text-[var(--color-primary-container)]">
                {b.icon}
              </span>
              <h4 className="mb-2 font-bold">{b.title}</h4>
              <p className="text-sm text-[var(--color-on-surface-variant)]">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

