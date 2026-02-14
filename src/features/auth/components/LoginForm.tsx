"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/services/authApi";

// Phone number formatting helper - allows common phone formats
const formatPhoneNumber = (value: string): string => {
  // Allow digits, spaces, hyphens, parentheses, and + for international format
  const cleaned = value.replace(/[^\d+\s\-\(\)]/g, "");
  return cleaned;
};

type LoginFormProps = {
  onLoginSuccess?: (phone: string) => void;
};

/**
 * LoginForm - Right panel component for login page.
 * Contains phone number and password inputs, login button, social auth, and signup link.
 * Uses RTK Query login mutation; on OTP_REQUIRED moves to verify step, on direct success redirects.
 */
export function LoginForm({ onLoginSuccess }: LoginFormProps = {}) {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      const result = await login({
        phone,
        password,
        deviceId: "web-browser",
        platform: "web",
      }).unwrap();

      if (result.message === "OTP_REQUIRED") {
        if (onLoginSuccess) {
          const phoneToVerify =
            "data" in result && result.data && "phone" in result.data
              ? (result.data as { phone: string }).phone
              : phone;
          onLoginSuccess(phoneToVerify);
        }
        return;
      }

      const data = "data" in result ? result.data : null;
      if (data && "accessToken" in data && data.accessToken) {
        router.push("/");
        return;
      }
    } catch (err: unknown) {
      const message =
        (err as { data?: { message?: string }; error?: string })?.data
          ?.message ||
        (err as { error?: string })?.error ||
        "Login failed. Please check your credentials.";
      setError(message);
    }
  };

  return (
    <div className="flex w-full flex-col justify-center p-8 lg:w-1/2 lg:p-16">
      <div className="mb-10 text-center lg:text-left">
        <h2 className="mb-3 font-serif text-4xl text-foreground">
          Welcome Back
        </h2>
        <p className="text-base text-muted dark:text-gray-400">
          Enter your credentials to access your wellness dashboard.
        </p>
      </div>

      {error && (
        <div
          className="rounded-xl border border-error/30 bg-error/10 px-4 py-3 text-sm text-error"
          role="alert"
        >
          {error}
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSubmit}>
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
            placeholder="+880 1234567890"
            className="h-14 w-full rounded-xl border border-border bg-surface px-4 text-base text-foreground outline-none transition-all placeholder:text-muted focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-[#12241d]"
            required
            aria-required="true"
            aria-label="Phone number"
            pattern="[+]?[0-9\s\-\(\)]+"
          />
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-sm font-medium text-foreground dark:text-gray-200"
            >
              Password
            </label>
            <Link
              href="/auth/forgot-password"
              className="text-sm font-medium text-primary hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="h-14 w-full rounded-xl border border-border bg-surface px-4 pr-12 text-base text-foreground outline-none transition-all placeholder:text-muted focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-[#12241d]"
              required
              aria-required="true"
              aria-label="Password"
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
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark disabled:opacity-70"
        >
          {isLoading ? (
            <span>Signing in…</span>
          ) : (
            <>
              <span>Login</span>
              <span className="material-icons-outlined text-lg">arrow_forward</span>
            </>
          )}
        </button>
      </form>

      {/* Social Auth for future implementation*/}
      {/* <div className="mt-8">
        <div className="relative flex items-center py-4">
          <div className="flex-grow border-t border-gray-100 dark:border-gray-800" />
          <span className="mx-4 flex-shrink text-xs font-medium uppercase tracking-widest text-muted">
            Or continue with
          </span>
          <div className="flex-grow border-t border-gray-100 dark:border-gray-800" />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <button
            type="button"
            className="flex h-12 items-center justify-center gap-2 rounded-xl border border-border transition-all hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-white/5"
            aria-label="Sign in with Google"
          >
            <img
              alt="Google Logo"
              className="size-5"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx-GJv_JowgjD1qcERl7mnDR_4cEsg6rSNmJUoE1W2NN1tBdsQqVYnoczrHNvbjdFXC8RpTmiixxmS0AufO-CbvqR-MMMiK0Ivy6DOAKXbzOXqkI2m-Zy-xjIXnvaisHVJVUQNnDWczpCddM4pHTysPDrm2A9Lr5yPIrV9qm-WuacEAVktNUochRmIY9KGS78kyGYB9jj2hbOC2E3HlJMN1aQRk99QyoownEoIu_5NmtAuapAmZuRNWXpQAbAhmY7cOP_Xad2lsQ"
            />
            <span className="text-sm font-medium text-foreground dark:text-gray-300">
              Google
            </span>
          </button>
          <button
            type="button"
            className="flex h-12 items-center justify-center gap-2 rounded-xl border border-border transition-all hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-white/5"
            aria-label="Sign in with Apple"
          >
            <span className="material-icons-outlined text-xl text-foreground dark:text-gray-200">
              ios
            </span>
            <span className="text-sm font-medium text-foreground dark:text-gray-300">
              Apple
            </span>
          </button>
        </div>
      </div> */}

      {/* Footer Link */}
      <p className="mt-10 text-center text-sm text-muted dark:text-gray-400">
        New here?{" "}
        <Link href="/auth/signup" className="ml-1 font-bold text-primary hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
}
