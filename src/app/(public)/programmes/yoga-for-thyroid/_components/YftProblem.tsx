import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

import { YftSectionHeader } from "./YftSectionHeader";

type ProblemItem = {
  icon: string;
  title: string;
  body: string;
  iconWrapClass: string;
  iconClass: string;
};

const ITEMS: ProblemItem[] = [
  {
    icon: "battery_charging_20",
    title: "Unexplained Fatigue",
    body: "Waking up tired despite 8 hours of sleep, feeling like you're walking through fog.",
    iconWrapClass: "bg-[color:var(--color-primary-fixed)] text-[color:var(--color-primary)]",
    iconClass: "material-symbols-outlined--fill",
  },
  {
    icon: "monitor_weight",
    title: "Weight Resistance",
    body: "Metabolic slowing that makes weight management feel like an uphill battle despite dieting.",
    iconWrapClass: "bg-[color:var(--color-secondary-fixed)] text-[color:var(--color-secondary)]",
    iconClass: "material-symbols-outlined--fill",
  },
  {
    icon: "mood_bad",
    title: "Emotional Fluctuations",
    body: "Sudden mood swings, anxiety, or low spirits that feel disconnected from your reality.",
    iconWrapClass: "bg-[color:var(--color-tertiary-fixed)] text-[color:var(--color-tertiary)]",
    iconClass: "material-symbols-outlined--fill",
  },
  {
    icon: "psychology",
    title: "Hormonal Confusion",
    body: 'Brain fog, hair thinning, and temperature sensitivity that leaves you feeling "not yourself".',
    iconWrapClass:
      "bg-[color:var(--color-surface-container-highest)] text-[color:var(--color-on-surface)]",
    iconClass: "material-symbols-outlined--fill",
  },
];

export function YftProblem() {
  return (
    <ScrollReveal
      className="overflow-hidden bg-[color:var(--color-surface-container-low)] px-8 py-24"
      delay={0.03}
    >
      <div className="mx-auto max-w-7xl">
        <YftSectionHeader
          className="mb-16"
          subtitle="Hormonal imbalance isn't just a clinical metric—it affects every moment of your day."
          title="When Your Thyroid Is Out of Sync"
          titleClassName="mb-4 text-[color:var(--color-primary)]"
        />
        <div className="grid gap-8 md:grid-cols-4">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-[color:var(--color-outline-variant)]/20 bg-[color:var(--color-surface-container-lowest)] p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-110 ${item.iconWrapClass}`}
              >
                <span className={`material-symbols-outlined ${item.iconClass}`}>{item.icon}</span>
              </div>
              <h3 className="yft-text-h3 mb-2">{item.title}</h3>
              <p className="yft-text-body-md text-[color:var(--color-on-surface-variant)]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
