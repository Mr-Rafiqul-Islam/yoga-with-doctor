import { CERTIFICATE_FILTER_TABS } from "@/features/dashboard/data/certificatesData";

export function FilterAndSortSection() {
  return (
    <section className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <nav
        className="flex space-x-2 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar"
        aria-label="Filter certificates"
      >
        {CERTIFICATE_FILTER_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
              tab.active
                ? "bg-primary text-white shadow-sm"
                : "border border-gray-200 bg-surface text-muted hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            }`}
            aria-pressed={tab.active}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <div className="flex items-center text-sm text-muted">
        <span className="mr-2">Sort by:</span>
        <select className="appearance-none rounded-xl border border-border bg-surface py-2 pl-4 pr-10 text-body-md text-foreground shadow-elevation-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer dark:border-gray-700">
          <option className="text-foreground" value="newest">Newest First</option>
          <option className="text-foreground" value="oldest">Oldest First</option>
          <option className="text-foreground" value="a-z">A-Z</option>
        </select>
      </div>
    </section>
  );
}

