import Link from "next/link";



type DownloadItem = {
  id: string;
  title: string;
  size: string;
  downloadedAt: string;
  type: "PDF" | "VIDEO" | "AUDIO" | "ARCHIVE";
  status: "COMPLETED" | "DOWNLOADING" | "PAUSED";
  progress?: number; // 0-100 for downloading items
  remainingTime?: string;
  totalSize?: string; // For downloading items
  icon: string;
  iconColor: string;
  actionLink: string;
  actionLabel: string;
  actionButtonLabel: string;
  actionButtonIcon: string;
};

const downloadItems: DownloadItem[] = [
  {
    id: "1",
    title: "Holistic Nutrition Plan",
    size: "2.4 MB",
    downloadedAt: "Downloaded 2h ago",
    type: "PDF",
    status: "COMPLETED",
    icon: "description",
    iconColor: "text-purple-600",
    actionLink: "#",
    actionLabel: "View Course Details",
    actionButtonLabel: "Re-download",
    actionButtonIcon: "download",
  },
  {
    id: "2",
    title: "Morning Yoga Routine",
    size: "156 MB",
    downloadedAt: "Downloaded Yesterday",
    type: "VIDEO",
    status: "COMPLETED",
    icon: "play_circle",
    iconColor: "text-pink-600",
    actionLink: "#",
    actionLabel: "Watch Preview",
    actionButtonLabel: "Play Offline",
    actionButtonIcon: "play_arrow",
  },
  {
    id: "3",
    title: "Meditation for Sleep",
    size: "12 MB",
    downloadedAt: "Downloaded 3d ago",
    type: "AUDIO",
    status: "COMPLETED",
    icon: "headphones",
    iconColor: "text-blue-600",
    actionLink: "#",
    actionLabel: "Track Details",
    actionButtonLabel: "Listen",
    actionButtonIcon: "play_arrow",
  },
  {
    id: "4",
    title: "Advanced Anatomy",
    size: "450 MB",
    downloadedAt: "Downloaded 1w ago",
    type: "ARCHIVE",
    status: "COMPLETED",
    icon: "folder",
    iconColor: "text-yellow-600",
    actionLink: "#",
    actionLabel: "View Contents",
    actionButtonLabel: "Open",
    actionButtonIcon: "folder_open",
  },
  {
    id: "5",
    title: "Ayurveda Basics.pdf",
    size: "3.2 MB / 8.5 MB",
    downloadedAt: "45s remaining",
    type: "PDF",
    status: "DOWNLOADING",
    progress: 38,
    remainingTime: "45s remaining",
    totalSize: "8.5 MB",
    icon: "download",
    iconColor: "text-gray-600",
    actionLink: "#",
    actionLabel: "",
    actionButtonLabel: "Pause",
    actionButtonIcon: "pause",
  },
  {
    id: "6",
    title: "Evening Stretch Routine",
    size: "102 MB",
    downloadedAt: "Downloaded 2w ago",
    type: "VIDEO",
    status: "COMPLETED",
    icon: "play_circle",
    iconColor: "text-pink-600",
    actionLink: "#",
    actionLabel: "Watch Preview",
    actionButtonLabel: "Play Offline",
    actionButtonIcon: "play_arrow",
  },
];

const filterTabs = [
  { id: "all", label: "All Files", active: true },
  { id: "pdf", label: "PDF Guides", active: false },
  { id: "videos", label: "Videos", active: false },
  { id: "audio", label: "Audio", active: false },
] as const;



function DownloadsHeader() {
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

function StorageSection() {
  const storageUsed = 1.2;
  const storageTotal = 5;
  const storagePercent = (storageUsed / storageTotal) * 100;

  return (
    <section className="mb-6 flex flex-col gap-4 rounded-xl border border-border bg-surface p-4 shadow-elevation-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <span className="material-icons-outlined text-primary text-2xl">
          cloud
        </span>
        <div className="flex-1">
          <p className="mb-1 text-body-md font-medium text-foreground">
            Storage Used
          </p>
          <div className="flex items-center gap-3">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className="h-full rounded-full bg-purple-500 transition-all"
                style={{ width: `${storagePercent}%` } as React.CSSProperties}
              />
            </div>
            <span className="text-caption font-medium text-muted">
              {storageUsed}GB / {storageTotal}GB
            </span>
          </div>
        </div>
      </div>
      <Link
        href="/dashboard/subscription"
        className="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-body-md font-semibold text-white transition-colors hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <span className="material-icons-outlined text-yellow-400 text-lg">
          star
        </span>
        Go Premium
      </Link>
    </section>
  );
}

function FilterTabs({ tabs }: { tabs: typeof filterTabs }) {
  return (
    <nav className="mb-6 flex flex-wrap gap-2" aria-label="Filter downloads">
      {tabs.map((tab) => (
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

function DownloadCard({ item }: { item: DownloadItem }) {
  const isDownloading = item.status === "DOWNLOADING";

  return (
    <article className="group relative rounded-xl border border-border bg-surface p-5 shadow-elevation-sm transition-shadow hover:shadow-elevation-md">
      {isDownloading && (
        <button
          type="button"
          className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full text-muted transition-colors hover:bg-gray-100 hover:text-foreground dark:hover:bg-gray-800"
          aria-label="Cancel download"
        >
          <span className="material-icons-outlined text-sm">close</span>
        </button>
      )}
      <div className="mb-4 flex items-start gap-4">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800`}
        >
          <span
            className={`material-icons-outlined text-2xl ${item.iconColor}`}
          >
            {item.icon}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="mb-1 line-clamp-2 font-display text-lg font-bold text-foreground group-hover:text-primary">
            {item.title}
          </h3>
          <p className="text-caption text-muted">
            {item.size} • {item.downloadedAt}
          </p>
        </div>
      </div>
      {isDownloading && item.progress !== undefined && (
        <div className="mb-4">
          <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${item.progress}%` } as React.CSSProperties}
            />
          </div>
          <p className="text-caption text-muted">Downloading...</p>
        </div>
      )}
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-gray-100 px-2.5 py-1 text-caption font-medium text-muted dark:bg-gray-800">
          {item.type}
        </span>
        {item.status === "COMPLETED" && (
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-caption font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
            COMPLETED
          </span>
        )}
      </div>
      <div className="flex items-center justify-between">
        {item.actionLabel && (
          <Link
            href={item.actionLink}
            className="text-body-md font-medium text-primary hover:underline"
          >
            {item.actionLabel}
          </Link>
        )}
        <button
          type="button"
          className={`ml-auto flex items-center gap-1.5 rounded-lg px-4 py-2 text-body-md font-semibold text-white transition-colors ${
            item.type === "PDF"
              ? "bg-purple-600 hover:bg-purple-700"
              : item.type === "VIDEO"
                ? "bg-pink-600 hover:bg-pink-700"
                : item.type === "AUDIO"
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-yellow-600 hover:bg-yellow-700"
          }`}
        >
          <span className="material-icons-outlined text-lg">
            {item.actionButtonIcon}
          </span>
          {item.actionButtonLabel}
        </button>
      </div>
    </article>
  );
}

function DownloadsGrid({ items }: { items: DownloadItem[] }) {
  return (
    <section>
      <ul
        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        role="list"
      >
        {items.map((item) => (
          <li key={item.id}>
            <DownloadCard item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function PaginationSection({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
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

export default function DownloadsPage() {
  return (
    <main className="">
      <DownloadsHeader />
      <StorageSection />
      <FilterTabs tabs={filterTabs} />
      <DownloadsGrid items={downloadItems} />
      <PaginationSection current={6} total={12} />
    </main>
  );
}
