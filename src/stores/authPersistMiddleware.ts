import type { Middleware } from "@reduxjs/toolkit";
import { authApi } from "@/services/authApi";
import { setStoredUser, clearStoredUser } from "@/utils/tokenStore";
import type { StoredAuthUser } from "@/utils/tokenStore";

function userFromPayload(payload: unknown): StoredAuthUser | null {
  if (!payload || typeof payload !== "object" || !("data" in payload)) return null;
  const data = (payload as { data?: { user?: unknown } }).data;
  const user = data?.user;
  if (!user || typeof user !== "object" || !("id" in user) || !("name" in user)) return null;
  const u = user as Record<string, unknown>;
  return {
    id: String(u.id),
    phone: String(u.phone ?? ""),
    name: String(u.name),
    email: u.email != null ? String(u.email) : null,
    isPremium: Boolean(u.isPremium),
    isActive: u.isActive !== false,
    profilePicture: u.profilePicture != null ? String(u.profilePicture) : null,
  };
}

export const authPersistMiddleware: Middleware = () => (next) => (action) => {
  const result = next(action);

  if (authApi.endpoints.login.matchFulfilled(action)) {
    const payload = action.payload as { message?: string; success?: boolean; data?: { user?: unknown } };
    if (payload.message !== "OTP_REQUIRED" && payload.success && payload.data?.user) {
      const user = userFromPayload(payload);
      if (user) setStoredUser(user);
    }
  } else if (authApi.endpoints.verifyLoginOTP.matchFulfilled(action)) {
    const user = userFromPayload(action.payload);
    if (user) setStoredUser(user);
  } else if (authApi.endpoints.verifyRegisterOTP.matchFulfilled(action)) {
    const payload = action.payload as { data?: { user?: unknown } };
    const u = payload.data?.user;
    if (u && typeof u === "object" && "id" in u && "name" in u) {
      const r = u as Record<string, unknown>;
      setStoredUser({
        id: String(r.id),
        phone: String(r.phone ?? ""),
        name: String(r.name),
        email: null,
        isPremium: false,
        isActive: true,
        profilePicture: null,
      });
    }
  } else if (authApi.endpoints.getCurrentUser.matchFulfilled(action)) {
    const payload = action.payload as { success?: boolean; data?: { user?: unknown } };
    if (payload.success && payload.data?.user) {
      const user = userFromPayload(action.payload);
      if (user) setStoredUser(user);
    }
  } else if (authApi.endpoints.getCurrentUser.matchRejected(action)) {
    clearStoredUser();
  } else if (
    typeof action === "object" &&
    action !== null &&
    "type" in action &&
    (action as { type?: unknown }).type === "auth/logout"
  ) {
    clearStoredUser();
  }

  return result;
};
