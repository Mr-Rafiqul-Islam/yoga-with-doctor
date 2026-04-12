"use client";

import { useCallback, useState } from "react";
import { signOut } from "next-auth/react";

import {
  useGetCurrentUserQuery,
  useLogoutMutation,
  useRequestChangePhoneMutation,
  useVerifyChangePhoneMutation,
} from "@/slices/auth";

import { messageFromQueryError } from "../../../../lib/queryErrorMessage";

const OTP_LEN = 6;

const BD_PREFIX_DIGITS = "0";

const ERR_LEADING_ZERO =
  "Do not start with 0. Enter your number without the leading zero (e.g. 1XXXXXXXXX after +880).";

function buildFullPhone(nationalRaw: string): string {
  const national = nationalRaw.replace(/\D/g, "").replace(/^0+/, "");
  return `${BD_PREFIX_DIGITS}${national}`;
}

function nationalStartsWithZero(nationalRaw: string): boolean {
  const d = nationalRaw.replace(/\D/g, "");
  return d.length > 0 && d[0] === "0";
}

function validateBdNational(nationalRaw: string): boolean {
  const d = nationalRaw.replace(/\D/g, "");
  if (d.startsWith("0")) return false;
  return d.length === 10;
}

export function ProfilePhoneSection() {
  const { data, isLoading: isUserLoading } = useGetCurrentUserQuery();
  const user = data?.data;

  const [requestChangePhone, { isLoading: isSendingOtp }] =
    useRequestChangePhoneMutation();
  const [verifyChangePhone, { isLoading: isVerifying }] =
    useVerifyChangePhoneMutation();
  const [logout] = useLogoutMutation();

  const [expanded, setExpanded] = useState(false);
  const [national, setNational] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);

  const fullNewPhone = buildFullPhone(national);

  const resetFlow = useCallback(() => {
    setNational("");
    setOtp("");
    setOtpSent(false);
    setErrorMessage(null);
    setInfoMessage(null);
  }, []);

  const handleToggleExpand = useCallback(() => {
    setExpanded((e) => {
      if (e) resetFlow();
      return !e;
    });
  }, [resetFlow]);

  const handleSendOtp = useCallback(async () => {
    setErrorMessage(null);
    setInfoMessage(null);
    if (nationalStartsWithZero(national)) {
      setErrorMessage(ERR_LEADING_ZERO);
      return;
    }
    if (!validateBdNational(national)) {
      setErrorMessage(
        "Enter a valid Bangladesh mobile number (10 digits after +880, without a leading 0)."
      );
      return;
    }
    try {
      const res = await requestChangePhone({ newPhone: fullNewPhone }).unwrap();
      if (res.success && res.message === "OTP_SENT") {
        setOtpSent(true);
        setOtp("");
        setInfoMessage("We sent a verification code to your new number.");
      } else {
        setErrorMessage("Could not send verification code. Try again.");
      }
    } catch (e) {
      setErrorMessage(messageFromQueryError(e));
    }
  }, [fullNewPhone, national, requestChangePhone]);

  const handleVerify = useCallback(async () => {
    setErrorMessage(null);
    const otpClean = otp.replace(/\D/g, "").slice(0, OTP_LEN);
    if (otpClean.length !== OTP_LEN) {
      setErrorMessage(`Enter the full ${OTP_LEN}-digit code.`);
      return;
    }
    try {
      const res = await verifyChangePhone({ otp: otpClean }).unwrap();
      if (res.success) {
        try {
          await logout().unwrap();
        } catch {
          // Logout mutation still clears tokens on failure.
        }
        await signOut({
          callbackUrl: "/auth/login?phoneUpdated=1",
          redirect: true,
        });
      }
    } catch (e) {
      setErrorMessage(messageFromQueryError(e));
    }
  }, [logout, otp, verifyChangePhone]);

  const currentPhone = user?.phone?.trim() ?? "—";
  const otpComplete = otp.replace(/\D/g, "").length === OTP_LEN;
  const busy = isSendingOtp || isVerifying;

  return (
    <section className="rounded-2xl border border-border bg-surface p-6 !pt-5 shadow-elevation-sm">
      <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
        Phone number
      </h2>

      <div className="space-y-4">
        <div>
          <p className="mb-2 text-body-md font-medium text-foreground">
            Current number
          </p>
          <p className="rounded-lg border border-border bg-background px-4 py-2.5 text-body-md text-muted dark:bg-gray-800">
            {isUserLoading ? "…" : currentPhone}
          </p>
        </div>

        <button
          type="button"
          onClick={handleToggleExpand}
          disabled={isUserLoading || !user}
          className="text-body-md font-semibold text-primary hover:underline disabled:cursor-not-allowed disabled:opacity-50"
        >
          {expanded ? "Cancel" : "Change phone number"}
        </button>

        {expanded ? (
          <div className="space-y-4 border-t border-border pt-4">
            <p className="text-body-sm text-muted">
              Enter your new Bangladesh mobile number. We will send a code to
              confirm the change. After verification you will sign in again with
              your new number.
            </p>

            {errorMessage ? (
              <p className="text-body-sm text-destructive" role="alert">
                {errorMessage}
              </p>
            ) : null}
            {infoMessage ? (
              <p className="text-body-sm text-primary" role="status">
                {infoMessage}
              </p>
            ) : null}

            <div>
              <label
                htmlFor="newPhoneNational"
                className="mb-2 block text-body-md font-medium text-foreground"
              >
                New mobile number
              </label>
              <div className="flex flex-wrap items-stretch gap-2 sm:flex-nowrap">
                <span className="flex shrink-0 items-center rounded-lg border border-border bg-background px-3 py-2.5 text-body-md text-foreground dark:bg-gray-800">
                  +880
                </span>
                <input
                  id="newPhoneNational"
                  name="newPhoneNational"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  value={national}
                  onChange={(e) => {
                    const t = e.target.value;
                    setNational(t);
                    if (nationalStartsWithZero(t)) {
                      setErrorMessage(ERR_LEADING_ZERO);
                    } else if (errorMessage === ERR_LEADING_ZERO) {
                      setErrorMessage(null);
                    }
                  }}
                  disabled={busy}
                  placeholder="1XX XXX XXXX"
                  maxLength={14}
                  className="min-w-0 flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-body-md text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 dark:bg-gray-800"
                />
              </div>
            </div>

            {!otpSent ? (
              <button
                type="button"
                onClick={handleSendOtp}
                disabled={
                  busy || !national.replace(/\D/g, "").length || !user
                }
                className="rounded-lg bg-primary px-4 py-2.5 text-body-md font-semibold text-primary-foreground transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSendingOtp ? "Sending…" : "Send OTP"}
              </button>
            ) : (
              <>
                <div>
                  <label
                    htmlFor="phoneChangeOtp"
                    className="mb-2 block text-body-md font-medium text-foreground"
                  >
                    Verification code
                  </label>
                  <input
                    id="phoneChangeOtp"
                    name="phoneChangeOtp"
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    value={otp}
                    onChange={(e) =>
                      setOtp(e.target.value.replace(/\D/g, "").slice(0, OTP_LEN))
                    }
                    placeholder="6-digit code"
                    disabled={busy}
                    className="w-full max-w-xs rounded-lg border border-border bg-background px-4 py-2.5 text-body-md text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 dark:bg-gray-800"
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleVerify}
                    disabled={busy || !otpComplete}
                    className="rounded-lg bg-primary px-4 py-2.5 text-body-md font-semibold text-primary-foreground transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isVerifying ? "Verifying…" : "Verify and update"}
                  </button>
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={busy}
                    className="rounded-lg border border-border px-4 py-2.5 text-body-md font-semibold text-foreground transition-colors hover:bg-muted/30 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSendingOtp ? "Sending…" : "Resend OTP"}
                  </button>
                </div>
              </>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
