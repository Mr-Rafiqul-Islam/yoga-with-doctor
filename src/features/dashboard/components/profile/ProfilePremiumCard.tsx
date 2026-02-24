import Link from "next/link";

export function ProfilePremiumCard() {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-indigo-600/20 bg-gradient-to-br from-slate-950 to-gray-900 p-6 shadow-elevation-md">
      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-2">
          <span
            className="material-icons-outlined text-2xl text-yellow-400"
            aria-hidden
          >
            workspace_premium
          </span>
          <h2 className="font-display text-xl font-bold text-white">
            Go Premium
          </h2>
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
        <span
          className="material-icons-outlined text-6xl text-gray-300"
          aria-hidden
        >
          star
        </span>
      </div>
    </article>
  );
}

