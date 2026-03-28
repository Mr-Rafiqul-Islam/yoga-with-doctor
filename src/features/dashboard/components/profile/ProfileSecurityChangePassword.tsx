"use client";

import { useCallback, useState } from "react";

import { useChangePasswordMutation } from "@/slices/profile";

import { messageFromQueryError } from "../../../../lib/queryErrorMessage";

export function ProfileSecurityChangePassword() {
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const [formOpen, setFormOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const resetFields = useCallback(() => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setErrorMessage(null);
  }, []);

  const handleToggleForm = useCallback(() => {
    setFormOpen((open) => !open);
    setSuccessMessage(null);
    resetFields();
  }, [resetFields]);

  const handleSubmit = useCallback(async () => {
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!currentPassword || !newPassword) {
      setErrorMessage("Current password and new password are required.");
      return;
    }

    if (newPassword.length < 6) {
      setErrorMessage("New password must be at least 6 characters.");
      return;
    }

    if (currentPassword === newPassword) {
      setErrorMessage(
        "New password must be different from your current password."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("New password and confirmation do not match.");
      return;
    }

    try {
      const res = await changePassword({
        currentPassword,
        newPassword,
        confirmPassword,
      }).unwrap();

      resetFields();
      setFormOpen(false);
      setSuccessMessage(res.message ?? "Password changed successfully.");
    } catch (e) {
      setErrorMessage(messageFromQueryError(e));
    }
  }, [
    changePassword,
    confirmPassword,
    currentPassword,
    newPassword,
    resetFields,
  ]);

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span
            className="material-icons-outlined shrink-0 text-xl text-primary"
            aria-hidden
          >
            lock
          </span>
          <div className="min-w-0">
            <p className="text-body-md font-medium text-foreground">Password</p>
            <p className="text-caption text-muted">
              Update your password to keep your account secure.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleToggleForm}
          className="shrink-0 rounded-lg bg-primary px-4 py-2 text-body-md font-semibold text-white transition-colors hover:bg-primary-dark"
          aria-expanded={formOpen}
        >
          {formOpen ? "Cancel" : "Change"}
        </button>
      </div>

      {formOpen ? (
        <div className="mt-5 space-y-4 rounded-xl border border-border bg-background/50 p-4 dark:bg-gray-900/40">
          {errorMessage ? (
            <p className="text-body-sm text-destructive" role="alert">
              {errorMessage}
            </p>
          ) : null}
          <div>
            <label
              htmlFor="currentPassword"
              className="mb-2 block text-body-sm font-medium text-foreground"
            >
              Current password
            </label>
            <input
              id="currentPassword"
              type="password"
              autoComplete="current-password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-body-md text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-gray-800"
            />
          </div>
          <div>
            <label
              htmlFor="newPassword"
              className="mb-2 block text-body-sm font-medium text-foreground"
            >
              New password
            </label>
            <input
              id="newPassword"
              type="password"
              autoComplete="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-body-md text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-gray-800"
            />
          </div>
          <div>
            <label
              htmlFor="confirmNewPassword"
              className="mb-2 block text-body-sm font-medium text-foreground"
            >
              Confirm new password
            </label>
            <input
              id="confirmNewPassword"
              type="password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-body-md text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-gray-800"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full rounded-lg bg-primary py-2.5 text-body-md font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-6"
          >
            {isLoading ? "Updating…" : "Update password"}
          </button>
        </div>
      ) : null}

      {!formOpen && successMessage ? (
        <p className="mt-3 text-body-sm text-primary" role="status">
          {successMessage}
        </p>
      ) : null}
    </div>
  );
}
