import type { ProfileUser } from "@/features/dashboard/data/profileData";

type ProfilePersonalInfoSectionProps = {
  user: ProfileUser;
};

export function ProfilePersonalInfoSection({
  user,
}: ProfilePersonalInfoSectionProps) {
  return (
    <section className="rounded-2xl border border-border bg-surface p-6 shadow-elevation-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold text-foreground">
          Personal Information
        </h2>
        <button
          type="button"
          className="text-body-md font-semibold text-primary hover:underline"
        >
          Save Changes
        </button>
      </div>
      <form className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="firstName"
              className="mb-2 block text-body-md font-medium text-foreground"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              defaultValue={user.firstName}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-body-md text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-gray-800"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="mb-2 block text-body-md font-medium text-foreground"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              defaultValue={user.lastName}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-body-md text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-gray-800"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-body-md font-medium text-foreground"
          >
            Email Address
          </label>
          <div className="relative">
            <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted text-xl">
              email
            </span>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={user.email}
              readOnly
              className="w-full rounded-lg border border-border bg-gray-100 px-4 py-2.5 pl-10 text-body-md text-muted transition-colors dark:bg-gray-800"
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
            defaultValue={user.bio}
            maxLength={500}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-body-md text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-gray-800"
          />
          <p className="mt-2 text-right text-caption text-muted">
            {user.bio.length}/500 characters
          </p>
        </div>
      </form>
    </section>
  );
}

