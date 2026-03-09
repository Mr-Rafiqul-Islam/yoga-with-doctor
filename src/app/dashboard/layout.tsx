import DashboardSidebar from "@/components/layout/DashboardSidebar";
import { RequireAuth } from "@/components/auth";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RequireAuth>
      <section className="relative min-h-[calc(100vh-80px)]">
        <aside className="fixed left-0 top-[80px] z-30 flex h-[calc(100vh-80px)] w-14 shrink-0 flex-col border-l border-sky-200 dark:border-gray-700 bg-surface p-2 md:w-64 md:p-5">
          <DashboardSidebar />
        </aside>
        <div className="min-w-0 p-5 pl-[76px] md:pl-[276px]">
          {children}
        </div>
      </section>
    </RequireAuth>
  );
}
