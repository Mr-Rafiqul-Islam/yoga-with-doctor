import { RequireAuth } from "@/components/auth";
import { DashboardLayoutGate } from "@/features/dashboard/components/DashboardLayoutGate";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RequireAuth>
      <DashboardLayoutGate>{children}</DashboardLayoutGate>
    </RequireAuth>
  );
}
