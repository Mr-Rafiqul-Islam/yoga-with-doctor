"use client";

import Image from "next/image";
import Link from "next/link";

export type GlobalSearchResultPlaceholder = "course" | "class" | "article";

const placeholderIcon: Record<GlobalSearchResultPlaceholder, string> = {
  course: "menu_book",
  class: "play_circle",
  article: "article",
};

export function GlobalSearchResultRow({
  href,
  title,
  subtitle,
  imageUrl,
  placeholderKind,
  onNavigate,
}: {
  href: string;
  title: string;
  subtitle: string | null;
  imageUrl: string | null | undefined;
  placeholderKind: GlobalSearchResultPlaceholder;
  onNavigate: () => void;
}) {
  const icon = placeholderIcon[placeholderKind];

  return (
    <Link
      href={href}
      className="flex gap-3 rounded-radius-sm px-2 py-2 text-left transition-colors hover:bg-secondary hover:text-primary"
      onClick={onNavigate}
    >
      <div className="relative h-[3.25rem] w-[4.5rem] shrink-0 overflow-hidden rounded-radius-sm bg-muted/60 dark:bg-muted/40">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover"
            sizes="72px"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center text-muted"
            aria-hidden
          >
            <span className="material-icons-outlined text-2xl">{icon}</span>
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <span className="line-clamp-1 font-medium text-body-sm text-foreground">
          {title}
        </span>
        {subtitle ? (
          <span className="mt-0.5 line-clamp-2 block text-caption text-muted">
            {subtitle}
          </span>
        ) : null}
      </div>
    </Link>
  );
}
