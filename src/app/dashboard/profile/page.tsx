import Link from "next/link";
import Image from "next/image";

export default function ProfilePage() {
  // Sample data - in real app, fetch from API or use auth state
  const user = {
    firstName: "Sarah",
    lastName: "Jenkins",
    email: "sarah.jenkins@example.com",
    name: "Sarah Jenkins",
    role: "Wellness Enthusiast",
    avatarSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmyxoefgit0eX7UXZsRMIrbSGPe8QDVaK0Vm8vc6ZlmhNJ52EEXDKavc0GpULLt6SK9SjkEctxDQTeK_Rz3fCH_nd5bxoxEvQDDFN115EaayUVx6nBQSGh_DofxV9RMsOzYGE---aedkqRq9vdejM7rydgWtPND7YMBCJUZ3229gvcrlIA9Jdi4IiJ8-qyi5brPrzSIy-nHltSnVv-vPuu-CmUoDKI3ZWROcJ4_kCazFSjjr8XMgyxTTaoVxXI5CozAcwJwMV9MA",
    bio: "Passionate about holistic wellness and yoga. Certified practitioner looking to expand knowledge in medical wellness.",
  };

  const stats = {
    courses: 15,
    certificates: 12,
    points: "2.5k",
  };

  const security = {
    passwordLastChanged: "3 months ago",
    twoFactorEnabled: false,
  };

  const preferences = {
    language: "English (US)",
    notifications: "Email, Push",
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {/* Left Column: Profile Summary and Quick Actions */}
      <aside className="flex flex-col gap-6 lg:col-span-1">
        {/* User Profile Card */}
        <article className="rounded-2xl border border-border bg-surface p-6 shadow-elevation-sm">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="relative h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 p-0.5">
                <div className="h-full w-full overflow-hidden rounded-full bg-surface">
                  <Image
                    src={user.avatarSrc}
                    alt={user.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <button
                type="button"
                className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shadow-sm transition-colors hover:bg-primary-dark"
                aria-label="Edit profile picture"
              >
                <span className="material-icons-outlined text-sm">edit</span>
              </button>
            </div>
            <h1 className="mb-1 font-display text-xl font-bold text-foreground">{user.name}</h1>
            <p className="mb-6 text-body-md text-muted">{user.role}</p>
            <div className="flex w-full items-center justify-between border-t border-border pt-4 dark:border-gray-700">
              <div className="text-center">
                <p className="mb-1 font-display text-2xl font-bold text-foreground">{stats.courses}</p>
                <p className="text-caption uppercase tracking-wide text-muted">Courses</p>
              </div>
              <div className="text-center">
                <p className="mb-1 font-display text-2xl font-bold text-foreground">{stats.certificates}</p>
                <p className="text-caption uppercase tracking-wide text-muted">Certs</p>
              </div>
              <div className="text-center">
                <p className="mb-1 font-display text-2xl font-bold text-primary">{stats.points}</p>
                <p className="text-caption uppercase tracking-wide text-muted">Points</p>
              </div>
            </div>
          </div>
        </article>

        {/* Go Premium Card */}
        <article className="relative overflow-hidden rounded-2xl border border-indigo-600/20 bg-gradient-to-br from-slate-950 to-gray-900 p-6 shadow-elevation-md">
          <div className="relative z-10">
            <div className="mb-4 flex items-center gap-2">
              <span className="material-icons-outlined text-2xl text-yellow-400">workspace_premium</span>
              <h2 className="font-display text-xl font-bold text-white">Go Premium</h2>
            </div>
            <p className="mb-6 text-body-md text-white/90">
              Unlock all masterclasses and advanced tracking features.
            </p>
            <Link
              href="/pricing"
              className="inline-block rounded-lg bg-primary px-6 py-2.5 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Upgrade
            </Link>
          </div>
          <div className="absolute bottom-0 right-0 opacity-20">
            <span className="material-icons-outlined text-6xl text-gray-300">star</span>
          </div>
        </article>

        {/* Navigation Links Card */}
        <article className="rounded-2xl border border-border bg-surface p-4 shadow-elevation-sm">
          <nav aria-label="Quick navigation">
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/dashboard/wishlist"
                  className="flex items-center justify-between rounded-lg px-4 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-icons-outlined text-red-500 text-xl">favorite</span>
                    <span className="text-body-md font-medium text-foreground">My Wishlist</span>
                  </div>
                  <span className="material-icons-outlined text-muted text-xl">chevron_right</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/library/saved-articles"
                  className="flex items-center justify-between rounded-lg px-4 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-icons-outlined text-blue-500 text-xl">bookmark</span>
                    <span className="text-body-md font-medium text-foreground">Saved Articles</span>
                  </div>
                  <span className="material-icons-outlined text-muted text-xl">chevron_right</span>
                </Link>
              </li>
            </ul>
          </nav>
        </article>
      </aside>

      {/* Right Column: Detailed Information and Settings */}
      <main className="flex flex-col gap-6 lg:col-span-2">
        {/* Personal Information Section */}
        <section className="rounded-2xl border border-border bg-surface p-6 shadow-elevation-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-display text-2xl font-bold text-foreground">Personal Information</h2>
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
                <label htmlFor="firstName" className="mb-2 block text-body-md font-medium text-foreground">
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
                <label htmlFor="lastName" className="mb-2 block text-body-md font-medium text-foreground">
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
              <label htmlFor="email" className="mb-2 block text-body-md font-medium text-foreground">
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
              <label htmlFor="bio" className="mb-2 block text-body-md font-medium text-foreground">
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

        {/* Security and Preferences Sections */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Security Section */}
          <section className="rounded-2xl border border-border bg-surface p-6 shadow-elevation-sm">
            <h2 className="mb-6 font-display text-2xl font-bold text-foreground">Security</h2>
            <div className="space-y-6">
              {/* Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-icons-outlined text-primary text-xl">lock</span>
                  <div>
                    <p className="text-body-md font-medium text-foreground">Password</p>
                    <p className="text-caption text-muted">Last changed {security.passwordLastChanged}</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="rounded-lg bg-primary px-4 py-2 text-body-md font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Change
                </button>
              </div>

              {/* 2FA Auth */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-icons-outlined text-orange-500 text-xl">phone_android</span>
                  <div>
                    <p className="text-body-md font-medium text-foreground">2FA Auth</p>
                    <p className="text-caption text-muted">
                      {security.twoFactorEnabled ? "Currently enabled" : "Currently disabled"}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={security.twoFactorEnabled}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    security.twoFactorEnabled ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
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

          {/* Preferences Section */}
          <section className="rounded-2xl border border-border bg-surface p-6 shadow-elevation-sm">
            <h2 className="mb-6 font-display text-2xl font-bold text-foreground">Preferences</h2>
            <div className="space-y-6">
              {/* Language */}
              <Link
                href="/dashboard/profile/preferences/language"
                className="flex items-center justify-between rounded-lg px-2 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <div className="flex items-center gap-3">
                  <span className="material-icons-outlined text-purple-500 text-xl">language</span>
                  <div>
                    <p className="text-body-md font-medium text-foreground">Language</p>
                    <p className="text-caption text-muted">{preferences.language}</p>
                  </div>
                </div>
                <span className="material-icons-outlined text-muted text-xl">chevron_right</span>
              </Link>

              {/* Notifications */}
              <Link
                href="/dashboard/profile/preferences/notifications"
                className="flex items-center justify-between rounded-lg px-2 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <div className="flex items-center gap-3">
                  <span className="material-icons-outlined text-teal-500 text-xl">notifications</span>
                  <div>
                    <p className="text-body-md font-medium text-foreground">Notifications</p>
                    <p className="text-caption text-muted">{preferences.notifications}</p>
                  </div>
                </div>
                <span className="material-icons-outlined text-muted text-xl">chevron_right</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
