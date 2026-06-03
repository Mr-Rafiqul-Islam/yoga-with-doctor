/** Central copy for the homepage value-proposition section — swap values here without touching markup. */
export const WHY_YOGA_WITH_DOCTOR = {
  title: "Why Yoga With Doctor?",
  subtitle:
    "Discover a Smarter Path to Health Through The Integration of Medical Science, Therapeutic Yoga, and Evidence-Based Lifestyle Practices.",
  points: [
    {
      icon: "medical_services" as const,
      title: "Doctor-Guided Expertise",
      description:
        "Learn directly from healthcare professionals who understand the science of the body, pain, recovery, and long-term wellness.",
    },
    {
      icon: "science" as const,
      title: "Evidence-Based Healing",
      description:
        "Every program is designed using modern medical knowledge and proven therapeutic yoga principles—not myths, trends, or guesswork.",
    },
    {
      icon: "healing" as const,
      title: "Condition-Specific Programs",
      description:
        "Whether you're managing back pain, migraine, obesity, stress, posture problems, or chronic health conditions, find structured programs tailored to your needs.",
    },
    {
      icon: "self_improvement" as const,
      title: "Holistic Lifestyle Transformation",
      description:
        "Go beyond exercise with practical guidance on movement, habits, recovery, nutrition, stress management, and healthy living.",
    },
    {
      icon: "schedule" as const,
      title: "Learn at Your Own Pace",
      description:
        "Access courses, videos, articles, and wellness resources anytime, anywhere, and progress according to your schedule.",
    },
    {
      icon: "groups" as const,
      title: "Supportive Health Community",
      description:
        "Join a growing community of health-conscious learners committed to building stronger bodies, healthier minds, and better lives.",
    },
  ],
} as const;

export function WhyYogaWithDoctorSection() {
  const { title, subtitle, points } = WHY_YOGA_WITH_DOCTOR;

  return (
    <section
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="why-ywd-heading"
    >
      <div className="rounded-2xl bg-sage-light/50 px-6 pb-12 dark:bg-sage-dark/30 sm:px-10 sm:pb-14">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <h2
            id="why-ywd-heading"
            className="font-anek-bangla text-3xl font-bold text-foreground dark:text-white"
          >
            {title}
          </h2>
          <p className="mt-2 text-body-md text-muted dark:text-gray-400">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {points.map(({ icon, title: pointTitle, description }) => (
            <div
              key={pointTitle}
              className="group flex flex-col items-center justify-center rounded-xl border border-primary/20 bg-surface p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elevation-md dark:border-white/10 dark:bg-surface dark:hover:border-primary/30 sm:p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 dark:text-primary-on-dark sm:mb-4 sm:h-12 sm:w-12">
                <span className="material-icons-outlined text-xl sm:text-2xl" aria-hidden>
                  {icon}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-foreground dark:text-white sm:text-base">
                {pointTitle}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-center text-muted dark:text-gray-400 sm:mt-2 sm:text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
