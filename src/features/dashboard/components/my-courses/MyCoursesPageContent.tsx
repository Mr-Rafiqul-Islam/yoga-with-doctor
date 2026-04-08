"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { ContinueLearningCourse } from "@/features/dashboard/data/dashboardData";
import { useLazyGetMyEnrollmentsQuery } from "@/slices/enrollment";
import { useGetEntitlementsQuery } from "@/slices/courses";
import {
  mapEnrollmentsToCourses,
  mapEntitlementsToCourses,
  mergeEnrollmentAndEntitlements,
} from "@/features/dashboard/lib/myLibraryMerge";
import { DashboardContinueLearningCard } from "../DashboardContinueLearningCard";

const PAGE_SIZE = 12;

export function MyCoursesPageContent() {
  const [page, setPage] = useState(1);
  const [enrollmentCourses, setEnrollmentCourses] = useState<
    ContinueLearningCourse[]
  >([]);

  const {
    data: entitlementsResponse,
    isLoading: entitlementsLoading,
    isError: entitlementsError,
  } = useGetEntitlementsQuery();

  const [fetchEnrollments, { data, isFetching, isLoading, isError }] =
    useLazyGetMyEnrollmentsQuery();

  useEffect(() => {
    fetchEnrollments({ type: "course", page, limit: PAGE_SIZE });
  }, [fetchEnrollments, page]);

  useEffect(() => {
    if (!data?.data) return;
    const mapped = mapEnrollmentsToCourses(data.data);
    if (page === 1) {
      setEnrollmentCourses(mapped);
    } else {
      setEnrollmentCourses((prev) => {
        const seen = new Set(prev.map((c) => c.courseId));
        const next = mapped.filter((c) => !seen.has(c.courseId));
        return [...prev, ...next];
      });
    }
  }, [data, page]);

  const entitlementCourses = useMemo(
    () => mapEntitlementsToCourses(entitlementsResponse?.data ?? []),
    [entitlementsResponse?.data],
  );

  const mergedCourses = useMemo(
    () =>
      mergeEnrollmentAndEntitlements(enrollmentCourses, entitlementCourses),
    [enrollmentCourses, entitlementCourses],
  );

  const pagination = data?.pagination;
  const hasNextPage = pagination?.hasNextPage ?? false;

  const enrollmentsFirstPageBusy =
    page === 1 && (isLoading || isFetching);
  const isInitialLoading =
    enrollmentsFirstPageBusy || entitlementsLoading;

  const isLoadingMore = isFetching && page > 1;

  const loadFailedPartial =
    !isInitialLoading &&
    mergedCourses.length > 0 &&
    (isError || entitlementsError);

  const bothLoadFailed =
    !isInitialLoading &&
    mergedCourses.length === 0 &&
    isError &&
    entitlementsError;

  const enrollmentFailedOnly =
    !isInitialLoading &&
    mergedCourses.length === 0 &&
    isError &&
    !entitlementsError;

  const entitlementsFailedOnly =
    !isInitialLoading &&
    mergedCourses.length === 0 &&
    entitlementsError &&
    !isError;

  const showEmptyLibrary =
    !isInitialLoading &&
    mergedCourses.length === 0 &&
    !bothLoadFailed &&
    !enrollmentFailedOnly &&
    !entitlementsFailedOnly;

  return (
    <div className="space-y-8">
      {mergedCourses.length > 0 && (
        <p className="text-body-md text-muted">
          <span className="font-semibold text-foreground">
            {mergedCourses.length}
          </span>
          {mergedCourses.length === 1 ? " course" : " courses"} in your library
        </p>
      )}

      {loadFailedPartial && (
        <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-body-md text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/40 dark:text-amber-100">
          Some data could not be refreshed. What you see below may be
          incomplete.
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

      {bothLoadFailed && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900/40 dark:bg-red-950/30">
          <p className="font-semibold text-red-800 dark:text-red-200">
            Something went wrong
          </p>
          <p className="mt-1 text-body-md text-red-700/90 dark:text-red-300/90">
            We couldn&apos;t load your courses or purchase access. Please try
            again in a moment.
          </p>
        </div>
      )}

      {enrollmentFailedOnly && (
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

      {entitlementsFailedOnly && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900/40 dark:bg-red-950/30">
          <p className="font-semibold text-red-800 dark:text-red-200">
            Something went wrong
          </p>
          <p className="mt-1 text-body-md text-red-700/90 dark:text-red-300/90">
            We couldn&apos;t load your purchase access. Enrolled courses may be
            missing from this list.
          </p>
        </div>
      )}

      {showEmptyLibrary && (
        <div className="rounded-2xl border border-dashed border-border bg-surface/80 px-8 py-14 text-center shadow-elevation-sm">
          <span
            className="material-icons-outlined mb-4 inline-block text-5xl text-muted"
            aria-hidden
          >
            school
          </span>
          <h2 className="font-display text-xl font-bold text-foreground">
            No courses in your library yet
          </h2>
          <p className="mx-auto mt-2 max-w-md text-body-md text-muted">
            When you enroll in or purchase a course, it will show up here so you
            can continue learning anytime.
          </p>
          <Link
            href="/courses"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-body-md font-semibold text-white transition-opacity hover:opacity-90"
          >
            Explore courses
          </Link>
        </div>
      )}

      {!isInitialLoading && mergedCourses.length > 0 && (
        <>
          <ul
            className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
            role="list"
          >
            {mergedCourses.map((course) => (
              <li key={course.courseId} className="h-full min-h-0">
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
