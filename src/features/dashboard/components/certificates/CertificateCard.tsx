import type { Certificate } from "@/features/dashboard/data/certificatesData";

type CertificateCardProps = {
  certificate: Certificate;
};

export function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-gray-700 dark:bg-surface-dark">
      <div
        className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${certificate.gradientFrom} ${certificate.gradientTo} p-6`}
      >
        <div className="relative flex h-full w-full flex-col items-center justify-center rounded border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="absolute inset-0 m-2 border-4 border-double border-accent/20" />
          <span
            className={`material-icons-round mb-2 text-4xl ${certificate.iconColor}`}
            aria-hidden
          >
            {certificate.icon}
          </span>
          <div className="mb-2 h-1 w-16 rounded bg-gray-200 dark:bg-gray-600" />
          <div className="h-1 w-24 rounded bg-gray-200 dark:bg-gray-600" />
        </div>
        <span className="absolute right-4 top-4 rounded-md bg-green-100 px-2.5 py-1 text-xs font-bold text-green-700 dark:bg-green-900 dark:text-green-300">
          VERIFIED
        </span>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-start justify-between">
          <div>
            <h3 className="mb-1 text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary dark:text-white">
              {certificate.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{certificate.issuer}</p>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
            <span className="material-icons-round text-accent" aria-hidden>
              workspace_premium
            </span>
          </div>
        </div>
        <div className="mb-4 mt-4 flex items-center space-x-4 text-xs text-gray-400">
          <div className="flex items-center">
            <span className="material-icons-outlined mr-1 text-sm" aria-hidden>
              calendar_today
            </span>
            {certificate.issueDate}
          </div>
          <div className="flex items-center">
            <span className="material-icons-outlined mr-1 text-sm" aria-hidden>
              schedule
            </span>
            {certificate.duration}
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            type="button"
            className="flex flex-1 items-center justify-center rounded-xl bg-primary py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
          >
            <span
              className="material-icons-outlined mr-2 text-sm"
              aria-hidden
            >
              file_download
            </span>
            Download
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
            aria-label="Share certificate"
          >
            <span className="material-icons-outlined" aria-hidden>
              share
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}

