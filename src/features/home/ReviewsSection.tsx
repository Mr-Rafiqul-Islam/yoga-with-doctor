"use client";

import { motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Review = {
  quote: string;
  name: string;
  location: string;
  stars: number;
};

export const MEMBER_REVIEWS = {
  title: "What Our Members Say",
  subtitle:
    "Authentic feedback from people who are transforming their health with Yoga With Doctor.",
  reviews: [
    {
      quote:
        "For almost two years, I lived with constant lower back pain and fear of movement. The structured lessons and doctor-guided yoga sessions helped me regain confidence in my body. Today, I can sit, walk, and work comfortably again. The explanations were simple, practical, and reassuring.",
      name: "Mohammad Rahman",
      location: "Dhaka",
      stars: 5,
    },
    {
      quote:
        "I used to suffer from frequent headaches that affected my work and family life. Through the breathing techniques, lifestyle guidance, and yoga practices, I learned how to manage my triggers better. My migraine episodes have become far less frequent, and I feel more in control of my health.",
      name: "Nusrat Jahan",
      location: "Chattogram",
      stars: 5,
    },
    {
      quote:
        "What impressed me most was the combination of medical science and yoga. It wasn't just exercise; it was education, mindset, nutrition, and daily habits. I have more energy, sleep better, and feel healthier than I did a year ago.",
      name: "Ahmed Hasan",
      location: "Sylhet",
      stars: 5,
    },
    {
      quote:
        "I avoided physical activity because I thought movement would worsen my pain. Dr. Shah Alam's explanations helped me understand my condition, and the step-by-step exercises made me feel safe. Gradually, my flexibility improved, and my fear disappeared.",
      name: "Farzana Akter",
      location: "Rajshahi",
      stars: 5,
    },
    {
      quote:
        "The videos are easy to follow, the instructions are clear, and every session feels thoughtfully designed. I appreciated how each lesson explained not only what to do, but why it matters. It felt like having a knowledgeable guide beside me throughout the journey.",
      name: "Imran Hossain",
      location: "Khulna",
      stars: 5,
    },
    {
      quote:
        "I joined hoping to improve my flexibility, but I gained much more. The daily routines helped me become consistent, manage stress better, and feel more connected to my overall health. The changes seemed small at first, but over time they made a remarkable difference.",
      name: "Sharmeen Sultana",
      location: "Dhaka",
      stars: 5,
    },
  ],
} as const satisfies { title: string; subtitle: string; reviews: Review[] };

const AUTOPLAY_MS = 5000;

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex shrink-0 text-amber-400" aria-hidden>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="material-icons-outlined text-xl">
          star
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const initials = getInitials(review.name);

  return (
    <article className="flex h-full min-h-0 min-w-0 flex-col gap-5 rounded-xl border border-primary/20 bg-surface p-6 shadow-soft transition-all duration-300 hover:border-primary/40 hover:shadow-elevation-md dark:border-white/10 dark:bg-surface dark:hover:border-primary/30 sm:p-7">
      <StarRow count={review.stars} />
      <blockquote className="min-h-0 flex-1 text-xs italic leading-relaxed text-muted dark:text-gray-300 sm:text-sm">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <footer className="flex shrink-0 items-center gap-4">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary dark:text-primary-on-dark sm:h-12 sm:w-12 sm:text-base"
          aria-hidden
        >
          {initials}
        </div>
        <div>
          <cite className="not-italic font-semibold text-foreground dark:text-white">
            {review.name}
          </cite>
          <p className="text-xs text-muted dark:text-gray-400 sm:text-sm">{review.location}</p>
        </div>
      </footer>
    </article>
  );
}

