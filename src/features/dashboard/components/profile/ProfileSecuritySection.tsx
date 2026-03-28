"use client";

import { ProfileSecurityChangePassword } from "./ProfileSecurityChangePassword";
import { ProfileSecurityDeleteAccount } from "./ProfileSecurityDeleteAccount";

export function ProfileSecuritySection() {
  return (
    <section className="rounded-2xl border border-border bg-surface p-6 shadow-elevation-sm">
      <h2 className="mb-6 font-display text-2xl font-bold text-foreground">
        Security
      </h2>
      <div className="space-y-6">
        <ProfileSecurityChangePassword />
        <ProfileSecurityDeleteAccount />
      </div>
    </section>
  );
}
