"use client";

import { useMemo, useState } from "react";
import { getGuestSession } from "@/slices/auth";
import { MdVerifiedUser } from "react-icons/md";

function maskPhone(phone: string): string {
  const p = phone.trim();
  if (p.length <= 4) return p;
  const last = p.slice(-4);
  return `${"*".repeat(Math.min(8, Math.max(0, p.length - 4)))}${last}`;
}

type Step = "setPassword" | "otp";

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

  const canProceedPassword =
    password.length >= 6 && confirmPassword.length >= 6 && password === confirmPassword;

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
                disabled={!canProceedPassword || step !== "setPassword"}
                onClick={() => {
                  setError(null);
                  if (!canProceedPassword) {
                    setError("Passwords must match and be at least 6 characters.");
                    return;
                  }
                  if (!phone.trim()) {
                    setError("Please provide a phone number to receive OTP.");
                    return;
                  }
                  setStep("otp");
                }}
              >
                Continue to OTP
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
                    disabled={step !== "otp" || otp.trim().length < 4}
                    onClick={() => {
                      // UI-only for now: user will provide API later.
                      setError(
                        "OTP verification API not wired yet. Provide API details and I’ll implement.",
                      );
                    }}
                  >
                    Verify & unlock dashboard
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

