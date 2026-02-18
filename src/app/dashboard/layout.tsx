import DashboardSidebar from "@/components/layout/DashboardSidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-[calc(100vh-80px)]">
      <aside className="flex w-14 shrink-0 flex-col border-l border-sky-200 bg-surface p-2 md:w-64 md:p-5">
        <DashboardSidebar />
      </aside>
      <div className="min-w-0 flex-1 p-5">
        {children}
      </div>
    </section>
  );
}
