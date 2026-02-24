import Image from "next/image";

import type {
  ProfileStats,
  ProfileUser,
} from "@/features/dashboard/data/profileData";

type ProfileSummaryCardProps = {
  user: ProfileUser;
  stats: ProfileStats;
};

export function ProfileSummaryCard({ user, stats }: ProfileSummaryCardProps) {
  return (
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
            <span className="material-icons-outlined text-sm" aria-hidden>
              edit
            </span>
          </button>
        </div>
        <h1 className="mb-1 font-display text-xl font-bold text-foreground">
          {user.name}
        </h1>
        <p className="mb-6 text-body-md text-muted">{user.role}</p>
        <div className="flex w-full items-center justify-between border-t border-border pt-4 dark:border-gray-700">
          <div className="text-center">
            <p className="mb-1 font-display text-2xl font-bold text-foreground">
              {stats.courses}
            </p>
            <p className="text-caption uppercase tracking-wide text-muted">
              Courses
            </p>
          </div>
          <div className="text-center">
            <p className="mb-1 font-display text-2xl font-bold text-foreground">
              {stats.certificates}
            </p>
            <p className="text-caption uppercase tracking-wide text-muted">
              Certs
            </p>
          </div>
          <div className="text-center">
            <p className="mb-1 font-display text-2xl font-bold text-primary">
              {stats.points}
            </p>
            <p className="text-caption uppercase tracking-wide text-muted">
              Points
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

