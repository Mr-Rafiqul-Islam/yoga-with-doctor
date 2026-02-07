const TRENDING_TAGS = [
  { label: "Back Pain", slug: "back-pain" },
  { label: "Meditation", slug: "meditation" },
  { label: "Organic Tea", slug: "organic-tea" },
  { label: "Hatha Yoga", slug: "hatha-yoga" },
  { label: "Sleep", slug: "sleep" },
] as const;

export function TrendingTagsSection() {
  return (
    <section
      className="mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-label="Trending categories"
    >
      <div className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <span className="flex-shrink-0 whitespace-nowrap rounded-radius-full bg-primary px-6 py-2 text-caption font-medium text-white shadow-elevation-sm">
          🔥 Trending
        </span>
        {TRENDING_TAGS.map(({ label, slug }) => (
          <a
            key={slug}
            href={`/courses?tag=${slug}`}
            className="flex-shrink-0 whitespace-nowrap rounded-radius-full border border-border bg-surface px-6 py-2 text-caption font-medium text-foreground transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
