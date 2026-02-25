import Image from "next/image";
import Link from "next/link";
import type { CourseDetailData } from "@/features/courses/data/courseDetailData";
import type { LessonWithStatus } from "@/features/courses/data/lessonPageData";

export interface LessonOverviewCardProps {
  course: CourseDetailData;
  currentLesson: {
    id: string;
    title: string;
    duration: string;
    moduleLabel: string;
    moduleIndex: number;
    lessonIndex: number;
  } | null;
  progressPercent: number;
  curriculum: LessonWithStatus[];
  /** Builds lesson URL for a given lesson id */
  lessonUrl: (lessonId: string) => string;
}

export function LessonOverviewCard({
  course,
  currentLesson,
  progressPercent,
  curriculum,
  lessonUrl,
}: LessonOverviewCardProps) {
  const nextLessonId = currentLesson
    ? curriculum.find((l) => !l.isLocked && !l.isCurrent)?.id ?? currentLesson.id
    : undefined;
  const continueHref = nextLessonId ? lessonUrl(nextLessonId) : "#";

  return (
    <section
      aria-labelledby="lesson-heading"
      className="rounded-2xl border border-border bg-surface shadow-soft dark:border-gray-800 dark:bg-surface"
    >
      <div className="p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            {currentLesson && (
              <span
                id="lesson-badge"
                className="mb-2 inline-block rounded bg-sage-light px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-primary dark:bg-sage-dark dark:text-primary-on-dark"
              >
                Module {currentLesson.moduleIndex} - Lesson {currentLesson.lessonIndex}
              </span>
            )}
            <h1
              id="lesson-heading"
              className="font-display text-2xl font-bold leading-tight text-foreground dark:text-white sm:text-3xl"
            >
              {currentLesson
                ? `${course.title.replace(/ for Beginners$/, "")}: ${currentLesson.title}`
                : course.title}
            </h1>
            <div className="mt-2 flex items-center gap-2">
              <Image
                src={course.instructorAvatarUrl}
                alt=""
                width={24}
                height={24}
                className="rounded-full border border-border dark:border-gray-600"
              />
              <p className="text-body-md text-muted">
                with{" "}
                <span className="font-medium text-foreground dark:text-gray-200">
                  {course.instructorName}
                </span>
              </p>
            </div>
          </div>
          <Link
            href={continueHref}
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto"
          >
            Continue Lesson
            <span className="material-icons-outlined text-lg" aria-hidden>
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-body-md font-medium">
            <span className="text-foreground dark:text-gray-300">Your Progress</span>
            <span className="text-primary">{progressPercent}% Completed</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
              role="progressbar"
              aria-valuenow={progressPercent}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Course progress"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
