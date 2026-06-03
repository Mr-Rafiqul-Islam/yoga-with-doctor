type MaterialIconName =
  | "assignment"
  | "play_circle"
  | "menu_book"
  | "groups"
  | "trending_up"
  | "emoji_events";

type JourneyStep = {
  number: string;
  icon: MaterialIconName;
  title: string;
  titleLines: readonly [string, string];
  description: string;
};

export const HEALING_JOURNEY = {
  sectionLabel: "YOUR PATH TO BETTER HEALTH",
  title: "Your Journey to Lifelong Wellness",
  subtitle:
    "A simple, doctor-guided roadmap designed to help you learn, heal, build healthy habits, and create lasting transformation.",
  steps: [
    {
      number: "01",
      icon: "assignment" as const,
      title: "Discover Your Health Needs",
      titleLines: ["Discover Your", "Health Needs"],
      description:
        "Understand your challenges, health goals, and the right path forward through trusted guidance.",
    },
    {
      number: "02",
      icon: "play_circle" as const,
      title: "Learn the Fundamentals",
      titleLines: ["Learn the", "Fundamentals"],
      description:
        "Explore free videos, articles, and practical wellness education based on medical science and therapeutic yoga.",
    },
    {
      number: "03",
      icon: "menu_book" as const,
      title: "Choose Your Program",
      titleLines: ["Choose Your", "Program"],
      description:
        "Select the program that best matches your condition, lifestyle, and health objectives.",
    },
    {
      number: "04",
      icon: "groups" as const,
      title: "Practice & Apply",
      titleLines: ["Practice &", "Apply"],
      description:
        "Follow structured lessons, yoga sessions, and lifestyle recommendations designed for real-life results.",
    },
    {
      number: "05",
      icon: "trending_up" as const,
      title: "Track Your Progress",
      titleLines: ["Track Your", "Progress"],
      description:
        "Build consistency, monitor improvements, and stay motivated as your health evolves.",
    },
    {
      number: "06",
      icon: "emoji_events" as const,
      title: "Thrive & Live Better",
      titleLines: ["Thrive & Live", "Better"],
      description:
        "Enjoy greater mobility, reduced pain, healthier habits, and long-term physical and mental well-being.",
    },
  ] satisfies JourneyStep[],
} as const;



function RoadmapStep({
  step,
  isLast,
}: {
  step: JourneyStep;
  isLast: boolean;
}) {
  return (
    <div className="relative flex w-full flex-row items-start lg:w-1/6 lg:flex-col lg:items-center">
      {!isLast ? (
        <>
          <div
            className="absolute left-1/2 top-8 z-0 hidden h-0.5 w-full bg-border dark:bg-white/10 lg:block"
            aria-hidden
          >
          </div>
          <div
            className="absolute left-8 top-1/2 z-0 h-full w-0.5 bg-border dark:bg-white/10 lg:hidden"
            aria-hidden
          />
        </>
      ) : null}

      <div
        className="relative z-10 mr-6 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-border/30 bg-surface text-primary shadow-sm dark:border-white/10 dark:bg-surface dark:text-primary-on-dark lg:mr-0 lg:mb-4"
        aria-hidden
      >
        <span className="material-icons-outlined text-2xl">{step.icon}</span>
      </div>

      <div className="mt-2 flex min-w-0 flex-col lg:mt-0 lg:items-center lg:text-center">
        <span className="mb-2 text-sm font-extrabold text-primary dark:text-primary-on-dark">
          {step.number}
        </span>
        <h3 className="mb-2 text-base font-bold text-foreground dark:text-white lg:text-lg">
          {step.titleLines[0]}
          <br className="hidden lg:block" />{" "}
          {step.titleLines[1]}
        </h3>
        <p className="text-xs leading-relaxed text-muted dark:text-gray-400 lg:text-sm">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export function HealingJourneySection() {
  const { sectionLabel, title, subtitle, steps } = HEALING_JOURNEY;

  return (
    <section
      className="mb-20 bg-background xl:py-16 dark:bg-sage-dark/20"
      aria-labelledby="healing-journey-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-primary dark:text-primary-on-dark">
            {sectionLabel}
          </p>

          <h2
            id="healing-journey-heading"
            className="font-anek-bangla text-3xl font-bold text-foreground dark:text-white sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted dark:text-gray-400 sm:text-base">
            {subtitle}
          </p>
        </div>

        <div className="relative w-full">
          <div className="relative flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-4">
            {steps.map((step, index) => (
              <RoadmapStep
                key={step.number}
                step={step}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
