import Image from "next/image";
import Link from "next/link";

const MAINTENANCE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDN5K09yYt4bKsDcI5M5czbsiCxCJbaoTR63-ac9pzYAye_BNehqavEVxrgwupkHIPLGej2HBPCsvEnFGBE61TXaLBJ-4Uggd0qb28xSWbpeD2BGX2hkiyoDK8bu_ispPLdXEGN6GeEuQABZy_SgFDDNIMyHfYbxyrDHs--pkW3Z2mMskYh6KMk9pmKnPajM5FnTwlx8owetD5ffTbCGMg-crlPbd0mf0F8zce9jPtejDoRvCP1MqqWKp92pDTr_DEk6AH08CfUXA";

export interface MaintenanceViewProps {
  /** e.g. "Today, 4:00 PM" */
  estimatedReturn?: string;
  /** Called when "Notify Me" is clicked */
  onNotifyMe?: () => void;
  /** Show the estimated return + Notify Me card */
  showEstimatedReturn?: boolean;
  /** Contact support link (href). Defaults to mailto. */
  contactSupportHref?: string;
  /** Version or footer text, e.g. "v2.4.0 • Yoga With Doctor" */
  versionText?: string;
}

/**
 * Maintenance / "under development" page. Matches the YWD Mindful Maintenance design.
 * Use on routes or sections that are temporarily unavailable.
 */
export function MaintenanceView({
  estimatedReturn = "Today, 4:00 PM",
  onNotifyMe,
  showEstimatedReturn = true,
  contactSupportHref = "mailto:support@yogawithdoctor.com?subject=Maintenance%20inquiry",
  versionText = "v1.0.0 • Yoga With Doctor",
}: MaintenanceViewProps = {}) {
  return (
    <div className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 h-1/2 w-1/2 rounded-bl-[100px] bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10" />
        <div className="absolute bottom-0 left-0 h-1/3 w-1/2 rounded-tr-[100px] bg-gradient-to-t from-green-50/50 to-transparent dark:from-green-900/10" />
      </div>      

      {/* Main */}
      <main className="relative z-10 mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="relative mb-8 aspect-square w-full max-h-[360px]">
          {/* Blur orbs */}
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-200/40 blur-3xl dark:bg-orange-900/20 animate-breathe-slow" />
          <div className="absolute left-1/3 top-1/3 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
          {/* Image */}
          <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl shadow-orange-900/10 ring-1 ring-white/20 dark:shadow-black/40 dark:ring-white/5">
            <Image
              src={MAINTENANCE_IMAGE}
              alt="Serene sunset yoga studio view"
              width={400}
              height={400}
              className="h-full w-full object-cover opacity-90 dark:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          {/* System Refining pill */}
          <div className="absolute bottom-0 left-1/2 flex w-max max-w-[90%] -translate-x-1/2 translate-y-5 items-center gap-3 rounded-full border border-gray-100 bg-surface px-6 py-3 shadow-lg dark:border-gray-700 dark:bg-surface-dark">
            <div className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-orange-500" />
            </div>
            <span className="text-sm font-semibold text-foreground dark:text-gray-200">
              System Refining
            </span>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground dark:text-white md:text-4xl">
            Mindful
            <br />
            <span className="text-primary">Maintenance</span>
          </h1>
          <p className="mx-auto max-w-xs text-base leading-relaxed text-muted dark:text-gray-400">
            We&apos;re currently refining your experience to better serve your health. We&apos;ll be
            back shortly with improvements.
          </p>
        </div>

        {showEstimatedReturn && (
          <div className="mt-10 flex w-full items-center justify-between gap-2 rounded-xl border border-gray-100 bg-surface p-4 shadow-sm dark:border-gray-800 dark:bg-surface-dark">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-500 dark:text-blue-300">
                <span className="material-icons-round text-xl">schedule</span>
              </div>
              <div className="text-left">
                <p className="text-xs font-medium uppercase tracking-wider text-muted dark:text-gray-400">
                  Estimated Return
                </p>
                <p className="font-bold text-foreground dark:text-white">{estimatedReturn}</p>
              </div>
            </div>
            <div className="mx-2 h-8 w-px bg-gray-200 dark:bg-gray-700" />
            <button
              type="button"
              onClick={onNotifyMe}
              className="whitespace-nowrap text-sm font-semibold text-primary transition-colors hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-radius-sm"
            >
              Notify Me
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="z-10 mx-auto w-full max-w-md p-6 pb-10">
        <div className="flex flex-col items-center gap-4">
          <Link
            href={contactSupportHref}
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary dark:text-gray-400"
          >
            <span className="material-icons-round text-base">mail_outline</span>
            <span>Contact Support</span>
          </Link>
          <p className="text-xs text-muted dark:text-gray-500">{versionText}</p>
        </div>
      </footer>
    </div>
  );
}
