"use client";

import { useEffect, useRef } from "react";
import { signOut, useSession } from "next-auth/react";

import {
  authApi,
  logoutAction,
  persistClientAuthTokens,
  removeToken,
  setLoading,
} from "@/slices/auth";

import { useAppDispatch } from "./hooks";

/** Keeps RTK Bearer tokens aligned with NextAuth JWT and loads `/me` after token changes. */
export function SessionTokenSync() {
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();
  const lastAccess = useRef<string | null>(null);

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      lastAccess.current = null;
      removeToken();
      dispatch(logoutAction());
      return;
    }

    if (session?.error === "RefreshAccessTokenError") {
      void signOut({ callbackUrl: "/auth/login" });
      return;
    }

    if (!session?.accessToken || !session?.refreshToken) return;

    if (session.accessToken !== lastAccess.current) {
      lastAccess.current = session.accessToken;
      persistClientAuthTokens(session.accessToken, session.refreshToken);
      dispatch(setLoading(false));
      dispatch(
        authApi.endpoints.getCurrentUser.initiate(undefined, { forceRefetch: true })
      );
    }
  }, [session, status, dispatch]);

  return null;
}
