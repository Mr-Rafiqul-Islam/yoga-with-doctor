"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RegisterHeroSection } from "./RegisterHeroSection";
import { RegisterForm } from "./RegisterForm";
import { VerifyIdentityForm } from "./VerifyIdentityForm";

/**
 * RegisterPageContent - Manages the registration flow with two steps:
 * 1. Registration form (full name, email, phone, password)
 * 2. OTP verification form
 */
export function RegisterPageContent() {
  const router = useRouter();
  const [step, setStep] = useState<"register" | "verify">("register");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegisterSuccess = (userEmail: string, userPhone: string) => {
    setEmail(userEmail);
    setPhone(userPhone);
    setStep("verify");
  };

  const handleBackToRegister = () => {
    setStep("register");
    setEmail("");
    setPhone("");
  };

  const handleCompleteRegistration = () => {
    // Redirect to login page after successful verification
    router.push("/auth/login");
  };

  return (
    <div className="flex w-full max-w-[1100px] flex-col overflow-hidden rounded-xl bg-surface shadow-2xl lg:flex-row dark:bg-[#1a2e26]">
      <RegisterHeroSection />
      {step === "register" ? (
        <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
      ) : (
        <div className="flex w-full items-center justify-center p-8 lg:w-1/2 lg:p-16">
          <VerifyIdentityForm
            email={email}
            phone={phone}
            onBack={handleBackToRegister}
            isFromRegister={true}
            onComplete={handleCompleteRegistration}
          />
        </div>
      )}
    </div>
  );
}
