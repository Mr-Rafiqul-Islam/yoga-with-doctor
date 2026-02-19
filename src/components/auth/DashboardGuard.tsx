"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { useAuthSession } from "@/hooks/useAuthSession";

/**
 * Protects /dashboard/* routes: redirects to /auth/login if user is not logged in.
 * Shows loading screen while session is being restored.
 *
 * Uses a "mounted" guard so the first render is always LoadingScreen on both server
 * and client, avoiding hydration mismatch (server has no auth state like client).
 */
export function DashboardGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, isRestoringSession } = useAuthSession();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || isRestoringSession) return;
    if (!isAuthenticated) {
      const loginUrl = "/auth/login";
      const returnTo = pathname ? `${loginUrl}?returnTo=${encodeURIComponent(pathname)}` : loginUrl;
      router.replace(returnTo);
    }
  }, [mounted, isAuthenticated, isRestoringSession, router, pathname]);

  // Always show loading until mounted so server and client first paint match (avoids hydration error).
  if (!mounted || isRestoringSession) {
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
