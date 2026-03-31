import { createApi } from "@reduxjs/toolkit/query/react";
import { createReauthBaseQuery } from "@/slices/auth";

// =============================================================================
// TYPES - Enrollment API (client-facing, matches enrollment.controller.js)
// =============================================================================

export type EnrollmentItemType =
  | "video"
  | "class"
  | "challenge"
  | "course"
  | "unknown";

export interface EnrollmentVideoSummary {
  id: string;
  title: string;
  slug?: string;
  thumbnail?: string | null;
  duration?: number | null;
  status?: string | null;
  isActive?: boolean;
}

export interface EnrollmentClassSummary {
  id: number | string;
  title: string;
  slug?: string;
  description?: string | null;
}

export interface EnrollmentChallengeSummary {
  id: string;
  title: string;
  slug?: string;
  subTitle?: string | null;
  bannerImage?: string | null;
  isActive?: boolean;
}

export interface EnrollmentCourseSummary {
  id: string;
  title: string;
  slug?: string;
  description?: string | null;
  bannerImage?: string | null;
  isActive?: boolean;
  access?: string | null;
}

export interface EnrollmentSummary {
  id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  type: EnrollmentItemType;
  videoId?: string | null;
  classId?: number | string | null;
  challengeId?: string | null;
  courseId?: string | null;
  video?: EnrollmentVideoSummary | null;
  class?: EnrollmentClassSummary | null;
  challenge?: EnrollmentChallengeSummary | null;
  course?: EnrollmentCourseSummary | null;
}

export interface EnrollmentPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface GetMyEnrollmentsQuery {
  type?: "video" | "class" | "challenge" | "course";
  page?: number;
  limit?: number;
}

export interface GetMyEnrollmentsResponse {
  success: boolean;
  message: string;
  data: EnrollmentSummary[];
  pagination: EnrollmentPagination;
}

export interface EnrollmentEntitySummary {
  type: "video" | "class" | "challenge" | "course";
  id: string;
  title: string;
  slug?: string;
  access?: string;
  isPremium?: boolean;
}

export interface EnrollmentRecord {
  id: string;
  userId: string;
  courseId?: string | null;
  classId?: number | string | null;
  challengeId?: string | null;
  videoId?: string | null;
  createdAt: string;
  updatedAt: string;
  // keep loose to match server includes
  course?: EnrollmentCourseSummary | null;
  class?: EnrollmentClassSummary | null;
  challenge?: EnrollmentChallengeSummary | null;
  video?: EnrollmentVideoSummary | null;
}

export interface AddEnrollmentRequest {
  itemId: string;
}

export interface AddEnrollmentResponse {
  success: boolean;
  message: string;
  data: {
    hasAccess: boolean;
    reason?: string;
    item: EnrollmentEntitySummary | null;
    enrollment: EnrollmentRecord | null;
  };
}

// =============================================================================
// REDUX API SLICE - Enrollment
// =============================================================================

export const enrollmentApi = createApi({
  reducerPath: "enrollmentApi",
  baseQuery: createReauthBaseQuery((headers) => {
    headers.set("Content-Type", "application/json");
  }),
  tagTypes: ["Enrollments"],
  endpoints: (builder) => ({
    /**
     * GET /api/v1/client/enrollments
     * List current user's enrollments with pagination and optional type filter.
     */
    getMyEnrollments: builder.query<GetMyEnrollmentsResponse, GetMyEnrollmentsQuery | void>(
      {
        query: (args) => {
          const params = new URLSearchParams();
          const type = args?.type;
          const page = args?.page ?? 1;
          const limit = args?.limit ?? 20;

          if (type) params.set("type", type);
          params.set("page", String(page));
          params.set("limit", String(limit));

          return {
            url: `/api/v1/client/enrollments?${params.toString()}`,
            method: "GET",
          };
        },
        providesTags: (result) =>
          result
            ? [
                ...result.data.map(({ id }) => ({
                  type: "Enrollments" as const,
                  id,
                })),
                { type: "Enrollments", id: "LIST" },
              ]
            : [{ type: "Enrollments", id: "LIST" }],
        
      }
    ),

    /**
     * POST /api/v1/client/enrollments/post
     * Enroll current user into a course/class/challenge/video by itemId.
     */
    addEnrollmentByItemId: builder.mutation<
      AddEnrollmentResponse,
      AddEnrollmentRequest
    >({
      query: (body) => ({
        url: "/api/v1/client/enrollments/post",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetMyEnrollmentsQuery,
  useLazyGetMyEnrollmentsQuery,
  useAddEnrollmentByItemIdMutation,
} = enrollmentApi;

