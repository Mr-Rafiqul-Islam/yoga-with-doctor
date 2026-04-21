import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC8cuPVOyIENRJwhjB_sRZT1xIxdtZYlZTahw-wo7c9V0yrlXLIKFtXXtQlPUQctZGSKcHJmtZQnBzbOYTUDMOp_691EGJuWtzoMFQPi7IdVM-I21agWiPA1e65vyOw6CLKPlIQPTGEarHfiJ-ebywseIplHNa8gQN1reTcf7pXBHLlPuqj_ql1R7cCQ6xONcSf7E3miFC2F_i0BFcd00PfVdg7VnxHbdHR2opNOv9O6VyNtWHtqRYYK0odCfebeOusO6PHt5r80Q";

/** Central hero copy and links — swap values here or from CMS/env without touching markup. */
export const HERO_SECTION = {
  ariaLabel: "Hero",
  badge: "New Clinical Series Available",
  headlineLine: "Find Your Path to",
  subHeadlineLine: "Clinical Zen",
  description:
    "Evidence-based yoga therapy designed by medical professionals. Enhance your recovery, improve mobility, and find mental clarity through scientifically backed sessions.",
  primaryCta: {
    href: "/courses",
    label: "Start Your Journey",
  },
  secondaryCta: {
    href: "#",
    label: "Watch Intro",
    icon: "play_circle" as const,
  },
  image: {
    src: HERO_IMAGE_URL,
    alt: "Woman in meditative yoga pose, hands in prayer position",
    sizes: "(max-width: 1024px) 100vw, 50vw",
  },
} as const;

export function HeroSection() {
  const {
    ariaLabel = "Hero",
    badge,
    headlineLine,
    subHeadlineLine,
    description,
    primaryCta,
    secondaryCta,
    image,
  } = HERO_SECTION;

  return (
    <div
      className="relative overflow-hidden bg-surface"
      role="banner"
      aria-label={ariaLabel}
    >
      <div className="mx-auto max-w-7xl">
        {/* Left: content — 50% on lg, full width on small */}
        <div className="relative z-10 bg-surface px-4 pb-8 pt-20 sm:px-6 sm:pb-16 sm:pt-24 md:pb-20 lg:max-w-2xl lg:w-full lg:px-8 lg:pb-28 lg:pt-28 xl:pb-32">
          <div className="mx-auto mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              {/* Badge */}
              <span className="mb-6 inline-flex items-center rounded-radius-full border border-[#00a86b4d] bg-[#00a86b1a] px-3 py-1 text-caption font-semibold text-primary">
                <span
                  className="mr-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary"
                  aria-hidden
                />
                {badge}
              </span>

              {/* Headline — Playfair Display */}
              <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                <span className="block xl:inline">{headlineLine}</span>{" "}
                <span className="block text-primary xl:inline">
                  {subHeadlineLine}
                </span>
              </h1>

              {/* Description — Inter */}
              <p className="mx-auto mt-3 max-w-xl text-base text-muted sm:mt-5 sm:text-body-lg sm:max-w-xl md:mt-5 md:text-xl lg:mx-0">
                {description}
              </p>

              {/* CTAs — Inter, generous spacing */}
              <div className="mt-8 flex flex-wrap justify-center gap-4 sm:mt-12 lg:justify-start">
                <Link
                  href={primaryCta.href}
                  className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-1"
                >
                  {primaryCta.label}
                </Link>
                <Link
                  href={secondaryCta.href}
                  className="flex items-center justify-center px-8 py-4 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-full text-gray-700 dark:text-gray-200 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 md:py-4 md:text-lg transition-all"
                >
                  <span
                    className="material-icons-outlined mr-2 text-xl"
                    aria-hidden
                  >
                    {secondaryCta.icon}
                  </span>
                  {secondaryCta.label}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right: image — 50% on lg, full width below */}
        <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="relative h-56 w-full sm:h-72 md:h-96 lg:h-full lg:w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes={image.sizes}
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-surface via-surface/20 to-transparent"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </div>
  );
}
