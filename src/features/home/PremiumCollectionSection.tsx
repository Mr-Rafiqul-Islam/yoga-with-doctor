import Link from "next/link";

const PREMIUM_ITEMS = [
  { title: "Advanced Flow", subtitle: "Master Yogi Level", icon: "lock" },
  { title: "Mind Clarity", subtitle: "Sound Therapy", icon: "spa" },
  { title: "Back Rehab", subtitle: "Clinical Physio", icon: "healing" },
  { title: "Anxiety Relief", subtitle: "CBT & Yoga", icon: "self_improvement" },
] as const;

export function PremiumCollectionSection() {
  return (
    <section
      className="mx-auto mb-20 max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="premium-heading"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gray-900 shadow-2xl">
        <div
          className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
          aria-hidden
        />
        <div className="relative grid grid-cols-1 items-center gap-8 p-8 md:p-12 lg:grid-cols-2 lg:p-16">
          <div>
            <span className="mb-6 inline-flex items-center rounded-full border border-accent/50 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
              <span className="material-icons-outlined mr-1 text-sm" aria-hidden>
                workspace_premium
              </span>
              Premium Collection
            </span>
            <h2
              id="premium-heading"
              className="font-display text-3xl font-bold leading-tight text-white md:text-4xl"
            >
              Unlock the Complete
              <br />
              <span className="bg-gradient-to-r from-accent to-yellow-200 bg-clip-text text-transparent">
                Medical Yoga Library
              </span>
            </h2>
            <p className="mb-8 max-w-md text-gray-400">
              Get unlimited access to specialized courses for chronic pain,
              post-op recovery, and mental wellness. Curated by top medical
              professionals.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/courses?premium=1"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 font-bold text-gray-900 transition-colors hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Get Premium Access
              </Link>
              <Link
                href="/courses#plans"
                className="inline-flex items-center justify-center rounded-full border border-gray-700 bg-gray-800 px-8 py-3 font-medium text-white transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                View Plans
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {PREMIUM_ITEMS.map(({ title, subtitle, icon }, i) => (
              <div
                key={title}
                className={`rounded-xl border border-gray-700 bg-gray-800 p-4 ${i % 2 === 0 ? "translate-y-4" : "-translate-y-4"}`}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700 text-accent">
                  <span
                    className="material-icons-outlined text-xl"
                    aria-hidden
                  >
                    {icon}
                  </span>
                </div>
                <h3 className="mb-1 font-semibold text-white">{title}</h3>
                <p className="text-xs text-gray-400">{subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
