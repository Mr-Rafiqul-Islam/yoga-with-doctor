"use client";

import { useState } from "react";
import Link from "next/link";

// Phone number formatting helper - allows common phone formats
const formatPhoneNumber = (value: string): string => {
  // Allow digits, spaces, hyphens, parentheses, and + for international format
  const cleaned = value.replace(/[^\d+\s\-\(\)]/g, "");
  return cleaned;
};

type RegisterFormProps = {
  onRegisterSuccess?: (email: string, phone: string) => void;
};

/**
 * RegisterForm - Right panel component for registration page.
 * Contains full name, email, phone number, password inputs, and create account button.
 */
export function RegisterForm({ onRegisterSuccess }: RegisterFormProps = {}) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement actual registration API call
    // For now, simulate success and move to verification step
    if (onRegisterSuccess) {
      onRegisterSuccess(email, phone);
    }
  };

  const validatePassword = (pwd: string): boolean => {
    return pwd.length >= 8 && /\d/.test(pwd);
  };

  const isPasswordValid = validatePassword(password);

  return (
    <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:p-16">
      <div className="mb-10 text-center lg:text-left">
        <h2 className="mb-3 font-serif text-4xl text-foreground">
          Create your account
        </h2>
        <p className="text-base text-muted dark:text-gray-400">
          Join over 10,000+ members on their wellness journey.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Full Name Field */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-foreground dark:text-gray-200"
          >
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Dr. Jane Smith"
            className="h-14 w-full rounded-xl border border-border bg-surface px-4 text-base text-foreground outline-none transition-all placeholder:text-muted focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-[#12241d]"
            required
            aria-required="true"
            aria-label="Full name"
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground dark:text-gray-200"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            className="h-14 w-full rounded-xl border border-border bg-surface px-4 text-base text-foreground outline-none transition-all placeholder:text-muted focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-[#12241d]"
            required
            aria-required="true"
            aria-label="Email address"
          />
        </div>

        {/* Phone Number Field */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-foreground dark:text-gray-200"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => {
              const formatted = formatPhoneNumber(e.target.value);
              setPhone(formatted);
            }}
            placeholder="+1 (555) 123-4567"
            className="h-14 w-full rounded-xl border border-border bg-surface px-4 text-base text-foreground outline-none transition-all placeholder:text-muted focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-[#12241d]"
            required
            aria-required="true"
            aria-label="Phone number"
            pattern="[+]?[0-9\s\-\(\)]+"
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-foreground dark:text-gray-200"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={`h-14 w-full rounded-xl border bg-surface px-4 pr-12 text-base text-foreground outline-none transition-all placeholder:text-muted focus:ring-1 dark:bg-[#12241d] ${
                password && !isPasswordValid
                  ? "border-error focus:border-error focus:ring-error"
                  : "border-border focus:border-primary focus:ring-primary dark:border-gray-700"
              }`}
              required
              aria-required="true"
              aria-label="Password"
              aria-invalid={password ? !isPasswordValid : undefined}
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

        {/* Create Account Button */}
        <button
          type="submit"
          className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!isPasswordValid || !fullName || !email || !phone}
        >
          <span>Create Account</span>
        </button>
      </form>

      {/* Security Indicators */}
      <div className="mt-6 flex items-center justify-center gap-6 text-xs">
        <div className="flex items-center gap-2 text-muted">
          <span className="material-icons-outlined text-base">lock</span>
          <span className="font-medium uppercase tracking-wide">HIPAA COMPLIANT</span>
        </div>
        <div className="flex items-center gap-2 text-muted">
          <span className="material-icons-outlined text-base">shield</span>
          <span className="font-medium uppercase tracking-wide">DATA PRIVACY SECURE</span>
        </div>
      </div>

      {/* Footer Link */}
      <p className="mt-10 text-center text-sm text-muted dark:text-gray-400">
        Already have an account?{" "}
        <Link href="/auth/login" className="ml-1 font-bold text-primary hover:underline">
          Log In
        </Link>
      </p>
    </div>
  );
}
