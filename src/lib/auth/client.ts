"use client";

import { getSession, signIn } from "next-auth/react";

import { getRefreshToken, getToken } from "@/slices/auth";
import { sanitizePostLoginPath } from "@/lib/auth/postLoginRedirect";

/**
 * Creates a NextAuth session from tokens already stored by RTK (login / OTP verify).
 * Uses an absolute callbackUrl (required for credentials JSON response).
 * Callers should navigate with `window.location.assign` so middleware sees the new cookie.
 */
export async function establishNextAuthSessionFromStoredTokens(
  postLoginPath?: string
): Promise<{
  ok: boolean;
  error?: string;
}> {
  const accessToken = getToken();
  const refreshToken = getRefreshToken();
  if (!accessToken || !refreshToken) {
    return { ok: false, error: "Missing tokens" };
  }
  const path = sanitizePostLoginPath(postLoginPath);
  const origin =
    typeof window !== "undefined" ? window.location.origin : "";
  const res = await signIn("credentials", {
    accessToken,
    refreshToken,
    redirect: false,
    callbackUrl: origin ? `${origin}${path}` : undefined,
  });
  if (!res?.ok || res.error) {
    return {
      ok: false,
      error: res?.error ?? "Sign in failed",
    };
  }
  const session = await getSession();
  if (!session?.user?.id) {
    return {
      ok: false,
      error:
        "Session cookie not set. Set NEXTAUTH_SECRET and NEXTAUTH_URL (must match this origin, e.g. http://localhost:3000).",
    };
  }
  return { ok: true };
}
export async function establishNextAuthSessionFromStoredTokensForGuest(
  
): Promise<{
  ok: boolean;
  error?: string;
}> {
  const accessToken = getToken();
  const refreshToken = getRefreshToken();
  if (!accessToken || !refreshToken) {
    return { ok: false, error: "Missing tokens" };
  }
  const res = await signIn("credentials", {
    accessToken,
    refreshToken,
    redirect: false,
  });
  if (!res?.ok || res.error) {
    return {
      ok: false,
      error: res?.error ?? "Sign in failed",
    };
  }
  const session = await getSession();
  if (!session?.user?.id) {
    return {
      ok: false,
      error:
        "Session cookie not set. Set NEXTAUTH_SECRET and NEXTAUTH_URL (must match this origin, e.g. http://localhost:3000).",
    };
  }
  return { ok: true };
}
/** Password login via NextAuth only (server calls your API). */
export async function signInWithPassword(params: {
  phone: string;
  password: string;
  deviceId: string;
  platform?: string;
  postLoginPath?: string;
}) {
  const path = sanitizePostLoginPath(params.postLoginPath);
  const origin =
    typeof window !== "undefined" ? window.location.origin : "";
  return signIn("credentials", {
    phone: params.phone,
    password: params.password,
    deviceId: params.deviceId,
    platform: params.platform ?? "web",
    redirect: false,
    callbackUrl: origin ? `${origin}${path}` : undefined,
  });
}

/** Login OTP step via NextAuth (no RTK). */
export async function signInWithLoginOtp(params: {
  phone: string;
  otp: string;
  deviceId: string;
  platform?: string;
  postLoginPath?: string;
}) {
  const path = sanitizePostLoginPath(params.postLoginPath);
  const origin =
    typeof window !== "undefined" ? window.location.origin : "";
  return signIn("credentials", {
    phone: params.phone,
    otp: params.otp,
    deviceId: params.deviceId,
    platform: params.platform ?? "web",
    flow: "login",
    redirect: false,
    callbackUrl: origin ? `${origin}${path}` : undefined,
  });
}

/** Register OTP step via NextAuth (no RTK). */
export async function signInWithRegisterOtp(params: {
  phone: string;
  otp: string;
  deviceId: string;
  platform?: string;
}) {
  const origin =
    typeof window !== "undefined" ? window.location.origin : "";
  return signIn("credentials", {
    phone: params.phone,
    otp: params.otp,
    deviceId: params.deviceId,
    platform: params.platform ?? "web",
    flow: "register",
    redirect: false,
    callbackUrl: origin ? `${origin}/auth/login` : undefined,
  });
}
