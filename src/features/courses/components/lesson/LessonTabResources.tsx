"use client";

import { useMemo } from "react";
import { useGetCourseResourcesQuery, type CourseResource } from "@/slices/courses";

export interface LessonTabResourcesProps {
  courseId: string | undefined;
  lessonId: string | undefined;
}

function formatSizeKb(sizeKb: number | null): string | null {
  if (sizeKb == null || sizeKb <= 0) return null;
  if (sizeKb >= 1024) return `${(sizeKb / 1024).toFixed(1)} MB`;
  return `${Math.round(sizeKb)} KB`;
}

function resourceIcon(type: CourseResource["type"]): string {
  switch (type) {
    case "PDF":
      return "picture_as_pdf";
    case "LINK":
      return "link";
    case "IMAGE":
      return "image";
    case "AUDIO":
      return "audio_file";
    default:
      return "description";
  }
}

function ResourceRow({ resource }: { resource: CourseResource }) {
  const sizeLabel = formatSizeKb(resource.sizeKb);
  const locked = resource.locked ?? false;
  const canOpen = Boolean(resource.url) && !locked;

  const inner = (
    <>
      <span className="material-icons-outlined shrink-0 text-primary" aria-hidden>
        {resourceIcon(resource.type)}
      </span>
      <div className="min-w-0 flex-1">
        <span className="text-body-md font-medium text-foreground dark:text-gray-200">
          {resource.title}
        </span>
        <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-caption text-muted">
          <span>{resource.type}</span>
          {sizeLabel ? <span>{sizeLabel}</span> : null}
          {locked ? (
            <span className="text-amber-700 dark:text-amber-400">Locked</span>
          ) : null}
        </div>
      </div>
    </>
  );

  if (canOpen) {
    return (
      <li>
        <a
          href={resource.url!}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted/40 dark:border-gray-700 dark:hover:bg-gray-800/50"
        >
          {inner}
          <span className="material-icons-outlined shrink-0 text-lg text-muted" aria-hidden>
            open_in_new
          </span>
        </a>
      </li>
    );
  }

  return (
    <li className="flex items-center gap-3 rounded-lg border border-border p-3 dark:border-gray-700">
      {inner}
    </li>
  );
}

export function LessonTabResources({ courseId, lessonId }: LessonTabResourcesProps) {
  const { data, isLoading, isError } = useGetCourseResourcesQuery(courseId ?? "", {
    skip: !courseId,
  });

  const { forLesson, courseWide } = useMemo(() => {
    const payload = data?.data;
    const lessonResources = payload?.lessonResources ?? [];
    return {
      forLesson: lessonId ? lessonResources.filter((r) => r.lessonId === lessonId) : [],
      courseWide: payload?.resources ?? [],
    };
  }, [data, lessonId]);

  const hasLessonItems = forLesson.length > 0;
  const hasCourseItems = courseWide.length > 0;

  if (!courseId) {
    return (
      <section
        id="resources"
        aria-labelledby="resources-heading"
        className="rounded-2xl border border-border bg-surface p-6 shadow-soft dark:border-gray-800 dark:bg-surface sm:p-8"
      >
        <h2
          id="resources-heading"
          className="mb-4 flex items-center gap-2 font-display text-2xl font-bold text-foreground dark:text-white"
        >
          <span className="material-icons-outlined text-primary" aria-hidden>
            folder
          </span>
          Resources
        </h2>
        <p className="text-muted dark:text-gray-400">
          Resources could not be loaded for this course.
        </p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section
        id="resources"
        aria-labelledby="resources-heading"
        className="rounded-2xl border border-border bg-surface p-6 shadow-soft dark:border-gray-800 dark:bg-surface sm:p-8"
        aria-busy="true"
      >
        <h2
          id="resources-heading"
          className="mb-4 flex items-center gap-2 font-display text-2xl font-bold text-foreground dark:text-white"
        >
          <span className="material-icons-outlined text-primary" aria-hidden>
            folder
          </span>
          Resources
        </h2>
        <ul className="list-none space-y-2 pl-0">
          {[1, 2, 3].map((i) => (
            <li key={i} className="h-16 animate-pulse rounded-lg bg-muted" />
          ))}
        </ul>
      </section>
    );
  }

  if (isError || !data?.success) {
    return (
      <section
        id="resources"
        aria-labelledby="resources-heading"
        className="rounded-2xl border border-border bg-surface p-6 shadow-soft dark:border-gray-800 dark:bg-surface sm:p-8"
      >
        <h2
          id="resources-heading"
          className="mb-4 flex items-center gap-2 font-display text-2xl font-bold text-foreground dark:text-white"
        >
          <span className="material-icons-outlined text-primary" aria-hidden>
            folder
          </span>
          Resources
        </h2>
        <p className="text-muted dark:text-gray-400">
          Something went wrong while loading resources. Try again in a moment.
        </p>
      </section>
    );
  }

  if (!hasLessonItems && !hasCourseItems) {
    return (
      <section
        id="resources"
        aria-labelledby="resources-heading"
        className="rounded-2xl border border-border bg-surface p-6 shadow-soft dark:border-gray-800 dark:bg-surface sm:p-8"
      >
        <h2
          id="resources-heading"
          className="mb-4 flex items-center gap-2 font-display text-2xl font-bold text-foreground dark:text-white"
        >
          <span className="material-icons-outlined text-primary" aria-hidden>
            folder
          </span>
          Resources
        </h2>
        <p className="text-muted dark:text-gray-400">
          No downloadable resources are available for this course yet. Check back later.
        </p>
      </section>
    );
  }

  return (
    <section
      id="resources"
      aria-labelledby="resources-heading"
      className="rounded-2xl border border-border bg-surface p-6 shadow-soft dark:border-gray-800 dark:bg-surface sm:p-8"
    >
      <h2
        id="resources-heading"
        className="mb-6 flex items-center gap-2 font-display text-2xl font-bold text-foreground dark:text-white"
      >
        <span className="material-icons-outlined text-primary" aria-hidden>
          folder
        </span>
        Resources
      </h2>

      {lessonId ? (
        <div className="mb-8">
          <h3 className="mb-3 text-lg font-semibold text-foreground dark:text-white">
            This lesson
          </h3>
          {hasLessonItems ? (
            <ul className="list-none space-y-2 pl-0">
              {forLesson.map((r) => (
                <ResourceRow key={r.id} resource={r} />
              ))}
            </ul>
          ) : (
            <p className="text-body-md text-muted dark:text-gray-400">
              No files are attached to this lesson.
            </p>
          )}
        </div>
      ) : null}

      {hasCourseItems ? (
        <div>
          <h3 className="mb-3 text-lg font-semibold text-foreground dark:text-white">
            Whole course
          </h3>
          <ul className="list-none space-y-2 pl-0">
            {courseWide.map((r) => (
              <ResourceRow key={r.id} resource={r} />
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
