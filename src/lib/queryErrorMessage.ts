import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export function messageFromQueryError(error: unknown): string {
  const err = error as FetchBaseQueryError;
  if (err?.data && typeof err.data === "object" && "error" in err.data) {
    const e = (err.data as { error?: string; message?: string }).error;
    const m = (err.data as { message?: string }).message;
    return (
      (typeof e === "string" && e) ||
      (typeof m === "string" && m) ||
      "Request failed"
    );
  }
  return "Something went wrong. Please try again.";
}
