"use client";
import type { DashboardStats, DashboardUser } from "@/features/dashboard/data/dashboardData";
// import { DashboardPremiumCard } from "./DashboardPremiumCard";
import { DashboardProfileCard } from "./DashboardProfileCard";
import { DashboardStatCard } from "./DashboardStatCard";
import { useGetMyEnrollmentsQuery } from "@/slices/enrollment";

type DashboardTopSectionProps = {
  user: DashboardUser;
  stats: DashboardStats;
};

export function DashboardTopSection({ user, stats }: DashboardTopSectionProps) {
  const { data: enrollments } = useGetMyEnrollmentsQuery();
  console.log(enrollments);
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <DashboardProfileCard user={user} />

      <div className="grid grid-cols-3 gap-4 lg:col-span-2">
        <DashboardStatCard value={stats.courses} label="Courses" />
        <DashboardStatCard value={stats.certificates} label="Certificates" />
        <DashboardStatCard value={stats.points} label="Points" highlight />

        {/* <DashboardPremiumCard /> */}
      </div>
    </section>
  );
}
