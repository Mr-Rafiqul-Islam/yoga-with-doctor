import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const CARDS = [
  {
    icon: "sentiment_dissatisfied" as const,
    title: "Stubborn Belly Fat",
    description:
      "Feeling uncomfortable in your favorite clothes and losing body confidence.",
  },
  {
    icon: "battery_very_low" as const,
    title: "Constant Fatigue",
    description:
      "Crashing in the afternoon and lacking energy for family and work.",
  },
  {
    icon: "restaurant" as const,
    title: "Yo-Yo Dieting",
    description:
      "Losing weight only to gain it all back plus more within weeks.",
  },
] as const;

export function YfwlProblem() {
  return (
    <ScrollReveal className="bg-[color:var(--yfwl-surface-container-low)] px-6 py-24">
      <div className="mx-auto max-w-4xl space-y-16 text-center">
        <div className="space-y-4">
          <h2 className="yfwl-text-h2 text-[color:var(--yfwl-on-surface)]">
            Struggling with weight that won&apos;t budge?
          </h2>
          <p className="text-[color:var(--yfwl-on-surface-variant)]">
            Traditional diets often fail because they ignore your hormones and stress levels.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {CARDS.map(({ icon, title, description }) => (
            <div
              key={title}
              className="space-y-4 rounded-2xl bg-white p-8 shadow-sm"
            >
              <span
                className="material-symbols-outlined text-4xl text-[color:var(--yfwl-error)]"
                aria-hidden
              >
                {icon}
              </span>
              <h3 className="font-[family-name:var(--yfwl-font-heading)] text-xl font-semibold text-[color:var(--yfwl-on-surface)]">
                {title}
              </h3>
              <p className="text-sm text-[color:var(--yfwl-outline)]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
