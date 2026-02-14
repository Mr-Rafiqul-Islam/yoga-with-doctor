import Link from "next/link";

export interface PremiumAccessCTASectionProps {
  /** Tag above the heading, e.g. "PREMIUM ACCESS" */
  tag?: string;
  /** Main heading */
  heading?: string;
  /** Description paragraph */
  description?: string;
  /** CTA button label */
  buttonLabel?: string;
  /** CTA link (renders as Link if set, otherwise button) */
  buttonHref?: string;
  /** Called when CTA is clicked (used when buttonHref is not set) */
  onButtonClick?: () => void;
  /** Small print below the button */
  disclaimer?: string;
  /** Optional class for the outer aside */
  className?: string;
}

const DEFAULT_TAG = "PREMIUM ACCESS";
const DEFAULT_HEADING = "Ready for deeper healing?";
const DEFAULT_DESCRIPTION =
  "Unlock our full medical-grade library, personalized care plans, and direct Q&A with specialists.";
const DEFAULT_BUTTON_LABEL = "Unlock Premium";
const DEFAULT_DISCLAIMER = "7-day free trial, cancel anytime.";

/**
 * Premium access call-to-action banner.
 * Dark gradient card: tag, heading, description, CTA button, disclaimer.
 * Tailwind only, responsive, accessible.
 */
export function PremiumAccessCTASection({
  tag = DEFAULT_TAG,
  heading = DEFAULT_HEADING,
  description = DEFAULT_DESCRIPTION,
  buttonLabel = DEFAULT_BUTTON_LABEL,
  buttonHref,
  onButtonClick,
  disclaimer = DEFAULT_DISCLAIMER,
  className = "",
}: PremiumAccessCTASectionProps) {
  const ctaContent = (
    <>
      <span>{buttonLabel}</span>
      <span className="material-icons-outlined text-xl" aria-hidden>
        arrow_forward
      </span>
    </>
  );

  return (
    <aside
      className={`mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 ${className}`.trim()}
      aria-label="Premium access promotion"
    >
      <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 p-8 shadow-elevation-md dark:from-[#0f172a] dark:to-[#1e293b] md:flex md:items-center md:justify-between md:gap-10 md:p-10">
        {/* Left: tag, heading, description */}
        <div className="md:flex-1 md:max-w-[70%]">
          {tag ? (
            <span className="inline-block rounded-lg bg-primary px-3 py-1.5 text-caption font-semibold uppercase tracking-wider text-white">
              {tag}
            </span>
          ) : null}
          {heading ? (
            <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl md:mt-5">
              {heading}
            </h2>
          ) : null}
          {description ? (
            <p className="mt-3 max-w-xl text-base leading-relaxed text-gray-300 md:mt-4">
              {description}
            </p>
          ) : null}
        </div>

        {/* Right: CTA button + disclaimer */}
        <div className="mt-8 flex flex-col items-start md:mt-0 md:flex-shrink-0 md:items-end">
          {buttonHref ? (
            <Link
              href={buttonHref}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-4 text-body-md font-bold text-gray-900 transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              {ctaContent}
            </Link>
          ) : (
            <button
              type="button"
              onClick={onButtonClick}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-4 text-body-md font-bold text-gray-900 transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              {ctaContent}
            </button>
          )}
          {disclaimer ? (
            <p className="mt-2 text-caption text-gray-400 md:text-center md:max-w-[200px]">
              {disclaimer}
            </p>
          ) : null}
        </div>
      </div>
    </aside>
  );
}
