"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForgotPasswordMutation } from "@/slices/auth";
/**
 * ForgotPasswordForm - Reset password request form.
 * Sends OTP via API then redirects to reset-password screen.
 */
export function ForgotPasswordForm() {
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter();
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const result = await forgotPassword({ phone }).unwrap();
      if (result.success) {
        setSuccessMessage(
          result.message ||
            "Check your phone for the OTP to reset your password."
        );
        setTimeout(() => {
          router.push(`/auth/reset-password?phone=${encodeURIComponent(phone)}`);
        }, 1200);
      } else {
        setErrorMessage(result.message || "Failed to send reset OTP.");
      }
    } catch (err: unknown) {
      const msg =
        (err as { data?: { message?: string }; error?: string })?.data?.message ||
        (err as { error?: string })?.error ||
        "Failed to send reset OTP. Please try again.";
      setErrorMessage(msg);
    }
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="overflow-hidden rounded-xl bg-surface p-8 shadow-elevation-md dark:bg-[#1a2e26]">
        {/* Logo / Icon */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
            <span className="material-icons-outlined text-4xl text-primary">
              eco
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="mb-2 text-center text-2xl font-bold text-foreground sm:text-3xl">
          Reset Your Password
        </h1>

        {/* Subheading */}
        <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-muted">
          Security Recovery
        </p>

        {/* Instructional Text */}
        <p className="mb-8 text-center text-sm leading-relaxed text-muted">
          Enter your phone number and we will send you an OTP to reset your
          password and regain access to your wellness dashboard.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMessage && (
            <div
              role="alert"
              className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-800 dark:bg-red-950/50 dark:text-red-200"
            >
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div
              role="status"
              className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800 dark:border-green-800 dark:bg-green-950/50 dark:text-green-200"
            >
              {successMessage}
            </div>
          )}
          {/* Phone Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-foreground dark:text-gray-200"
            >
              Phone Number
            </label>
            <div className="relative">
              <span
                className="material-icons-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl text-muted"
                aria-hidden
              >
                phone
              </span>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="01712345678"
                className="h-14 w-full rounded-xl border border-border bg-surface pl-12 pr-4 text-base text-foreground outline-none transition-all placeholder:text-muted focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-[#12241d]"
                required
                aria-required="true"
                aria-label="Phone number"
                pattern="[+]?[0-9\s\-\(\)]+"
              />
            </div>
          </div>

          {/* Send Reset OTP Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="flex h-14 w-full items-center justify-center rounded-xl bg-primary font-bold uppercase tracking-wide text-white transition-all hover:bg-primary-dark disabled:opacity-60 disabled:pointer-events-none"
          >
            {isLoading ? "Sending…" : "Send Reset OTP"}
          </button>
        </form>

        {/* Back to Login Link */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/auth/login"
            className="flex items-center gap-1 text-sm text-muted hover:text-foreground"
          >
            <span className="material-icons-outlined text-base">arrow_back</span>
            <span>Back to Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
