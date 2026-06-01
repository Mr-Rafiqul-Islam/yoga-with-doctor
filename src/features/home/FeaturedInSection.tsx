import Image from "next/image";

type FeaturedLogo = {
  name: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const FEATURED_IN = {
  sectionLabel: "Our Featured In",
  title: "Featured In",
  description:
    "Recognized by leading media & platforms for our contribution to health & wellness.",
  logos: [
    {
      name: "ATN NEWS",
      src: "/featured-in/atn-news.png",
      alt: "ATN News",
      width: 140,
      height: 48,
    },
    {
      name: "The Daily Star",
      src: "/featured-in/Logo_of_The_Daily_Star.svg",
      alt: "The Daily Star",
      width: 140,
      height: 48,
    },
    {
      name: "prothomalo.com",
      src: "/featured-in/prothomalo.svg",
      alt: "prothomalo.com",
      width: 140,
      height: 48,
    },
    {
      name: "DBC 24/7 NEWS",
      src: "/featured-in/dbc-24-7-newz.png",
      alt: "DBC 24/7 News",
      width: 120,
      height: 48,
    },
  ] satisfies FeaturedLogo[],
} as const;

function FeaturedLogoItem({ logo }: { logo: FeaturedLogo }) {
  return (
    <li className="flex items-center justify-center">
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className="h-10 w-auto max-w-[8.5rem] object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 dark:opacity-70 sm:h-12 sm:max-w-[9.5rem]"
        sizes="(max-width: 1024px) 25vw, 120px"
      />
    </li>
  );
}

export function FeaturedInSection() {
  const { sectionLabel, title, description, logos } = FEATURED_IN;

  return (
    <section
      className="mx-auto mb-24 max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="featured-in-heading"
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-3 lg:gap-16">
        <div className="col-span-1">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-sm font-bold uppercase tracking-wider text-primary dark:text-primary-on-dark">
              {sectionLabel}
            </span>
          </div>

          <h2
            id="featured-in-heading"
            className="font-anek-bangla text-3xl font-bold text-foreground dark:text-white sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-2 max-w-md text-sm text-muted dark:text-gray-400 sm:text-base">
            {description}
          </p>
        </div>

        <ul
          className="col-span-2 w-full grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8"
          aria-label="Media outlets"
        >
          {logos.map((logo) => (
            <FeaturedLogoItem key={logo.name} logo={logo} />
          ))}
        </ul>
      </div>
    </section>
  );
}
