import Link from "next/link";
import type { LessonWithStatus } from "@/features/courses/data/lessonPageData";

export interface CourseContentSidebarProps {
  curriculum: LessonWithStatus[];
  totalLessons: number;
  totalDuration: string;
  lessonUrl: (lessonId: string) => string;
}

export function CourseContentSidebar({
  curriculum,
  totalLessons,
  totalDuration,
  lessonUrl,
}: CourseContentSidebarProps) {
  let lastModule = "";

  return (
    <aside className="lg:col-span-1" aria-label="Course content">
      <div className="sticky top-28 flex h-[calc(100vh-12rem)] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-soft dark:border-gray-800 dark:bg-surface">
        <div className="border-b border-border bg-gray-50/50 p-5 dark:border-gray-800 dark:bg-gray-800/50">
          <h2 className="font-display text-xl font-bold text-foreground dark:text-white">
            Course Content
          </h2>
          <p className="mt-1 text-caption text-muted">
            {totalLessons} Lessons • {totalDuration} Total
          </p>
        </div>
        <div className="flex-1 space-y-1 overflow-y-auto p-2">
          {curriculum.map((item) => {
            const showModule = item.moduleTitle !== lastModule;
            if (showModule) lastModule = item.moduleTitle;
            const isLocked = item.isLocked;
            const isCurrent = item.isCurrent;
            const isCompleted = item.isCompleted;
            const inProgress = item.progressStatus === "in_progress" && !isCurrent;
            const href = isLocked ? undefined : lessonUrl(item.id);
            const iconWrapClass = isCompleted
              ? "bg-primary/10 text-primary"
              : isCurrent
                ? "bg-primary text-white"
                : inProgress
                  ? "border border-primary/40 bg-primary/5 text-primary dark:border-primary/50"
                  : isLocked
                    ? "border border-gray-300 text-muted dark:border-gray-600"
                    : "border border-gray-300 text-muted group-hover:text-primary dark:border-gray-600";
            const content = (
              <>
                <div
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${iconWrapClass}`}
                >
                  {isCompleted && (
                    <span className="material-icons-outlined text-sm font-bold" aria-hidden>
                      check
                    </span>
                  )}
                  {isCurrent && (
                    <span
                      className="material-icons-outlined text-sm font-bold animate-pulse"
                      aria-hidden
                    >
                      play_arrow
                    </span>
                  )}
                  {inProgress && (
                    <span className="material-icons-outlined text-sm" aria-hidden>
                      schedule
                    </span>
                  )}
                  {!isCompleted && !isCurrent && !inProgress && !isLocked && (
                    <span className="material-icons-outlined text-sm" aria-hidden>
                      play_arrow
                    </span>
                  )}
                  {isLocked && (
                    <span className="material-icons-outlined text-sm" aria-hidden>
                      lock
                    </span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <h3
                    className={`text-body-md truncate ${
                      isCurrent
                        ? "font-bold text-primary dark:text-primary"
                        : "font-medium text-foreground/90 dark:text-gray-300"
                    } transition-colors group-hover:text-primary`}
                  >
                    {item.title}
                  </h3>
                  <span
                    className={`text-caption ${isCurrent ? "font-medium text-primary/70" : "text-muted"}`}
                  >
                    {item.duration}
                    {isCurrent && " • Now playing"}
                    {inProgress && !isCurrent && " • In progress"}
                  </span>
                </div>
              </>
            );
            const rowClass = `flex w-full items-center gap-3 rounded-xl p-3 text-left transition-colors ${
              isCurrent
                ? "border border-primary/10 bg-sage-light shadow-sm dark:bg-sage-dark"
                : isLocked
                  ? "opacity-60"
                  : "hover:bg-gray-50 dark:hover:bg-gray-800"
            } group`;
            return (
              <div key={item.id} className="mb-0.5">
                {showModule && (
                  <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-muted">
                    {item.moduleTitle}
                  </div>
                )}
                {href ? (
                  <Link href={href} className={rowClass}>
                    {content}
                  </Link>
                ) : (
                  <div className={rowClass} aria-disabled>
                    {content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
