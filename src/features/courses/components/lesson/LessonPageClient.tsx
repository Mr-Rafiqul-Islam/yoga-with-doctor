"use client";

import { useMemo, useState, useCallback } from "react";
import { notFound, useRouter } from "next/navigation";
import { Breadcrumbs } from "@/features/courses/components";
import {
  CourseContentSidebar,
  DoctorsNotesSection,
  LessonDetailsTabs,
  LessonOverviewCard,
  LessonTabCertificate,
  LessonTabDiscussion,
  LessonTabResources,
  LessonVideoPlayer,
} from "@/features/courses/components/lesson";
import type { LessonProgressUiStatus } from "@/features/courses/data/lessonPageData";
import {
  useGetCourseContentQuery,
  useGetCourseProgressQuery,
  useUpdateLessonProgressMutation,
  type Course,
  type CourseProgressLessonRow,
} from "@/slices/courses";
import { mapCourseToCourseDetailData } from "@/lib/mapCourseToDetail";
import { useAddEnrollmentByItemIdMutation } from "@/slices/enrollment";

function mmssFromDurationMin(durationMin: number | null | undefined): string {
  const mins = typeof durationMin === "number" && durationMin > 0 ? durationMin : 0;
  return `${String(mins).padStart(2, "0")}:00`;
}

function totalDurationLabelFromMinutes(totalMin: number): string {
  if (totalMin <= 0) return "—";
  return totalMin >= 60
    ? `${Math.floor(totalMin / 60)}h ${totalMin % 60}m`
    : `${totalMin}m`;
}

function buildLessonProgressMap(
  sections: { lessons: CourseProgressLessonRow[] }[] | undefined
): Map<string, CourseProgressLessonRow> {
  const m = new Map<string, CourseProgressLessonRow>();
  if (!sections) return m;
  for (const sec of sections) {
    for (const les of sec.lessons) {
      m.set(les.id, les);
    }
  }
  return m;
}

function deriveProgressStatus(row: CourseProgressLessonRow | undefined): LessonProgressUiStatus {
  if (!row) return "not_started";
  if (row.status === "COMPLETED") return "completed";
  if (
    row.watchedSec > 0 ||
    row.status === "IN_PROGRESS" ||
    (row.progressPercent ?? 0) > 0
  ) {
    return "in_progress";
  }
  return "not_started";
}

export interface LessonPageClientProps {
  slug: string;
  lessonId?: string;
}

