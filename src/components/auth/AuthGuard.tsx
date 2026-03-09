"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { useAppSelector } from "@/stores";

/**
 * Guard for auth routes (/auth/**).
 * If user is already logged in, redirect to /dashboard.
 */
export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <LoadingScreen
        className="min-h-[650px]"
        message="Checking your session"
      />
    );
  }

  

  return <>{children}</>;
}

