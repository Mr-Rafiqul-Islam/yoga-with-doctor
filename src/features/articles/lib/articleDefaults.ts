import type { ArticleAuthor, FeaturedArticle } from "@/features/articles/data/dummyArticles";

const DEFAULT_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD3rWWjBSOe7Z_1EqIrq2-TMzV5aFpDysK9W4952JWtHES4kZLMNKV9pJAkA1K725BBcWIsKtwF19r2tuP0QaymlfwNp9rB5qocTH3L6bkU92zo35H6dPbryTjzjrOn0d09iWbOB6rHfLTnhJJOQleH-EcVAXzbeVbTRVSiYuuJuMZqs_pyzsb6oUR99Z2ot26ONxqvX4q83cjk54j7KasFsZtrpQLN4aVFaJsX84W3jIOVUhLE5BgUSpKlS9afAAQB9HnPH0a85w";

export const FALLBACK_ARTICLE_IMAGE = DEFAULT_IMG;

/** Author used when mapping API articles to cards / details. */
export const DEFAULT_AUTHOR_FOR_MAP: ArticleAuthor = {
  name: "Dr. Shah Alam",
  title: "Orthopedics Specialist, Spine Surgeion & Yoga Instructor.",
  avatarSrc:
    "/Dr. Shah Alam-2.jpeg",
  bioSnippet:
    "MBBS • D.Ortho (BSMMU)\n Orthopedic & Spine Surgeon.\n Life Member- Bangladesh Orthopedic Society.\n Yoga Instructor. \n Certified Life Member- Indian Yoga Association",
  fullBio:
    "Specializing in the intersection of neuroscience and traditional yogic practices.",
  profileLink: "https://drshahalam.com/",
};

export const YWD_TEAM_AUTHOR: ArticleAuthor = {
  name: "YWD Team",
  title: "Yoga Wellness Writer",
  avatarSrc: DEFAULT_AUTHOR_FOR_MAP.avatarSrc,
  bioSnippet: "",
  fullBio: "",
  profileLink: "#",
};

/** Minimal `FeaturedArticle` used only for fallback image/author in mappers. */
export const fallbackFeaturedArticle: FeaturedArticle = {
  slug: "_fallback",
  image: FALLBACK_ARTICLE_IMAGE,
  imageAlt: "",
  category: "General",
  readTime: "5 min read",
  title: "",
  description: "",
  author: DEFAULT_AUTHOR_FOR_MAP,
  tags: [],
  href: "/articles",
  detailsContent: "",
};
