/**
 * Placeholder: create-post section (avatar, input, Photo/Video/Feeling actions, Post button).
 */
export function CreatePostInput() {
  return (
    <section
      className="rounded-lg border border-border bg-surface p-4 shadow-sm"
      aria-label="Create post"
    >
      <div className="flex gap-4">
        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-muted" />
        <input
          type="text"
          readOnly
          placeholder="Share your wellness journey..."
          className="flex-1 rounded-full border-none bg-muted/30 px-4 text-body-md focus:ring-2 focus:ring-primary"
          aria-label="Post content"
        />
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
        <div className="flex gap-2 sm:gap-4">
          <button
            type="button"
            className="flex items-center gap-2 rounded-md px-3 py-1.5 transition-colors hover:bg-muted/20"
            aria-label="Add photo"
          >
            <span className="material-icons-outlined text-xl text-blue-500" aria-hidden>
              image
            </span>
            <span className="hidden text-body-md font-medium text-muted sm:inline">
              Photo
            </span>
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-md px-3 py-1.5 transition-colors hover:bg-muted/20"
            aria-label="Add video"
          >
            <span className="material-icons-outlined text-xl text-green-500" aria-hidden>
              videocam
            </span>
            <span className="hidden text-body-md font-medium text-muted sm:inline">
              Video
            </span>
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-md px-3 py-1.5 transition-colors hover:bg-muted/20"
            aria-label="Add feeling"
          >
            <span className="material-icons-outlined text-xl text-yellow-500" aria-hidden>
              sentiment_satisfied_alt
            </span>
            <span className="hidden text-body-md font-medium text-muted sm:inline">
              Feeling
            </span>
          </button>
        </div>
        <button
          type="button"
          className="rounded-full bg-primary px-5 py-1.5 text-button font-medium text-white transition-colors hover:opacity-90"
        >
          Post
        </button>
      </div>
    </section>
  );
}
