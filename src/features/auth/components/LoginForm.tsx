"use client";

import { useState } from "react";
import Link from "next/link";
import { establishNextAuthSessionFromStoredTokens } from "@/lib/auth/client";
import { useLoginMutation } from "@/slices/auth";
import { getDeviceId } from "@/utils/deviceId";

export function LoginForm({
  onLoginSuccess,
  postLoginPath = "/dashboard",
}: {
  onLoginSuccess?: (phone: string) => void;
  /** Sanitized pathname after login (e.g. from `returnTo` query). */
  postLoginPath?: string;
} = {}) {
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
        deviceId: await getDeviceId(),
        platform: "web",
      }).unwrap();

      if (result.message === "OTP_REQUIRED") {
        // Backend may return a masked phone (e.g. 018***93061). We want to show the real input phone.
        onLoginSuccess?.(phone);
        return;
      }

      const data = "data" in result ? result.data : null;
      if (data && "accessToken" in data && data.accessToken) {
        const sessionRes = await establishNextAuthSessionFromStoredTokens(
          postLoginPath
        );
        if (!sessionRes.ok) {
          setError(sessionRes.error ?? "Could not start session. Try again.");
          return;
        }
        window.location.assign(
          `${window.location.origin}${postLoginPath.startsWith("/") ? postLoginPath : `/${postLoginPath}`}`
        );
        return;
      }
    } catch (err: unknown) {
      const message =
        (err as { data?: { message?: string }; error?: string })?.data?.message ||
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
            onChange={(e) => setPhone(e.target.value)}
            placeholder="01234567890"
            className="h-14 w-full rounded-xl border border-border bg-surface px-4 text-base text-foreground outline-none transition-all placeholder:text-muted focus:border-primary focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-[#12241d]"
            required
            aria-required="true"
            aria-label="Phone number"
            pattern="[+]?[0-9\s\-\(\)]+"
          />
        </div>

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

      <p className="mt-10 text-center text-sm text-muted dark:text-gray-400">
        New here?{" "}
        <Link href="/auth/signup" className="ml-1 font-bold text-primary hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
}
