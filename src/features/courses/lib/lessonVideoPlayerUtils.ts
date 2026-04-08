import type { User } from "@/slices/auth";

/** Email preferred, then phone — for video watermark text. */
export function watermarkContactFromUser(user: User | null | undefined): string {
  if (!user) return "";
  const email = user.email?.trim();
  if (email) return email;
  return user.phone?.trim() ?? "";
}
