const AUTH_USER_KEY = "ywd-auth-user";

/**
 * Secure auth: access token in memory only; refresh token in HttpOnly cookie (backend sets/clears).
 * Cookie name must match backend: res.cookie("refreshToken", ...) / req.cookies.refreshToken.
 * CORS must allow credentials (Access-Control-Allow-Credentials: true) so the cookie is sent on refresh.
 */
export const REFRESH_COOKIE_NAME = "refreshToken";

/**
 * Access token stored in memory only (no localStorage).
 * Not persisted across reloads; session is restored via refresh endpoint + HttpOnly cookie.
 */
let inMemoryAccessToken: string | null = null;

function canUseDOM() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function getToken(): string | null {
  if (!canUseDOM()) return inMemoryAccessToken;
  return inMemoryAccessToken;
}

/** Store access token in memory after login/verify/refresh. */
export function setAccessToken(accessToken: string): void {
  inMemoryAccessToken = accessToken;
}

/** Clear in-memory access token (e.g. on logout). Refresh token is cleared by backend via HttpOnly cookie. */
export function clearAccessToken(): void {
  inMemoryAccessToken = null;
}

/** Stored user shape for persistence (must match AuthUser). Used for quick UI rehydrate; auth is derived from refresh cookie + access token. */
export interface StoredAuthUser {
  id: string;
  phone: string;
  name: string;
  email: string | null;
  isPremium: boolean;
  isActive: boolean;
  profilePicture: string | null;
}

export function getStoredUser(): StoredAuthUser | null {
  if (!canUseDOM()) return null;
  try {
    const raw = window.localStorage.getItem(AUTH_USER_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as unknown;
    if (data && typeof data === "object" && "id" in data && "name" in data) {
      return data as StoredAuthUser;
    }
    return null;
  } catch {
    return null;
  }
}

export function setStoredUser(user: StoredAuthUser): void {
  if (!canUseDOM()) return;
  window.localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
}

export function clearStoredUser(): void {
  if (!canUseDOM()) return;
  window.localStorage.removeItem(AUTH_USER_KEY);
}
