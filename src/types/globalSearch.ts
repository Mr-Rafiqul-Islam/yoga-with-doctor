/** Course row from GET /api/v1/client/search */
export interface GlobalSearchCourseItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string | null;
  bannerUrl: string | null;
  level: string;
  categorySlug: string | null;
  access: string;
  isFeatured: boolean;
  instructorName: string;
  avgRating: number;
  ratingCount: number;
}

/** Class row from GET /api/v1/client/search */
export interface GlobalSearchClassItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string | null;
  categorySlug: string | null;
  access: string;
  isFeatured: boolean;
  totalViews: number;
  mediaAssetId: string;
  /** Present when the API resolves a poster/thumbnail URL for search */
  thumbnailUrl?: string | null;
  bannerUrl?: string | null;
  avgRating: number;
  ratingCount: number;
}

/** Article row from GET /api/v1/client/search */
export interface GlobalSearchArticleItem {
  id: string;
  title: string;
  slug: string;
  subTitle: string;
  description: string;
  image: string | null;
  authorName: string;
  access: string;
  createdAt: string;
  commentCount: number;
}

export interface GlobalSearchData {
  courses: GlobalSearchCourseItem[];
  classes: GlobalSearchClassItem[];
  articles: GlobalSearchArticleItem[];
}

export interface GlobalSearchMeta {
  search: string;
  limitPerType: number;
  counts: {
    courses: number;
    classes: number;
    articles: number;
  };
}

export interface GlobalSearchApiResponse {
  success: boolean;
  message: string;
  data?: GlobalSearchData;
  meta?: GlobalSearchMeta;
}
