import { Breadcrumbs, CoursesPageContent } from "@/features/courses/components";
import { dummyCourses } from "@/features/courses/data/dummyCourses";

export default function CoursesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/", icon: "home" },
          { label: "Courses", href: null },
        ]}
      />

      <CoursesPageContent courses={dummyCourses} searchQuery="Yoga" />
    </div>
  );
}
