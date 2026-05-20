const LOGIN_EMAIL_REGEX =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export type LoginIdentifier =
  | { phone: string }
  | { email: string };

export type ParseLoginIdentifierResult =
  | { ok: true; identifier: LoginIdentifier }
  | { ok: false; error: string };

/**
 * Parse a single "phone or email" field for POST /login (exactly one of phone | email).
 */
export function parseLoginIdentifier(raw: string): ParseLoginIdentifierResult {
  const trimmed = raw.trim();
  if (!trimmed) {
    return { ok: false, error: "Phone number or email is required." };
  }

  if (trimmed.includes("@")) {
    if (!LOGIN_EMAIL_REGEX.test(trimmed)) {
      return { ok: false, error: "Invalid email format." };
    }
    return { ok: true, identifier: { email: trimmed.toLowerCase() } };
  }

  return { ok: true, identifier: { phone: trimmed } };
}
