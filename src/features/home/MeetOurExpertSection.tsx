import Image from "next/image";
import Link from "next/link";

export const MEET_OUR_EXPERT = {
  sectionNumber: "01",
  sectionLabel: "Meet Our Expert",
  title: "Meet Dr. Shah Alam",
  intro:
    "A trusted doctor, yoga therapist & health educator with a mission to help people live pain-free and healthier lives.",
  credentials: [
    {
      icon: "school" as const,
      title: "MBBS, D-Ortho (BSMMU)",
      subtitle: "Orthopedic & Spine Specialist",
    },
    {
      icon: "schedule" as const,
      title: "20+ Years Experience",
      subtitle: "In medicine & therapeutic yoga",
    },
    {
      icon: "groups" as const,
      title: "10,000+ Patients Helped",
      subtitle: "With natural & evidence-based healing",
    },
    {
      icon: "self_improvement" as const,
      title: "Yoga Instructor",
      subtitle: "Specialized in therapeutic yoga",
    },
    {
      icon: "star" as const,
      title: "Founder",
      subtitle: "Yoga With Doctor",
    },
  ],
  cta: {
    href: "https://doctorshahalam.com/",
    label: "Know More About Dr. Shah Alam",
  },
  quote:
    "My mission is to empower people to heal naturally and live a better quality of life.",
  quoteAttribution: "Dr. Shah Alam",
  image: {
    src: "/dr-shah-alam-cutout.png",
    alt: "Dr. Shah Alam — orthopedic specialist and yoga instructor",
    width: 640,
    height: 800,
    sizes: "(max-width: 1024px) 100vw, 50vw",
  },
} as const;

export function MeetOurExpertSection() {
  const {
    sectionNumber,
    sectionLabel,
    title,
    intro,
    credentials,
    cta,
    quote,
    quoteAttribution,
    image,
  } = MEET_OUR_EXPERT;

  return (
    <section
      className="mx-auto mb-20 max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="meet-expert-heading"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary text-xs font-bold text-white"
              aria-hidden
            >
              {sectionNumber}
            </span>
            <span className="text-sm font-bold uppercase tracking-wider text-primary dark:text-primary-on-dark">
              {sectionLabel}
            </span>
          </div>

          <h2
            id="meet-expert-heading"
            className="font-anek-bangla text-3xl font-bold text-foreground dark:text-white sm:text-4xl"
          >
            {title}
          </h2>

          <p className="mt-3 max-w-xl text-body-md text-muted dark:text-gray-400">
            {intro}
          </p>

          <ul className="mt-6 space-y-4">
            {credentials.map(({ icon, title: credentialTitle, subtitle }) => (
              <li key={credentialTitle} className="flex items-start gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage-light text-primary dark:bg-sage-dark/50 dark:text-primary-on-dark"
                  aria-hidden
                >
                  <span className="material-icons-outlined text-xl">{icon}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground dark:text-white">
                    {credentialTitle}
                  </p>
                  <p className="mt-0.5 text-sm text-muted dark:text-gray-400">
                    {subtitle}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-medium text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-primary-dark hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:text-white"
            >
              {cta.label}
              <span className="material-icons-outlined ml-2 text-xl" aria-hidden>
                arrow_forward
              </span>
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md overflow-visible lg:max-w-none">
          <div className="relative h-[320px] w-full lg:w-[550px] overflow-visible sm:h-[320px] lg:h-[380px]">
            {/* Layer 1: mint base panel — visible on top and right */}
            <div
              className="absolute right-0 top-6 h-[calc(100%-1rem)] w-[90%] rounded-2xl bg-sage-light dark:bg-sage-dark/30 sm:top-8 sm:w-[88%]"
              aria-hidden
            />

            {/* Layer 2: dark green quote block — tall left overlay on mint panel */}
            <div className="absolute left-0 sm:left-4 bottom-2 z-10 flex h-[76%] w-[58%] flex-col rounded-2xl bg-primary p-5 shadow-lg sm:h-[78%] sm:w-[56%] sm:p-7 lg:p-8">
              <blockquote className="text-white">
                <p className="text-sm italic leading-relaxed sm:text-base lg:text-lg">
                  &ldquo;{quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm font-semibold not-italic sm:mt-5">
                  — {quoteAttribution}
                </footer>
              </blockquote>
            </div>

            {/* Layer 3: cutout portrait — overlaps quote block and mint base */}
            <div className="absolute -top-2 bottom-0 right-0 z-20 w-[78%] sm:-top-4 sm:w-[74%] lg:w-[72%]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={image.sizes}
                className="object-contain object-bottom"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
