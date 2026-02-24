type DownloadsPaginationSectionProps = {
  current: number;
  total: number;
};

export function DownloadsPaginationSection({
  current,
  total,
}: DownloadsPaginationSectionProps) {
  return (
    <footer className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
      <p className="text-body-md text-muted">
        Showing {current} of {total} downloaded items
      </p>
      <button
        type="button"
        className="text-body-md font-semibold text-primary hover:underline"
      >
        Load More
      </button>
    </footer>
  );
}

