"use client";

import { useMergedLibraryCourseCount } from "@/features/dashboard/hooks/useMergedLibraryCourseCount";
import { DashboardProfileCard } from "../DashboardProfileCard";

export function ProfileSummaryCard() {
  const { coursesDisplay } = useMergedLibraryCourseCount();

  return (
    <div>
      <DashboardProfileCard />
      <div className="mt-5 flex w-full items-center justify-between rounded-2xl border-t border-border bg-surface p-6 pt-4 shadow-elevation-sm dark:border-gray-700">
        <div className="text-center">
          <p className="mb-1 font-display text-2xl font-bold text-foreground">
            {coursesDisplay}
          </p>
          <p className="text-caption uppercase tracking-wide text-muted">
            Courses
          </p>
        </div>
        <div className="text-center">
          <p className="mb-1 font-display text-2xl font-bold text-foreground">
            N/A
          </p>
          <p className="text-caption uppercase tracking-wide text-muted">
            Certs
          </p>
        </div>
        <div className="text-center">
          <p className="mb-1 font-display text-2xl font-bold text-primary">
            N/A
          </p>
          <p className="text-caption uppercase tracking-wide text-muted">
            Points
          </p>
        </div>
      </div>
    </div>
  );
}
