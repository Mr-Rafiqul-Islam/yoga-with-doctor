import Link from "next/link";

export function PremiumCollectionHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface dark:border-gray-800 dark:bg-[#1E1E1E]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link
            href="/videos/free"
            className="rounded-full p-2 text-muted transition-colors hover:bg-secondary hover:text-foreground dark:hover:bg-gray-800 dark:hover:text-white"
            aria-label="Go back"
          >
            <span className="material-icons-outlined">arrow_back</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="material-icons-outlined text-accent">workspace_premium</span>
            <h1 className="text-2xl font-bold tracking-tight text-foreground dark:text-white">
              Premium Collection
            </h1>
          </div>
        </div>
        <div className="hidden md:block">
          <Link
            href="/pricing"
            className="rounded-full border border-accent px-6 py-2 font-semibold text-accent transition-colors hover:bg-accent hover:text-gray-900"
          >
            Unlock All
          </Link>
        </div>
      </div>
    </header>
  );
}
