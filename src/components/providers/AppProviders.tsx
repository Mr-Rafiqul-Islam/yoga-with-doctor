"use client";

import { SessionProvider } from "next-auth/react";

import { ReduxProvider } from "@/stores/ReduxProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider refetchInterval={5 * 60} refetchOnWindowFocus>
      <ReduxProvider>{children}</ReduxProvider>
    </SessionProvider>
  );
}
