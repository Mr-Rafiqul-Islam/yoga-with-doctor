import { Fragment } from "react";

type MaterialIconName =
  | "assignment"
  | "play_circle"
  | "menu_book"
  | "groups"
  | "trending_up"
  | "favorite";

type JourneyStep = {
  number: string;
  icon: MaterialIconName;
  title: string;
  description: string;
};

export const HEALING_JOURNEY = {
  sectionLabel: "Your Path to Recovery",
  title: "Your Healing Journey",
  subtitle:
    "A simple step-by-step process to help you heal, transform, and live better.",
  steps: [
    {
      number: "01",
      icon: "assignment" as const,
      title: "Assess Your Condition",
      description: "Understand your problem and get expert guidance.",
    },
    {
      number: "02",
      icon: "play_circle" as const,
      title: "Watch & Learn",
      description: "Access free videos and classes to learn the basics.",
    },
    {
      number: "03",
      icon: "menu_book" as const,
      title: "Choose Your Program",
      description: "Pick the right program for your specific condition.",
    },
    {
      number: "04",
      icon: "groups" as const,
      title: "Join the Community",
      description: "Be part of a supportive healing community.",
    },
    {
      number: "05",
      icon: "trending_up" as const,
      title: "Track Your Progress",
      description: "Follow the plan, track improvements & stay motivated.",
    },
    {
      number: "06",
      icon: "favorite" as const,
      title: "Live a Pain-Free Life",
      description: "Build long-term health, flexibility & well-being.",
    },
  ] satisfies JourneyStep[],
} as const;

function StepItem({ step }: { step: JourneyStep }) {
  return (
    <div className="flex min-w-0 flex-col items-center text-center">
      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-primary shadow-soft dark:border-white/10 dark:bg-surface dark:text-primary-on-dark sm:h-16 sm:w-16"
        aria-hidden
      >
        <span className="material-icons-outlined text-2xl sm:text-3xl">
          {step.icon}
        </span>
      </div>
      <p className="mt-3 text-sm font-bold text-primary dark:text-primary-on-dark">
        {step.number}
      </p>
      <h3 className="mt-2 text-sm font-bold text-foreground dark:text-white sm:text-base">
        {step.title}
      </h3>
      <p className="mt-1.5 max-w-[11rem] text-xs leading-relaxed text-muted dark:text-gray-400 sm:text-sm">
        {step.description}
      </p>
    </div>
  );
}

function StepConnector() {
  return (
    <li
      className="flex min-w-0 flex-[0.45] list-none items-center self-start pt-8"
      aria-hidden
    >
      <div className="h-px flex-1 bg-primary dark:bg-primary" />
      <span className="material-icons-outlined shrink-0 text-base text-primary dark:text-primary-on-dark">
        arrow_forward
      </span>
    </li>
  );
}

function DesktopTimeline({ steps }: { steps: readonly JourneyStep[] }) {
  return (
    <ol className="hidden list-none lg:flex lg:items-start">
      {steps.map((step, index) => (
        <Fragment key={step.number}>
          {index > 0 ? <StepConnector /> : null}
          <li className="flex min-w-0 flex-1 flex-col items-center text-center">
            <StepItem step={step} />
          </li>
        </Fragment>
      ))}
    </ol>
  );
}

export function HealingJourneySection() {
  const {  sectionLabel, title, subtitle, steps } =
    HEALING_JOURNEY;

  return (
    <section
      className="mb-20 bg-background xl:py-16 dark:bg-sage-dark/20 "
      aria-labelledby="healing-journey-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <div className="mb-5 flex items-center gap-3">
            
            <span className="text-sm font-bold uppercase tracking-wider text-primary dark:text-primary-on-dark">
              {sectionLabel}
            </span>
          </div>

          <h2
            id="healing-journey-heading"
            className="font-anek-bangla text-3xl font-bold text-foreground dark:text-white sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-2 text-sm text-muted dark:text-gray-400 sm:text-base">
            {subtitle}
          </p>
        </div>

        <DesktopTimeline steps={steps} />

        <ol className="grid grid-cols-2 gap-y-8 md:grid-cols-3 lg:hidden">
          {steps.map((step) => (
            <li key={step.number}>
              <StepItem step={step} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
