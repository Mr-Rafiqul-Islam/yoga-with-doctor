"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useAppDispatch } from "./hooks";
import {
  getRefreshToken,
  getToken,
  useRefreshTokenMutation,
  authApi,
  logoutAction,
  setLoading,
  removeToken,
} from "@/slices/auth";

/**
 * Legacy RTK hydration when NextAuth is not active yet; if tokens exist without a session,
 * refresh and load `/me`. NextAuth SessionTokenSync + jwt refresh handle the common case.
 */
export function AuthHydration() {
  const dispatch = useAppDispatch();
  const { status } = useSession();
  const [refreshTokenMutation] = useRefreshTokenMutation();

  useEffect(() => {
    if (status === "loading") return;

    if (status === "authenticated") {
      if (getToken()) {
        dispatch(authApi.endpoints.getCurrentUser.initiate());
      }
      dispatch(setLoading(false));
      return;
    }

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
        removeToken();
        dispatch(logoutAction());
        dispatch(setLoading(false));
      });
  }, [dispatch, refreshTokenMutation, status]);

  return null;
}
