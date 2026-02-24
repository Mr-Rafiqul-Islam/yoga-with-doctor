import Link from "next/link";
import type { CSSProperties } from "react";

export function StorageSection() {
  const storageUsed = 1.2;
  const storageTotal = 5;
  const storagePercent = (storageUsed / storageTotal) * 100;

  return (
    <section className="mb-6 flex flex-col gap-4 rounded-xl border border-border bg-surface p-4 shadow-elevation-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <span className="material-icons-outlined text-primary text-2xl">
          cloud
        </span>
        <div className="flex-1">
          <p className="mb-1 text-body-md font-medium text-foreground">
            Storage Used
          </p>
          <div className="flex items-center gap-3">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="h-full rounded-full bg-purple-500 transition-all"
                style={{ width: `${storagePercent}%` } as CSSProperties}
              />
            </div>
            <span className="text-caption font-medium text-muted">
              {storageUsed}GB / {storageTotal}GB
            </span>
          </div>
        </div>
      </div>
      <Link
        href="/pricing"
        className="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-body-md font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <span className="material-icons-outlined text-yellow-400 text-lg">
          star
        </span>
        Go Premium
      </Link>
    </section>
  );
}

