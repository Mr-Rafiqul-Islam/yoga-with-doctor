import Link from "next/link";

export function DashboardPremiumCard() {
  return (
    <article className="col-span-3 rounded-2xl border border-indigo-600/20 bg-gradient-to-r from-gray-950 to-slate-900 p-6 shadow-elevation-md lg:col-span-3">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span
            className="material-icons-outlined text-3xl text-yellow-400"
            aria-hidden
          >
            workspace_premium
          </span>
          <div>
            <h3 className="mb-1 font-display text-xl font-bold text-white">
              Go Premium
            </h3>
            <p className="text-body-md text-white/90">
              Unlock all masterclasses and advanced tracking features for better
              health.
            </p>
          </div>
        </div>
        <Link
          href="/pricing"
          className="shrink-0 rounded-lg bg-primary px-6 py-2.5 font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Upgrade
        </Link>
      </div>
    </article>
  );
}
