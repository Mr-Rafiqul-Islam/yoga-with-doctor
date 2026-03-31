import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    refreshToken?: string;
    error?: string;
    user: DefaultSession["user"] & {
      id: string;
      phone?: string;
      isPremium?: boolean;
    };
  }

  interface User {
    id: string;
    accessToken: string;
    refreshToken: string;
    profile: Record<string, unknown>;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpires?: number;
    profile?: Record<string, unknown>;
    error?: string;
  }
}
