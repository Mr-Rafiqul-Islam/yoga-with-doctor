import type { Metadata } from "next";
import { LessonPageClient } from "@/features/courses/components/lesson/LessonPageClient";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lesson?: string }>;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { lesson } = await searchParams;
  const suffix = lesson ? "Lesson" : "Course Lesson";
  return { title: `${slug} • ${suffix} | Yoga With Doctor` };
}

export default async function LessonPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { lesson: lessonId } = await searchParams;
  return <LessonPageClient slug={slug} lessonId={lessonId ?? undefined} />;
}
