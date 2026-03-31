"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { useAppSelector } from "@/stores";

/**
 * Client-side guard for private routes like /dashboard and /checkout.
 * If user is not authenticated, redirects to /auth/login with returnTo param.
 */
export function RequireAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { status } = useSession();
  const { isLoading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (status === "unauthenticated") {
      const returnTo = pathname || "/dashboard";
      router.replace(`/auth/login?returnTo=${encodeURIComponent(returnTo)}`);
    }
  }, [status, pathname, router]);

  if (status === "loading" || isLoading) {
    return (
      <LoadingScreen className="min-h-[calc(100vh-80px)]" message="Preparing your wellness journey" />
    );
  }

  if (status === "unauthenticated") {
    return (
      <LoadingScreen className="min-h-[calc(100vh-80px)]" message="Preparing your wellness journey" />
    );
  }

  return <>{children}</>;
}

