"use client";

import { useEffect } from "react";
import { authApi } from "@/services/authApi";
import { rehydrate } from "./authSlice";
import { getStoredUser } from "@/utils/tokenStore";
import { useAppDispatch } from "./hooks";

/**
 * Restores auth state on app load (e.g. after reload).
 * Access token is in memory only; refresh token is in HttpOnly cookie.
 * 1. Optionally rehydrate from stored user so UI shows name/avatar immediately.
 * 2. Call refresh endpoint (cookie sent automatically). Backend returns new access token.
 * 3. On success, persist middleware sets token and fetches getCurrentUser.
 * 4. On failure (no/invalid cookie), authSlice sets loading false and user null.
 */
export function AuthHydration() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedUser = getStoredUser();
    if (storedUser) {
      dispatch(rehydrate(storedUser));
    }
    dispatch(authApi.endpoints.refreshSession.initiate());
  }, [dispatch]);

  return null;
}
