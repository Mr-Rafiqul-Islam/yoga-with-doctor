"use client";

import { useEffect } from "react";
import { authApi } from "@/services/authApi";
import { setLoading, rehydrate } from "./authSlice";
import { getToken, getStoredUser } from "@/utils/tokenStore";
import { useAppDispatch } from "./hooks";

/**
 * Restores auth state on app load (e.g. after reload).
 * 1. If token + stored user exist → rehydrate Redux immediately (no flash of "logged out").
 * 2. If token exists → fetch current user in background to revalidate (updates or clears if invalid).
 * 3. If no token → mark auth not loading.
 */
export function AuthHydration() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getToken();
    const storedUser = getStoredUser();

    if (!token) {
      dispatch(setLoading(false));
      return;
    }

    if (storedUser) {
      dispatch(rehydrate(storedUser));
    }
    dispatch(authApi.endpoints.getCurrentUser.initiate());
  }, [dispatch]);

  return null;
}
