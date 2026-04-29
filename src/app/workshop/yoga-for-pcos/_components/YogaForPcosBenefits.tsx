import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const BENEFITS = [
  {
    icon: "balance" as const,
    title: "Hormonal Balance",
    body: "Regulate your endocrine system through specific asanas that target the thyroid and ovaries.",
  },
  {
    icon: "energy_savings_leaf" as const,
    title: "Radiant Energy",
    body: "Eliminate chronic fatigue and brain fog, replacing them with steady, sustainable energy levels.",
  },
  {
    icon: "self_improvement" as const,
    title: "Stress Reduction",
    body: "Learn breathing techniques that switch off your 'fight or flight' response in minutes.",
  },
];

export default function YogaForPcosBenefits() {
  return (
    <ScrollReveal
      className="bg-[var(--color-surface-container)] py-[var(--pcos-section-y)]"
      as="section"
    >
      <div className="mx-auto mb-16 max-w-7xl px-6 text-center">
        <h2 className="font-headline-lg text-[var(--color-on-surface)]">
          What this workshop gives back to you
        </h2>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
        {BENEFITS.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-[var(--color-surface-lowest)] p-8 ambient-shadow"
          >
            <span className="material-symbols-outlined mb-4 block text-4xl text-[var(--color-primary)]">
              {item.icon}
            </span>
            <h3 className="font-headline-md mb-2 text-[var(--color-on-surface)]">{item.title}</h3>
            <p className="text-[var(--color-on-surface-variant)]">{item.body}</p>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
