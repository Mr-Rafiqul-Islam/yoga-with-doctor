"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import { logoutAction, removeToken } from "@/slices/auth";
import { useDeleteAccountMutation } from "@/slices/profile";
import { useAppDispatch } from "@/stores/hooks";

import { messageFromQueryError } from "../../../../lib/queryErrorMessage";

export function ProfileSecurityDeleteAccount() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [deleteAccount, { isLoading: isDeleting }] = useDeleteAccountMutation();

  const [sectionOpen, setSectionOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmChecked, setConfirmChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleToggle = useCallback(() => {
    setSectionOpen((open) => !open);
    setPassword("");
    setConfirmChecked(false);
    setErrorMessage(null);
  }, []);

  const handleDelete = useCallback(async () => {
    setErrorMessage(null);

    if (!password) {
      setErrorMessage("Enter your password to confirm.");
      return;
    }

    if (!confirmChecked) {
      setErrorMessage("Please confirm that you understand this action.");
      return;
    }

    try {
      await deleteAccount({
        password,
        confirmDelete: true,
        hardDelete: false,
      }).unwrap();

      removeToken();
      dispatch(logoutAction());
      router.replace("/auth/login");
    } catch (e) {
      setErrorMessage(messageFromQueryError(e));
    }
  }, [confirmChecked, deleteAccount, dispatch, password, router]);

  return (
    <div className="rounded-xl border border-error/30 bg-error/5 p-4 dark:bg-error/10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-3">
          <span
            className="material-icons-outlined shrink-0 text-xl text-error"
            aria-hidden
          >
            warning
          </span>
          <div>
            <p className="text-body-md font-semibold text-foreground">
              Delete account
            </p>
            <p className="mt-1 text-caption text-muted">
              Deactivates your account. You will be signed out. This cannot be
              undone from the app without support.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleToggle}
          className="shrink-0 rounded-lg border border-error bg-transparent px-4 py-2 text-body-md font-semibold text-error transition-colors hover:bg-error/10"
          aria-expanded={sectionOpen}
        >
          {sectionOpen ? "Close" : "Delete account"}
        </button>
      </div>

      {sectionOpen ? (
        <div className="mt-4 space-y-4 border-t border-error/20 pt-4">
          <div
            className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-3 text-body-sm text-foreground dark:border-amber-500/30"
            role="alert"
          >
            <p className="font-semibold text-amber-900 dark:text-amber-100">
              Are you sure?
            </p>
            <p className="mt-1 text-amber-900/90 dark:text-amber-100/90">
              You must enter your current password. After deletion you will be
              redirected to sign in.
            </p>
          </div>

          {errorMessage ? (
            <p className="text-body-sm text-error" role="alert">
              {errorMessage}
            </p>
          ) : null}

          <label className="flex cursor-pointer items-start gap-3 text-body-sm text-foreground">
            <input
              type="checkbox"
              checked={confirmChecked}
              onChange={(e) => setConfirmChecked(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-primary focus:ring-primary"
            />
            <span>
              I understand my account will be deactivated and I will lose access
              to this dashboard.
            </span>
          </label>

          <div>
            <label
              htmlFor="deleteAccountPassword"
              className="mb-2 block text-body-sm font-medium text-foreground"
            >
              Confirm with your password
            </label>
            <input
              id="deleteAccountPassword"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-body-md text-foreground focus:border-error focus:outline-none focus:ring-2 focus:ring-error/20 dark:bg-gray-800"
            />
          </div>

          <button
            type="button"
            onClick={handleDelete}
            disabled={isDeleting}
            className="w-full rounded-lg bg-error py-2.5 text-body-md font-semibold text-white transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-6"
          >
            {isDeleting ? "Deleting…" : "Yes, delete my account"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
