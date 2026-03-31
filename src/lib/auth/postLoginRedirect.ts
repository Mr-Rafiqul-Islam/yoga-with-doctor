/** Default when there is no `returnTo` query param. */
export const DEFAULT_POST_LOGIN_PATH = "/dashboard";

/**
 * Restricts `returnTo` to same-origin pathnames to avoid open redirects.
 * Expects values like `/dashboard` or `/checkout/review` (as used by RequireAuth).
 */
export function sanitizePostLoginPath(
  returnTo: string | null | undefined
): string {
  if (returnTo == null || returnTo === "") return DEFAULT_POST_LOGIN_PATH;
  let decoded: string;
  try {
    decoded = decodeURIComponent(returnTo).trim();
  } catch {
    return DEFAULT_POST_LOGIN_PATH;
  }
  if (!decoded.startsWith("/") || decoded.startsWith("//")) {
    return DEFAULT_POST_LOGIN_PATH;
  }
  if (decoded.includes("\\") || decoded.includes("@")) {
    return DEFAULT_POST_LOGIN_PATH;
  }
  return decoded || DEFAULT_POST_LOGIN_PATH;
}
