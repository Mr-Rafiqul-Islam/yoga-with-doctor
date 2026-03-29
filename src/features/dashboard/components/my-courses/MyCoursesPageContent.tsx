"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { ContinueLearningCourse } from "@/features/dashboard/data/dashboardData";
import { useLazyGetMyEnrollmentsQuery } from "@/slices/enrollment";
import type { EnrollmentSummary } from "@/slices/enrollment/api";
import { DashboardContinueLearningCard } from "../DashboardContinueLearningCard";

const PAGE_SIZE = 12;

function mapEnrollmentsToCourses(
  enrollments: EnrollmentSummary[],
): ContinueLearningCourse[] {
  return enrollments
    .filter((enrollment) => enrollment.course)
    .map((enrollment) => {
      const course = enrollment.course!;

      const bannerImage =
        (course as { bannerUrl?: string }).bannerUrl ??
        course.bannerImage ??
        "/images/placeholders/course-banner.jpg";

      const slug = course.slug ?? undefined;

      return {
        title: course.title,
        bannerImage,
        imageAlt: course.title,
        category: "Course",
        instructorName: "Dr. Shah Alam",
        instructorAvatarSrc:
          "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=80",
        price: "Included in your access",
        originalPrice: undefined,
        isEnrolled: true,
        courseId: course.id,
        access: ((course as { access?: string }).access ??
          "PUBLIC") as ContinueLearningCourse["access"],
        href: slug ? `/courses/${slug}` : undefined,
        slug,
        imageBadge: undefined,
        premiumBadge: (course as { access?: string }).access === "PREMIUM",
        rating: undefined,
        level: ((course as { level?: string }).level ??
          "BEGINNER") as ContinueLearningCourse["level"],
        goals: [],
        progress: 0,
        timeLeft: undefined,
        badge: undefined,
      } satisfies ContinueLearningCourse;
    });
}

export function MyCoursesPageContent() {
  const [page, setPage] = useState(1);
  const [courses, setCourses] = useState<ContinueLearningCourse[]>([]);

  const [fetchEnrollments, { data, isFetching, isLoading, isError }] =
    useLazyGetMyEnrollmentsQuery();

  useEffect(() => {
    fetchEnrollments({ type: "course", page, limit: PAGE_SIZE });
  }, [fetchEnrollments, page]);

  useEffect(() => {
    if (!data?.data) return;
    const mapped = mapEnrollmentsToCourses(data.data);
    if (page === 1) {
      setCourses(mapped);
    } else {
      setCourses((prev) => {
        const seen = new Set(prev.map((c) => c.courseId));
        const next = mapped.filter((c) => !seen.has(c.courseId));
        return [...prev, ...next];
      });
    }
  }, [data, page]);

  const pagination = data?.pagination;
  const hasNextPage = pagination?.hasNextPage ?? false;
  const total = pagination?.total;
  const isInitialLoading = (isLoading || isFetching) && page === 1;
  const isLoadingMore = isFetching && page > 1;

  return (
    <div className="space-y-8">
      {typeof total === "number" && total > 0 && (
        <p className="text-body-md text-muted">
          <span className="font-semibold text-foreground">{total}</span>
          {total === 1 ? " course" : " courses"} enrolled
        </p>
      )}

      {isInitialLoading && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-border bg-surface shadow-elevation-sm"
            >
              <div className="aspect-video animate-pulse bg-gray-200 dark:bg-gray-800" />
              <div className="space-y-3 p-5">
                <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
                <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200 dark:bg-gray-800" />
                <div className="h-2 animate-pulse rounded-full bg-gray-200 dark:bg-gray-800" />
              </div>
            </div>
          ))}
        </div>
      )}

      {isError && !isInitialLoading && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900/40 dark:bg-red-950/30">
          <p className="font-semibold text-red-800 dark:text-red-200">
            Something went wrong
          </p>
          <p className="mt-1 text-body-md text-red-700/90 dark:text-red-300/90">
            We couldn&apos;t load your enrollments. Please try again in a
            moment.
          </p>
        </div>
      )}

      {!isInitialLoading && !isError && courses.length === 0 && (
        <div className="rounded-2xl border border-dashed border-border bg-surface/80 px-8 py-14 text-center shadow-elevation-sm">
          <span
            className="material-icons-outlined mb-4 inline-block text-5xl text-muted"
            aria-hidden
          >
            school
          </span>
          <h2 className="font-display text-xl font-bold text-foreground">
            No enrolled courses yet
          </h2>
          <p className="mx-auto mt-2 max-w-md text-body-md text-muted">
            When you join a course, it will show up here so you can continue
            learning anytime.
          </p>
          <Link
            href="/courses"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-body-md font-semibold text-white transition-opacity hover:opacity-90"
          >
            Explore courses
          </Link>
        </div>
      )}

      {!isInitialLoading && !isError && courses.length > 0 && (
        <>
          <ul
            className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
            role="list"
          >
            {courses.map((course) => (
              <li key={course.courseId}>
                <DashboardContinueLearningCard
                  course={course}
                  layout="grid"
                />
              </li>
            ))}
          </ul>

          {hasNextPage && (
            <div className="flex justify-center pt-2">
              <button
                type="button"
                onClick={() => setPage((p) => p + 1)}
                disabled={isLoadingMore}
                className="inline-flex min-w-[200px] items-center justify-center rounded-xl border border-border bg-surface px-6 py-3 text-body-md font-semibold text-foreground shadow-elevation-sm transition-colors hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700"
              >
                {isLoadingMore ? (
                  <>
                    <span
                      className="material-icons-outlined mr-2 animate-spin text-[20px]"
                      aria-hidden
                    >
                      progress_activity
                    </span>
                    Loading…
                  </>
                ) : (
                  "Load more"
                )}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
