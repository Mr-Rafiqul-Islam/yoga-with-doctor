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
  
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
  
    const headings = Array.from(doc.querySelectorAll("h2"));
  
    const toc: TocItem[] = [];
  
    headings.forEach((heading) => {
      const text = heading.textContent?.trim() || "";
      const id = text
        .toLowerCase()
        .replace(/[^\w]+/g, "-")
        .replace(/^-|-$/g, "");
  
      heading.setAttribute("id", id);
  
      toc.push({ id, text });
    });
  
    return {
      toc,
      contentWithIds: doc.body.innerHTML,
    };
  }
  