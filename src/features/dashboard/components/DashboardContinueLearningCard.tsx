"use client";
import Image from "next/image";
import Link from "next/link";
import type { ContinueLearningCourse } from "@/features/dashboard/data/dashboardData";

type DashboardContinueLearningCardProps = {
  course: ContinueLearningCourse;
};

export function DashboardContinueLearningCard({
  course,
}: DashboardContinueLearningCardProps) {
  return (
    <article className="group min-w-[320px] shrink-0 rounded-2xl border border-border bg-surface shadow-elevation-sm transition-shadow hover:shadow-elevation-md">
      <Link href={`/courses/${course.slug}`} className="block">
        <div className="relative aspect-video overflow-hidden rounded-t-2xl">
          <Image
            src={course.bannerImage}
            alt={course.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="320px"
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
          {course.timeLeft ? (
            <div className="absolute bottom-3 right-3 rounded-lg bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
              {course.timeLeft}
            </div>
          ) : (
            <Link
              href={`/courses/${course.slug}`}
              className="absolute bottom-3 right-3 rounded-lg bg-primary px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-primary-dark"
              onClick={(e) => e.stopPropagation()}
            >
              Start
            </Link>
          )}
        </div>
        <div className="p-5">
          <h3 className="mb-2 line-clamp-2 font-display text-lg font-bold text-foreground group-hover:text-primary">
            {course.title}
          </h3>
          <p className="mb-4 text-body-md text-muted">
            {course.instructorName} • {course.category}
          </p>
          {course.progress > 0 ? (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-caption text-muted">
                <span>Progress</span>
                <span className="font-semibold">{course.progress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-full rounded-full bg-primary transition-all"
                  style={{ width: `${course.progress}%` } as React.CSSProperties}
                />
              </div>
            </div>
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
