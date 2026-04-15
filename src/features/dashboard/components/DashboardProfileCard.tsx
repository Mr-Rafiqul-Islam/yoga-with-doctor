"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

import { authApi, getToken, useGetCurrentUserQuery, type User } from "@/slices/auth";
import { useUpdateProfileMutation } from "@/slices/profile";
import { useAppDispatch } from "@/stores/hooks";

const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.API_BASE_URL ?? "";

export function DashboardProfileCard() {
  const dispatch = useAppDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"idle" | "uploading" | "saving">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { data } = useGetCurrentUserQuery();
  const user: User | undefined = data?.data ?? undefined;

  const [updateProfile] = useUpdateProfileMutation();

  const openFilePicker = useCallback(() => {
    setErrorMessage(null);
    fileInputRef.current?.click();
  }, []);

  const onFileSelected = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      e.target.value = "";
      if (!file) return;

      setErrorMessage(null);
      const token = getToken();
      if (!token) {
        setErrorMessage("You need to be signed in to update your photo.");
        return;
      }
      if (!apiBaseUrl) {
        setErrorMessage("Upload is not configured. Missing API base URL.");
        return;
      }

      try {
        setStatus("uploading");
        const formData = new FormData();
        formData.append("file", file);

        const uploadRes = await fetch(
          `${apiBaseUrl}/api/v1/client/uploads/image`,
          {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            credentials: "include",
            body: formData,
          }
        );

        const uploadJson = (await uploadRes.json()) as {
          success?: boolean;
          message?: string;
          payload?: {
            optimizedUrl?: string;
            uploadedPublicId?: string;
          };
        };

        const optimizedUrl = uploadJson.payload?.optimizedUrl;
        const uploadedPublicId = uploadJson.payload?.uploadedPublicId;

        if (
          !uploadRes.ok ||
          !uploadJson.success ||
          !optimizedUrl ||
          !uploadedPublicId
        ) {
          setErrorMessage(
            uploadJson.message ?? "Could not upload image."
          );
          setStatus("idle");
          return;
        }

        setStatus("saving");
        await updateProfile({
          profilePicture: optimizedUrl,
          profilePicturePublicId: uploadedPublicId,
        }).unwrap();
        dispatch(authApi.util.invalidateTags(["Auth"]));
        setStatus("idle");
      } catch {
        setErrorMessage("Something went wrong. Please try again.");
        setStatus("idle");
      }
    },
    [dispatch, updateProfile]
  );

  const busy = status !== "idle";

  return (
    <article className="rounded-2xl border border-border bg-surface p-6 shadow-elevation-sm">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 p-0.5">
            {user?.profilePicture ? (
              <div className="h-full w-full overflow-hidden rounded-full bg-surface">
                <Image
                  src={user.profilePicture}
                  alt={user?.name ?? ""}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              <div className="grid h-full w-full place-items-center overflow-hidden rounded-full bg-surface dark:bg-muted">
                <span
                  className="text-5xl font-semibold text-foreground"
                  aria-hidden
                >
                  {user?.name?.charAt(0).toUpperCase() ?? "U"}
                </span>
              </div>
            )}
            {user?.isPremium && (
              <span
                className="absolute -top-0.5 left-0.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-white shadow-md ring-2 ring-surface"
                title="Premium member"
                aria-hidden
              >
                <span className="material-icons-outlined text-base">
                  workspace_premium
                </span>
              </span>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="sr-only"
            tabIndex={-1}
            aria-hidden
            onChange={onFileSelected}
          />
          <button
            type="button"
            onClick={openFilePicker}
            disabled={busy}
            className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shadow-sm transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-80"
            aria-label={
              busy ? "Updating profile picture" : "Edit profile picture"
            }
            aria-busy={busy}
          >
            {busy ? (
              <span
                className="material-icons-outlined animate-spin text-sm"
                aria-hidden
              >
                update
              </span>
            ) : (
              <span className="material-icons-outlined text-sm" aria-hidden>
                edit
              </span>
            )}
          </button>
        </div>
        {errorMessage ? (
          <p className="mb-2 max-w-xs text-body-sm text-destructive" role="alert">
            {errorMessage}
          </p>
        ) : null}
        <h2 className="mb-1 font-display text-xl font-bold text-foreground">
          {user?.name}
        </h2>
        <p className="text-body-md text-muted">{user?.role}</p>
      </div>
    </article>
  );
}
