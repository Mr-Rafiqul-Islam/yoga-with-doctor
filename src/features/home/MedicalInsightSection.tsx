import Link from "next/link";

export function MedicalInsightSection() {
  return (
    <section
      className="relative z-20 mx-auto -mt-8 mb-16 max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="medical-insight-heading"
    >
      <div className="flex flex-col items-center gap-6 rounded-xl border border-primary/20 bg-sage-light p-6 shadow-soft dark:border-white/10 dark:bg-sage-dark sm:p-10 md:flex-row">
        <div className="flex-shrink-0">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-sm dark:bg-sage-dark-icon-bg dark:text-primary-on-dark"
            aria-hidden
          >
            <span className="material-icons-outlined text-3xl">lightbulb</span>
          </div>
        </div>
        <div className="flex-grow text-center md:text-left">
          <h2
            id="medical-insight-heading"
            className="font-display text-lg font-bold text-gray-900 dark:text-sage-dark-title"
          >
            Today&apos;s Medical Insight
          </h2>
          <p className="mt-1 max-w-2xl text-gray-600 dark:text-sage-dark-desc">
            Deep breathing activates the parasympathetic nervous system,
            reducing cortisol levels by up to 20% in just 5 minutes. Try our
            &quot;MindClarity&quot; flow today.
          </p>
        </div>
        <div className="flex flex-shrink-0">
          <Link
            href="/articles"
            className="inline-flex items-center font-semibold text-primary transition-colors hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:text-primary-on-dark dark:hover:text-primary rounded-radius-sm"
          >
            Read Article
            <span className="material-icons-outlined ml-1 text-sm" aria-hidden>
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
