import Link from "next/link";
import { dummyArticleCards } from "@/features/articles/data/dummyArticles";
import type { ArticleDetails } from "@/features/articles/data/dummyArticles";

// Sample saved articles with status - in real app, fetch from API
const savedArticles: (ArticleDetails & { status?: "saved" | "finished" })[] = [
  {
    ...dummyArticleCards[0], // The Science of Morning Meditation
    status: "saved",
  },
  {
    ...dummyArticleCards[1], // Advanced Yoga Lower Back Pain
    status: "saved",
  },
  {
    ...dummyArticleCards[2], // Anti-Inflammatory Diet
    status: "saved",
  },
  {
    ...dummyArticleCards[3], // Integrating Mindfulness Corporate Life
    status: "saved",
  },
  {
    ...dummyArticleCards[4], // Physiology of Sleep
    status: "saved",
  },
  {
    ...dummyArticleCards[5], // Building Core Stability
    status: "finished",
  },
  {
    ...dummyArticleCards[6], // Pranayama for Anxiety
    status: "saved",
  },
];

export default function SavedArticlesPage() {
  return (
    <div className="space-y-6">
      {/* Go Premium Section */}
      <section className="relative overflow-hidden rounded-2xl border border-indigo-600/20 bg-gradient-to-br from-slate-950 to-gray-900 p-6 shadow-elevation-md">
        <div className="relative z-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="material-icons-outlined text-2xl text-yellow-400">workspace_premium</span>
            <div>
              <h2 className="mb-1 font-display text-xl font-bold text-white">Go Premium</h2>
              <p className="text-body-md text-white/90">
                Unlock all masterclasses, advanced tracking features, and unlimited article saves.
              </p>
            </div>
          </div>
          <Link
            href="/pricing"
            className="shrink-0 rounded-lg bg-primary px-6 py-2.5 font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Upgrade Now
          </Link>
        </div>
      </section>

      {/* Reading List Header */}
      <header className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-foreground">Reading List</h1>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-gray-100 hover:text-foreground dark:hover:bg-gray-800"
            aria-label="Filter articles"
          >
            <span className="material-icons-outlined text-xl">filter_list</span>
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:bg-gray-100 hover:text-foreground dark:hover:bg-gray-800"
            aria-label="Toggle grid/list view"
          >
            <span className="material-icons-outlined text-xl">view_module</span>
          </button>
        </div>
      </header>

      {/* Articles Grid */}
      <main>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2" role="list">
          {savedArticles.map((article) => {
            const isFinished = article.status === "finished";
            return (
              <li key={article.slug}>
                <Link
                  href={article.href}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-4 shadow-elevation-sm transition-shadow hover:shadow-elevation-md"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                      isFinished ? "bg-blue-100 dark:bg-blue-900/30" : "bg-blue-100 dark:bg-blue-900/30"
                    }`}
                  >
                    <span
                      className={`material-icons-outlined text-xl ${
                        isFinished ? "text-blue-600 dark:text-blue-400" : "text-blue-600 dark:text-blue-400"
                      }`}
                      aria-hidden
                    >
                      {isFinished ? "check_circle" : "bookmark"}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="mb-1 line-clamp-2 font-display text-lg font-bold text-foreground group-hover:text-primary">
                      {article.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 text-caption text-muted">
                      {isFinished ? (
                        <>
                          <span className="font-medium">Finished</span>
                          <span aria-hidden>•</span>
                        </>
                      ) : null}
                      <span>By {article.author.name}</span>
                      {article.readTime && (
                        <>
                          <span aria-hidden>•</span>
                          <span>{article.readTime}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <span className="material-icons-outlined shrink-0 text-muted text-xl transition-transform group-hover:translate-x-1" aria-hidden>
                    chevron_right
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>

      {/* Load More Button */}
      <footer className="flex justify-center pt-4">
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg px-6 py-2.5 text-body-md font-medium text-muted transition-colors hover:bg-gray-100 hover:text-foreground dark:hover:bg-gray-800"
        >
          Load More Articles
          <span className="material-icons-outlined text-xl">expand_more</span>
        </button>
      </footer>
    </div>
  );
}
