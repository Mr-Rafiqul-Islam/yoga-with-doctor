"use client";

import { useMergedLibraryCourseCount } from "@/features/dashboard/hooks/useMergedLibraryCourseCount";
import { DashboardProfileCard } from "./DashboardProfileCard";
import { DashboardStatCard } from "./DashboardStatCard";

export function DashboardTopSection() {
  const { coursesDisplay } = useMergedLibraryCourseCount();

  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <DashboardProfileCard />

      <div className="grid grid-cols-3 gap-4 lg:col-span-2">
        <DashboardStatCard value={coursesDisplay} label="Courses" />
        <DashboardStatCard value="N/A" label="Certificates" />
        <DashboardStatCard value="N/A" label="Points" highlight />

        {/* <DashboardPremiumCard /> */}
      </div>
    </section>
  );
}
