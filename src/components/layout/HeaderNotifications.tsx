"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { useRouter } from "next/navigation";

import {
  useGetNotificationsInfiniteQuery,
  useGetUnreadCountQuery,
  useMarkAllAsReadMutation,
  useMarkAsReadMutation,
  useArchiveNotificationMutation,
  type ClientNotification,
} from "@/slices/notifications";

function formatRelativeTime(iso: string): string {
  const date = new Date(iso);
  const diffSec = Math.round((date.getTime() - Date.now()) / 1000);
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const abs = Math.abs(diffSec);
  if (abs < 60) return rtf.format(Math.round(diffSec), "second");
  if (abs < 3600) return rtf.format(Math.round(diffSec / 60), "minute");
  if (abs < 86400) return rtf.format(Math.round(diffSec / 3600), "hour");
  if (abs < 604800) return rtf.format(Math.round(diffSec / 86400), "day");
  return date.toLocaleDateString();
}

function payloadRecord(n: ClientNotification): Record<string, unknown> | null {
  const p = n.payload;
  if (p == null || typeof p !== "object" || Array.isArray(p)) return null;
  return p as Record<string, unknown>;
}

function getInternalPath(n: ClientNotification): string | null {
  const action = n.actionUrl;
  if (typeof action === "string" && action.startsWith("/")) return action;
  const d = payloadRecord(n);
  if (!d) return null;
  const link = d.deepLink ?? d.url;
  if (typeof link === "string" && link.startsWith("/")) return link;
  return null;
}

