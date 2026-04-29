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
    quote: "প্রথমে মনে হয়েছিল আমারও হয়তো অপারেশন লাগবে… কয়েক মাস ধরে কোমরের ব্যথায় ঠিকমতো বসতেও পারতাম না। কাজ করা তো দূরের কথা, রাতে ঘুমানোও কষ্টকর হয়ে গিয়েছিল। এই প্রোগ্রামে যোগ দেওয়ার পর ধাপে ধাপে বুঝতে পারলাম আমার সমস্যাটা কোথায়। এখন আলহামদুলিল্লাহ, আগের থেকে অনেকটাই ভালো—ব্যথা অনেক কমে গেছে এবং আবার স্বাভাবিকভাবে কাজ করতে পারছি।",
    initials: "এনআর",
    name: "নাসিমা রহমান",
    role: "Housewife",
    stars: 5,
  },
  {
    quote:
      "প্রতিদিনই ব্যথার জন্য ওষুধ খেতে হতো। সাময়িক আরাম পেতাম, কিন্তু আবার ব্যথা ফিরে আসত। এই প্রোগ্রামের ব্যায়াম আর গাইডলাইন ফলো করার পর ধীরে ধীরে ওষুধের উপর নির্ভরতা কমে গেছে। এখন অনেক বেশি confident feel করি নিজের শরীর নিয়ে।",
    initials: "কেএইচ",
    name: "কামরুল হাসান",
    role: "Homemaker",
    stars: 5,
  },
  {
    quote:
      "অপারেশনের ভয় থেকে মুক্ত হয়েছি।ডাক্তার অপারেশনের কথা বলার পর খুব ভয় পেয়ে গিয়েছিলাম। এই প্রোগ্রামে join করার পর বুঝলাম সব ক্ষেত্রে অপারেশন দরকার হয় না। নিয়মিত গাইডলাইন ফ্লো করার পর এখন অনেকটাই স্বাভাবিক জীবনযাপন করতে পারছি। সবচেয়ে বড় কথা—মনে শান্তি এসেছে।",
    initials: "রহ",
    name: "রাশেদ হক",
    role: "Retired Teacher",
    stars: 5,
  },
  {
    quote:
      "ছোট ছোট পরিবর্তনই যে এত বড় পার্থক্য আনতে পারে, এটা আগে জানতাম না। আমি ভাবতাম শুধু ব্যায়াম করলেই হবে। কিন্তু এখানে এসে বুঝলাম posture, lifestyle—সবকিছুই গুরুত্বপূর্ণ। এই holistic approach-টাই আমাকে সবচেয়ে বেশি help করেছে।",
    initials: "সআ",
    name: "সাব্বির আহমেদ",
    role: "IT Professional",
    stars: 5,
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="shrink-0 flex text-yellow-300">
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
    <div className="flex h-full min-h-0 min-w-0 flex-col gap-8 rounded-2xl bg-surface-container-low p-8 transition-colors duration-300 hover:bg-[var(--plid-proof-story-hover)]">
      <StarRow count={story.stars} />
      <p className="min-h-0 flex-1 italic leading-relaxed text-on-surface/70">
        &quot;{story.quote}&quot;
      </p>
      <div className="flex shrink-0 items-center gap-4">
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

export function Plid30DaysHealingProofSlider() {
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
              className="flex min-h-0 shrink-0 flex-col gap-8 md:flex-row md:items-stretch"
              style={{ width: slideCount > 0 ? `${100 / slideCount}%` : "100%" }}
            >
              {group.map((story) => (
                <div
                  key={story.name + story.initials}
                  className={perView > 1 ? "flex min-h-0 min-w-0 flex-1" : "w-full"}
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
