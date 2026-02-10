"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useVerifyRegisterOTPMutation } from "@/services/authApi";

type VerifyIdentityFormProps = {
  phone?: string;
  email?: string; // Keep for future use
  onBack?: () => void;
  isFromRegister?: boolean;
  onComplete?: () => void;
};

/**
 * VerifyIdentityForm - Component for phone/email verification.
 * Displays 6-digit code input fields, timer, resend link, and verify button.
 */
export function VerifyIdentityForm({
  phone,
  email,
  onBack,
  isFromRegister = false,
  onComplete,
}: VerifyIdentityFormProps = {}) {
  const router = useRouter();
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(119); // 1:59 in seconds
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [verifyRegisterOTP, { isLoading: isVerifyingRegister }] =
    useVerifyRegisterOTPMutation();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev: number) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newCode = [...code];
    for (let i = 0; i < 6; i++) {
      newCode[i] = pastedData[i] || "";
    }
    setCode(newCode);
    inputRefs.current[Math.min(pastedData.length, 5)]?.focus();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fullCode = code.join("");
    if (fullCode.length !== 6) return;

    setError(null);

    if (isFromRegister && phone) {
      try {
        const deviceId = "web-browser";
        const platform: "web" = "web";

        const result = await verifyRegisterOTP({
          phone,
          otp: fullCode,
          deviceId,
          platform,
        }).unwrap();

        if (result.success) {
          if (onComplete) {
            onComplete();
          } else {
            router.push("/auth/login");
          }
        }
      } catch (err: any) {
        const message =
          err?.data?.message ||
          err?.error ||
          "Unable to verify code. Please try again.";
        setError(message);
      }
    } else {
      // Fallback: just log and optionally navigate
      if (onComplete) {
        onComplete();
      } else {
        router.push("/auth/login");
      }
    }
  };

  const handleResend = () => {
    // TODO: Implement resend logic
    setTimeLeft(119);
    setCode(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="rounded-xl bg-surface p-8 shadow-2xl dark:bg-[#1a2e26]">
        {/* Header Icon */}
        <div className="mb-6 flex justify-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-primary/20">
            <span className="material-icons-outlined text-3xl text-primary">
              verified
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-3 text-center text-2xl font-bold text-foreground">
          Verify Your Identity
        </h1>

        {/* Description */}
        <p className="mb-8 text-center text-sm leading-relaxed text-muted">
          We&apos;ve sent a 6-digit code to{" "}
          {phone && <span className="font-medium text-foreground">{phone}</span>}
          {/* {email && <span className="font-medium text-foreground">{email}</span>} */}
          {!phone && !email && "your registered phone number"} to ensure your health data remains
          secure.
        </p>

        {/* 6-Digit Code Input */}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-6 flex justify-center gap-1 sm:gap-2">
            {code.map((digit: string, index: number) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className={`h-10 w-9 sm:h-12 sm:w-10 xl:h-14 xl:w-14 rounded-lg border-2 text-center text-base sm:text-xl font-semibold text-foreground transition-all focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                  index === 0 ||
                  (digit &&
                    index === code.findIndex((c: string) => c === ""))
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-border dark:border-gray-700"
                }`}
                aria-label={`Digit ${index + 1} of verification code`}
              />
            ))}
          </div>

          {/* Timer and Resend */}
          <div className="mb-6 text-center text-sm text-muted">
            <span>Code expires in </span>
            <span className="font-bold">{formatTime(timeLeft)}</span>
            <span className="mx-2">•</span>
            <button
              type="button"
              onClick={handleResend}
              className="font-medium text-primary underline hover:no-underline"
              disabled={timeLeft > 0}
            >
              Resend
            </button>
          </div>

          {/* Verify Button */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-bold text-white transition-all hover:bg-primary-dark"
            disabled={isVerifyingRegister || code.join("").length !== 6}
          >
            <span className="material-icons-outlined text-lg">check</span>
            <span>
              {isVerifyingRegister
                ? "Verifying..."
                : isFromRegister
                  ? "Complete Registration"
                  : "Verify & Login"}
            </span>
          </button>
        </form>

        {/* Error */}
        {error && (
          <p className="mt-3 text-center text-sm text-error" role="alert">
            {error}
          </p>
        )}

        {/* Back Link */}
        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="flex w-full items-center justify-center gap-1 text-sm text-muted hover:text-foreground"
          >
            <span className="material-icons-outlined text-base">arrow_back</span>
            <span>{isFromRegister ? "Back to Register" : "Back to Login"}</span>
          </button>
        )}
      </div>
    </div>
  );
}
