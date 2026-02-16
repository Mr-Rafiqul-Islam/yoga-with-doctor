const ACCESS_TOKEN_KEY = "ywd-access-token";
const REFRESH_TOKEN_KEY = "ywd-refresh-token";
const AUTH_USER_KEY = "ywd-auth-user";

function canUseDOM() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
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
}

export function removeToken(): void {
  if (!canUseDOM()) return;
  window.localStorage.removeItem(ACCESS_TOKEN_KEY);
  window.localStorage.removeItem(REFRESH_TOKEN_KEY);
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

