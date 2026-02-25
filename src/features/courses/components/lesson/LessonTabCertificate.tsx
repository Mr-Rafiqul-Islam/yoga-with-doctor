export function LessonTabCertificate() {
  return (
    <section
      id="certificate"
      aria-labelledby="certificate-heading"
      className="rounded-2xl border border-border bg-surface p-6 shadow-soft dark:border-gray-800 dark:bg-surface sm:p-8"
    >
      <h2
        id="certificate-heading"
        className="mb-4 flex items-center gap-2 font-display text-2xl font-bold text-foreground dark:text-white"
      >
        <span className="material-icons-outlined text-primary" aria-hidden>
          verified
        </span>
        Certificate
      </h2>
      <p className="text-muted dark:text-gray-400">
        Complete all lessons in this course to earn your certificate of completion.
      </p>
      <div className="mt-6 flex items-center gap-4 rounded-xl border border-primary/20 bg-sage-light p-6 dark:border-primary/20 dark:bg-sage-dark">
        <span className="material-icons-outlined text-4xl text-primary">verified</span>
        <div>
          <p className="font-medium text-foreground dark:text-white">
            Certificate of completion will be available once you finish the course.
          </p>
          <p className="mt-1 text-caption text-muted">
            Download and share your achievement.
          </p>
        </div>
      </div>
    </section>
  );
}
