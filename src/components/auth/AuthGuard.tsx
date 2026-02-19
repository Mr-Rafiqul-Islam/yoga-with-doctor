"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthSession } from "@/hooks/useAuthSession";

/**
 * Protects /auth/* routes: redirects to /dashboard if user is already logged in.
 * Shows nothing (or a brief loading state) while session is being restored.
 */
export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAuthenticated, isRestoringSession } = useAuthSession();

  useEffect(() => {
    if (isRestoringSession) return;
    if (isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [isAuthenticated, isRestoringSession, router]);

  if (isRestoringSession) {
    return (
      <div className="flex min-h-[650px] items-center justify-center" aria-live="polite">
        <p className="text-muted">Loading...</p>
      </div>
    );
  }

  if (isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
