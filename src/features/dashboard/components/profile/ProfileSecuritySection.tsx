import type { ProfileSecurity } from "@/features/dashboard/data/profileData";

type ProfileSecuritySectionProps = {
  security: ProfileSecurity;
};

export function ProfileSecuritySection({
  security,
}: ProfileSecuritySectionProps) {
  return (
    <section className="rounded-2xl border border-border bg-surface p-6 shadow-elevation-sm">
      <h2 className="mb-6 font-display text-2xl font-bold text-foreground">
        Security
      </h2>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="material-icons-outlined text-primary text-xl"
              aria-hidden
            >
              lock
            </span>
            <div>
              <p className="text-body-md font-medium text-foreground">
                Password
              </p>
              <p className="text-caption text-muted">
                Last changed {security.passwordLastChanged}
              </p>
            </div>
          </div>
          <button
            type="button"
            className="rounded-lg bg-primary px-4 py-2 text-body-md font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Change
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="material-icons-outlined text-orange-500 text-xl"
              aria-hidden
            >
              phone_android
            </span>
            <div>
              <p className="text-body-md font-medium text-foreground">
                2FA Auth
              </p>
              <p className="text-caption text-muted">
                {security.twoFactorEnabled
                  ? "Currently enabled"
                  : "Currently disabled"}
              </p>
            </div>
          </div>
          <button
            type="button"
            role="switch"
            aria-checked={security.twoFactorEnabled}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              security.twoFactorEnabled
                ? "bg-primary"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
            aria-label="Toggle 2FA authentication"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                security.twoFactorEnabled ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}

