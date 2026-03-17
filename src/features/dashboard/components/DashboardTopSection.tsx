
import type { DashboardStats } from "@/features/dashboard/data/dashboardData";
// import { DashboardPremiumCard } from "./DashboardPremiumCard";
import { DashboardProfileCard } from "./DashboardProfileCard";
import { DashboardStatCard } from "./DashboardStatCard";

type DashboardTopSectionProps = {
  stats: DashboardStats;
};

export function DashboardTopSection({  stats }: DashboardTopSectionProps) {
  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <DashboardProfileCard />

      <div className="grid grid-cols-3 gap-4 lg:col-span-2">
        <DashboardStatCard value={stats.courses} label="Courses" />
        <DashboardStatCard value={stats.certificates} label="Certificates" />
        <DashboardStatCard value={stats.points} label="Points" highlight />

        {/* <DashboardPremiumCard /> */}
      </div>
    </section>
  );
}
