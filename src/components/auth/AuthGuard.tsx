"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { useAuthSession } from "@/hooks/useAuthSession";

/**
 * Protects /auth/* routes: redirects to /dashboard if user is already logged in.
 * Shows loading screen while session is being restored.
 *
 * Uses a "mounted" guard so the first render is always LoadingScreen on both server
 * and client, avoiding hydration mismatch (server has no auth state like client).
 */
export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAuthenticated, isRestoringSession } = useAuthSession();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || isRestoringSession) return;
    if (isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [mounted, isAuthenticated, isRestoringSession, router]);

  // Always show loading until mounted so server and client first paint match (avoids hydration error).
  if (!mounted || isRestoringSession) {
    return (
      <LoadingScreen
        className="min-h-[650px]"
        message="Preparing your wellness journey"
      />
    );
  }

  if (isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
