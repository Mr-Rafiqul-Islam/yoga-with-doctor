"use client";

import { useMemo, useState } from "react";
import {
  getGuestSession,
  persistClientAuthTokens,
  persistGuestSession,
} from "@/slices/auth";
import { establishNextAuthSessionFromStoredTokens } from "@/lib/auth/client";
import { MdVerifiedUser } from "react-icons/md";

function maskPhone(phone: string): string {
  const p = phone.trim();
  if (p.length <= 4) return p;
  const last = p.slice(-4);
  return `${"*".repeat(Math.min(8, Math.max(0, p.length - 4)))}${last}`;
}

type Step = "setPassword" | "otp";

function getApiBase(): string {
  return process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.API_BASE_URL ?? "";
}

type InitPasswordResponse =
  | {
      success: true;
      message: "OTP_SENT";
      data: { phone: string };
    }
  | { success: false; message?: string; error?: string; data?: unknown };

type GuestVerifyResponse =
  | {
      success: true;
      message: string;
      data: {
        user: { id: string; phone: string; name: string };
        accessToken: string;
        refreshToken: string;
      };
    }
  | { success: false; message?: string; error?: string; data?: unknown };

export function GuestVerifyDashboardScreen() {
  const guest = getGuestSession();

  const initialPhone = useMemo(() => guest?.phone ?? "", [guest?.phone]);
  const [useSamePhone, setUseSamePhone] = useState(true);
  const [phone, setPhone] = useState(initialPhone);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<Step>("setPassword");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canProceedPassword =
    password.length >= 6 && confirmPassword.length >= 6 && password === confirmPassword;

  const canProceedOtp = otp.trim().length >= 4;

  const handleInitPassword = async () => {
    setError(null);
    if (!canProceedPassword) {
      setError("Passwords must match and be at least 6 characters.");
      return;
    }
    if (!phone.trim()) {
      setError("Please provide a phone number to receive OTP.");
      return;
    }
    const base = getApiBase();
    if (!base) {
      setError("API base URL is not configured.");
      return;
    }
    if (!guest?.userId) {
      setError("Guest session not found. Please restart checkout.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(`${base}/api/v1/client/guest/password/init`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phone.trim(), password }),
      });
      const json = (await res.json()) as InitPasswordResponse;
      if (!res.ok || !json || json.success !== true) {
        const msg =
          (json as { message?: string; error?: string })?.message ??
          (json as { message?: string; error?: string })?.error ??
          "Failed to send OTP. Please try again.";
        setError(msg);
        return;
      }
      // Keep guest marker up-to-date with the phone used for OTP.
      persistGuestSession(guest.userId, phone.trim());
      setStep("otp");
    } catch {
      setError("Failed to send OTP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyOtp = async () => {
    setError(null);
    if (!phone.trim()) {
      setError("Missing phone number.");
      return;
    }
    if (!canProceedOtp) {
      setError("Please enter the OTP code.");
      return;
    }
    const base = getApiBase();
    if (!base) {
      setError("API base URL is not configured.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(`${base}/api/v1/client/guest/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: phone.trim(), otp: otp.trim() }),
      });
      const json = (await res.json()) as GuestVerifyResponse;
      if (!res.ok || !json || json.success !== true || !json.data?.accessToken) {
        const msg =
          (json as { message?: string; error?: string })?.message ??
          (json as { message?: string; error?: string })?.error ??
          "OTP verification failed. Please try again.";
        setError(msg);
        return;
      }

      // Persist RTK tokens and then establish a real NextAuth session cookie.
      persistClientAuthTokens(json.data.accessToken, json.data.refreshToken);
      const sessionRes = await establishNextAuthSessionFromStoredTokens("/dashboard");
      if (!sessionRes.ok) {
        setError(sessionRes.error ?? "Could not start session. Try again.");
        return;
      }
      window.location.assign(`${window.location.origin}/dashboard`);
    } catch {
      setError("OTP verification failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-[calc(100vh-80px)] bg-surface-container-low py-10">
      <div className="mx-auto w-full max-w-3xl px-6">
        <div className="rounded-3xl bg-surface-container-lowest p-6 shadow-xl shadow-primary/5 md:p-10">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-on-surface/50">
                Guest account setup
              </p>
              <h1 className="mt-2 text-2xl font-extrabold text-on-surface md:text-3xl">
                Verify your account to unlock the dashboard
              </h1>
              <p className="mt-2 text-sm leading-relaxed text-on-surface/70">
                You’ve completed checkout as a guest. Finish verification with OTP to
                access your full dashboard.
              </p>
            </div>
            <div className="hidden shrink-0 rounded-2xl bg-primary/10 px-4 py-3 text-primary md:block">
              <div className="flex items-center gap-2 text-sm font-bold">
              <MdVerifiedUser className="h-6 w-6" />
                2-step verify
              </div>
            </div>
          </div>

          {error ? (
            <div
              className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-red-950/30 dark:text-red-200"
              role="alert"
            >
              <p className="font-semibold">Verification error</p>
              <p className="mt-1">{error}</p>
            </div>
          ) : null}

          <div className="mb-6 rounded-2xl border border-primary/10 bg-surface-container-low p-5">
            <p className="text-sm font-semibold text-on-surface/80">
              Phone number
            </p>
            <div className="mt-3 space-y-3">
              <label className="flex items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-primary/40 text-primary focus:ring-primary"
                  checked={useSamePhone}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setUseSamePhone(checked);
                    if (checked) setPhone(initialPhone);
                  }}
                />
                <span className="text-on-surface/80">
                  Use the same number{" "}
                  <span className="font-semibold text-on-surface">
                    {initialPhone ? maskPhone(initialPhone) : "(not found)"}
                  </span>
                </span>
                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300">
                  
                  {useSamePhone ? "Selected" : "Use a new number"}
                </span>
              </label>

              {!useSamePhone ? (
                <div className="grid gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-on-surface/50">
                    New phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    inputMode="numeric"
                    pattern="[+]?[0-9\s\-\(\)]+"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="01XXXXXXXXX"
                    className="w-full rounded-xl border border-outline-variant/40 bg-surface px-4 py-3 text-sm text-on-surface outline-none ring-0 focus:border-primary/50 focus:ring-2 focus:ring-primary/15"
                  />
                  <p className="text-xs text-on-surface/60">
                    We’ll send OTP to this number.
                  </p>
                </div>
              ) : null}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-outline-variant/30 bg-surface p-5">
              <p className="text-sm font-semibold text-on-surface/80">
                Step 1 — Set password
              </p>
              <p className="mt-1 text-xs text-on-surface/60">
                Create a password for future logins.
              </p>

              <div className="mt-4 space-y-3">
                <div className="grid gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-on-surface/50">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-outline-variant/40 bg-surface px-4 py-3 text-sm text-on-surface outline-none ring-0 focus:border-primary/50 focus:ring-2 focus:ring-primary/15"
                    placeholder="••••••••"
                    disabled={step !== "setPassword"}
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-on-surface/50">
                    Confirm password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full rounded-xl border border-outline-variant/40 bg-surface px-4 py-3 text-sm text-on-surface outline-none ring-0 focus:border-primary/50 focus:ring-2 focus:ring-primary/15"
                    placeholder="••••••••"
                    disabled={step !== "setPassword"}
                  />
                </div>
              </div>

              <button
                type="button"
                className="mt-4 w-full rounded-xl bg-primary px-4 py-3 text-sm font-bold text-on-primary shadow-lg shadow-primary/15 disabled:opacity-60"
                disabled={!canProceedPassword || step !== "setPassword" || isSubmitting}
                onClick={handleInitPassword}
              >
                {isSubmitting ? "Sending OTP..." : "Continue to OTP"}
              </button>
            </div>

            <div className="rounded-2xl border border-outline-variant/30 bg-surface p-5">
              <p className="text-sm font-semibold text-on-surface/80">
                Step 2 — Verify OTP
              </p>
              <p className="mt-1 text-xs text-on-surface/60">
                Enter the OTP we sent to your phone.
              </p>

              <div className="mt-4 space-y-3">
                <div className="grid gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wide text-on-surface/50">
                    OTP code
                  </label>
                  <input
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full rounded-xl border border-outline-variant/40 bg-surface px-4 py-3 text-sm text-on-surface outline-none ring-0 focus:border-primary/50 focus:ring-2 focus:ring-primary/15"
                    placeholder="123456"
                    inputMode="numeric"
                    disabled={step !== "otp"}
                  />
                </div>

                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    className="rounded-lg px-3 py-2 text-xs font-semibold text-on-surface/70 hover:bg-surface-container-low"
                    disabled={step !== "otp"}
                    onClick={() => {
                      setError(null);
                      setOtp("");
                      setStep("setPassword");
                    }}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="rounded-xl bg-secondary px-4 py-3 text-sm font-bold text-on-primary dark:text-black shadow-lg shadow-secondary/15 disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={step !== "otp" || !canProceedOtp || isSubmitting}
                    onClick={handleVerifyOtp}
                  >
                    {isSubmitting ? "Verifying..." : "Verify & unlock dashboard"}
                  </button>
                </div>

                <div className="rounded-xl bg-surface-container-low p-4 text-xs text-on-surface/60">
                  After verification, you’ll be logged in automatically and your
                  account will become <strong>VERIFIED</strong>.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-outline-variant/20 pt-6">
            <p className="text-xs text-on-surface/60">
              Guest id:{" "}
              <span className="font-mono text-[11px] text-on-surface/70">
                {guest?.userId ?? "—"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

