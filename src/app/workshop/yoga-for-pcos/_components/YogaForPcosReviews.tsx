import { ScrollReveal } from "@/app/(public)/programmes/_shared/ScrollReveal";

const STAR_KEYS = [0, 1, 2, 3, 4] as const;

const REVIEWS = [
  {
    quote:
      "After 8 months of no period, I started Dr. Chen's routine. Within 6 weeks, my cycle returned naturally. I feel like myself again!",
    author: "Ananya K.",
    avatarClass: "bg-[var(--color-primary-fixed)]",
  },
  {
    quote: `The weight wouldn't budge no matter how little I ate. The stress-reducing yoga was the missing piece. Dropped 5kg in 2 months.`,
    author: "Meera R.",
    avatarClass: "bg-[var(--color-secondary-fixed)]",
  },
  {
    quote: `Finally, advice that doesn't feel like a chore. The movements are so gentle and the community support is amazing.`,
    author: "Sanya M.",
    avatarClass: "bg-[var(--color-tertiary-fixed)]",
  },
];

export default function YogaForPcosReviews() {
  return (
    <ScrollReveal className="px-6 py-[var(--pcos-section-y)]" as="section" id="reviews">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-headline-lg mb-16 text-center text-[var(--color-on-surface)]">
          Voices of Healing
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <div
              key={review.author}
              className="glass-card ambient-shadow rounded-2xl p-8"
            >
              <div className="mb-4 flex gap-1">
                {STAR_KEYS.map((i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined material-symbols-outlined--fill text-[var(--color-primary)]"
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="text-body-md mb-6 text-[var(--color-on-surface-variant)]">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={`h-10 w-10 shrink-0 rounded-full ${review.avatarClass}`}
                  aria-hidden
                />
                <span className="font-semibold text-[var(--color-on-surface)]">
                  {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
