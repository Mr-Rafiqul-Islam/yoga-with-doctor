import { FaYoutube } from "react-icons/fa";

type MaterialIconName =
  | "groups"
  | "visibility"
  | "school"
  | "chat_bubble"
  | "public";

type StatItemData = {
  icon: MaterialIconName | "youtube";
  value: string;
  label: string;
  description: string;
};

export const IMPACT_IN_NUMBERS = {
  sectionLabel: "Our Impact in Numbers",
  title: "Transforming Lives Through Science, Yoga & Natural Remedy System",
  subtitle:
    "Thousands of people have trusted Yoga With Doctor to improve their health, reduce pain, and build healthier lives through evidence-based education and therapeutic yoga.",
  stats: [
    {
      icon: "groups" as const,
      value: "10,000+",
      label: "Lives Impacted",
      description: "Through education, movement, and wellness programs",
    },
    {
      icon: "youtube" as const,
      value: "100,000+",
      label: "Community Members",
      description: "Learning and growing across our platforms",
    },
    {
      icon: "visibility" as const,
      value: "10M+",
      label: "Video Views",
      description: "Accessing trusted health and wellness content",
    },
    {
      icon: "school" as const,
      value: "5,000+",
      label: "Program Participants",
      description: "Enrolled in doctor-guided courses and workshops",
    },
    {
      icon: "chat_bubble" as const,
      value: "500+",
      label: "Success Stories",
      description: "Shared by members of our community",
    },
    {
      icon: "public" as const,
      value: "15+",
      label: "Countries Reached",
      description: "Building a global movement for healthier living",
    },
  ] satisfies StatItemData[],
} as const;

function StatIcon({ icon }: { icon: StatItemData["icon"] }) {
  if (icon === "youtube") {
    return <FaYoutube className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />;
  }

  return (
    <span className="material-icons-outlined text-xl sm:text-2xl" aria-hidden>
      {icon}
    </span>
  );
}

function getStatBorderClass(index: number, total: number): string {
  const isLastItem = index === total - 1;
  if (isLastItem) return "";

  const showMobileBorder = index % 2 === 0;
  const showTabletBorder = (index + 1) % 3 !== 0;
  const showDesktopBorder = (index + 1) % 6 !== 0;

  return [
    "border-border dark:border-white/10",
    showMobileBorder ? "max-md:border-r" : "",
    showTabletBorder ? "md:max-xl:border-r" : "",
    showDesktopBorder ? "xl:border-r" : "",
  ]
    .filter(Boolean)
    .join(" ");
}

function StatItem({
  stat,
  index,
  total,
}: {
  stat: StatItemData;
  index: number;
  total: number;
}) {
  return (
    <li
      className={[
        "flex flex-col items-center px-3 py-2 text-center sm:px-4",
        getStatBorderClass(index, total),
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-sage-light text-primary dark:bg-sage-dark/30 dark:text-primary-on-dark sm:mb-4 sm:h-12 sm:w-12"
        aria-hidden
      >
        <StatIcon icon={stat.icon} />
      </div>
      <p className="font-anek-bangla text-2xl font-bold text-primary dark:text-primary-on-dark sm:text-3xl">
        {stat.value}
      </p>
      <p className="mt-1 max-w-[9rem] text-sm leading-snug">
        {stat.label}
      </p>
      <p className="mt-1 max-w-[9rem] text-xs leading-snug text-muted dark:text-gray-400 ">{stat.description}</p>
    </li>
  );
}

export function ImpactInNumbersSection() {
  const { sectionLabel, title, subtitle, stats } =
    IMPACT_IN_NUMBERS;

  return (
    <section
      className="mx-auto mb-20 max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="impact-in-numbers-heading"
    >
      <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
        <div className="mb-5 flex items-center justify-center gap-3">
          <span className="text-sm font-bold uppercase tracking-wider text-primary dark:text-primary-on-dark">
            {sectionLabel}
          </span>
        </div>

        <h2
          id="impact-in-numbers-heading"
          className="font-anek-bangla text-3xl font-bold text-foreground dark:text-white"
        >
          {title}
        </h2>
        <p className="mt-2 text-sm text-muted dark:text-gray-400 sm:text-base">
          {subtitle}
        </p>
      </div>

      <ul className="grid grid-cols-2 gap-y-8 md:grid-cols-3 xl:grid-cols-6 xl:gap-y-0">
        {stats.map((stat, index) => (
          <StatItem
            key={stat.label}
            stat={stat}
            index={index}
            total={stats.length}
          />
        ))}
      </ul>
    </section>
  );
}
