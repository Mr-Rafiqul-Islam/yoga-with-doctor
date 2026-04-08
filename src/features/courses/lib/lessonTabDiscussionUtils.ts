import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type {
  CourseDiscussionAnswer,
  CourseDiscussionAuthor,
  CourseDiscussionQuestion,
  CourseDiscussionQuestionFilterType,
} from "@/slices/courseDiscussion";

export const LESSON_DISCUSSION_PAGE_SIZE = 10;

export const LESSON_DISCUSSION_FILTERS: {
  value: CourseDiscussionQuestionFilterType;
  label: string;
}[] = [
  { value: "LATEST", label: "Latest" },
  { value: "TOP", label: "Top" },
  { value: "UNANSWERED", label: "Unanswered" },
  { value: "SOLVED", label: "Solved" },
  { value: "MY", label: "My questions" },
];

export function getFetchErrorMessage(
  error: FetchBaseQueryError | undefined
): string | null {
  if (!error) return null;
  const data = error.data;
  if (data && typeof data === "object" && "error" in data) {
    const msg = (data as { error?: unknown }).error;
    if (typeof msg === "string") return msg;
  }
  if (data && typeof data === "object" && "message" in data) {
    const msg = (data as { message?: unknown }).message;
    if (typeof msg === "string") return msg;
  }
  return null;
}

export function roleFallbackLabel(role: string | null | undefined): string {
  const r = role?.toUpperCase();
  if (r === "INSTRUCTOR") return "Instructor";
  if (r === "MODERATOR") return "Moderator";
  if (r === "USER") return "Member";
  return "Member";
}

/** Question: always prefer display name when present. */
export function questionParticipantLabel(
  author: CourseDiscussionAuthor | null | undefined
): string {
  const name = author?.name?.trim();
  if (name) return name;
  return roleFallbackLabel(author?.role ?? undefined);
}

/**
 * Answer: moderators are labeled by role (not personal name).
 * Others use name, then role fallback.
 */
export function answerParticipantLabel(
  author: CourseDiscussionAuthor | null | undefined
): string {
  if (author?.role?.toUpperCase() === "MODERATOR") return "Moderator";
  const name = author?.name?.trim();
  if (name) return name;
  return roleFallbackLabel(author?.role ?? undefined);
}

export function authorProfileSrc(
  author: CourseDiscussionAuthor | null | undefined
): string | undefined {
  const a = author?.profilePicture?.trim();
  if (a) return a;
  const legacy = author?.avatarUrl?.trim();
  if (legacy) return legacy;
  return undefined;
}

export function avatarFallbackLetter(
  author: CourseDiscussionAuthor | null | undefined
): string {
  const name = author?.name?.trim();
  if (name) return name.slice(0, 1).toUpperCase();
  const r = author?.role?.toUpperCase();
  if (r === "MODERATOR") return "M";
  if (r === "INSTRUCTOR") return "I";
  if (r === "USER") return "U";
  return "?";
}

export function avatarRingClass(role: string | null | undefined): string {
  const r = role?.toUpperCase();
  if (r === "MODERATOR") return "ring-amber-400/60 dark:ring-amber-500/50";
  if (r === "INSTRUCTOR") return "ring-violet-400/60 dark:ring-violet-500/50";
  return "ring-primary/35";
}

export function replyShellClasses(role: string | null | undefined): string {
  const r = role?.toUpperCase();
  if (r === "MODERATOR") {
    return "border-l-4 border-amber-500 bg-amber-50/60 dark:border-amber-500/80 dark:bg-amber-950/30";
  }
  if (r === "INSTRUCTOR") {
    return "border-l-4 border-violet-500 bg-violet-50/50 dark:border-violet-500/80 dark:bg-violet-950/30";
  }
  return "border-l-4 border-primary/45 bg-muted/15 dark:bg-gray-900/35";
}

export function questionCardAccentClass(role: string | null | undefined): string {
  const r = role?.toUpperCase();
  if (r === "MODERATOR") return "border-l-4 border-l-amber-500/80";
  if (r === "INSTRUCTOR") return "border-l-4 border-l-violet-500/80";
  return "";
}

export function formatDiscDate(iso: string | null | undefined): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatAnswerTimestamp(iso: string | null | undefined): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export function answersForQuestion(
  q: CourseDiscussionQuestion
): CourseDiscussionAnswer[] {
  const raw = q.answers;
  if (!Array.isArray(raw)) return [];
  return raw.filter((a) => a.isActive !== false);
}
