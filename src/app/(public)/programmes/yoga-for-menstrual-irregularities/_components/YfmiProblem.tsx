import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

type PainCard = {
  icon: string;
  iconColorClass: string;
  circleBg: string;
  title: string;
  body: string;
};

const PAIN_CARDS: PainCard[] = [
  {
    icon: "calendar_today",
    iconColorClass: "text-[color:var(--yfmi-secondary)]",
    circleBg: "bg-[color:var(--yfmi-secondary-fixed)]",
    title: "Irregular Cycles",
    body: "Periods that arrive too early, too late, or skip months entirely.",
  },
  {
    icon: "biotech",
    iconColorClass: "text-[color:var(--yfmi-primary)]",
    circleBg: "bg-[color:var(--yfmi-primary-fixed)]",
    title: "Hormonal Chaos",
    body: "Mood swings, fatigue, and acne that signal a deeper imbalance.",
  },
  {
    icon: "psychology",
    iconColorClass: "text-[color:var(--yfmi-tertiary)]",
    circleBg: "bg-[color:var(--yfmi-tertiary-fixed)]",
    title: "Chronic Stress",
    body: "High cortisol levels that shut down your natural reproductive flow.",
  },
  {
    icon: "healing",
    iconColorClass: "text-[color:var(--yfmi-on-secondary-container)]",
    circleBg: "bg-[color:var(--yfmi-secondary-container)]",
    title: "Lost Connection",
    body: "A sense of frustration and worry about your future fertility and health.",
  },
];

export function YfmiProblem() {
  return (
    <ScrollReveal
      className="mb-12 bg-[color:var(--yfmi-surface-container-low)] py-24"
      delay={0.06}
      id="problem"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="yfmi-headline-lg mb-4 italic text-[color:var(--yfmi-on-background)]">
            When your body feels like a stranger...
          </h2>
          <p className="yfmi-body-md mx-auto max-w-2xl text-[color:var(--yfmi-on-surface-variant)]">
            Do you feel like you&apos;ve lost control of your internal clock? Menstrual irregularities are often the
            body&apos;s way of whispering that it&apos;s out of sync.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PAIN_CARDS.map((card) => (
            <div
              key={card.title}
              className="yfmi-shadow-card rounded-xl bg-[color:var(--yfmi-surface-container-lowest)] p-8 text-center"
            >
              <div
                className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full ${card.circleBg}`}
              >
                <span className={`material-symbols-outlined text-3xl ${card.iconColorClass}`}>{card.icon}</span>
              </div>
              <h3 className="yfmi-headline-md mb-2 text-lg">{card.title}</h3>
              <p className="text-sm text-[color:var(--yfmi-on-surface-variant)]">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
