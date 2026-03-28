import {
  DashboardContinueLearningSection,
  DashboardQuickAccessSection,
  DashboardTopSection,
} from "@/features/dashboard/components";
import {
  QUICK_ACCESS_ITEMS,
} from "@/features/dashboard/data/dashboardData";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardTopSection />
      <DashboardContinueLearningSection />
      <DashboardQuickAccessSection items={QUICK_ACCESS_ITEMS} />
    </div>
  );
}
