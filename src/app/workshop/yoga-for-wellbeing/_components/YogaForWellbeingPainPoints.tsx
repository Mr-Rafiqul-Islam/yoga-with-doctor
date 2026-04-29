import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

type PainCard = {
  readonly description: string;
  readonly iconBgClass: string;
  readonly icon: string;
  readonly title: string;
};

const PAIN_POINTS: PainCard[] = [
  {
    icon: "battery_very_low",
    iconBgClass: "bg-[var(--color-error-container)] text-[var(--color-on-error-container)]",
    title: "Chronic Burnout",
    description:
      "Waking up tired despite a full night's sleep, feeling emotionally drained by noon.",
  },
  {
    icon: "psychology",
    iconBgClass:
      "bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)]",
    title: "Racing Thoughts",
    description: "An inability to quiet the mind, worrying about tomorrow before today is even over.",
  },
  {
    icon: "heart_broken",
    iconBgClass:
      "bg-[var(--color-tertiary-fixed)] text-[var(--color-on-tertiary-fixed-variant)]",
    title: "Physical Tension",
    description: "Persistent tightness in the neck, shoulders, and chest that never seems to release.",
  },
];

export function YogaForWellbeingPainPoints() {
  return (
    <ScrollReveal className="bg-[var(--color-surface-container-low)] px-6 py-24" as="section">
      <div className="mx-auto mb-16 max-w-7xl text-center">
        <h2 className="mb-4 text-[32px] font-semibold leading-[1.3] text-[var(--color-on-background)]">
          Feeling overwhelmed? You&apos;re not alone.
        </h2>
        <p className="mx-auto max-w-2xl text-base font-normal leading-[1.6] text-[var(--color-on-surface-variant)]">
          Modern life is demanding. Constant notifications, high-pressure careers, and the weight of burnout can leave
          you feeling disconnected from yourself.
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        {PAIN_POINTS.map((item) => (
          <div
            key={item.title}
            className="rounded-[32px] border border-[var(--color-border-card)] bg-[var(--color-surface-container-lowest)] p-8 wellbeing-ambient-shadow"
          >
            <div
              className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconBgClass}`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
            </div>
            <h3 className="mb-3 text-2xl font-semibold leading-[1.4] text-[var(--color-on-background)]">
              {item.title}
            </h3>
            <p className="text-base leading-[1.6] text-[var(--color-on-surface-variant)]">{item.description}</p>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
