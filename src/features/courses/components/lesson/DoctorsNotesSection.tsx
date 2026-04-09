import type { DoctorNotes } from "@/features/courses/data/lessonPageData";

export interface DoctorsNotesSectionProps {
  /** Per-lesson copy from the course API, shown above the doctor's notes block. */
  lessonDescription?: string | null;
  doctorNotes: DoctorNotes | null;
}

const BOLD_PHRASE = "proper form trumps depth";

export function DoctorsNotesSection({
  lessonDescription,
  doctorNotes,
}: DoctorsNotesSectionProps) {
  const descriptionText = lessonDescription?.trim() ?? "";
  const showDescription = descriptionText.length > 0;

  return (
    <section
      id="overview"
      aria-labelledby="doctors-notes-heading"
      className="rounded-2xl border border-border bg-surface p-6 shadow-soft dark:border-gray-800 dark:bg-surface sm:p-8"
    >
      {showDescription ? (
        <div className="mb-8 border-b border-border pb-8 dark:border-gray-700">
          <h3
            id="lesson-description-heading"
            className="mb-4 flex items-center gap-2 font-display text-xl font-bold text-foreground dark:text-white"
          >
            <span className="material-icons-outlined text-primary" aria-hidden>
              article
            </span>
            About this lesson
          </h3>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="leading-relaxed whitespace-pre-wrap text-foreground/90 dark:text-gray-300">
              {descriptionText}
            </p>
          </div>
        </div>
      ) : null}
      <h2
        id="doctors-notes-heading"
        className="mb-6 flex items-center gap-2 font-display text-2xl font-bold text-foreground dark:text-white"
      >
        <span className="material-icons-outlined text-primary" aria-hidden>
          medical_services
        </span>
        Doctor&apos;s Notes
      </h2>
      {doctorNotes ? (
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="mb-4 leading-relaxed text-foreground/90 dark:text-gray-300">
            {doctorNotes.intro.split(BOLD_PHRASE).length > 1 ? (
              <>
                {doctorNotes.intro.split(BOLD_PHRASE)[0]}
                <strong className="text-foreground dark:text-white">{BOLD_PHRASE}</strong>
                {doctorNotes.intro.split(BOLD_PHRASE)[1]}
              </>
            ) : (
              doctorNotes.intro
            )}
          </p>
          <h3 className="mb-3 mt-6 text-lg font-bold text-foreground dark:text-white">
            Key Anatomical Focus Areas:
          </h3>
          <ul className="list-none space-y-2 pl-0">
            {doctorNotes.focusAreas.map((area, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="material-icons-outlined mt-1 text-sm text-primary"
                  aria-hidden
                >
                  check_circle
                </span>
                <span className="text-foreground/90 dark:text-gray-300">
                  <strong>{area.title}</strong> {area.description}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-4 rounded-xl border border-primary/20 bg-sage-light p-4 dark:border-primary/20 dark:bg-sage-dark">
            <span
              className="material-icons-outlined shrink-0 text-2xl text-primary"
              aria-hidden
            >
              lightbulb
            </span>
            <div>
              <h4 className="mb-1 text-sm font-bold text-foreground dark:text-white">
                {doctorNotes.disclaimerTitle}
              </h4>
              <p className="text-xs text-muted dark:text-gray-400">
                {doctorNotes.disclaimerText}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-muted dark:text-gray-400">
          No notes for this lesson yet. Complete the video and check back for updates.
        </p>
      )}
    </section>
  );
}
