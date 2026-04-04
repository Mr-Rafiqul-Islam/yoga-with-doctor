/**
 * Normalize API `category` to a single display/filter label (first non-empty string).
 * Supports string, string[], or nullish; other shapes return null.
 */
export function pickPrimaryCategory(raw: unknown): string | null {
  if (raw == null) return null;

  if (typeof raw === "string") {
    const t = raw.trim();
    return t === "" ? null : t;
  }

  if (Array.isArray(raw)) {
    for (const item of raw) {
      if (typeof item !== "string") continue;
      const t = item.trim();
      if (t !== "") return t;
    }
    return null;
  }

  return null;
}
