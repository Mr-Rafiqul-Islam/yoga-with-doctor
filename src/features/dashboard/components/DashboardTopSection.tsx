"use client";

import { useMemo } from "react";
import { useGetMyEnrollmentsQuery } from "@/slices/enrollment";
import { useGetEntitlementsQuery } from "@/slices/courses";
import { countMergedLibraryCourses } from "@/features/dashboard/lib/myLibraryMerge";
import { DashboardProfileCard } from "./DashboardProfileCard";
import { DashboardStatCard } from "./DashboardStatCard";

/** Large enough for an accurate merged stat for typical libraries; "+" when more pages exist. */
const ENROLLMENT_STAT_PAGE_LIMIT = 500;

export function DashboardTopSection() {
  const {
    data: enrollmentsResponse,
    isLoading: enrollmentsLoading,
    isFetching: enrollmentsFetching,
  } = useGetMyEnrollmentsQuery({
    type: "course",
    page: 1,
    limit: ENROLLMENT_STAT_PAGE_LIMIT,
  });

  const {
    data: entitlementsResponse,
    isLoading: entitlementsLoading,
    isFetching: entitlementsFetching,
  } = useGetEntitlementsQuery();

  const mergedCount = useMemo(
    () =>
      countMergedLibraryCourses(
        enrollmentsResponse?.data ?? [],
        entitlementsResponse?.data ?? [],
      ),
    [enrollmentsResponse?.data, entitlementsResponse?.data],
  );

  const hasMoreEnrollments =
    enrollmentsResponse?.pagination?.hasNextPage ?? false;

  const dataPending =
    enrollmentsLoading ||
    entitlementsLoading ||
    (enrollmentsFetching && enrollmentsResponse === undefined) ||
    (entitlementsFetching && entitlementsResponse === undefined);

  const coursesValue = dataPending
    ? "…"
    : `${mergedCount}${hasMoreEnrollments ? "+" : ""}`;

  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <DashboardProfileCard />

      <div className="grid grid-cols-3 gap-4 lg:col-span-2">
        <DashboardStatCard value={coursesValue} label="Courses" />
        <DashboardStatCard value="N/A" label="Certificates" />
        <DashboardStatCard value="N/A" label="Points" highlight />

        {/* <DashboardPremiumCard /> */}
      </div>
    </section>
  );
}
