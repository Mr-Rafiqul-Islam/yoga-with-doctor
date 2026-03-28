"use client";

import { useEffect } from "react";
import { useLazyGetMyEnrollmentsQuery } from "@/slices/enrollment";

import { DashboardProfileCard } from "./DashboardProfileCard";
import { DashboardStatCard } from "./DashboardStatCard";



export function DashboardTopSection() {
  const [fetchEnrollments, { data, isFetching, isError }] =
    useLazyGetMyEnrollmentsQuery();

  useEffect(() => {
    void fetchEnrollments({ type: "course", page: 1, limit: 1 });
  }, [fetchEnrollments]);

  const courseTotal =
    !isError && data?.success && data.pagination
      ? data.pagination.total
      : null;

  const coursesValue =
    isFetching && courseTotal === null ? "…" : String(courseTotal ?? 0);

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
