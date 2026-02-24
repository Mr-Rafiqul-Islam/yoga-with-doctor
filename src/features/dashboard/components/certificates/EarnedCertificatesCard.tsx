type EarnedCertificatesCardProps = {
  count: number;
};

export function EarnedCertificatesCard({ count }: EarnedCertificatesCardProps) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-surface dark:border-gray-800 dark:bg-surface-dark p-6 flex flex-col items-center justify-center text-center shadow-card">
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
        <span
          className="material-icons-round text-accent text-3xl"
          aria-hidden
        >
          emoji_events
        </span>
      </div>
      <span className="mb-1 text-4xl font-bold text-foreground dark:text-white">
        {count}
      </span>
      <span className="text-sm font-medium text-muted">
        Earned Certificates
      </span>
    </article>
  );
}

