"use client";

import Link from "next/link";
import { useMemo } from "react";
import { CourseCard, type CourseCardProps } from "./CourseCard";
import {
  useGetAllTypeCoursesQuery,
  type AllTypeCourseItem,
} from "@/slices/courses";
import { pickPrimaryCategory } from "@/lib/pickPrimaryCategory";

const FALLBACK_INSTRUCTOR_AVATAR =
  "https://drshahalam.com/wp-content/uploads/2026/02/Dr-Shah-Alam-Website-About.jpeg";
const FALLBACK_PRICE = "$29.00";
const TRENDING_LIMIT = 2;

function formatLevelLabel(level: string): string | null {
  const t = level.trim();
  if (!t) return null;
  return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();
}

function mapCourseToCardProps(course: AllTypeCourseItem): CourseCardProps {
  const firstProduct = course.products?.[0];
  const productPrice = firstProduct?.price ?? null;
  const productCurrency = firstProduct?.currency ?? null;
  const isFreeAccess =
    course.access === "FREE" || course.access === "PUBLIC";

  const price =
    productPrice != null && productCurrency
      ? `${productCurrency} ${productPrice.toFixed(2)}`
      : isFreeAccess
        ? "Free"
        : FALLBACK_PRICE;

  const primaryCategory = pickPrimaryCategory(course.category);
  const levelLabel = formatLevelLabel(course.level ?? "");
  const instructorTitle =
    primaryCategory ?? levelLabel ?? "Yoga Instructor";

  const rating =
    course.avgRating != null && course.avgRating > 0
      ? course.avgRating.toFixed(1)
      : undefined;

  const description =
    course.description?.trim() ||
    "Explore this course on Yoga with Doctor.";

  return {
    title: course.title,
    description,
    instructorName: course.instructorName || "Yoga with Doctor",
    instructorTitle,
    instructorAvatarSrc: FALLBACK_INSTRUCTOR_AVATAR,
    price,
    courseId: course.id,
    access: course.access,
    slug: course.slug,
    bannerImage:
      course.bannerUrl ??
      "https://via.placeholder.com/640x360.png?text=Course",
    imageAlt: course.title,
    imageBadge: "POPULAR",
    imageBadgeVariant: "green",
    rating,
  };
}

export function TrendingCoursesSection() {
  const { data, isLoading, isFetching } = useGetAllTypeCoursesQuery();
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

  return (
    <section
      className="mx-auto mb-24 max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="trending-courses-heading"
    >
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2
            id="trending-courses-heading"
            className="font-display text-3xl font-bold text-foreground dark:text-white"
          >
            Trending Courses
          </h2>
          <p className="mt-2 text-sm text-muted dark:text-gray-400">
            Comprehensive programs to transform your health
          </p>
        </div>
        <Link
          href="/courses"
          className="shrink-0 rounded-radius-sm text-sm font-medium text-primary transition-colors hover:text-primary-variant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:text-primary"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {showSkeleton
          ? Array.from({ length: TRENDING_LIMIT }).map((_, i) => (
              <div
                key={i}
                className="h-72 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-700 sm:h-64"
              />
            ))
          : cardProps.map((course) => (
              <CourseCard key={course.slug ?? course.title} {...course} />
            ))}
      </div>
    </section>
  );
}
