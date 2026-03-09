"use client";

import { useEffect } from "react";
import { useAppDispatch } from "./hooks";
import {
  getRefreshToken,
  useRefreshTokenMutation,
  authApi,
  setLoading,
} from "@/slices/auth";

/**
 * On app load: if we have a refresh token, refresh session and fetch current user.
 */
export function AuthHydration() {
  const dispatch = useAppDispatch();
  const [refreshTokenMutation] = useRefreshTokenMutation();

  useEffect(() => {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      dispatch(setLoading(false));
      return;
    }
    refreshTokenMutation({ refreshToken })
      .unwrap()
      .then(() => {
        dispatch(authApi.endpoints.getCurrentUser.initiate());
      })
      .catch(() => {
        // Invalid/expired token – state is cleared by logout in slice
        dispatch(setLoading(false));
      });
  }, [dispatch, refreshTokenMutation]);

  return null;
}
