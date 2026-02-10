const ACCESS_TOKEN_KEY = "ywd-access-token";
const REFRESH_TOKEN_KEY = "ywd-refresh-token";

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

