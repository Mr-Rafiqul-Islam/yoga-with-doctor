

import type {
  ProfileStats,
} from "@/features/dashboard/data/profileData";
import { DashboardProfileCard } from "../DashboardProfileCard";

type ProfileSummaryCardProps = {
  stats: ProfileStats;
};

export function ProfileSummaryCard({ stats }: ProfileSummaryCardProps) {
  return (
    <div>
      <DashboardProfileCard />
      <div className="rounded-2xl flex w-full items-center justify-between border-t border-border pt-4 dark:border-gray-700 bg-surface p-6 mt-5 shadow-elevation-sm">
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
  );
}
