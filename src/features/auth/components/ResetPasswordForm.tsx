"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SuccessMessageCard } from "@/components/SuccessMessageCard";
import { useResetPasswordMutation } from "@/services/authApi";

// Phone number formatting helper
const formatPhoneNumber = (value: string): string => {
  const cleaned = value.replace(/[^\d+\s\-\(\)]/g, "");
  return cleaned;
};

const validatePassword = (pwd: string): boolean => {
  return pwd.length >= 8 && /\d/.test(pwd);
};

/**
 * ResetPasswordForm - Reset password with phone, OTP, and new password.
 * Shows SuccessMessageCard after successful reset.
 */
export function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const isPasswordValid = validatePassword(newPassword);

  useEffect(() => {
    const phoneFromUrl = searchParams.get("phone");
    if (phoneFromUrl) setPhone(decodeURIComponent(phoneFromUrl));
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    try {
      await resetPassword({ phone, otp, newPassword }).unwrap();
      setSuccess(true);
    } catch (err: unknown) {
      const msg =
        (err as { data?: { message?: string } })?.data?.message ||
        "Failed to reset password. Please check the OTP and try again.";
      setErrorMessage(msg);
    }
  };

  if (success) {
    return (
      <SuccessMessageCard
        title="Password Reset Successful"
        description="Your account is secure. You can now log in with your new credentials."
        primaryAction={{ label: "Go to Login", href: "/auth/login" }}
        supportLink={{
          prefix: "Need help? ",
          linkText: "Contact Support",
          href: "/contact",
        }}
      />
    );
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="overflow-hidden rounded-xl bg-surface p-8 shadow-elevation-md dark:bg-[#1a2e26]">
        {/* Logo / Icon */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
            <span className="material-icons-outlined text-4xl text-primary">
              lock_reset
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="mb-2 text-center text-2xl font-bold text-foreground sm:text-3xl">
          Set New Password
        </h1>

        {/* Instructional Text */}
        <p className="mb-8 text-center text-sm leading-relaxed text-muted">
          Enter your phone number, the OTP sent to you, and choose a new
          password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {errorMessage && (
            <div
              role="alert"
              className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800 dark:border-red-800 dark:bg-red-950/50 dark:text-red-200"
            >
              {errorMessage}
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
                onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                placeholder="+880 13234-56789"
                className="h-14 w-full rounded-xl border border-border bg-surface pl-12 pr-4 text-base text-foreground outline-none transition-all placeholder:text-muted focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-[#12241d]"
                required
                aria-required="true"
                aria-label="Phone number"
                pattern="[+]?[0-9\s\-\(\)]+"
              />
            </div>
          </div>

          {/* OTP Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="otp"
              className="text-sm font-medium text-foreground dark:text-gray-200"
            >
              Verification Code (OTP)
            </label>
            <div className="relative">
              <span
                className="material-icons-outlined pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl text-muted"
                aria-hidden
              >
                pin
              </span>
              <input
                id="otp"
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={otp}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "").slice(0, 6);
                  setOtp(val);
                }}
                placeholder="Enter 6-digit code"
                className="h-14 w-full rounded-xl border border-border bg-surface pl-12 pr-4 text-base text-foreground outline-none transition-all placeholder:text-muted focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-[#12241d]"
                required
                aria-required="true"
                aria-label="Verification code"
              />
            </div>
          </div>

          {/* New Password Field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="newPassword"
              className="text-sm font-medium text-foreground dark:text-gray-200"
            >
              New Password
            </label>
            <div className="relative">
              <input
                id="newPassword"
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••"
                className={`h-14 w-full rounded-xl border bg-surface px-4 pr-12 text-base text-foreground outline-none transition-all placeholder:text-muted focus:ring-1 dark:bg-[#12241d] ${
                  newPassword && !isPasswordValid
                    ? "border-error focus:border-error focus:ring-error"
                    : "border-border focus:border-primary focus:ring-primary dark:border-gray-700"
                }`}
                required
                aria-required="true"
                aria-label="New password"
                aria-invalid={newPassword ? !isPasswordValid : undefined}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <span className="material-icons-outlined text-xl">
                  {showPassword ? "visibility_off" : "visibility"}
                </span>
              </button>
            </div>
            <p className="text-xs text-muted">
              Minimum 8 characters with at least one number
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex h-14 w-full items-center justify-center rounded-xl bg-primary font-bold text-white transition-all hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none"
            disabled={
              !isPasswordValid || !phone || otp.length !== 6 || isLoading
            }
          >
            {isLoading ? "Resetting…" : "Reset Password"}
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
