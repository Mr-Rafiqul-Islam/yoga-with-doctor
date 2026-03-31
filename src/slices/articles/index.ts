import { createApi } from "@reduxjs/toolkit/query/react";
import { createReauthBaseQuery } from "@/slices/auth";

// ============================================================================
// TYPES - Articles (based on website API response)
// ============================================================================

export type ArticleAccess = "PUBLIC" | "PAID" | "PREMIUM" | "FREE";

export interface Article {
  id: string;
  title: string;
  slug: string;
  subTitle: string | null;
  description: string | null;
  content?: string | null;
  category: string | null;
  focus: string | null;
  props: string | null;
  image: string | null;
  authorName: string | null;
  access: ArticleAccess;
  createdAt: string;
  updatedAt: string;
  commentCount: number;
}

export interface ArticlePagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// ============================================================================
// REQUEST TYPES
// ============================================================================

export interface GetArticlesParams {
  page?: number;
  limit?: number;
  q?: string;
  category?: string;
  access?: ArticleAccess;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

// ============================================================================
// RESPONSE TYPES
// ============================================================================

export interface GetArticlesResponse {
  success: boolean;
  message?: string;
  data: {
    articles: Article[];
    pagination: ArticlePagination;
  };
}

export interface GetArticleBySlugResponse {
  success: boolean;
  message?: string;
  data: {
    article: Article;
  };
}

export interface ActionResponse {
  success: boolean;
  message: string;
}

// ============================================================================
// REDUX API SLICE
// ============================================================================

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  baseQuery: createReauthBaseQuery(),
  tagTypes: ["Articles", "Article"],
  endpoints: (builder) => ({
    /**
     * GET /api/v1/client/articles/all
     * List articles with pagination/filter/sort.
     */
    getArticles: builder.query<GetArticlesResponse, GetArticlesParams | void>({
      query: (params) => {
        if (!params) {
          return { url: "/api/v1/client/articles/all", method: "GET" };
        }

        const { page, limit, q, category, access, sortBy, sortOrder } = params;
        const queryParams = new URLSearchParams();

        if (page != null) queryParams.append("page", String(page));
        if (limit != null) queryParams.append("limit", String(limit));
        if (q) queryParams.append("q", q);
        if (category) queryParams.append("category", category);
        if (access) queryParams.append("access", access);
        if (sortBy) queryParams.append("sortBy", sortBy);
        if (sortOrder) queryParams.append("sortOrder", sortOrder);

        const qs = queryParams.toString();
        return {
          url: qs
            ? `/api/v1/client/articles/all?${qs}`
            : "/api/v1/client/articles/all",
          method: "GET",
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.data.articles.map(({ id }) => ({
                type: "Articles" as const,
                id,
              })),
              { type: "Articles", id: "LIST" },
            ]
          : [{ type: "Articles", id: "LIST" }],
    }),

    /**
     * GET /api/v1/client/articles/free/:slug
     * Get public article details by slug.
     */
    getArticleBySlugPublic: builder.query<GetArticleBySlugResponse, string>({
      query: (slug) => ({
        url: `/api/v1/client/articles/free/${slug}`,
        method: "GET",
      }),
      providesTags: (result, _error, slug) => {
        const id = result?.data?.article?.id;
        return [
          { type: "Article" as const, id: slug },
          ...(id ? [{ type: "Articles" as const, id }] : []),
        ];
      },
    }),

    /**
     * GET /api/v1/client/articles/:slug
     * Get auth article details by slug.
     */
    getArticleBySlugAuth: builder.query<GetArticleBySlugResponse, string>({
      query: (slug) => ({
        url: `/api/v1/client/articles/${slug}`,
        method: "GET",
      }),
      providesTags: (result, _error, slug) => {
        const id = result?.data?.article?.id;
        return [
          { type: "Article" as const, id: slug },
          ...(id ? [{ type: "Articles" as const, id }] : []),
        ];
      },
    }),

    /**
     * POST /api/v1/client/articles/:id/view
     * Track article view.
     */
    trackArticleView: builder.mutation<ActionResponse, string>({
      query: (id) => ({
        url: `/api/v1/client/articles/${id}/view`,
        method: "POST",
      }),
    }),

    /**
     * POST /api/v1/client/articles/:id/like
     * Track article like/unlike.
     */
    trackArticleLike: builder.mutation<ActionResponse, string>({
      query: (id) => ({
        url: `/api/v1/client/articles/${id}/like`,
        method: "POST",
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "Articles", id },
        { type: "Articles", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useGetArticleBySlugPublicQuery,
  useGetArticleBySlugAuthQuery,
  useTrackArticleViewMutation,
  useTrackArticleLikeMutation,
} = articlesApi;