function ReviewsSlider({ reviews }: { reviews: Review[] }) {
  const reduceMotion = useReducedMotion();
  const [perView, setPerView] = useState(1);
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const mqMd = window.matchMedia("(min-width: 768px)");
    const mqLg = window.matchMedia("(min-width: 1024px)");
    const sync = () => {
      if (mqLg.matches) setPerView(3);
      else if (mqMd.matches) setPerView(2);
      else setPerView(1);
    };
    sync();
    mqMd.addEventListener("change", sync);
    mqLg.addEventListener("change", sync);
    return () => {
      mqMd.removeEventListener("change", sync);
      mqLg.removeEventListener("change", sync);
    };
  }, []);

  const slides = useMemo(() => {
    const chunks: Review[][] = [];
    for (let i = 0; i < reviews.length; i += perView) {
      chunks.push(reviews.slice(i, i + perView));
    }
    return chunks;
  }, [perView, reviews]);

  const slideCount = slides.length;

  useEffect(() => {
    setPage((p) => Math.min(p, Math.max(0, slideCount - 1)));
  }, [slideCount]);

  const go = useCallback(
    (dir: -1 | 1) => {
      setPage((p) => {
        const next = p + dir;
        if (next < 0) return slideCount - 1;
        if (next >= slideCount) return 0;
        return next;
      });
    },
    [slideCount],
  );

  useEffect(() => {
    if (reduceMotion || isPaused || slideCount <= 1) return;

    const id = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [go, isPaused, reduceMotion, slideCount]);

  const xPercent = slideCount > 0 ? (100 / slideCount) * page : 0;

  const transition = reduceMotion
    ? { duration: 0.15 }
    : { type: "spring" as const, stiffness: 280, damping: 32, mass: 0.8 };

  return (
    <div
      className="relative outline-none"
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Member reviews"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          go(-1);
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          go(1);
        }
      }}
    >
      <div
        className="overflow-hidden touch-pan-y"
        onTouchStart={(e) => {
          setIsPaused(true);
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          touchStartX.current = null;
          if (dx < -56) go(1);
          else if (dx > 56) go(-1);
          window.setTimeout(() => setIsPaused(false), AUTOPLAY_MS);
        }}
      >
        <motion.div
          className="flex"
          animate={{ x: `-${xPercent}%` }}
          transition={transition}
          style={{ width: slideCount > 0 ? `${slideCount * 100}%` : "100%" }}
        >
          {slides.map((group, slideIdx) => (
            <div
              key={slideIdx}
              className="flex min-h-0 shrink-0 flex-col gap-6 md:flex-row md:items-stretch"
              style={{ width: slideCount > 0 ? `${100 / slideCount}%` : "100%" }}
            >
              {group.map((review) => (
                <div
                  key={review.name}
                  className={perView > 1 ? "flex min-h-0 min-w-0 flex-1" : "w-full"}
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-8">
        <button
          type="button"
          onClick={() => go(-1)}
          className="hidden lg:flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-primary shadow-elevation-sm transition hover:scale-105 hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:border-white/10 sm:h-12 sm:w-12"
          aria-label="Previous reviews"
        >
          <span className="material-icons-outlined text-2xl" aria-hidden>
            chevron_left
          </span>
        </button>

        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === page
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-border hover:bg-muted dark:bg-white/30 dark:hover:bg-white/50"
              }`}
              aria-label={`Go to review slide ${i + 1}`}
              aria-current={i === page ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          className="hidden lg:flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-primary shadow-elevation-sm transition hover:scale-105 hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:border-white/10 sm:h-12 sm:w-12"
          aria-label="Next reviews"
        >
          <span className="material-icons-outlined text-2xl" aria-hidden>
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
}

export function ReviewsSection() {
  const { title, subtitle, reviews } = MEMBER_REVIEWS;

  return (
    <section
      className="mx-auto mb-24 max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="member-reviews-heading"
    >
      <div className="rounded-2xl bg-sage-light/30 px-6 py-10 dark:bg-sage-dark/20 sm:px-10 sm:py-12">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <h2
            id="member-reviews-heading"
            className="font-anek-bangla text-3xl font-bold text-foreground dark:text-white"
          >
            {title}
          </h2>
          <p className="mt-2 text-sm text-muted dark:text-gray-400 sm:text-base">{subtitle}</p>
        </div>

        <ReviewsSlider reviews={[...reviews]} />
      </div>
    </section>
  );
}
