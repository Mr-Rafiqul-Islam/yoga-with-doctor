import Image from "next/image";

type MaterialIconName = "health_and_safety" | "spa" | "person" | "public";

type MissionPillarData = {
  icon: MaterialIconName;
  title: string;
  description: string;
};

export const TRANSFORMATION_MISSION = {
  sectionLabel: "Our Mission",
  title: "Our Transformation Mission",
  intro:
    "We combine modern medical science, therapeutic yoga, and lifestyle medicine to create a healthier, stronger, and pain-free Bangladesh.",
  pillars: [
    {
      icon: "health_and_safety" as const,
      title: "Prevent Disease",
      description: "Help people prevent diseases through lifestyle & exercise.",
    },
    {
      icon: "spa" as const,
      title: "Natural Healing",
      description:
        "Promote natural healing without dependency on medication or surgery.",
    },
    {
      icon: "person" as const,
      title: "Educate & Empower",
      description:
        "Educate people with evidence-based knowledge & practical solutions.",
    },
    {
      icon: "public" as const,
      title: "Build a Healthier Nation",
      description:
        "Our vision is a healthier Bangladesh for today and future generations.",
    },
  ] satisfies MissionPillarData[],
  image: {
    src: "/banner3.png",
    alt: "Yoga instructor demonstrating a therapeutic yoga pose",
    width: 520,
    height: 640,
    sizes: "(max-width: 1024px) 100vw, 50vw",
  },
} as const;

function getPillarBorderClass(index: number, total: number): string {
  if (index >= total - 1) return "";

  const showMobileBorder = index % 2 === 0;
  const showDesktopBorder = (index + 1) % 4 !== 0;

  return [
    "border-border dark:border-white/10",
    showMobileBorder ? "max-md:border-r" : "",
    showDesktopBorder ? "md:border-r" : "",
  ]
    .filter(Boolean)
    .join(" ");
}

function MissionPillar({
  pillar,
  index,
  total,
}: {
  pillar: MissionPillarData;
  index: number;
  total: number;
}) {
  return (
    <li
      className={[
        "flex flex-col items-start px-3 py-2 sm:px-4",
        getPillarBorderClass(index, total),
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        className="material-icons-outlined text-2xl text-primary dark:text-primary-on-dark"
        aria-hidden
      >
        {pillar.icon}
      </span>
      <h3 className="mt-3 text-sm font-bold text-foreground dark:text-white">
        {pillar.title}
      </h3>
      <p className="mt-1.5 text-xs leading-relaxed text-muted dark:text-gray-400 sm:text-sm">
        {pillar.description}
      </p>
    </li>
  );
}

function DotGrid() {
  return (
    <div
      className="absolute right-2 top-8 grid grid-cols-4 gap-1.5 opacity-30 sm:right-4 sm:top-12"
      aria-hidden
    >
      {Array.from({ length: 20 }, (_, i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-muted dark:bg-gray-500"
        />
      ))}
    </div>
  );
}

export function TransformationMissionSection() {
  const { sectionLabel, title, intro, pillars, image } = TRANSFORMATION_MISSION;

  return (
    <section
      className="mx-auto mb-24 max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="transformation-mission-heading"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3 lg:gap-16">
        <div className="col-span-2">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-sm font-bold uppercase tracking-wider text-primary dark:text-primary-on-dark">
              {sectionLabel}
            </span>
          </div>

          <h2
            id="transformation-mission-heading"
            className="font-anek-bangla text-3xl font-bold text-foreground dark:text-white sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-body-md text-muted dark:text-gray-400">
            {intro}
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-y-0">
            {pillars.map((pillar, index) => (
              <MissionPillar
                key={pillar.title}
                pillar={pillar}
                index={index}
                total={pillars.length}
              />
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none col-span-1">
          <div className="relative min-h-[250px] sm:min-h-[320px]">
            <div
              className="absolute left-4 top-8 h-[75%] w-[70%] rounded-[2rem] bg-sage-light dark:bg-sage-dark sm:left-8 sm:w-[65%]"
              aria-hidden
            />
            <DotGrid />
            <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center lg:justify-end">
              <Image
              src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes={image.sizes}
                className="h-auto w-[85%] max-w-[520px] object-contain object-bottom lg:w-[90%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
