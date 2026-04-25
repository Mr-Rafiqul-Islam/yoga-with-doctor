export type TocItem = {
    id: string;
    text: string;
  };
  
  export function generateToc(html: string): {
    toc: TocItem[];
    contentWithIds: string;
  } {
    if (typeof window === "undefined") {
      return { toc: [], contentWithIds: html };
    }

    if (!html?.trim()) {
      return { toc: [], contentWithIds: html };
    }
  
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
  
    const headings = Array.from(doc.querySelectorAll("h2"));
  
    const toc: TocItem[] = [];
  
    headings.forEach((heading, index) => {
      const text = heading.textContent?.trim() || "";
      let id = text
        .toLowerCase()
        .replace(/[^\w\u00C0-\u024F\u0400-\u04FF]+/g, "-")
        .replace(/^-|-$/g, "");
      if (!id) id = `section-${index}`;

      heading.setAttribute("id", id);
  
      toc.push({ id, text });
    });
  
    const contentWithIds = doc.body?.innerHTML ?? html;
    // If the parser ever yields an empty body, keep the original string so the article is not blanked.
    if (html.trim() && !contentWithIds.trim()) {
      return { toc: [], contentWithIds: html };
    }

    return {
      toc,
      contentWithIds,
    };
  }
  