import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/features/courses/components";
import { CourseDetailContent } from "@/features/courses/components/CourseDetailContent";
import { getCourseDetailBySlug } from "@/features/courses/data/courseDetailData";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ enrolled?: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseDetailBySlug(slug);
  if (!course) return { title: "Course" };
  return {
    title: course.title,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { enrolled } = await searchParams;
  const course = getCourseDetailBySlug(slug);
  if (!course) notFound();

  const isEnrolled = enrolled === "1";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/", icon: "home" },
          { label: "Courses", href: "/courses" },
          { label: course.title, href: null },
        ]}
      />
      <CourseDetailContent course={course} isEnrolled={isEnrolled} />
    </div>
  );
}
