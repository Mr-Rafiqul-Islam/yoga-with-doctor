"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { useAppSelector } from "@/stores";

/**
 * Guard for auth routes (/auth/**).
 * If user is already logged in, redirect to /dashboard.
 */
export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { status } = useSession();
  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);

  const loggedIn = status === "authenticated" || isAuthenticated;

  useEffect(() => {
    if (status !== "loading" && !isLoading && loggedIn) {
      router.replace("/dashboard");
    }
  }, [status, isLoading, loggedIn, router]);

  if (status === "loading" || isLoading) {
    return (
      <LoadingScreen
        className="min-h-[650px]"
        message="Checking your session"
      />
    );
  }

  return <>{children}</>;
}

