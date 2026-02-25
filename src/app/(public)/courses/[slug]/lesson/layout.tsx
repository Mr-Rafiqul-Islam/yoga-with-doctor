import { DashboardGuard } from "@/components/auth";

export default function LessonLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardGuard>
      {children}
    </DashboardGuard>
  );
}