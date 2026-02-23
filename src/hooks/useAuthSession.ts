"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

import { useAppSelector } from "@/stores";
import { getToken } from "@/utils/tokenStore";
import {
  useGetCurrentUserQuery,
  useLogoutMutation,
} from "@/services/authApi";

/**
 * Session restore: AuthHydration calls refresh (cookie sent); on success
 * middleware sets access token and fetches getCurrentUser. So we skip
 * getCurrentUser only when we have no token (e.g. before refresh completes).
 */
export function useAuthSession() {
  const router = useRouter();

  const { user, isAuthenticated, isLoading: authLoading } =
    useAppSelector((state) => state.auth);

  const hasToken = !!getToken();
  const { isLoading: isFetchingUser } = useGetCurrentUserQuery(undefined, {
    skip: !hasToken,
  });

  const [logout, { isLoading: isLoggingOut }] = useLogoutMutation();

  const handleLogout = useCallback(async () => {
    try {
      await logout().unwrap();
    } finally {
      router.push("/auth/login");
    }
  }, [logout, router]);

  const isRestoringSession = authLoading || (hasToken && isFetchingUser);

  return {
    user,
    isAuthenticated,
    isRestoringSession,
    isLoggingOut,
    handleLogout,
  };
}
