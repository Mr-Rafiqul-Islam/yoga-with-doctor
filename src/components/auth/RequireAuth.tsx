"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { useAuthSession } from "@/hooks/useAuthSession";

/**
 * Protects routes that require login: redirects to /auth/login if user is not authenticated.
 * Use in layout or page for any protected route (e.g. checkout). Middleware should also
 * protect the same path for fast redirect; this guard handles client-side consistency.
 */
export function RequireAuth({ children }: { children: React.ReactNode }) {
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

  if (!mounted || isRestoringSession) {
    return (
      <LoadingScreen
        className="min-h-[60vh]"
        message="Preparing your wellness journey"
      />
    );
  }

  if (!isAuthenticated) return null;

  return <>{children}</>;
}
