export function LessonTabDiscussion() {
  return (
    <section
      id="discussion"
      aria-labelledby="discussion-heading"
      className="rounded-2xl border border-border bg-surface p-6 shadow-soft dark:border-gray-800 dark:bg-surface sm:p-8"
    >
      <h2
        id="discussion-heading"
        className="mb-4 flex items-center gap-2 font-display text-2xl font-bold text-foreground dark:text-white"
      >
        <span className="material-icons-outlined text-primary" aria-hidden>
          forum
        </span>
        Discussion
      </h2>
      <p className="text-muted dark:text-gray-400">
        Ask questions and share insights with other students. Discussion is enabled after you complete this lesson.
      </p>
      <div className="mt-6 rounded-xl border border-dashed border-border p-8 text-center dark:border-gray-700">
        <span className="material-icons-outlined text-4xl text-muted">forum</span>
        <p className="mt-2 text-body-md text-muted">No discussions yet. Be the first to start one.</p>
      </div>
    </section>
  );
}
