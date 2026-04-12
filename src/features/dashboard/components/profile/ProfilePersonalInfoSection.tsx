"use client";

import { useCallback, useEffect, useState } from "react";

import { authApi, useGetCurrentUserQuery, type User } from "@/slices/auth";
import { useUpdateProfileMutation } from "@/slices/profile";
import { useAppDispatch } from "@/stores/hooks";

import { messageFromQueryError } from "../../../../lib/queryErrorMessage";

export function ProfilePersonalInfoSection() {
  const dispatch = useAppDispatch();
  const { data, isLoading: isUserLoading } = useGetCurrentUserQuery();
  const user: User | undefined = data?.data ?? undefined;

  const [updateProfile, { isLoading: isSaving }] = useUpdateProfileMutation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;
    setName(user.name ?? "");
    setEmail(user.email ?? "");
    setAddress(user.address ?? "");
    setBio(user.bio ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps -- re-hydrate form only when user id/revision changes
  }, [user?.id, user?.updatedAt]);

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
    const addressTrim = address.trim();

    const emailPayload = emailTrim === "" ? null : emailTrim;
    const bioPayload = bioTrim === "" ? null : bioTrim;
    const addressPayload = addressTrim === "" ? null : addressTrim;

    const nameChanged = nameTrim !== (user?.name ?? "").trim();
    const emailChanged = emailPayload !== (user?.email ?? null);
    const bioChanged = bioTrim !== (user?.bio ?? "").trim();
    const toAddrPayload = (s: string) =>
      s.trim() === "" ? null : s.trim();
    const addressChanged =
      toAddrPayload(address) !== toAddrPayload(user?.address ?? "");

    if (isSaving || !user) return;

    if (!nameChanged && !emailChanged && !bioChanged && !addressChanged) {
      setInfoMessage("No changes to save.");
      return;
    }

    try {
      await updateProfile({
        name: nameTrim,
        email: emailPayload,
        bio: bioPayload,
        address: addressPayload,
      }).unwrap();

      dispatch(authApi.util.invalidateTags(["Auth"]));
      setInfoMessage("Profile saved successfully.");
    } catch (e) {
      setErrorMessage(messageFromQueryError(e));
    }
  }, [address, bio, dispatch, email, isSaving, name, updateProfile, user]);

  const pending = isSaving;
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
              htmlFor="address"
              className="mb-2 block text-body-md font-medium text-foreground"
            >
              Address
            </label>
            <input
              type='text'
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              autoComplete="street-address"
              placeholder="Street, area, postal code"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-body-md text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-gray-800"
            />
          </div>
        </div>

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
