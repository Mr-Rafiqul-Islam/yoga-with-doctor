import { notFound } from "next/navigation";
import { CourseDetailPageClient } from "@/features/courses/components/CourseDetailPageClient";
import type { Metadata } from "next";

/** ISR: refetch from your API at most this often (seconds). */
const COURSE_REVALIDATE_SECONDS = 60;

export const revalidate = COURSE_REVALIDATE_SECONDS;

// Server/PM2 build: set API_BASE_URL or NEXT_PUBLIC_API_BASE_URL so fetches in generateMetadata & generateStaticParams can reach the API.
const baseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.API_BASE_URL ?? "";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!slug) return { title: "Course" };
  try {
    const res = await fetch(`${baseUrl}/api/v1/client/courses/${slug}`, {
      next: { revalidate: COURSE_REVALIDATE_SECONDS },
    });
    const json = await res.json();
    const course = json?.data?.course;
    if (course?.title) {
      const description = course.description
        ? String(course.description)
            .replace(/<[^>]*>/g, " ")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, 160)
        : undefined;
      return {
        title: course.title,
        ...(description && { description }),
      };
    }
  } catch {
    // ignore
  }
  return { title: "Course" };
}

export async function generateStaticParams() {
  try {
    const res = await fetch(`${baseUrl}/api/v1/client/courses/all-types`, {
      next: { revalidate: COURSE_REVALIDATE_SECONDS },
    });
    const json = await res.json();
    const courses = json?.data?.courses;
    return (courses as { slug: string }[]).map((course) => ({
      slug: course.slug,
    }));
  } catch {
    return [];
  }
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (!slug) notFound();

  return <CourseDetailPageClient slug={slug} />;
}
