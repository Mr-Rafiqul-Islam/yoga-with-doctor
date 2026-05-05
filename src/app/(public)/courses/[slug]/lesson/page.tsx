import type { Metadata } from "next";
import { LessonPageClient } from "@/features/courses/components/lesson/LessonPageClient";
import { dynamicPageMetadata } from "@/lib/publicPageMetadata";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lesson?: string; courseId?: string }>;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { lesson } = await searchParams;
  const label = lesson ? "Lesson" : "Course lesson";
  return dynamicPageMetadata({
    title: `${decodeURIComponent(slug)} — ${label}`,
    description: `Watch this ${label.toLowerCase()} in your course on Yoga With Doctor.`,
    path: `/courses/${slug}/lesson`,
  });
}

export default async function LessonPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { lesson: lessonId, courseId } = await searchParams;
  return <LessonPageClient slug={slug} lessonId={lessonId ?? undefined} courseId={courseId} />;
}
