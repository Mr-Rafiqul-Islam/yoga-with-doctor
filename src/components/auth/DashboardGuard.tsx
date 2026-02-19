"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { useAuthSession } from "@/hooks/useAuthSession";

/**
 * Protects /dashboard/* routes: redirects to /auth/login if user is not logged in.
 * Shows loading screen while session is being restored.
 */
export function DashboardGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, isRestoringSession } = useAuthSession();

  useEffect(() => {
    if (isRestoringSession) return;
    if (!isAuthenticated) {
      const loginUrl = "/auth/login";
      const returnTo = pathname ? `${loginUrl}?returnTo=${encodeURIComponent(pathname)}` : loginUrl;
      router.replace(returnTo);
    }
  }, [isAuthenticated, isRestoringSession, router, pathname]);

  if (isRestoringSession) {
    return (
      <LoadingScreen
        className="min-h-[calc(100vh-80px)]"
        message="Preparing your wellness journey"
      />
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
