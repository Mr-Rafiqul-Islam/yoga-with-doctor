"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { useAuthSession } from "@/hooks/useAuthSession";

/**
 * Protects /auth/* routes: redirects to /dashboard if user is already logged in.
 * Shows loading screen while session is being restored.
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
