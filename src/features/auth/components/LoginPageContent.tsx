"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { sanitizePostLoginPath } from "@/lib/auth/postLoginRedirect";
import { AuthHeroSection } from "./AuthHeroSection";
import { LoginForm } from "./LoginForm";
import { VerifyIdentityForm } from "./VerifyIdentityForm";

/**
 * LoginPageContent - Manages the login flow with two steps:
 * 1. Login form (phone number)
 * 2. OTP verification form
 */
export function LoginPageContent() {
  const searchParams = useSearchParams();
  const postLoginPath = useMemo(
    () => sanitizePostLoginPath(searchParams.get("returnTo")),
    [searchParams]
  );
  const [step, setStep] = useState<"login" | "verify">("login");
  const [phone, setPhone] = useState("");

  const handleLoginSuccess = (userPhone: string) => {
    setPhone(userPhone);
    setStep("verify");
  };

  const handleBackToLogin = () => {
    setStep("login");
    setPhone("");
  };

  return (
    <div className="flex w-full max-w-[1100px] flex-col overflow-hidden rounded-xl bg-surface shadow-2xl lg:flex-row dark:bg-[#1a2e26]">
      <AuthHeroSection />
      {step === "login" ? (
        <LoginForm
          onLoginSuccess={handleLoginSuccess}
          postLoginPath={postLoginPath}
        />
      ) : (
        <div className="flex w-full items-center justify-center p-8 lg:w-1/2 lg:p-16">
          <VerifyIdentityForm
            phone={phone}
            onBack={handleBackToLogin}
            postLoginPath={postLoginPath}
          />
        </div>
      )}
    </div>
  );
}
