'use client';
import Link from "next/link";
import { VideoCard } from "./VideoCard";
import { VideoCardSkeleton } from "../videos/free/components/VideoCard";
import { useGetClassesQuery } from "@/slices/classes";
import { classItemToVideoCard } from "../videos/free/utils/classToVideoCard";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";


const PAGE_SIZE = 8;

export function FreeVideosSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const { data, isLoading, isFetching } = useGetClassesQuery({
    page: 1,
    limit: PAGE_SIZE,
    access: "PUBLIC",
  });
  const videosFromApi = useMemo(
    () => (data?.data?.classes ?? []).map(classItemToVideoCard),
    [data?.data?.classes]
  );

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
  }, [updateScrollButtons, showSkeleton, videosFromApi.length]);

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
      className="mx-auto mb-20 max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="free-videos-heading"
    >
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2
            id="free-videos-heading"
            className="font-anek-bangla text-3xl font-bold text-foreground"
          >
            Free Healing Classes
          </h2>
          <p className="mt-2 text-body-md text-muted">
          Learn practical, doctor-guided yoga techniques to reduce pain, improve mobility, and build a healthier life- completely free.
          </p>
        </div>
        <Link
          href="/videos"
          className="text-base font-medium text-primary transition-colors hover:text-primary-variant focus:outline-none  rounded-radius-sm shrink-0"
        >
          See all
        </Link>
      </div>
      <div className="relative">
        <button
          type="button"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll videos left"
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
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-[280px] shrink-0 sm:w-[300px]">
                  <VideoCardSkeleton />
                </div>
              ))
            : videosFromApi.map((video) => (
                <div key={video.title} className="w-[280px] shrink-0 sm:w-[300px]">
                  <VideoCard {...video} />
                </div>
              ))}
        </div>

        <button
          type="button"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Scroll videos right"
          className="absolute -right-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-elevation-sm transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-0 lg:flex"
        >
          <span className="material-icons-outlined text-2xl" aria-hidden>
            chevron_right
          </span>
        </button>
      </div>
    </section>
  );
}
