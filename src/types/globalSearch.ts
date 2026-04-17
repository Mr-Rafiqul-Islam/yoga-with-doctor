/** Course row from GET /api/v1/client/search */
export interface GlobalSearchCourseItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  categorySlug: string | null;
  access: string;
  isFeatured: boolean;
  avgRating: number;
  ratingCount: number;
}

/** Class row from GET /api/v1/client/search */
export interface GlobalSearchClassItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  categorySlug: string | null;
  access: string;
  isFeatured: boolean;
  totalViews: number;
  mediaAssetId: string;
  avgRating: number;
  ratingCount: number;
}

export interface GlobalSearchData {
  courses: GlobalSearchCourseItem[];
  classes: GlobalSearchClassItem[];
}

export interface GlobalSearchMeta {
  search: string;
  limitPerType: number;
  counts: {
    courses: number;
    classes: number;
  };
}

export interface GlobalSearchApiResponse {
  success: boolean;
  message: string;
  data: GlobalSearchData;
  meta: GlobalSearchMeta;
}
