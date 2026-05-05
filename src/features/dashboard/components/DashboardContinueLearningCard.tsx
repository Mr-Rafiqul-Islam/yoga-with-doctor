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
    typeof apiPercent === "number" ? apiPercent : course.progress,
  );

  const layoutClass =
    layout === "grid" ? "w-full min-w-0 shrink" : "min-w-[320px] shrink-0";

  return (
    <article
      className={`group flex h-full flex-col rounded-2xl border border-border bg-surface shadow-elevation-sm transition-shadow hover:shadow-elevation-md ${layoutClass}`}
    >
      <Link
        href={course.slug ? `/courses/${course.slug}/lesson?courseId=${course.courseId}` : "/courses"}
        className="flex h-full min-h-0 flex-1 flex-col"
      >
        <div className="relative aspect-video overflow-hidden rounded-t-2xl">
          {course.bannerImage && (
            <Image
              src={course.bannerImage ?? null}
              alt={course.imageAlt}
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes={
                layout === "grid"
                  ? "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  : "320px"
              }
            />
          )}
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
        <div className="flex flex-1 flex-col p-5">
          <h3 className="mb-2 line-clamp-2 min-h-[2lh] font-display text-lg font-bold leading-snug text-foreground group-hover:text-primary">
            {course.title}
          </h3>
          <p className="mb-4 text-body-md text-muted">
            {course.instructorName} • {course.category}
          </p>
          <ProgressBar
            variant="compact"
            value={progressPercent}
            leftLabel={progressPercent > 0 ? "Progress" : "Not Started"}
            rightLabel={`${progressPercent}%`}
            ariaLabel={`${course.title} progress`}
          />
        </div>
      </Link>
    </article>
  );
}