function getExternalUrl(n: ClientNotification): string | null {
  const action = n.actionUrl;
  if (typeof action === "string" && /^https?:\/\//i.test(action)) return action;
  const d = payloadRecord(n);
  if (!d) return null;
  const link = d.deepLink ?? d.url;
  if (typeof link === "string" && /^https?:\/\//i.test(link)) return link;
  return null;
}

type HeaderNotificationsProps = {
  sessionOk: boolean;
};

export function HeaderNotifications({ sessionOk }: HeaderNotificationsProps) {
  const router = useRouter();
  const menuId = useId();
  const buttonId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const { data: unreadData } = useGetUnreadCountQuery(undefined, {
    skip: !sessionOk,
  });
  const unreadCount = unreadData?.data?.count ?? 0;

  const {
    data: pagesData,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetNotificationsInfiniteQuery(
    { limit: 20 },
    { skip: !sessionOk || !open }
  );

  const [markAsRead] = useMarkAsReadMutation();
  const [markAllAsRead, { isLoading: markingAll }] = useMarkAllAsReadMutation();
  const [archiveNotification] = useArchiveNotificationMutation();

  const notifications =
    pagesData?.pages.flatMap((p) => p.data?.items ?? []) ?? [];

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: globalThis.MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const onRowActivate = useCallback(
    (n: ClientNotification) => {
      if (n.status === "UNREAD") {
        void markAsRead({ id: n.id }).unwrap().catch(() => {});
      }
      const internal = getInternalPath(n);
      const external = getExternalUrl(n);
      if (internal) {
        setOpen(false);
        router.push(internal);
        return;
      }
      if (external) {
        window.open(external, "_blank", "noopener,noreferrer");
        setOpen(false);
      }
    },
    [markAsRead, router]
  );

  const onArchive = useCallback(
    (e: ReactMouseEvent<HTMLButtonElement>, id: string) => {
      e.preventDefault();
      e.stopPropagation();
      void archiveNotification({ id }).unwrap().catch(() => {});
    },
    [archiveNotification]
  );

  if (!sessionOk) return null;

  return (
    <div className="relative flex-shrink-0" ref={containerRef}>
      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((o) => !o)}
        className="relative rounded-radius-sm p-2 text-muted transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label="Notifications"
      >
        <span className="material-icons-outlined text-xl" aria-hidden>
          notifications
        </span>
        {unreadCount > 0 ? (
          <span
            className="absolute right-1 top-1 min-h-2 min-w-2 rounded-full bg-error px-0.5 text-[10px] font-semibold leading-none text-white"
            aria-hidden
          >
            {unreadCount > 99 ? "99+" : unreadCount}
          </span>
        ) : null}
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-labelledby={buttonId}
          className="absolute right-0 top-full z-[60] mt-2 w-[min(100vw-2rem,22rem)] max-h-[min(70vh,28rem)] overflow-hidden rounded-radius-md border border-border bg-surface shadow-elevation-md dark:bg-[#1a2e26]"
        >
          <div className="flex items-center justify-between gap-2 border-b border-border px-3 py-2 dark:border-gray-700">
            <p className="text-sm font-semibold text-foreground">Notifications</p>
            <button
              type="button"
              role="menuitem"
              disabled={markingAll || unreadCount === 0}
              onClick={() => {
                void markAllAsRead(undefined).unwrap().catch(() => {});
              }}
              className="rounded-radius-sm px-2 py-1 text-xs font-medium text-primary hover:bg-secondary disabled:opacity-50 dark:hover:bg-gray-700"
            >
              Mark all read
            </button>
          </div>

          <div className="max-h-[min(60vh,24rem)] overflow-y-auto">
            {isLoading ? (
              <ul className="divide-y divide-border dark:divide-gray-700" aria-busy>
                {Array.from({ length: 4 }).map((_, i) => (
                  <li key={i} className="px-3 py-3">
                    <div className="h-4 w-3/4 animate-pulse rounded bg-muted/60" />
                    <div className="mt-2 h-3 w-1/2 animate-pulse rounded bg-muted/40" />
                  </li>
                ))}
              </ul>
            ) : isError ? (
              <div className="px-3 py-6 text-center text-sm text-muted">
                <p className="mb-2">Could not load notifications.</p>
                <button
                  type="button"
                  onClick={() => void refetch()}
                  className="text-primary underline hover:no-underline"
                >
                  Retry
                </button>
                {process.env.NODE_ENV === "development" && error ? (
                  <pre className="mt-2 max-h-24 overflow-auto text-left text-xs">
                    {JSON.stringify(error, null, 2)}
                  </pre>
                ) : null}
              </div>
            ) : notifications.length === 0 ? (
              <p className="px-3 py-8 text-center text-sm text-muted">
                No notifications yet.
              </p>
            ) : (
              <ul className="divide-y divide-border dark:divide-gray-700">
                {notifications.map((n) => (
                  <li key={n.id} className="flex items-stretch gap-0">
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => onRowActivate(n)}
                      className={`flex min-w-0 flex-1 gap-2 px-3 py-2.5 text-left transition-colors hover:bg-secondary/80 dark:hover:bg-gray-700/80 ${
                        n.status === "UNREAD"
                          ? "bg-secondary/40 dark:bg-gray-800/50"
                          : ""
                      }`}
                    >
                      {n.imageUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={n.imageUrl}
                          alt=""
                          className="mt-0.5 h-10 w-10 shrink-0 rounded-radius-sm object-cover"
                          width={40}
                          height={40}
                        />
                      ) : null}
                      <span className="min-w-0 flex-1">
                        <span
                          className={`line-clamp-2 text-sm ${
                            n.status === "UNREAD"
                              ? "font-semibold text-foreground"
                              : "text-foreground"
                          }`}
                        >
                          {n.title?.trim() || n.event.replace(/_/g, " ")}
                        </span>
                        {n.body ? (
                          <span className="mt-0.5 line-clamp-2 text-xs text-muted">
                            {n.body}
                          </span>
                        ) : null}
                        <span className="mt-1 block text-xs text-muted">
                          {formatRelativeTime(n.createdAt)}
                        </span>
                      </span>
                    </button>
                    <button
                      type="button"
                      aria-label="Archive notification"
                      title="Archive"
                      onClick={(e) => onArchive(e, n.id)}
                      className="shrink-0 border-l border-border px-2.5 text-muted transition-colors hover:bg-secondary/80 hover:text-foreground dark:border-gray-700 dark:hover:bg-gray-700/80"
                    >
                      <span className="material-icons-outlined text-lg" aria-hidden>
                        inventory_2
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {hasNextPage ? (
            <div className="border-t border-border p-2 dark:border-gray-700">
              <button
                type="button"
                disabled={isFetchingNextPage}
                onClick={() => void fetchNextPage()}
                className="w-full rounded-radius-sm py-2 text-center text-sm font-medium text-primary hover:bg-secondary disabled:opacity-60 dark:hover:bg-gray-700"
              >
                {isFetchingNextPage ? "Loading…" : "Load more"}
              </button>
            </div>
          ) : null}

          {isFetching && !isLoading && !isFetchingNextPage ? (
            <p className="border-t border-border px-3 py-1 text-center text-xs text-muted dark:border-gray-700">
              Updating…
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
