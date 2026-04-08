"use client";

import Image from "next/image";
import { useState } from "react";
import type { CourseDiscussionAuthor } from "@/slices/courseDiscussion";
import {
  authorProfileSrc,
  avatarFallbackLetter,
  avatarRingClass,
} from "@/features/courses/lib/lessonTabDiscussionUtils";

export function RoleBadge({
  role,
  suppressModeratorChip,
}: {
  role: string | null | undefined;
  /** When the headline already shows "Moderator" (answers). */
  suppressModeratorChip?: boolean;
}) {
  const r = role?.toUpperCase();
  if (!r) return null;
  if (r === "MODERATOR") {
    if (suppressModeratorChip) return null;
    return (
      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-900 dark:bg-amber-900/45 dark:text-amber-100">
        Moderator
      </span>
    );
  }
  if (r === "USER") {
    return (
      <span className="rounded-full bg-slate-300 px-2 py-0.5 text-xs font-medium text-muted-foreground dark:bg-gray-800 dark:text-gray-300">
        Student
      </span>
    );
  }
  if (r === "INSTRUCTOR") {
    return (
      <span className="rounded-full bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-900 dark:bg-violet-900/45 dark:text-violet-100">
        Instructor
      </span>
    );
  }
  return (
    <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
      {r.charAt(0) + r.slice(1).toLowerCase()}
    </span>
  );
}

export function DiscussionAuthorAvatar({
  author,
  size = "md",
}: {
  author?: CourseDiscussionAuthor | null;
  size?: "sm" | "md";
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const url = authorProfileSrc(author);
  const role = author?.role ?? undefined;
  const ring = avatarRingClass(role ?? null);
  const dim =
    size === "sm"
      ? "h-8 w-8 min-h-8 min-w-8 text-body-xs"
      : "h-10 w-10 min-h-10 min-w-10 text-sm";
  const initial = avatarFallbackLetter(author);

  if (url && !imgFailed) {
    return (
      <span
        className={`relative shrink-0 overflow-hidden rounded-full ring-2 ring-offset-2 ring-offset-surface dark:ring-offset-gray-950 ${ring} ${dim}`}
      >
        <Image
          src={url}
          alt=""
          width={size === "sm" ? 32 : 40}
          height={size === "sm" ? 32 : 40}
          className="h-full w-full object-cover"
          onError={() => setImgFailed(true)}
        />
      </span>
    );
  }

  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-primary/15 font-semibold text-primary ring-2 ring-offset-2 ring-offset-surface dark:bg-primary/20 dark:ring-offset-gray-950 ${ring} ${dim}`}
      aria-hidden
    >
      {initial}
    </span>
  );
}
