const ACCESS_TOKEN_KEY = "ywd-access-token";
const REFRESH_TOKEN_KEY = "ywd-refresh-token";
const AUTH_USER_KEY = "ywd-auth-user";

/** Cookie used by middleware to protect routes (no access to localStorage). */
export const SESSION_COOKIE_NAME = "ywd-session";

const SESSION_COOKIE_MAX_AGE_DAYS = 7;

function canUseDOM() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function setSessionCookieClient(): void {
  if (!canUseDOM()) return;
  const maxAge = SESSION_COOKIE_MAX_AGE_DAYS * 24 * 60 * 60;
  document.cookie = `${SESSION_COOKIE_NAME}=1; path=/; max-age=${maxAge}; SameSite=Lax`;
}

function clearSessionCookieClient(): void {
  if (!canUseDOM()) return;
  document.cookie = `${SESSION_COOKIE_NAME}=; path=/; max-age=0; SameSite=Lax`;
}

export function getToken(): string | null {
  if (!canUseDOM()) return null;
  return window.localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getRefreshToken(): string | null {
  if (!canUseDOM()) return null;
  return window.localStorage.getItem(REFRESH_TOKEN_KEY);
}

export function saveToken(accessToken: string, refreshToken: string): void {
  if (!canUseDOM()) return;
  window.localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  window.localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  setSessionCookieClient();
}

export function removeToken(): void {
  if (!canUseDOM()) return;
  window.localStorage.removeItem(ACCESS_TOKEN_KEY);
  window.localStorage.removeItem(REFRESH_TOKEN_KEY);
  clearSessionCookieClient();
}

/** Call when app loads and token exists (e.g. in AuthHydration) so middleware sees the cookie on next request. */
export function syncSessionCookie(): void {
  if (!canUseDOM()) return;
  if (getToken()) setSessionCookieClient();
}

/** Stored user shape for persistence (must match AuthUser). */
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

