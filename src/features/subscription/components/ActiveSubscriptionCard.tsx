import Link from "next/link";

export interface ActiveSubscriptionCardProps {
  planName: string;
  description: string;
  nextBillingDate: string;
  amount: string;
  period: string;
  progressPercent?: number;
  manageHref?: string;
}

export function ActiveSubscriptionCard({
  planName,
  description,
  nextBillingDate,
  amount,
  period,
  progressPercent = 75,
  manageHref = "#",
}: ActiveSubscriptionCardProps) {
  return (
    <section aria-labelledby="current-subscription-heading">
      <div className="relative w-full overflow-hidden rounded-3xl shadow-soft group">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary to-[#007f50] opacity-100" />
        <div className="absolute top-0 right-0 h-64 w-64 -translate-y-1/2 translate-x-1/4 rounded-full bg-white opacity-5 blur-2xl" />
        <div className="absolute bottom-0 left-0 h-48 w-48 translate-y-1/2 -translate-x-1/4 rounded-full bg-black opacity-10 blur-xl" />
        <div className="relative z-10 flex flex-col justify-between gap-8 p-8 md:flex-row md:items-center md:p-10">
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between gap-4 md:justify-start">
              <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                Active Plan
              </span>
              <span className="material-icons-round text-3xl text-white/80 md:hidden">diamond</span>
            </div>
            <div>
              <h2 id="current-subscription-heading" className="mb-2 text-3xl font-bold text-white md:text-4xl">
                {planName}
              </h2>
              <p className="max-w-md text-sm text-white/80 md:block hidden md:text-base">{description}</p>
            </div>
            <div className="h-1.5 w-full max-w-md overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-white"
                style={{ width: `${progressPercent}%` } as React.CSSProperties}
              />
            </div>
          </div>
          <div className="flex h-full flex-col justify-between gap-4 md:items-end">
            <span className="material-icons-round hidden text-5xl text-white opacity-80 md:block">
              diamond
            </span>
            <div className="text-white md:text-right flex flex-row justify-between md:block ">
              <div>

              <p className="mb-1 text-sm opacity-80">Next Billing Date</p>
              <p className="mb-4 text-xl font-medium">{nextBillingDate}</p>
              </div>
              <div className="flex items-baseline gap-1 md:justify-end">
                <span className="md:text-4xl text-2xl font-bold">{amount}</span>
                <span className="md:text-sm text-xs font-medium opacity-80">{period}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between px-2">
        <p className="text-sm text-muted">
          Your subscription will automatically renew unless canceled.
        </p>
        <Link
          href={manageHref}
          className="hidden items-center text-sm font-medium text-primary transition-colors hover:underline hover:text-primary-dark md:flex"
        >
          Manage Details
          <span className="material-icons-round ml-1 text-sm">open_in_new</span>
        </Link>
      </div>
    </section>
  );
}
