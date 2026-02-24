export function PricingPageHeader() {
  return (
    <div className="mb-12 text-center">
      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <span className="material-icons-outlined text-primary text-3xl" aria-hidden>
          self_improvement
        </span>
      </div>
      <h2 className="mb-4 font-display text-4xl font-bold text-foreground dark:text-white md:text-5xl">
        Unlock Inner Peace
      </h2>
      <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted">
        Join thousands of yogis. Get unlimited access to all courses, premium
        videos, and meditation guides designed for your wellbeing.
      </p>
    </div>
  );
}
