import Link from "next/link";

export function ProfileQuickNavCard() {
  return (
    <article className="rounded-2xl border border-border bg-surface p-4 shadow-elevation-sm">
      <nav aria-label="Quick navigation">
        <ul className="flex flex-col gap-2">
          {/* <li>
            <Link
              href="/dashboard/wishlist"
              className="flex items-center justify-between rounded-lg px-4 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <div className="flex items-center gap-3">
                <span
                  className="material-icons-outlined text-red-500 text-xl"
                  aria-hidden
                >
                  favorite
                </span>
                <span className="text-body-md font-medium text-foreground">
                  My Wishlist
                </span>
              </div>
              <span
                className="material-icons-outlined text-muted text-xl"
                aria-hidden
              >
                chevron_right
              </span>
            </Link>
          </li> */}
          <li>
            <Link
              href="/dashboard/library/saved-articles"
              className="flex items-center justify-between rounded-lg px-4 py-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <div className="flex items-center gap-3">
                <span
                  className="material-icons-outlined text-blue-500 text-xl"
                  aria-hidden
                >
                  bookmark
                </span>
                <span className="text-body-md font-medium text-foreground">
                  Saved Articles
                </span>
              </div>
              <span
                className="material-icons-outlined text-muted text-xl"
                aria-hidden
              >
                chevron_right
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </article>
  );
}

