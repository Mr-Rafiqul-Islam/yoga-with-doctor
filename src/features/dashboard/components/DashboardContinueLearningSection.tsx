import Link from "next/link";
import type { ContinueLearningCourse } from "@/features/dashboard/data/dashboardData";
import { DashboardContinueLearningCard } from "./DashboardContinueLearningCard";

type DashboardContinueLearningSectionProps = {
  courses: ContinueLearningCourse[];
};

export function DashboardContinueLearningSection({
  courses,
}: DashboardContinueLearningSectionProps) {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold text-foreground">
          Continue Learning
        </h2>
        <Link
          href="/dashboard/courses"
          className="text-body-md font-semibold text-primary hover:underline"
        >
          View All
        </Link>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {courses.map((course) => (
          <DashboardContinueLearningCard key={course.slug} course={course} />
        ))}
      </div>
    </section>
  );
}
