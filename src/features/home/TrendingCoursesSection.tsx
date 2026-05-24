"use client";

import Link from "next/link";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  CourseCard,
  CourseCardSkeleton,
  type CourseCardProps,
} from "./CourseCard";

import {
  useGetAllTypeCoursesQuery,
  type AllTypeCourseItem,
} from "@/slices/courses";

import { pickPrimaryCategory } from "@/lib/pickPrimaryCategory";

const FALLBACK_INSTRUCTOR_AVATAR = "/Dr. Shah Alam-2.jpeg";

const FALLBACK_PRICE = "$29.00";

const TRENDING_LIMIT = 8;

const SKELETON_COUNT = 4;

function formatLevelLabel(level: string): string | null {
  const t = level.trim();

  if (!t) return null;

  return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
}

function mapCourseToCardProps(course: AllTypeCourseItem): CourseCardProps {
  const firstProduct = course.products?.[0];

  const productPrice = firstProduct?.price ?? null;

  const productCurrency = firstProduct?.currency ?? null;

  const isFreeAccess = course.access === "FREE" || course.access === "PUBLIC";

  const price =
    productPrice != null && productCurrency
      ? `${productCurrency} ${productPrice.toFixed(2)}`
      : isFreeAccess
        ? "Free"
        : FALLBACK_PRICE;

  const primaryCategory = pickPrimaryCategory(course.category);

  const levelLabel = formatLevelLabel(course.level ?? "");

  const instructorTitle = primaryCategory ?? levelLabel ?? "Yoga Instructor";

  const rating =
    course.avgRating != null && course.avgRating > 0
      ? course.avgRating.toFixed(1)
      : undefined;

  const shortDescription =
    course.shortDescription?.trim() ||
    "Explore this course on Yoga with Doctor.";

  return {
    title: course.title,
    shortDescription,
    instructorName: course.instructorName || "Yoga with Doctor",
    instructorTitle,
    instructorAvatarSrc: FALLBACK_INSTRUCTOR_AVATAR,
    price,
    courseId: course.id,
    access: course.access,
    slug: course.slug,
    bannerImage:
      course.bannerUrl ?? "https://via.placeholder.com/640x360.png?text=Course",
    imageAlt: course.title,
    imageBadge: "POPULAR",
    imageBadgeVariant: "green",
    rating,
  };
}

export function TrendingCoursesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const [canScrollRight, setCanScrollRight] = useState(false);

  const { data, isLoading, isFetching } = useGetAllTypeCoursesQuery({
    limit: TRENDING_LIMIT,
  });

  const showSkeleton = isLoading || isFetching;

  const cardProps = useMemo(() => {
    const raw = data?.data?.courses ?? [];

    const sorted = [...raw]

      .filter((c) => c.isActive && c.access !== "PREMIUM")

      .sort((a, b) => {
        const rc = (b.ratingCount ?? 0) - (a.ratingCount ?? 0);

        if (rc !== 0) return rc;

        return (b.avgRating ?? 0) - (a.avgRating ?? 0);
      })

      .slice(0, TRENDING_LIMIT);

    return sorted.map((course) => mapCourseToCardProps(course));
  }, [data?.data?.courses]);

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
  }, [updateScrollButtons, showSkeleton, cardProps.length]);

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
      aria-labelledby="trending-courses-heading"
    >
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2
            id="trending-courses-heading"
            className="font-anek-bangla text-3xl font-bold text-foreground dark:text-white"
          >
            Healing Programs
          </h2>

          <p className="mt-2 text-sm text-muted dark:text-gray-400">
            Structured step-by-step programs combining medical science,
            therapeutic yoga, and lifestyle correction for lasting results.
          </p>
        </div>

        <Link
          href="/courses"
          className="shrink-0 rounded-radius-sm text-sm font-medium text-primary transition-colors hover:text-primary-variant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:text-primary"
        >
          View All
        </Link>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          aria-label="Scroll courses left"
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
                  <CourseCardSkeleton />
                </div>
              ))
            : cardProps.map((course) => (
                <div
                  key={course.slug ?? course.title}
                  className="w-[280px] shrink-0 sm:w-[300px]"
                >
                  <CourseCard {...course} />
                </div>
              ))}
        </div>

        <button
          type="button"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          aria-label="Scroll courses right"
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
