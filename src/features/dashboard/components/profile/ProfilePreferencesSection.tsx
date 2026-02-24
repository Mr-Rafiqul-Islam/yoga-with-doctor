import Link from "next/link";

import type { ProfilePreferences } from "@/features/dashboard/data/profileData";

type ProfilePreferencesSectionProps = {
  preferences: ProfilePreferences;
};

export function ProfilePreferencesSection({
  preferences,
}: ProfilePreferencesSectionProps) {
  return (
    <section className="rounded-2xl border border-border bg-surface p-6 shadow-elevation-sm">
      <h2 className="mb-6 font-display text-2xl font-bold text-foreground">
        Preferences
      </h2>
      <div className="space-y-6">
        <Link
          href="/dashboard/profile/preferences/language"
          className="flex items-center justify-between rounded-lg px-2 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div className="flex items-center gap-3">
            <span
              className="material-icons-outlined text-purple-500 text-xl"
              aria-hidden
            >
              language
            </span>
            <div>
              <p className="text-body-md font-medium text-foreground">
                Language
              </p>
              <p className="text-caption text-muted">
                {preferences.language}
              </p>
            </div>
          </div>
          <span
            className="material-icons-outlined text-muted text-xl"
            aria-hidden
          >
            chevron_right
          </span>
        </Link>

        <Link
          href="/dashboard/profile/preferences/notifications"
          className="flex items-center justify-between rounded-lg px-2 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div className="flex items-center gap-3">
            <span
              className="material-icons-outlined text-teal-500 text-xl"
              aria-hidden
            >
              notifications
            </span>
            <div>
              <p className="text-body-md font-medium text-foreground">
                Notifications
              </p>
              <p className="text-caption text-muted">
                {preferences.notifications}
              </p>
            </div>
          </div>
          <span
            className="material-icons-outlined text-muted text-xl"
            aria-hidden
          >
            chevron_right
          </span>
        </Link>
      </div>
    </section>
  );
}