export function LessonPageClient({ slug, lessonId }: LessonPageClientProps) {
  const router = useRouter();
  const [hasAutoEnrolled, setHasAutoEnrolled] = useState(false);
  const [addEnrollmentByItemId] = useAddEnrollmentByItemIdMutation();
  const [updateLessonProgress] = useUpdateLessonProgressMutation();

  const { data, isLoading, isFetching, isError } = useGetCourseContentQuery(slug, {
    skip: !slug,
  });

  const { data: progressRes, isError: progressQueryError } = useGetCourseProgressQuery(slug, {
    skip: !slug,
  });

  const progressPayload = progressRes?.data;
  const lessonProgressById = useMemo(
    () => buildLessonProgressMap(progressPayload?.sections),
    [progressPayload?.sections]
  );

  const hasProgress = Boolean(progressPayload) && !progressQueryError;

  const resolved = useMemo(() => {
    const apiCourse = data?.data?.course;
    if (!apiCourse) return null;

    const courseForDetail: Course = {
      id: apiCourse.id,
      slug: apiCourse.slug,
      title: apiCourse.title,
      description: apiCourse.description ?? null,
      bannerImageId: apiCourse.bannerImageId ?? null,
      bannerUrl: apiCourse.bannerUrl ?? null,
      bannerImage: apiCourse.bannerImage ?? null,
      level: apiCourse.level ?? null,
      access: apiCourse.access,
      isPremium: apiCourse.isPremium,
      instructorName: apiCourse.instructorName ?? null,
      sections: apiCourse.sections,
      resources: apiCourse.resources,
      createdAt: "",
      updatedAt: "",
    };

    const detailData = mapCourseToCourseDetailData(courseForDetail);

    const sections = apiCourse.sections ?? [];
    const flat = sections.flatMap((section) =>
      (section.lessons ?? []).map((lesson) => ({
        lesson,
        moduleTitle: section.title,
        moduleId: section.id,
      }))
    );

    const lessonExists = lessonId ? flat.some((x) => x.lesson.id === lessonId) : false;
    const firstUnlockedId =
      flat.find((x) => !(x.lesson.locked ?? false))?.lesson.id ?? flat[0]?.lesson.id ?? null;

    const currentId = (lessonExists ? lessonId : firstUnlockedId) ?? null;
    const currentIdx = currentId ? flat.findIndex((x) => x.lesson.id === currentId) : -1;
    const current = currentIdx >= 0 ? flat[currentIdx] : null;

    const totalLessons = flat.length;
    const totalMinutes = flat.reduce((sum, x) => sum + (x.lesson.durationMin ?? 0), 0);

    const progressPercent =
      hasProgress && progressPayload?.progress
        ? Math.round(progressPayload.progress.progressPercent)
        : totalLessons > 0 && currentIdx >= 0
          ? Math.round((currentIdx / totalLessons) * 100)
          : 0;

    const curriculum = flat.map((x) => {
      const row = lessonProgressById.get(x.lesson.id);
      const isLocked = row?.isLocked ?? x.lesson.locked ?? false;
      const isCompleted = hasProgress ? row?.status === "COMPLETED" : false;
      const progressStatus: LessonProgressUiStatus = hasProgress
        ? deriveProgressStatus(row)
        : "not_started";
      return {
        id: x.lesson.id,
        title: x.lesson.title,
        duration: x.lesson.durationMin ? `${x.lesson.durationMin} min` : "—",
        moduleTitle: x.moduleTitle,
        isCompleted,
        isCurrent: currentId != null && x.lesson.id === currentId,
        isLocked,
        lessonProgressPercent: row?.progressPercent,
        progressStatus,
      };
    });

    let moduleIndex = 0;
    let lessonIndex = 0;
    if (currentId) {
      for (let i = 0; i < sections.length; i++) {
        const idx = (sections[i].lessons ?? []).findIndex((l) => l.id === currentId);
        if (idx >= 0) {
          moduleIndex = i + 1;
          lessonIndex = idx + 1;
          break;
        }
      }
    }

    const currentLesson = current
      ? {
          id: current.lesson.id,
          title: current.lesson.title,
          duration: mmssFromDurationMin(current.lesson.durationMin),
          moduleLabel: current.moduleTitle,
          moduleIndex,
          lessonIndex,
        }
      : null;

    const currentRow = current ? lessonProgressById.get(current.lesson.id) : undefined;
    const currentLessonLocked = currentRow?.isLocked ?? current?.lesson.locked ?? false;

    const currentVideo = current?.lesson?.video ?? null;
    const currentMuxPlaybackId = currentVideo?.muxPlaybackId ?? undefined;
    const currentVideoId = currentVideo?.id ?? undefined;
    const currentVideoStatus = currentVideo?.status ?? undefined;

    const apiNext = hasProgress ? progressPayload?.progress?.nextLessonId : undefined;

    const currentCurriculumIdx = currentLesson
      ? curriculum.findIndex((l) => l.id === currentLesson.id)
      : -1;

    const sequentialNextId = currentLesson
      ? (() => {
          if (currentCurriculumIdx < 0) return currentLesson.id;
          for (let i = currentCurriculumIdx + 1; i < curriculum.length; i++) {
            if (!curriculum[i].isLocked) return curriculum[i].id;
          }
          return currentLesson.id;
        })()
      : undefined;

    const apiNextIdx =
      apiNext != null ? curriculum.findIndex((l) => l.id === apiNext) : -1;
    const apiNextRow = apiNextIdx >= 0 ? curriculum[apiNextIdx] : undefined;
    const apiNextInCourse = Boolean(apiNext && flat.some((x) => x.lesson.id === apiNext));
    const apiNextIsForward =
      currentCurriculumIdx < 0 ||
      (apiNextIdx >= 0 && apiNextIdx > currentCurriculumIdx);

    const continueLessonId =
      apiNext &&
      apiNextInCourse &&
      apiNextRow &&
      !apiNextRow.isLocked &&
      apiNextIsForward
        ? apiNext
        : sequentialNextId;

    return {
      detailData,
      curriculum,
      currentLesson,
      currentMuxPlaybackId,
      currentVideoId,
      currentVideoStatus,
      progressPercent,
      totalLessons,
      totalDuration: totalDurationLabelFromMinutes(totalMinutes),
      currentLessonLocked,
      continueLessonId,
    };
  }, [
    data,
    lessonId,
    hasProgress,
    progressPayload,
    lessonProgressById,
  ]);

  const lessonUrl = (id: string) => `/courses/${slug}/lesson?lesson=${id}`;

  const handleFirstPlay = useCallback(() => {
    if (!resolved || hasAutoEnrolled) return;

    const { detailData } = resolved;

    if (detailData.courseId) {
      setHasAutoEnrolled(true);
      addEnrollmentByItemId({ itemId: detailData.courseId }).catch(() => {
        // Best-effort: ignore errors here, the user can still manually enroll.
      });
    }
  }, [resolved, hasAutoEnrolled, addEnrollmentByItemId]);

  const onLessonProgressStart = useCallback(
    (lessonIdForProgress: string) => {
      updateLessonProgress({
        slug,
        body: { lessonId: lessonIdForProgress, event: "START" },
      }).catch(() => {});
    },
    [slug, updateLessonProgress]
  );

  const onLessonWatchDelta = useCallback(
    (lessonIdForProgress: string, watchedSecDelta: number) => {
      if (watchedSecDelta <= 0) return;
      updateLessonProgress({
        slug,
        body: {
          lessonId: lessonIdForProgress,
          event: "WATCH",
          watchedSecDelta: Math.round(watchedSecDelta * 1000) / 1000,
        },
      }).catch(() => {});
    },
    [slug, updateLessonProgress]
  );

  if (!slug) notFound();

  if (isLoading || isFetching) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 h-5 w-48 animate-pulse rounded bg-muted" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div className="aspect-video animate-pulse rounded-2xl bg-muted" />
            <div className="h-40 animate-pulse rounded-2xl bg-muted" />
            <div className="h-64 animate-pulse rounded-2xl bg-muted" />
          </div>
          <div className="h-[520px] animate-pulse rounded-2xl bg-muted" />
        </div>
      </div>
    );
  }

  if (isError || !resolved) {
    router.replace(`/courses/${slug}`);
    return null;
  }

  const {
    detailData,
    curriculum,
    currentLesson,
    currentMuxPlaybackId,
    currentVideoId,
    currentVideoStatus,
    progressPercent,
    totalLessons,
    totalDuration,
    currentLessonLocked,
    continueLessonId,
  } = resolved;

  const progressReportingEnabled = Boolean(
    currentLesson && !currentLessonLocked && slug
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/", icon: "home" },
          { label: "Courses", href: "/courses" },
          { label: detailData.title, href: `/courses/${slug}` },
          ...(currentLesson ? [{ label: currentLesson.title, href: null }] : []),
        ]}
      />

      <main className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <LessonVideoPlayer
            thumbnailUrl={detailData.thumbnailUrl}
            muxPlaybackId={currentMuxPlaybackId}
            duration={currentLesson?.duration ?? "00:00"}
            videoId={currentVideoId}
            videoStatus={currentVideoStatus}
            onFirstPlay={handleFirstPlay}
            lessonId={currentLesson?.id}
            progressEnabled={progressReportingEnabled}
            onLessonProgressStart={onLessonProgressStart}
            onLessonWatchDelta={onLessonWatchDelta}
          />

          <LessonOverviewCard
            course={detailData}
            currentLesson={currentLesson}
            progressPercent={progressPercent}
            curriculum={curriculum}
            lessonUrl={lessonUrl}
            preferredNextLessonId={continueLessonId}
          />

          <LessonDetailsTabs
            overviewContent={<DoctorsNotesSection doctorNotes={null} />}
            resourcesContent={<LessonTabResources />}
            discussionContent={<LessonTabDiscussion />}
            certificateContent={<LessonTabCertificate />}
          />
        </div>

        <CourseContentSidebar
          curriculum={curriculum}
          totalLessons={totalLessons}
          totalDuration={totalDuration}
          lessonUrl={lessonUrl}
        />
      </main>
    </div>
  );
}
