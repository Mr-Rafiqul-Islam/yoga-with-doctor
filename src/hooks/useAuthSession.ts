"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/stores";
import { setLoading } from "@/stores";
import { getToken } from "@/utils/tokenStore";
import {
  useGetCurrentUserQuery,
  useLogoutMutation,
} from "@/services/authApi";

export function useAuthSession() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { user, isAuthenticated, isLoading: authLoading } =
    useAppSelector((state) => state.auth);

  const [hasToken, setHasToken] = useState(false);

  // Check token once on mount
  useEffect(() => {
    const token = getToken();
    setHasToken(!!token);

    if (!token) {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  // Restore session if token exists
  const { isLoading: isFetchingUser } = useGetCurrentUserQuery(undefined, {
    skip: !hasToken,
  });

  // Logout
  const [logout, { isLoading: isLoggingOut }] = useLogoutMutation();

  const handleLogout = useCallback(async () => {
    try {
      await logout().unwrap();
    } finally {
      router.push("/auth/login");
    }
  }, [logout, router]);

  /**
   * Unified state for UI
   */
  const isRestoringSession =
    authLoading || (hasToken && isFetchingUser);

  return {
    user,
    isAuthenticated,
    isRestoringSession,
    isLoggingOut,
    handleLogout,
  };
}
