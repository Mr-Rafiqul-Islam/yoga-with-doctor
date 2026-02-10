"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

/**
 * ForgotPasswordForm - Reset password request form.
 * Centered card with email/Medical ID input and Send Reset Link button.
 */
export function ForgotPasswordForm() {
  const [phone, setPhone] = useState("");
const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement send reset link API call
    console.log("Send reset link to:", phone);
    router.push("/auth/reset-password");
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
          Enter your email and we will send you clinical-grade recovery
          instructions to regain access to your wellness dashboard.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email / Medical ID Field */}
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
                placeholder="+880 1234567890"
                className="h-14 w-full rounded-xl border border-border bg-surface pl-12 pr-4 text-base text-foreground outline-none transition-all placeholder:text-muted focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-[#12241d]"
                required
                aria-required="true"
                aria-label="Medical ID or email address"
              />
            </div>
          </div>

          {/* Send Reset Link Button */}
          <button
            type="submit"
            className="flex h-14 w-full items-center justify-center rounded-xl bg-primary font-bold uppercase tracking-wide text-white transition-all hover:bg-primary-dark"
          >
            Send Reset OTP
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
