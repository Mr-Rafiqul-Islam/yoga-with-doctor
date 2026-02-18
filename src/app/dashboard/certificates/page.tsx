type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  duration: string;
  category: "Yoga Practice" | "Meditation" | "Nutrition" | "Other";
  icon: string;
  iconColor: string;
  gradientFrom: string;
  gradientTo: string;
};

const certificates: Certificate[] = [
  {
    id: "1",
    title: "Advanced Hatha Yoga",
    issuer: "Issued by Dr. Emily Stone",
    issueDate: "Oct 24, 2023",
    duration: "40 Hours",
    category: "Yoga Practice",
    icon: "spa",
    iconColor: "text-accent",
    gradientFrom: "from-gray-100",
    gradientTo: "to-gray-200 dark:to-gray-900",
  },
  {
    id: "2",
    title: "Mindfulness Meditation",
    issuer: "Issued by Yoga Alliance",
    issueDate: "Sep 15, 2023",
    duration: "25 Hours",
    category: "Meditation",
    icon: "self_improvement",
    iconColor: "text-blue-400",
    gradientFrom: "from-blue-50",
    gradientTo: "to-indigo-50 dark:to-slate-800",
  },
  {
    id: "3",
    title: "Holistic Nutrition Basics",
    issuer: "Issued by Dr. Alan Green",
    issueDate: "Aug 02, 2023",
    duration: "15 Hours",
    category: "Nutrition",
    icon: "restaurant_menu",
    iconColor: "text-emerald-500",
    gradientFrom: "from-green-50",
    gradientTo: "to-emerald-50 dark:to-emerald-900/20",
  },
  {
    id: "4",
    title: "Anatomy for Yogis",
    issuer: "Issued by University of Health",
    issueDate: "Jul 10, 2023",
    duration: "30 Hours",
    category: "Yoga Practice",
    icon: "fitness_center",
    iconColor: "text-orange-400",
    gradientFrom: "from-orange-50",
    gradientTo: "to-red-50 dark:to-orange-900/20",
  },
  {
    id: "5",
    title: "Prenatal Yoga Support",
    issuer: "Issued by Mothers Wellness",
    issueDate: "Jun 05, 2023",
    duration: "20 Hours",
    category: "Yoga Practice",
    icon: "child_care",
    iconColor: "text-purple-400",
    gradientFrom: "from-purple-50",
    gradientTo: "to-pink-50 dark:to-purple-900/20",
  },
  {
    id: "6",
    title: "Breathwork & Pranayama",
    issuer: "Issued by The Breathing Space",
    issueDate: "May 18, 2023",
    duration: "10 Hours",
    category: "Meditation",
    icon: "waves",
    iconColor: "text-teal-400",
    gradientFrom: "from-teal-50",
    gradientTo: "to-cyan-50 dark:to-cyan-900/20",
  },
];

const filterTabs = [
  { id: "all", label: "All Certificates", active: true },
  { id: "yoga", label: "Yoga Practice", active: false },
  { id: "meditation", label: "Meditation", active: false },
  { id: "nutrition", label: "Nutrition", active: false },
] as const;

