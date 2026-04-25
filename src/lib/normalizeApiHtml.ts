import { decode } from "he";

/**
 * Some APIs store rich text as HTML-escaped strings (`&lt;p&gt;...`). The console
 * can look like real tags while the DOM shows literal angle brackets. Decode
 * entities until stable; real HTML with tags passes through unchanged.
 */
export function normalizeRichtextHtmlForDom(html: string): string {
  if (!html) return html;
  let s = html.trim();
  for (let i = 0; i < 4; i++) {
    const next = decode(s);
    if (next === s) break;
    s = next;
  }
  return s;
}
