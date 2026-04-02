"use client";
import Image from "next/image";
import Link from "next/link";
import { ProgressBar } from "@/components/ui/ProgressBar";
import type { ContinueLearningCourse } from "@/features/dashboard/data/dashboardData";
import { useGetCourseProgressQuery } from "@/slices/courses";

type DashboardContinueLearningCardProps = {
  course: ContinueLearningCourse;
  /** Use `grid` inside responsive grids; default matches horizontal carousels. */
  layout?: "carousel" | "grid";
};

export function DashboardContinueLearningCard({
  course,
  layout = "carousel",
}: DashboardContinueLearningCardProps) {
  const slug = course.slug ?? "";
  const { data: progressResponse } = useGetCourseProgressQuery(slug, {
    skip: !slug,
  });

  const apiPercent = progressResponse?.data?.progress?.progressPercent;
  const progressPercent = Math.round(
    typeof apiPercent === "number" ? apiPercent : course.progress
  );

  const layoutClass =
    layout === "grid"
      ? "w-full min-w-0 shrink"
      : "min-w-[320px] shrink-0";

  return (
    <article
      className={`group rounded-2xl border border-border bg-surface shadow-elevation-sm transition-shadow hover:shadow-elevation-md ${layoutClass}`}
    >
      <Link
        href={
          course.slug ? `/courses/${course.slug}/lesson` : "/courses"
        }
        className="block"
      >
        <div className="relative aspect-video overflow-hidden rounded-t-2xl">
          <Image
            src={course.bannerImage}
            alt={course.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={
              layout === "grid"
                ? "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                : "320px"
            }
          />
          {course.badge && (
            <span
              className={`absolute left-3 top-3 flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold ${
                course.badge === "Popular"
                  ? "bg-gray-100 text-orange-600 dark:bg-gray-800 dark:text-orange-400"
                  : "bg-gray-100 text-blue-600 dark:bg-gray-800 dark:text-blue-400"
              }`}
            >
              {course.badge === "Popular" && (
                <span className="material-icons-outlined text-[10px]">
                  local_fire_department
                </span>
              )}
              {course.badge === "New" && (
                <span className="material-icons-outlined text-[10px]">
                  fiber_new
                </span>
              )}
              {course.badge}
            </span>
          )}
          
        </div>
        <div className="p-5">
          <h3 className="mb-2 line-clamp-2 font-display text-lg font-bold text-foreground group-hover:text-primary">
            {course.title}
          </h3>
          <p className="mb-4 text-body-md text-muted">
            {course.instructorName} • {course.category}
          </p>
          {progressPercent > 0 ? (
            <ProgressBar
              variant="compact"
              value={progressPercent}
              leftLabel="Progress"
              rightLabel={`${progressPercent}%`}
              ariaLabel={`${course.title} progress`}
            />
          ) : (
            <div className="flex items-center justify-between text-caption text-muted">
              <span>Not Started</span>
              <span className="font-semibold">0%</span>
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