function MasteryProgressCard() {
  const completed = 12;
  const target = 15;
  const progress = (completed / target) * 100;

  return (
    <article className="relative overflow-hidden rounded-2xl bg-[#0F172A] p-6 flex flex-col justify-center">
      <div className="relative z-10">
        <div className="mb-2 flex items-center gap-2">
          <span className="material-icons-round text-accent text-2xl">workspace_premium</span>
          <h2 className="text-lg font-bold text-white">Mastery Progress</h2>
        </div>
        <p className="mb-6 max-w-md text-sm text-gray-400">
          You&apos;ve completed {completed} modules. Complete {target - completed} more to earn your Advanced Yoga
          Master certification.
        </p>
        <div className="mb-2 max-w-md w-full h-2.5 overflow-hidden rounded-full bg-gray-700">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${progress}%` } as React.CSSProperties}
          />
        </div>
        <div className="flex max-w-md justify-between text-xs text-gray-400">
          <span>{completed} Completed</span>
          <span>Target: {target}</span>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
    </article>
  );
}

function EarnedCertificatesCard({ count }: { count: number }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-surface dark:border-gray-800 dark:bg-surface-dark p-6 flex flex-col items-center justify-center text-center shadow-card">
      <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
        <span className="material-icons-round text-accent text-3xl">emoji_events</span>
      </div>
      <span className="mb-1 text-4xl font-bold text-foreground dark:text-white">{count}</span>
      <span className="text-sm font-medium text-muted">Earned Certificates</span>
    </article>
  );
}

function FilterAndSortSection() {
  return (
    <section className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <nav className="flex space-x-2 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar" aria-label="Filter certificates">
        {filterTabs.map((tab) => (
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
        <select className="cursor-pointer border-none bg-transparent p-0 pr-6 font-semibold text-foreground focus:ring-0 dark:text-white">
          <option>Newest First</option>
          <option>Oldest First</option>
          <option>A-Z</option>
        </select>
      </div>
    </section>
  );
}

function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-soft dark:border-gray-700 dark:bg-surface-dark">
      {/* Certificate Preview Area */}
      <div
        className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${certificate.gradientFrom} ${certificate.gradientTo} p-6`}
      >
        <div className="relative flex h-full w-full flex-col items-center justify-center rounded border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="absolute inset-0 m-2 border-4 border-double border-accent/20" />
          <span className={`material-icons-round mb-2 text-4xl ${certificate.iconColor}`}>{certificate.icon}</span>
          <div className="mb-2 h-1 w-16 rounded bg-gray-200 dark:bg-gray-600" />
          <div className="h-1 w-24 rounded bg-gray-200 dark:bg-gray-600" />
        </div>
        <span className="absolute right-4 top-4 rounded-md bg-green-100 px-2.5 py-1 text-xs font-bold text-green-700 dark:bg-green-900 dark:text-green-300">
          VERIFIED
        </span>
      </div>

      {/* Certificate Details */}
      <div className="p-5">
        <div className="mb-2 flex items-start justify-between">
          <div>
            <h3 className="mb-1 text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary dark:text-white">
              {certificate.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{certificate.issuer}</p>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
            <span className="material-icons-round text-accent">workspace_premium</span>
          </div>
        </div>
        <div className="mb-4 mt-4 flex items-center space-x-4 text-xs text-gray-400">
          <div className="flex items-center">
            <span className="material-icons-outlined mr-1 text-sm">calendar_today</span>
            {certificate.issueDate}
          </div>
          <div className="flex items-center">
            <span className="material-icons-outlined mr-1 text-sm">schedule</span>
            {certificate.duration}
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            type="button"
            className="flex flex-1 items-center justify-center rounded-xl bg-primary py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
          >
            <span className="material-icons-outlined mr-2 text-sm">file_download</span>
            Download
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
            aria-label="Share certificate"
          >
            <span className="material-icons-outlined">share</span>
          </button>
        </div>
      </div>
    </article>
  );
}

function CertificatesGrid({ certificates }: { certificates: Certificate[] }) {
  return (
    <section>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3" role="list">
        {certificates.map((certificate) => (
          <li key={certificate.id}>
            <CertificateCard certificate={certificate} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function LoadMoreSection() {
  return (
    <footer className="mt-12 pb-12 text-center">
      <button
        type="button"
        className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-muted transition-colors hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
      >
        Load More Certificates
      </button>
    </footer>
  );
}

export default function CertificatesPage() {
  const earnedCount = certificates.length;

  return (
    <div className="space-y-6">
      {/* Top Information Cards */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <MasteryProgressCard />
        </div>
        <div className="md:col-span-1">
          <EarnedCertificatesCard count={earnedCount} />
        </div>
      </section>

      {/* Filter and Sort */}
      <FilterAndSortSection />

      {/* Certificates Grid */}
      <CertificatesGrid certificates={certificates} />

      {/* Load More */}
      <LoadMoreSection />
    </div>
  );
}
