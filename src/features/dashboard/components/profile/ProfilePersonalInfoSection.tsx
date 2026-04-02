"use client";

import { useCallback, useEffect, useState } from "react";

import { authApi, useGetCurrentUserQuery, type User } from "@/slices/auth";
import {
  useRequestPhoneChangeOtpMutation,
  useUpdateProfileMutation,
} from "@/slices/profile";
import { useAppDispatch } from "@/stores/hooks";

import { messageFromQueryError } from "../../../../lib/queryErrorMessage";

export function ProfilePersonalInfoSection() {
  const dispatch = useAppDispatch();
  const { data, isLoading: isUserLoading } = useGetCurrentUserQuery();
  const user: User | undefined = data?.data ?? undefined;

  const [updateProfile, { isLoading: isSaving }] = useUpdateProfileMutation();
  const [requestPhoneOtp, { isLoading: isSendingOtp }] =
    useRequestPhoneChangeOtpMutation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [otp, setOtp] = useState("");
  const [otpRequestedFor, setOtpRequestedFor] = useState<string | null>(null);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;
    setName(user.name ?? "");
    setPhone(user.phone ?? "");
    setEmail(user.email ?? "");
    setBio(user.bio ?? "");
    setOtp("");
    setOtpRequestedFor(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- re-hydrate form only when user id/revision changes
  }, [user?.id, user?.updatedAt]);

  useEffect(() => {
    if (otpRequestedFor === null) return;
    if (phone.trim() !== otpRequestedFor) {
      setOtpRequestedFor(null);
      setOtp("");
      setInfoMessage(null);
    }
  }, [phone, otpRequestedFor]);

  const handleSave = useCallback(async () => {
    setErrorMessage(null);
    setInfoMessage(null);

    const nameTrim = name.trim();
    if (!nameTrim) {
      setErrorMessage("Name cannot be empty.");
      return;
    }

    const emailTrim = email.trim();
    if (emailTrim && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    const bioTrim = bio.trim().slice(0, 500);
    const phoneTrim = phone.trim();
    const currentPhone = (user?.phone ?? "").trim();
    const phoneChanged = phoneTrim !== currentPhone;

    const emailPayload = emailTrim === "" ? null : emailTrim;
    const bioPayload = bioTrim === "" ? null : bioTrim;
    const nameChanged = nameTrim !== (user?.name ?? "").trim();
    const emailChanged = emailPayload !== (user?.email ?? null);
    const bioChanged = bioTrim !== (user?.bio ?? "").trim();
    const otherFieldsChanged = nameChanged || emailChanged || bioChanged;

    const busy = isSaving || isSendingOtp;
    if (busy || !user) return;

    try {
      if (phoneChanged) {
        const otpTrim = otp.trim();
        if (!otpTrim) {
          if (otherFieldsChanged) {
            await updateProfile({
              name: nameTrim,
              email: emailPayload,
              bio: bioPayload,
            }).unwrap();
            // Do not invalidate auth yet — refetch would reset this form and clear the new phone before OTP.
          }
          await requestPhoneOtp({ phone: phoneTrim }).unwrap();
          setOtpRequestedFor(phoneTrim);
          setInfoMessage(
            otherFieldsChanged
              ? "Other details saved. We sent a code to your new number — enter it below and save again to update your phone."
              : "We sent a verification code to your new number. Enter it below and click Save again."
          );
          return;
        }

        await updateProfile({
          name: nameTrim,
          email: emailPayload,
          bio: bioPayload,
          phone: phoneTrim,
          otp: otpTrim,
        }).unwrap();
        setOtp("");
        setOtpRequestedFor(null);
      } else {
        if (!otherFieldsChanged) {
          setInfoMessage("No changes to save.");
          return;
        }
        await updateProfile({
          name: nameTrim,
          email: emailPayload,
          bio: bioPayload,
        }).unwrap();
      }

      dispatch(authApi.util.invalidateTags(["Auth"]));
      setInfoMessage("Profile saved successfully.");
    } catch (e) {
      setErrorMessage(messageFromQueryError(e));
    }
  }, [
    bio,
    dispatch,
    email,
    isSaving,
    isSendingOtp,
    name,
    otp,
    phone,
    requestPhoneOtp,
    updateProfile,
    user,
  ]);

  const pending = isSaving || isSendingOtp;
  const bioLen = bio.length;

  return (
    <section className="rounded-2xl border border-border bg-surface p-6 shadow-elevation-sm">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="font-display text-2xl font-bold text-foreground">
          Personal Information
        </h2>
        <button
          type="button"
          onClick={handleSave}
          disabled={pending || isUserLoading || !user}
          className="shrink-0 text-body-md font-semibold text-primary hover:underline disabled:cursor-not-allowed disabled:opacity-50"
        >
          {pending ? "Saving…" : "Save Changes"}
        </button>
      </div>

      {errorMessage ? (
        <p className="mb-4 text-body-sm text-destructive" role="alert">
          {errorMessage}
        </p>
      ) : null}
      {infoMessage ? (
        <p className="mb-4 text-body-sm text-primary" role="status">
          {infoMessage}
        </p>
      ) : null}

      <div className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 block text-body-md font-medium text-foreground"
            >
              Full name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-body-md text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-gray-800"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-body-md font-medium text-foreground"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-body-md text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-gray-800"
            />
            {otpRequestedFor ? (
              <p className="mt-1.5 text-caption text-muted">
                Changing your number requires a code sent to the new phone.
              </p>
            ) : null}
          </div>
        </div>

        {otpRequestedFor && phone.trim() === otpRequestedFor ? (
          <div>
            <label
              htmlFor="phoneOtp"
              className="mb-2 block text-body-md font-medium text-foreground"
            >
              Verification code
            </label>
            <input
              type="text"
              id="phoneOtp"
              name="phoneOtp"
              inputMode="numeric"
              autoComplete="one-time-code"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\s/g, ""))}
              placeholder="Enter the code from SMS"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-body-md text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-gray-800"
            />
          </div>
        ) : null}

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-body-md font-medium text-foreground"
          >
            Email address
          </label>
          <div className="relative">
            <span className="material-icons-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xl text-muted">
              email
            </span>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 pl-10 text-body-md text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-gray-800"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="bio"
            className="mb-2 block text-body-md font-medium text-foreground"
          >
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            rows={4}
            value={bio}
            maxLength={500}
            onChange={(e) => setBio(e.target.value.slice(0, 500))}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-body-md text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-gray-800"
          />
          <p className="mt-2 text-right text-caption text-muted">
            {bioLen}/500 characters
          </p>
        </div>
      </div>
    </section>
  );
}
