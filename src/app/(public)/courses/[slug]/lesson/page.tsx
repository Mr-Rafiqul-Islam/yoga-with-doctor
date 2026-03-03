import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/features/courses/components";
import {
  LessonVideoPlayer,
  LessonOverviewCard,
  DoctorsNotesSection,
  LessonDetailsTabs,
  LessonTabResources,
  LessonTabDiscussion,
  LessonTabCertificate,
  CourseContentSidebar,
} from "@/features/courses/components/lesson";
import { getLessonPageData } from "@/features/courses/data/lessonPageData";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lesson?: string }>;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { lesson } = await searchParams;
  const data = getLessonPageData(slug, lesson ?? undefined);
  if (!data) return { title: "Lesson" };
  const title = data.currentLesson
    ? `${data.course.title}: ${data.currentLesson.title}`
    : data.course.title;
  return { title: `${title} | Yoga With Doctor` };
}

export default async function LessonPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { lesson: lessonId } = await searchParams;
  const data = getLessonPageData(slug, lessonId ?? undefined);
  if (!data) notFound();

  const {
    course,
    currentLesson,
    progressPercent,
    curriculum,
    totalLessons,
    totalDuration,
    doctorNotes,
  } = data;
  const lessonUrl = (id: string) => `/courses/${slug}/lesson?lesson=${id}`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/", icon: "home" },
          { label: "Courses", href: "/courses" },
          { label: course.title, href: `/courses/${slug}` },
          ...(currentLesson ? [{ label: currentLesson.title, href: null }] : []),
        ]}
      />

      <main className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <LessonVideoPlayer
            thumbnailUrl={course.thumbnailUrl}
            muxPlaybackId={course.muxPlaybackId}
            duration={currentLesson?.duration ?? "15:00"}
            initialCurrentTime="04:20"
          />

          <LessonOverviewCard
            course={course}
            currentLesson={currentLesson}
            progressPercent={progressPercent}
            curriculum={curriculum}
            lessonUrl={lessonUrl}
          />

          <LessonDetailsTabs
            overviewContent={<DoctorsNotesSection doctorNotes={doctorNotes} />}
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
