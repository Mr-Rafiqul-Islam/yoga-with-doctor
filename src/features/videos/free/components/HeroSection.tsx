/**
 * Hero / Introduction section for the Free Wellness Library page.
 * Figma-derived: tagline pill, serif title, description. Reusable via props.
 * Tailwind only, responsive, accessible, no inline styles.
 */
export interface HeroSectionProps {
  /** Uppercase tagline above the title (e.g. "CURATED BY MEDICAL PROFESSIONALS") */
  tagline?: string;
  /** Main heading (e.g. "Free Wellness Library") */
  title?: string;
  /** Optional description paragraph below the title */
  description?: string;
  /** Optional class for the outer header */
  className?: string;
}

const DEFAULT_TAGLINE = "CURATED BY MEDICAL PROFESSIONALS";
const DEFAULT_TITLE = "Free Wellness Library";
const DEFAULT_DESCRIPTION =
  "Doctor-approved routines to start your healing journey. Explore our collection of evidence-based yoga, meditation, and nutrition guides.";

export function HeroSection({
  tagline = DEFAULT_TAGLINE,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  className = "",
}: HeroSectionProps) {
  return (
    <div
      className={`mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 md:py-32 lg:px-8 ${className}`.trim()}
      role="banner"
      aria-labelledby="hero-title"
    >
      <div className="flex flex-col items-center">
        {tagline ? (
          <span
            id="hero-tagline"
            className="mb-6 inline-block rounded-radius-full border border-primary/20 bg-secondary px-4 py-2 text-caption font-semibold uppercase tracking-widest text-primary-dark dark:border-primary/30 dark:bg-primary/10 dark:text-primary-on-dark"
          >
            {tagline}
          </span>
        ) : null}

        <h1
          id="hero-title"
          className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground sm:mb-8 sm:text-5xl md:text-6xl"
        >
          {title}
        </h1>

        {description ? (
          <p
            className="max-w-2xl text-base leading-relaxed text-muted sm:text-body-lg"
            id="hero-description"
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
