"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArticleCard,
  ArticleCardSkeleton,
} from "@/features/articles/components/ArticleCard";
import { mapApiArticleToCard } from "@/features/articles/lib/mapApiArticle";
import { useGetArticlesQuery } from "@/slices/articles";

const PAGE_SIZE = 8;
const SKELETON_COUNT = 4;

export function ArticlesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const { data, isLoading, isFetching } = useGetArticlesQuery({
    page: 1,
    limit: PAGE_SIZE,
  });

  const articles = useMemo(() => {
    const list = data?.data?.articles ?? [];
    return list.map(mapApiArticleToCard);
  }, [data?.data?.articles]);

  const showSkeleton = isLoading || isFetching;

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollButtons();

    el.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [updateScrollButtons, showSkeleton, articles.length]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const firstCard = el.firstElementChild as HTMLElement | null;
    const amount = firstCard ? firstCard.offsetWidth + 24 : 324;

    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="mx-auto mb-24 max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="home-articles-heading"
    >
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2
            id="home-articles-heading"
            className="font-anek-bangla text-3xl font-bold text-foreground dark:text-white"
          >
           Health & Wellness Articles
          </h2>
          <p className="mt-2 text-sm text-muted dark:text-gray-400">
          Evidence-based articles on healing, prevention, nutrition, movement, and healthy living.
          </p>
        </div>
        <Link
          href="/articles"
          className="shrink-0 rounded-radius-sm text-sm font-medium text-primary transition-colors hover:text-primary-variant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:text-primary"
        >
          View all
        </Link>
      </div>

      {!showSkeleton && articles.length === 0 ? (
        <p className="py-8 text-center text-body-md text-muted">
          No articles to show right now. Check back soon.
        </p>
      ) : (
        <div className="relative">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll articles left"
            className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-elevation-sm transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-0 lg:flex"
          >
            <span className="material-icons-outlined text-2xl" aria-hidden>
              chevron_left
            </span>
          </button>

          <div
            ref={scrollRef}
            className="-mx-4 flex gap-6 overflow-x-auto px-4 pb-4 hide-scrollbar sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
          >
            {showSkeleton
              ? Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                  <div key={i} className="w-[280px] shrink-0 sm:w-[300px]">
                    <ArticleCardSkeleton />
                  </div>
                ))
              : articles.map((article) => (
                  <div key={article.slug} className="w-[280px] shrink-0 sm:w-[300px]">
                    <ArticleCard article={article} />
                  </div>
                ))}
          </div>

          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll articles right"
            className="absolute -right-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-elevation-sm transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-0 lg:flex"
          >
            <span className="material-icons-outlined text-2xl" aria-hidden>
              chevron_right
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
