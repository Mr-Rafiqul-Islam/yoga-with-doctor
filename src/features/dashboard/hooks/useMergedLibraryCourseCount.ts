"use client";

import { useEffect, useMemo, useState } from "react";
import type { ContinueLearningCourse } from "@/features/dashboard/data/dashboardData";
import {
  mapEnrollmentsToCourses,
  mapEntitlementsToCourses,
  mergeEnrollmentAndEntitlements,
} from "@/features/dashboard/lib/myLibraryMerge";
import { useLazyGetMyEnrollmentsQuery } from "@/slices/enrollment";
import { useGetEntitlementsQuery } from "@/slices/courses";

/** Same `PAGE_SIZE` as `MyCoursesPageContent` for identical enrollment + merge behavior. */
const PAGE_SIZE = 12;

/**
 * Lazy-paginated enrollments merged with entitlements (same rules as my-courses).
 * Use for dashboard stats that must match the library grid count.
 */
export function useMergedLibraryCourseCount() {
  const [page, setPage] = useState(1);
  const [enrollmentCourses, setEnrollmentCourses] = useState<
    ContinueLearningCourse[]
  >([]);
  const [enrollmentLoadDone, setEnrollmentLoadDone] = useState(false);

  const {
    data: entitlementsResponse,
    isLoading: entitlementsLoading,
    isFetching: entitlementsFetching,
  } = useGetEntitlementsQuery();

  const [fetchEnrollments, { data, isFetching, isError }] =
    useLazyGetMyEnrollmentsQuery();

  useEffect(() => {
    void fetchEnrollments({ type: "course", page, limit: PAGE_SIZE });
  }, [fetchEnrollments, page]);

  useEffect(() => {
    if (isError) {
      setEnrollmentLoadDone(true);
      return;
    }
    if (!data?.data) return;
    if (isFetching) return;

    const responsePage = data.pagination?.page;
    if (typeof responsePage === "number" && responsePage !== page) {
      return;
    }

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

    if (!data.pagination?.hasNextPage) {
      setEnrollmentLoadDone(true);
    } else {
      setPage((p) => p + 1);
    }
  }, [data, page, isFetching, isError]);

  const entitlementCourses = useMemo(
    () => mapEntitlementsToCourses(entitlementsResponse?.data ?? []),
    [entitlementsResponse?.data],
  );

  const mergedCourses = useMemo(
    () =>
      mergeEnrollmentAndEntitlements(enrollmentCourses, entitlementCourses),
    [enrollmentCourses, entitlementCourses],
  );

  const mergedCount = mergedCourses.length;

  const dataPending =
    !enrollmentLoadDone ||
    entitlementsLoading ||
    (entitlementsFetching && entitlementsResponse === undefined);

  const coursesDisplay = dataPending ? "…" : String(mergedCount);

  return { mergedCount, coursesDisplay, dataPending };
}
