import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const apiBase =
  process.env.API_BASE_URL ??
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "";

/** Keep JWT cookie small so chunked cookies decode reliably in Edge middleware. */
function slimProfile(p: Record<string, unknown>): Record<string, unknown> {
  return {
    id: p.id,
    name: p.name,
    email: p.email ?? null,
    phone: p.phone,
    profilePicture: p.profilePicture ?? null,
    isPremium: p.isPremium,
    isActive: p.isActive,
  };
}

async function refreshTokens(refreshToken: string) {
  const res = await fetch(`${apiBase}/api/v1/client/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  });
  const data = (await res.json()) as {
    success: boolean;
    data?: { accessToken: string; refreshToken: string };
  };
  if (!data.success || !data.data?.accessToken) {
    throw new Error("RefreshAccessTokenError");
  }
  return data.data;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        accessToken: { label: "Access token", type: "text" },
        refreshToken: { label: "Refresh token", type: "text" },
        phone: { label: "Phone", type: "text" },
        password: { label: "Password", type: "password" },
        otp: { label: "OTP", type: "text" },
        deviceId: { label: "Device ID", type: "text" },
        platform: { label: "Platform", type: "text" },
        flow: { label: "flow", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials || !apiBase) {
          return null;
        }

        // RTK login already has tokens; `signIn` does not send deviceId for this path.
        if (credentials.accessToken && credentials.refreshToken) {
          const meRes = await fetch(`${apiBase}/api/v1/client/me`, {
            headers: {
              Authorization: `Bearer ${credentials.accessToken}`,
            },
          });
          if (!meRes.ok) return null;
          const me = (await meRes.json()) as {
            success: boolean;
            data?: Record<string, unknown>;
          };
          if (!me.success || !me.data) return null;
          const data = me.data as Record<string, unknown>;
          return {
            id: String(data.id ?? ""),
            name: String(data.name ?? ""),
            email: (data.email as string | null) ?? null,
            image: (data.profilePicture as string | null) ?? null,
            accessToken: credentials.accessToken as string,
            refreshToken: credentials.refreshToken as string,
            profile: slimProfile(data),
          };
        }

        if (!credentials.deviceId) {
          return null;
        }

        const platform = (credentials.platform as string) || "web";

        if (credentials.otp && credentials.phone) {
          const isRegister = credentials.flow === "register";
          const url = isRegister
            ? `${apiBase}/api/v1/client/register/verify`
            : `${apiBase}/api/v1/client/login/verify`;
          const r = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              phone: credentials.phone,
              otp: credentials.otp,
              deviceId: credentials.deviceId,
              platform,
            }),
          });
          const data = (await r.json()) as {
            success: boolean;
            data?: {
              user: {
                id: string;
                phone: string;
                name: string;
              };
              accessToken: string;
              refreshToken: string;
            };
          };
          if (!data.success || !data.data?.accessToken) return null;
          const meRes = await fetch(`${apiBase}/api/v1/client/me`, {
            headers: {
              Authorization: `Bearer ${data.data.accessToken}`,
            },
          });
          const me = meRes.ok
            ? ((await meRes.json()) as { success: boolean; data?: Record<string, unknown> })
            : null;
          const profileRaw =
            me?.success && me.data
              ? (me.data as Record<string, unknown>)
              : ({
                  ...data.data.user,
                } as Record<string, unknown>);
          return {
            id: data.data.user.id,
            name: data.data.user.name,
            email: null,
            image: null,
            accessToken: data.data.accessToken,
            refreshToken: data.data.refreshToken,
            profile: slimProfile(profileRaw),
          };
        }

        if (credentials.phone && credentials.password) {
          const r = await fetch(`${apiBase}/api/v1/client/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              phone: credentials.phone,
              password: credentials.password,
              deviceId: credentials.deviceId,
              platform,
            }),
          });
          const data = (await r.json()) as {
            success: boolean;
            message?: string;
            data?: {
              user: {
                id: string;
                phone: string;
                name: string;
                email: string | null;
                isPremium: boolean;
                isActive: boolean;
                profilePicture: string | null;
              };
              accessToken: string;
              refreshToken: string;
            };
          };
          if (data.message === "OTP_REQUIRED") return null;
          if (!data.success || !data.data?.accessToken) return null;
          const u = data.data.user;
          const profile = {
            id: u.id,
            name: u.name,
            phone: u.phone,
            email: u.email,
            isPremium: u.isPremium,
            isActive: u.isActive,
            profilePicture: u.profilePicture,
          };
          return {
            id: u.id,
            name: u.name,
            email: u.email,
            image: u.profilePicture,
            accessToken: data.data.accessToken,
            refreshToken: data.data.refreshToken,
            profile: slimProfile(profile as unknown as Record<string, unknown>),
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const u = user as {
          id: string;
          accessToken: string;
          refreshToken: string;
          profile: Record<string, unknown>;
        };
        return {
          ...token,
          sub: u.id,
          accessToken: u.accessToken,
          refreshToken: u.refreshToken,
          accessTokenExpires: Date.now() + 14 * 60 * 1000,
          profile: slimProfile(u.profile),
        };
      }

      if (
        token.error === "RefreshAccessTokenError" ||
        !token.refreshToken
      ) {
        return token;
      }

      if (
        typeof token.accessTokenExpires === "number" &&
        Date.now() < token.accessTokenExpires - 60_000
      ) {
        return token;
      }

      try {
        const refreshed = await refreshTokens(token.refreshToken as string);
        return {
          ...token,
          accessToken: refreshed.accessToken,
          refreshToken: refreshed.refreshToken,
          accessTokenExpires: Date.now() + 14 * 60 * 1000,
          error: undefined,
        };
      } catch {
        return {
          ...token,
          error: "RefreshAccessTokenError" as const,
          accessToken: undefined,
          refreshToken: undefined,
        };
      }
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string | undefined;
      session.refreshToken = token.refreshToken as string | undefined;
      session.error = token.error as string | undefined;
      const p = token.profile as Record<string, unknown> | undefined;
      if (p && typeof p === "object") {
        const id = String(p.id ?? token.sub ?? "");
        session.user = {
          ...session.user,
          id,
          name: (p.name as string) ?? session.user?.name ?? "",
          email: (p.email as string | null) ?? session.user?.email ?? null,
          image: (p.profilePicture as string | null) ?? null,
          phone: (p.phone as string) ?? undefined,
          isPremium: (p.isPremium as boolean) ?? undefined,
          isActive:
            typeof p.isActive === "boolean" ? p.isActive : undefined,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
