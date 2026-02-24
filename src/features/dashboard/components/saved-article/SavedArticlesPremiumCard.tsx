import Link from "next/link";

export function SavedArticlesPremiumCard() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-indigo-600/20 bg-gradient-to-br from-slate-950 to-gray-900 p-6 shadow-elevation-md">
      <div className="relative z-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span
            className="material-icons-outlined text-2xl text-yellow-400"
            aria-hidden
          >
            workspace_premium
          </span>
          <div>
            <h2 className="mb-1 font-display text-xl font-bold text-white">
              Go Premium
            </h2>
            <p className="text-body-md text-white/90">
              Unlock all masterclasses, advanced tracking features, and
              unlimited article saves.
            </p>
          </div>
        </div>
        <Link
          href="/pricing"
          className="shrink-0 rounded-lg bg-primary px-6 py-2.5 font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Upgrade Now
        </Link>
      </div>
    </section>
  );
}

