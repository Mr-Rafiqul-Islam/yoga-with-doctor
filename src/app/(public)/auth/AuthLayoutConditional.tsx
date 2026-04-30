"use client";

import { useSession } from "next-auth/react";

import { AuthGuard } from "@/components/auth";

/**
 * Wraps AuthGuard only after NextAuth reports a JWT session.
 * Redux `isAuthenticated` can become true as soon as the login API returns, before
 * `establishNextAuthSessionFromStoredTokens` and `location.assign`, which would
 * mount AuthGuard too early and steal the post-login navigation.
 */
export function AuthLayoutConditional({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();

  if (status !== "authenticated") {
    return <>{children}</>;
  }

  return <AuthGuard>{children}</AuthGuard>;
}
