import { DOWNLOAD_FILTER_TABS } from "@/features/dashboard/data/downloadsData";

export function DownloadsFilterTabs() {
  return (
    <nav
      className="mb-6 flex flex-wrap gap-2"
      aria-label="Filter downloads"
    >
      {DOWNLOAD_FILTER_TABS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`rounded-full px-4 py-2 text-body-md font-medium transition-colors ${
            tab.active
              ? "bg-primary text-white"
              : "bg-gray-100 text-foreground hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
          }`}
          aria-pressed={tab.active}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

