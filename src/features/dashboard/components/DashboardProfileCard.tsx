import Image from "next/image";
import type { DashboardUser } from "@/features/dashboard/data/dashboardData";

type DashboardProfileCardProps = {
  user: DashboardUser;
};

export function DashboardProfileCard({ user }: DashboardProfileCardProps) {
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
        <h2 className="mb-1 font-display text-xl font-bold text-foreground">
          {user.name}
        </h2>
        <p className="text-body-md text-muted">{user.role}</p>
      </div>
    </article>
  );
}
