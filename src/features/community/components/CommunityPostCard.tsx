/**
 * Placeholder: single community post card.
 * Can display text-only, text + image, and optional "Doctor's Tip" callout.
 */
export function CommunityPostCard() {
  return (
    <article
      className="overflow-hidden rounded-lg border border-border bg-surface shadow-sm"
      aria-label="Community post"
    >
      <header className="flex items-start justify-between p-4">
        <div className="flex gap-3">
          <div className="relative">
            <div className="h-10 w-10 rounded-full border border-border bg-muted" />
            {/* Optional verified badge can be rendered here */}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-body-md font-bold text-foreground" />
              {/* Optional tag e.g. Medical Insight */}
            </div>
            <p className="mt-0.5 text-caption text-muted" />
          </div>
        </div>
        <button
          type="button"
          className="rounded p-1 text-muted hover:text-foreground"
          aria-label="More options"
        >
          <span className="material-icons-outlined">more_horiz</span>
        </button>
      </header>

      <div className="px-4 pb-2">
        {/* Post body placeholder */}
        <p className="mb-3 text-body-md leading-relaxed text-foreground" />
        {/* Optional: Doctor's Tip callout */}
        {/* Optional: Image */}
      </div>

      <div className="flex items-center justify-between border-t border-border px-4 py-3 text-caption text-muted">
        <span />
        <div className="flex gap-3">
          <span />
          <span />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 px-2 py-1">
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-md py-2 transition-colors hover:bg-muted/20"
        >
          <span className="material-icons-outlined text-xl text-muted" aria-hidden>
            thumb_up_off_alt
          </span>
          <span className="text-body-md font-medium text-muted">Like</span>
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-md py-2 transition-colors hover:bg-muted/20"
        >
          <span className="material-icons-outlined text-xl text-muted" aria-hidden>
            chat_bubble_outline
          </span>
          <span className="text-body-md font-medium text-muted">Comment</span>
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-md py-2 transition-colors hover:bg-muted/20"
        >
          <span className="material-icons-outlined text-xl text-muted" aria-hidden>
            share
          </span>
          <span className="text-body-md font-medium text-muted">Share</span>
        </button>
      </div>
    </article>
  );
}
