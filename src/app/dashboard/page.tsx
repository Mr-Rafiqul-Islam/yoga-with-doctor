import Link from "next/link";
import Image from "next/image";
import { dummyCourses } from "@/features/courses/data/dummyCourses";

export default function DashboardPage() {
  // Sample data - in real app, fetch from API or use auth state
  const user = {
    name: "Sarah Jenkins",
    role: "Wellness Enthusiast",
    avatarSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmyxoefgit0eX7UXZsRMIrbSGPe8QDVaK0Vm8vc6ZlmhNJ52EEXDKavc0GpULLt6SK9SjkEctxDQTeK_Rz3fCH_nd5bxoxEvQDDFN115EaayUVx6nBQSGh_DofxV9RMsOzYGE---aedkqRq9vdejM7rydgWtPND7YMBCJUZ3229gvcrlIA9Jdi4IiJ8-qyi5brPrzSIy-nHltSnVv-vPuu-CmUoDKI3ZWROcJ4_kCazFSjjr8XMgyxTTaoVxXI5CozAcwJwMV9MA",
  };

  const stats = {
    courses: 15,
    certificates: 12,
    points: "2.5k",
  };

  // Sample course progress data - in real app, fetch from user's enrolled courses
  const continueLearningCourses = [
    {
      ...dummyCourses[0], // Morning Sunshine Flow
      progress: 65,
      timeLeft: "25m left",
      badge: "Popular" as const,
    },
    {
      ...dummyCourses[2], // Mindfulness Mastery
      progress: 32,
      timeLeft: "10m left",
      badge: undefined,
    },
    {
      ...dummyCourses[1], // Deep Stretch
      progress: 0,
      timeLeft: undefined,
      badge: "New" as const,
    },
  ];

  const quickAccessItems = [
    { icon: "favorite", label: "Wishlist", count: "3 Items", href: "/dashboard/wishlist", color: "text-red-500" },
    { icon: "bookmark", label: "Articles", count: "12 Saved", href: "/dashboard/library/saved-articles", color: "text-blue-500" },
    { icon: "download", label: "Downloads", count: "5 Files", href: "/dashboard/library/downloads", color: "text-purple-500" },
    { icon: "credit_card", label: "Billing", action: "Manage", href: "/dashboard/billing", color: "text-primary" },
  ];

  return (
    <div className="space-y-8">
      {/* Top Section: Profile, Stats, Premium */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* User Profile Card */}
        <article className="rounded-2xl border border-border bg-surface p-6 shadow-elevation-sm">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="relative h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 p-0.5">
                <div className="h-full w-full overflow-hidden rounded-full bg-surface">
                  <Image
                    src={user.avatarSrc}
                    alt={user.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <button
                type="button"
                className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shadow-sm transition-colors hover:bg-primary-dark"
                aria-label="Edit profile picture"
              >
                <span className="material-icons-outlined text-sm">edit</span>
              </button>
            </div>
            <h2 className="mb-1 font-display text-xl font-bold text-foreground">{user.name}</h2>
            <p className="text-body-md text-muted">{user.role}</p>
          </div>
        </article>

        {/* Statistics Cards */}
        <div className="grid grid-cols-3 gap-4 lg:col-span-2">
          <article className="rounded-2xl border border-border bg-surface p-6 text-center shadow-elevation-sm">
            <p className="mb-1 font-display text-2xl xl:text-3xl font-bold text-foreground">{stats.courses}</p>
            <p className="text-body-md text-muted">Courses</p>
          </article>
          <article className="rounded-2xl border border-border bg-surface p-6 text-center shadow-elevation-sm">
            <p className="mb-1 font-display text-2xl xl:text-3xl font-bold text-foreground">{stats.certificates}</p>
            <p className="text-body-md text-muted">Certificates</p>
          </article>
          <article className="rounded-2xl border border-border bg-surface p-6 text-center shadow-elevation-sm">
            <p className="mb-1 font-display text-2xl xl:text-3xl font-bold text-primary">{stats.points}</p>
            <p className="text-body-md text-muted">Points</p>
          </article>

          {/* Premium Card */}
          <article className="col-span-3 rounded-2xl border border-indigo-600/20 bg-gradient-to-r from-gray-950 to-slate-900 p-6 shadow-elevation-md lg:col-span-3">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <span className="material-icons-outlined text-3xl text-yellow-400">workspace_premium</span>
                <div>
                  <h3 className="mb-1 font-display text-xl font-bold text-white">Go Premium</h3>
                  <p className="text-body-md text-white/90">
                    Unlock all masterclasses and advanced tracking features for better health.
                  </p>
                </div>
              </div>
              <Link
                href="/pricing"
                className="shrink-0 rounded-lg bg-primary px-6 py-2.5 font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Upgrade
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Continue Learning Section */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold text-foreground">Continue Learning</h2>
          <Link href="/dashboard/courses" className="text-body-md font-semibold text-primary hover:underline">
            View All
          </Link>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {continueLearningCourses.map((course) => (
            <article
              key={course.slug}
              className="group min-w-[320px] shrink-0 rounded-2xl border border-border bg-surface shadow-elevation-sm transition-shadow hover:shadow-elevation-md"
            >
              <Link href={`/courses/${course.slug}`} className="block">
                <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                  <Image
                    src={course.bannerImage}
                    alt={course.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="320px"
                  />
                  {course.badge && (
                    <span
                      className={`absolute left-3 top-3 flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold ${
                        course.badge === "Popular"
                          ? "bg-gray-100 text-orange-600 dark:bg-gray-800 dark:text-orange-400"
                          : "bg-gray-100 text-blue-600 dark:bg-gray-800 dark:text-blue-400"
                      }`}
                    >
                      {course.badge === "Popular" && (
                        <span className="material-icons-outlined text-[10px]">local_fire_department</span>
                      )}
                      {course.badge === "New" && (
                        <span className="material-icons-outlined text-[10px]">fiber_new</span>
                      )}
                      {course.badge}
                    </span>
                  )}
                  {course.timeLeft ? (
                    <div className="absolute bottom-3 right-3 rounded-lg bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                      {course.timeLeft}
                    </div>
                  ) : (
                    <Link
                      href={`/courses/${course.slug}`}
                      className="absolute bottom-3 right-3 rounded-lg bg-primary px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-primary-dark"
                    //   onClick={(e) => e.stopPropagation()}
                    >
                      Start
                    </Link>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="mb-2 line-clamp-2 font-display text-lg font-bold text-foreground group-hover:text-primary">
                    {course.title}
                  </h3>
                  <p className="mb-4 text-body-md text-muted">
                    {course.instructorName} • {course.category}
                  </p>
                  {course.progress > 0 ? (
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-caption text-muted">
                        <span>Progress</span>
                        <span className="font-semibold">{course.progress}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-full rounded-full bg-primary transition-all"
                          style={{ width: `${course.progress}%` } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between text-caption text-muted">
                      <span>Not Started</span>
                      <span className="font-semibold">0%</span>
                    </div>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Quick Access Section */}
      <section>
        <h2 className="mb-6 font-display text-2xl font-bold text-foreground">Quick Access</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {quickAccessItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-border bg-surface p-4 text-center shadow-elevation-sm transition-shadow hover:shadow-elevation-md"
            >
              <span className={`material-icons-outlined mb-2 block text-2xl ${item.color}`} aria-hidden>
                {item.icon}
              </span>
              <h3 className=" font-display text-lg font-bold text-foreground group-hover:text-primary">
                {item.label}
              </h3>
              {item.count && <p className="text-body-md text-muted">{item.count}</p>}
              {item.action && <p className="text-body-md text-primary">{item.action}</p>}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
