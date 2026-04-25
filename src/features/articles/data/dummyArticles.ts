/**
 * Shared article types for the articles feature. Runtime fallbacks live in
 * `src/features/articles/lib/articleDefaults.ts` and API mapping in `mapApiArticle.ts`.
 */

export type FeaturedArticle = {
  slug: string;
  image: string;
  imageAlt: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
  author: ArticleAuthor;
  tags: string[];
  href: string;
  detailsContent: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type ArticleDetails = {
  slug: string;
  image: string;
  imageAlt: string;
  badge?: "FREE" | "PREMIUM";
  readTime?: string;
  category: string;
  timeAgo?: string;
  title: string;
  description: string;
  author: ArticleAuthor;
  actionLabel?: string;
  href: string;
  tags: string[];
  detailsContent: string;
};

export type ArticleAuthor = {
  name: string;
  title: string;
  avatarSrc: string;
  bioSnippet: string;
  fullBio: string;
  profileLink: string;
  quotes?: string;
  tags?: string[];
};
