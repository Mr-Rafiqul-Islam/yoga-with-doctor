import type { Metadata } from "next";
import { publicPageMetadata } from "@/lib/publicPageMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return publicPageMetadata({
    title: "Courses",
    description:
      "Browse doctor-led yoga courses for recovery, flexibility, and strength. Filter by level and goal — from beginner to advanced.",
    path: "/courses",
  });
}

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
