import { dummyCourses } from "@/features/courses/data/dummyCourses";
import {
  DashboardContinueLearningSection,
  DashboardQuickAccessSection,
  DashboardTopSection,
} from "@/features/dashboard/components";
import type { ContinueLearningCourse } from "@/features/dashboard/data/dashboardData";
import {
  DEFAULT_STATS,
  DEFAULT_USER,
  QUICK_ACCESS_ITEMS,
} from "@/features/dashboard/data/dashboardData";

function getContinueLearningCourses(): ContinueLearningCourse[] {
  return [
    {
      ...dummyCourses[0],
      progress: 65,
      timeLeft: "25m left",
      badge: "Popular",
    },
    {
      ...dummyCourses[2],
      progress: 32,
      timeLeft: "10m left",
      badge: undefined,
    },
    {
      ...dummyCourses[1],
      progress: 0,
      timeLeft: undefined,
      badge: "New",
    },
  ];
}

export default function DashboardPage() {
  const continueLearningCourses = getContinueLearningCourses();

  return (
    <div className="space-y-8">
      <DashboardTopSection user={DEFAULT_USER} stats={DEFAULT_STATS} />
      <DashboardContinueLearningSection courses={continueLearningCourses} />
      <DashboardQuickAccessSection items={QUICK_ACCESS_ITEMS} />
    </div>
  );
}
