import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const benefits = [
  {
    icon: "rebase_edit" as const,
    title: "Cycle Regularity",
    body: "Move toward a predictable, healthy rhythm you can trust.",
    iconWrap: "bg-[var(--color-primary-fixed)] text-[var(--color-primary)]",
  },
  {
    icon: "potted_plant" as const,
    title: "Reduced Stress",
    body: "Lower cortisol levels that often block healthy hormone production.",
    iconWrap: "bg-[var(--color-secondary-fixed)] text-[var(--color-on-secondary-fixed-variant)]",
  },
  {
    icon: "monitoring" as const,
    title: "Hormonal Balance",
    body: "Naturally optimize your estrogen-progesterone ratio.",
    iconWrap: "bg-[var(--color-tertiary-fixed)] text-[var(--color-on-tertiary-fixed-variant)]",
  },
  {
    icon: "nights_stay" as const,
    title: "Better Sleep",
    body: "Deeper, more restorative rest throughout all phases of your cycle.",
    iconWrap: "bg-[var(--color-primary-fixed)] text-[var(--color-primary)]",
  },
];

export function YogaForMenstrualIrregularitiesBenefits() {
  return (
    <ScrollReveal className="mx-auto max-w-7xl px-6 py-32" as="section" id="benefits">
      <h2 className="mb-16 text-center text-3xl font-semibold text-[var(--color-primary)] md:text-4xl">
        The Transformation Awaits
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="rounded-2xl border border-[#e5e0f0] bg-white p-8 text-center"
          >
            <div
              className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full ${b.iconWrap}`}
            >
              <span className="material-symbols-outlined text-3xl">{b.icon}</span>
            </div>
            <h4 className="mb-2 text-base font-bold text-[var(--color-on-surface)]">{b.title}</h4>
            <p className="text-sm text-[var(--color-on-surface-variant)]">{b.body}</p>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
