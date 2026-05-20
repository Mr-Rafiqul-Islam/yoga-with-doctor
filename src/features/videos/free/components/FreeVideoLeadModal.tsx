"use client";

import { useEffect, useRef, useState } from "react";

import { Modal } from "@/components/Modal";
import { useCreateLeadMutation } from "@/slices/lead";

const inputClass =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground shadow-sm placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200";

const labelClass = "text-sm font-medium text-foreground";

const BD_PHONE_REGEX = /^01[3-9]\d{8}$/;

const SUCCESS_DELAY_MS = 1500;

export type FreeVideoLeadModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  campaignItemId?: string;
};

export function FreeVideoLeadModal({
  isOpen,
  onClose,
  onSuccess,
  campaignItemId,
}: FreeVideoLeadModalProps) {
  const [createLead, { isLoading }] = useCreateLeadMutation();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const successTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearSuccessTimeout = () => {
    if (successTimeoutRef.current) {
      clearTimeout(successTimeoutRef.current);
      successTimeoutRef.current = null;
    }
  };

  const completeSuccessFlow = () => {
    clearSuccessTimeout();
    setShowSuccess(false);
    onSuccess();
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      clearSuccessTimeout();
      setShowSuccess(false);
      setSubmitError(null);
      setPhoneError(null);
    }
  }, [isOpen]);

  useEffect(() => {
    return () => clearSuccessTimeout();
  }, []);

  const handleClose = () => {
    if (showSuccess) {
      completeSuccessFlow();
      return;
    }
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    setPhoneError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const nameRaw = formData.get("name");
    const phoneRaw = formData.get("phone");
    const emailRaw = formData.get("email");

    const name = typeof nameRaw === "string" ? nameRaw.trim() : "";
    const phone = typeof phoneRaw === "string" ? phoneRaw.trim() : "";
    const email = typeof emailRaw === "string" ? emailRaw.trim() : "";

    if (!name || !phone) {
      setSubmitError("Name and phone are required.");
      return;
    }

    if (!BD_PHONE_REGEX.test(phone)) {
      setPhoneError(
        "Phone number must start with 01 and be 11 digits (e.g. 01712345678).",
      );
      return;
    }

    try {
      const result = await createLead({
        name,
        phone,
        ...(email ? { email } : {}),
        ...(campaignItemId ? { campaignItemId } : {}),
        source: "WEB",
      }).unwrap();

      if (!result.success) {
        setSubmitError(
          result.message?.trim() || "Could not submit. Please try again.",
        );
        return;
      }

      setShowSuccess(true);
      successTimeoutRef.current = setTimeout(() => {
        completeSuccessFlow();
      }, SUCCESS_DELAY_MS);
    } catch (err: unknown) {
      const message =
        (err as { data?: { error?: string; message?: string } })?.data?.error ||
        (err as { data?: { message?: string } })?.data?.message ||
        (err as { error?: string })?.error ||
        "Could not submit. Please try again.";
      setSubmitError(message);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={showSuccess ? "You're all set!" : "Watch this free class"}
      className="max-w-md"
    >
      {showSuccess ? (
        <div
          className="flex flex-col items-center py-6 text-center"
          role="status"
          aria-live="polite"
        >
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <span
              className="material-icons-outlined text-5xl text-green-600 dark:text-green-400"
              aria-hidden
            >
              check_circle
            </span>
          </div>
          <h3 className="font-display text-xl font-bold text-foreground">
            Congratulations!
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            You&apos;ve been granted free permission to watch this class. Your
            video will start in a moment.
          </p>
        </div>
      ) : (
        <>
          <p className="mb-6 text-sm text-muted">
            Please share your details to start watching. You only need to do this
            once per day on this device.
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="lead-name" className={labelClass}>
                Full Name <span className="text-primary">*</span>
              </label>
              <input
                id="lead-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lead-phone" className={labelClass}>
                Phone Number <span className="text-primary">*</span>
              </label>
              <input
                id="lead-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="01712345678"
                className={`${inputClass} ${phoneError ? "border-red-500 focus:ring-red-500" : ""}`}
                onChange={(e) => {
                  const value = e.target.value.trim();
                  if (!value) {
                    setPhoneError(null);
                    return;
                  }
                  if (!BD_PHONE_REGEX.test(value) && value.length >= 11) {
                    setPhoneError(
                      "Phone number must start with 01 and be 11 digits (e.g. 01712345678).",
                    );
                  } else {
                    setPhoneError(null);
                  }
                }}
              />
              {phoneError ? (
                <p className="text-xs text-red-500">{phoneError}</p>
              ) : null}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lead-email" className={labelClass}>
                Email Address
              </label>
              <input
                id="lead-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@example.com"
                className={inputClass}
              />
            </div>
            {submitError ? (
              <p className="text-sm text-red-500" role="alert">
                {submitError}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 px-6 text-base font-bold text-white shadow-lg transition-all hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Submitting…" : "Continue to video"}
            </button>
          </form>
        </>
      )}
    </Modal>
  );
}
