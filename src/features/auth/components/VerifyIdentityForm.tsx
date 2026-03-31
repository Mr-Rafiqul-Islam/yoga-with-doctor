"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signInWithLoginOtp } from "@/lib/auth/client";
import { useVerifyRegisterOTPMutation } from "@/slices/auth";
import { getDeviceId } from "@/utils/deviceId";

type VerifyIdentityFormProps = {
  phone?: string;
  email?: string;
  onBack?: () => void;
  isFromRegister?: boolean;
  onComplete?: () => void;
  /** Sanitized pathname after login OTP (e.g. from `returnTo` query). */
  postLoginPath?: string;
};

export function VerifyIdentityForm({
  phone,
  onBack,
  isFromRegister = false,
  onComplete,
  postLoginPath = "/dashboard",
}: VerifyIdentityFormProps = {}) {
  const router = useRouter();
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(119);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [verifyRegisterOTP, { isLoading: isVerifyingRegister }] =
    useVerifyRegisterOTPMutation();
  const [isVerifyingLogin, setIsVerifyingLogin] = useState(false);
  const isVerifying = isVerifyingRegister || isVerifyingLogin;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 0 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleChange = (index: number, value: string) => {
    if (value.length > 1 || !/^\d*$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;
    const newCode = [...code];
    for (let i = 0; i < 6; i++) newCode[i] = pastedData[i] || "";
    setCode(newCode);
    inputRefs.current[Math.min(pastedData.length, 5)]?.focus();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fullCode = code.join("");
    if (fullCode.length !== 6 || !phone) return;
    setError(null);
    const deviceId = await getDeviceId();
    const platform = "web" as const;

    try {
      if (isFromRegister) {
        await verifyRegisterOTP({
          phone,
          otp: fullCode,
          deviceId,
          platform,
        }).unwrap();
      } else {
        setIsVerifyingLogin(true);
        try {
          const res = await signInWithLoginOtp({
            phone,
            otp: fullCode,
            deviceId,
            platform,
            postLoginPath,
          });
          if (res?.error) {
            setError(
              res.error === "CredentialsSignin"
                ? "Invalid or expired code. Please try again."
                : res.error
            );
            return;
          }
        } catch {
          setError("Unable to verify code. Please try again.");
          return;
        } finally {
          setIsVerifyingLogin(false);
        }
      }
      if (onComplete) {
        onComplete();
      } else if (isFromRegister) {
        router.push("/auth/login");
      } else {
        window.location.assign(
          `${window.location.origin}${postLoginPath.startsWith("/") ? postLoginPath : `/${postLoginPath}`}`
        );
      }
    } catch (err: unknown) {
      const message =
        (err as { data?: { message?: string }; error?: string })?.data?.message ||
        (err as { error?: string })?.error ||
        "Unable to verify code. Please try again.";
      setError(message);
    }
  };

  const handleResend = () => {
    setTimeLeft(119);
    setCode(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="rounded-xl bg-surface p-8 shadow-2xl dark:bg-[#1a2e26]">
        <div className="mb-6 flex justify-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-primary/20">
            <span className="material-icons-outlined text-3xl text-primary">
              verified
            </span>
          </div>
        </div>

        <h1 className="mb-3 text-center text-2xl font-bold text-foreground">
          Verify Your Identity
        </h1>

        <p className="mb-8 text-center text-sm leading-relaxed text-muted">
          We&apos;ve sent a 6-digit code to{" "}
          {phone ? (
            <span className="font-medium text-foreground">{phone}</span>
          ) : (
            "your registered phone number"
          )}{" "}
          to ensure your health data remains secure.
        </p>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-6 flex justify-center gap-1 sm:gap-2">
            {code.map((digit, index) => (
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
                className={`h-10 w-9 sm:h-12 sm:w-10 xl:h-14 xl:w-14 rounded-lg border-2 text-center text-base sm:text-xl font-semibold text-foreground bg-surface dark:bg-[#12241d] transition-all focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                  index === 0 ||
                  (digit && index === code.findIndex((c) => c === ""))
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-border dark:border-gray-700"
                }`}
                aria-label={`Digit ${index + 1} of verification code`}
              />
            ))}
          </div>

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

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-bold text-white transition-all hover:bg-primary-dark disabled:opacity-70 disabled:pointer-events-none"
            disabled={isVerifying || code.join("").length !== 6}
          >
            <span className="material-icons-outlined text-lg">check</span>
            <span>
              {isVerifying
                ? "Verifying..."
                : isFromRegister
                  ? "Complete Registration"
                  : "Verify & Login"}
            </span>
          </button>
        </form>

        {error && (
          <p className="mt-3 text-center text-sm text-error" role="alert">
            {error}
          </p>
        )}

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
