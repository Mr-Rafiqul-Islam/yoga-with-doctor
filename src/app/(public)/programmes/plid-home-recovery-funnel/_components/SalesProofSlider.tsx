"use client";

import { motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Story = {
  quote: string;
  initials: string;
  name: string;
  role: string;
  stars: number;
};

const STORIES: Story[] = [
  {
    quote:
      "১০ বছর ধরে কোমর ব্যথায় ভুগছিলাম। অনেক ডাক্তার দেখিয়েছি। ডাঃ শাহ আলমের এই হোম সিস্টেম মাত্র ১ মাস ফলো করে আমি এখন সম্পূর্ণ সুস্থ।",
    initials: "এআর",
    name: "আরিফুর রহমান",
    role: "Private Employee",
    stars: 5,
  },
  {
    quote:
      "অপারেশন ছাড়া যে সুস্থ হওয়া সম্ভব তা আমি কল্পনাও করিনি। নিয়মগুলো খুবই সহজ কিন্তু অসম্ভব কার্যকরী। অসংখ্য ধন্যবাদ ডাঃ শাহ আলমকে।",
    initials: "এসকে",
    name: "সাজিয়া খানম",
    role: "Homemaker",
    stars: 5,
  },
  {
    quote:
      "ব্যথার জন্য রাতে ঘুমাতেই পারতাম না। এই প্রোগ্রামটি আমার জীবনের মোড় ঘুরিয়ে দিয়েছে। এখন আমি আবার স্বাভাবিকভাবে নামাজ আদায় করতে পারছি।",
    initials: "এমইউ",
    name: "মুস্তাফিজুর রহমান",
    role: "Retired Teacher",
    stars: 5,
  },
  {
    quote:
      "অফিসে বসে কাজ করার সময় কোমরে টান ছিল। তিন সপ্তাহের মধ্যে ব্যথা অনেক কমে গেছে। ডাঃ শাহ আলমের গাইডলাইন খুবই পরিষ্কার।",
    initials: "এনআর",
    name: "নাফিসা রহমান",
    role: "IT Professional",
    stars: 5,
  },
  {
    quote:
      "আমি ভেবেছিলাম শুধুই ঔষধেই চলতে হবে। এই হোম প্রোগ্রামে নিয়মিত এক্সারসাইজের পর এখন ঔষধ কমাতে পেরেছি।",
    initials: "কেএম",
    name: "কামরুল হাসান",
    role: "Business Owner",
    stars: 4,
  },
  {
    quote:
      "বয়স ৫৮, অপারেশনের ভয় ছিল। ডাঃ শাহ আলমের কাছ থেকে শিখে বাড়িতেই চিকিৎসা চালিয়ে যাচ্ছি—ফল পাচ্ছি।",
    initials: "রহ",
    name: "রাশেদা হক",
    role: "Retired Nurse",
    stars: 5,
  },
  {
    quote:
      "ডিস্ক সমস্যায় হাঁটতে কষ্ট হতো। প্রোটোকল ফলো করে এখন সিঁড়ি ভালোভাবে উঠতে পারি। পরিবার খুশি।",
    initials: "ইক",
    name: "ইমরান কবির",
    role: "Driver",
    stars: 5,
  },
  {
    quote:
      "অনলাইনে কোর্স কিনে সন্দেহ ছিল। কিন্তু সাপোর্ট টিম ও ডাঃ শাহ আলমের নির্দেশনায় আত্মবিশ্বাস ফিরে পেয়েছি।",
    initials: "সআ",
    name: "সুমাইয়া আক্তার",
    role: "Teacher",
    stars: 5,
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="mb-6 flex text-primary-container">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
      ))}
    </div>
  );
}

function StoryCard({ story }: { story: Story }) {
  return (
    <div className="rounded-2xl bg-surface-container-low p-8 transition-colors duration-300 hover:bg-[var(--plid-proof-story-hover)]">
      <StarRow count={story.stars} />
      <p className="mb-8 italic leading-relaxed text-on-surface/70">&quot;{story.quote}&quot;</p>
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-container/20 text-lg font-bold text-primary">
          {story.initials}
        </div>
        <div>
          <div className="font-bold text-on-surface">{story.name}</div>
          <div className="text-xs text-on-surface/50">{story.role}</div>
        </div>
      </div>
    </div>
  );
}

export function SalesProofSlider() {
  const reduceMotion = useReducedMotion();
  const [perView, setPerView] = useState(1);
  const [page, setPage] = useState(0);
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
    const chunks: Story[][] = [];
    for (let i = 0; i < STORIES.length; i += perView) {
      chunks.push(STORIES.slice(i, i + perView));
    }
    return chunks;
  }, [perView]);

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
      aria-label="Patient testimonials"
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
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchStartX.current;
          touchStartX.current = null;
          if (dx < -56) go(1);
          else if (dx > 56) go(-1);
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
              className="flex shrink-0 flex-col gap-8 md:flex-row"
              style={{ width: slideCount > 0 ? `${100 / slideCount}%` : "100%" }}
            >
              {group.map((story) => (
                <div
                  key={story.name + story.initials}
                  className={perView > 1 ? "min-w-0 flex-1" : "w-full"}
                >
                  <StoryCard story={story} />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
        <button
          type="button"
          onClick={() => go(-1)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container-lowest text-primary shadow-sm transition hover:bg-surface-container-high"
          aria-label="Previous stories"
        >
          <span className="material-symbols-outlined">chevron_left</span>
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
                  : "w-2.5 bg-outline-variant/60 hover:bg-outline-variant"
              }`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === page ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container-lowest text-primary shadow-sm transition hover:bg-surface-container-high"
          aria-label="Next stories"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      <p className="mt-4 text-center text-xs text-on-surface/50">
        Swipe on touch devices or use arrows and keyboard to see more stories
      </p>
    </div>
  );
}
