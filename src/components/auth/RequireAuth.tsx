"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { useAppSelector } from "@/stores";
import { useGetCurrentUserQuery } from "@/slices/auth";

/**
 * Client-side guard for private routes like /dashboard and /checkout.
 * If user is not authenticated, redirects to /auth/login with returnTo param.
 */
export function RequireAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { status } = useSession();
  const { isLoading, user } = useAppSelector((state) => state.auth);

  const isCheckoutRoute = Boolean(pathname && pathname.startsWith("/checkout"));
  const shouldFetchIdentity = !user && status !== "loading";
  const { data: meData, isFetching: isFetchingMe } = useGetCurrentUserQuery(
    undefined,
    { skip: !shouldFetchIdentity },
  );
  const meUserMode = meData?.data?.userMode;
  const allowGuestCheckout = isCheckoutRoute && meUserMode === "GUEST";

  useEffect(() => {
    if (status === "unauthenticated" && !allowGuestCheckout) {
      const returnTo = pathname || "/dashboard";
      router.replace(`/auth/login?returnTo=${encodeURIComponent(returnTo)}`);
    }
  }, [status, pathname, router, allowGuestCheckout]);

  if (status === "loading" || isLoading || (shouldFetchIdentity && isFetchingMe)) {
    return (
      <LoadingScreen className="min-h-[calc(100vh-80px)]" message="Preparing your wellness journey" />
    );
  }

  if (status === "unauthenticated" && !allowGuestCheckout) {
    return (
      <LoadingScreen className="min-h-[calc(100vh-80px)]" message="Preparing your wellness journey" />
    );
  }

  return <>{children}</>;
}

