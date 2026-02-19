"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthSession } from "@/hooks/useAuthSession";

/**
 * Protects /dashboard/* routes: redirects to /auth/login if user is not logged in.
 * Shows nothing (or a brief loading state) while session is being restored.
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
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center" aria-live="polite">
        <p className="text-muted">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
