export function DownloadsHeader() {
  return (
    <header className="mb-6">
      <h1 className="mb-2 font-display text-3xl font-bold text-foreground">
        My Downloads Library
      </h1>
      <p className="mb-4 text-body-md text-muted">
        Manage and access your offline resources.
      </p>
      <div className="relative">
        <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted text-xl">
          search
        </span>
        <input
          type="search"
          placeholder="Search downloads..."
          className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 text-body-md text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-gray-800"
        />
      </div>
    </header>
  );
}

