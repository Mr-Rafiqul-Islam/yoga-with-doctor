import {
  MyCoursesHeader,
  MyCoursesPageContent,
} from "@/features/dashboard/components/my-courses";

export default function MyCoursesPage() {
  return (
    <div className="space-y-8">
      <MyCoursesHeader />
      <MyCoursesPageContent />
    </div>
  );
}
