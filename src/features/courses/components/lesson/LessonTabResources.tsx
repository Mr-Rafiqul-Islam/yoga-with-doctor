export function LessonTabResources() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-heading"
      className="rounded-2xl border border-border bg-surface p-6 shadow-soft dark:border-gray-800 dark:bg-surface sm:p-8"
    >
      <h2
        id="resources-heading"
        className="mb-4 flex items-center gap-2 font-display text-2xl font-bold text-foreground dark:text-white"
      >
        <span className="material-icons-outlined text-primary" aria-hidden>
          folder
        </span>
        Resources
      </h2>
      <p className="text-muted dark:text-gray-400">
        Downloadable resources for this lesson will appear here. Check back after completing the video.
      </p>
      <ul className="mt-4 list-none space-y-2 pl-0">
        <li className="flex items-center gap-3 rounded-lg border border-border p-3 dark:border-gray-700">
          <span className="material-icons-outlined text-primary">description</span>
          <span className="text-body-md text-foreground dark:text-gray-300">
            Alignment checklist (PDF)
          </span>
          <span className="ml-auto text-caption text-muted">Coming soon</span>
        </li>
      </ul>
    </section>
  );
}
