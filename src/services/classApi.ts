import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "@/utils/tokenStore";

const baseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.API_BASE_URL ?? "";

// --- API response types (from getClasses) ---

export interface ClassVideo {
  id: string;
  title: string;
  thumbnail: string | null;
  duration: number;
  status: string;
  muxPlaybackId: string;
  muxAssetId: string;
  muxUploadId: string;
  access: "PREMIUM" | "PUBLIC" | "PAID";
  level: string;
  createdAt: string;
  updatedAt: string;
}

export interface ClassItem {
  title: string;
  slug: string;
  category: string[];
  props: string[];
  focus: string[];
  totalViews: number;
  access: "PREMIUM" | "PUBLIC" | "PAID";
  mediaAssetId: string;
  video: ClassVideo;
  shortDescription: string;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface GetClassesData {
  classes: ClassItem[];
  pagination: PaginationMeta;
}

export interface GetClassesResponse {
  success: boolean;
  message: string;
  data: GetClassesData;
}

export interface GetClassesParams {
  page?: number;
  limit?: number;
  category?: string;
  difficulty?: string;
  access?: "PREMIUM" | "PUBLIC" | "PAID";
}

// Class by slug (single class) – adjust types if your getClassBySlug response differs
export interface ClassResponse {
  success: boolean;
  message: string;
  data: ClassItem;
}

export interface ActionResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

// --- Class API slice (website) ---

export const classApi = createApi({
  reducerPath: "classApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Classes", "Class"],
  endpoints: (builder) => ({
    getClasses: builder.query<GetClassesResponse, GetClassesParams | void>({
      query: (params) => {
        const {
          page = 1,
          limit = 10,
          category,
          difficulty,
          access,
        } = params ?? {};

        const queryParams = new URLSearchParams();
        queryParams.append("page", page.toString());
        queryParams.append("limit", limit.toString());
        if (category) queryParams.append("category", category);
        if (difficulty) queryParams.append("difficulty", difficulty);
        if (access !== undefined) queryParams.append("access", String(access));

        return {
          url: `/api/v1/client/classes?${queryParams.toString()}`,
          method: "GET",
        };
      },
      providesTags: (result) =>
        result?.data?.classes
          ? [
              ...result.data.classes.map((item) => ({
                type: "Classes" as const,
                id: item.slug,
              })),
              { type: "Classes", id: "LIST" },
            ]
          : [{ type: "Classes", id: "LIST" }],
    }),

    getClassBySlug: builder.query<ClassResponse, string>({
      query: (slug) => ({
        url: `/api/v1/client/classes/${slug}`,
        method: "GET",
      }),
      providesTags: (_result, _error, slug) => [{ type: "Class", id: slug }],
    }),

    enrollInClass: builder.mutation<ActionResponse, string>({
      query: (id) => ({
        url: `/api/v1/client/classes/${id}/enroll`,
        method: "POST",
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "Class", id },
        { type: "Classes", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetClassesQuery,
  useGetClassBySlugQuery,
  useEnrollInClassMutation,
} = classApi;
