import {
  DashboardContinueLearningSection,
  DashboardQuickAccessSection,
  DashboardTopSection,
} from "@/features/dashboard/components";
import {
  DEFAULT_STATS,
  DEFAULT_USER,
  QUICK_ACCESS_ITEMS,
} from "@/features/dashboard/data/dashboardData";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardTopSection user={DEFAULT_USER} stats={DEFAULT_STATS} />
      <DashboardContinueLearningSection />
      <DashboardQuickAccessSection items={QUICK_ACCESS_ITEMS} />
    </div>
  );
}
