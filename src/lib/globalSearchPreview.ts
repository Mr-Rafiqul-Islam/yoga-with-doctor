import type {
  GlobalSearchArticleItem,
  GlobalSearchCourseItem,
} from "@/types/globalSearch";

export function getCourseSearchSubtitle(c: GlobalSearchCourseItem): string | null {
  const t = c.shortDescription?.trim();
  if (t) return t;
  const bits = [c.level, c.instructorName].map((s) => s?.trim()).filter(Boolean);
  return bits.length ? bits.join(" · ") : null;
}

export function getArticleSearchSubtitle(a: GlobalSearchArticleItem): string | null {
  const st = a.subTitle?.trim();
  if (st) return st;
  const d = a.description?.trim();
  if (!d) return null;
  return plainTextPreviewFromHtml(d, 400);
}

function plainTextPreviewFromHtml(html: string, maxLen: number): string {
  const withoutTags = html.replace(/<[^>]*>/g, " ");
  const collapsed = withoutTags.replace(/\s+/g, " ").trim();
  const decoded = decodeHtmlEntities(collapsed);
  return decoded.length <= maxLen ? decoded : `${decoded.slice(0, maxLen - 1)}…`;
}

function decodeHtmlEntities(text: string): string {
  if (typeof document === "undefined") {
    return text.replace(/&([a-z]+|#\d+);/gi, " ");
  }
  const el = document.createElement("textarea");
  el.innerHTML = text;
  return el.value;
}
