import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "@/slices/auth";
import type {
  GetReviewsResponse,
  GetReviewsParams,
  GetMyReviewResponse,
  UpsertReviewRequest,
  UpsertReviewResponse,
} from "@/types/review";

const baseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.API_BASE_URL ?? "";

// ============================================================================
// TYPES - Course System
// ============================================================================

export interface Video {
  id: string;
  title: string;
  thumbnail: string | null;
  duration: number | null;
  status: "PROCESSING" | "READY" | "FAILED";
  muxPlaybackId: string | null;
  muxAssetId?: string | null;
  muxUploadId?: string | null;
  access?: "PUBLIC" | "PAID" | "PREMIUM";
  level: string | null;
  createdAt?: string;
  updatedAt?: string;
  /** Optional; not present in course-detail lesson video response */
  isPremium?: boolean;
}

export interface VideoPlaybackResponse {
  success: boolean;
  message: string;
  data: {
    videoId: string;
    playbackId: string;
    signedUrl: string;
    token: string | null;
    expiresIn: number | null;
    duration: number | null;
    isPremium: boolean;
    requiresToken?: boolean;
  };
}

export interface LessonResource {
  id: string;
  title: string;
  type: "PDF" | "LINK" | "IMAGE" | "AUDIO" | "OTHER";
  url: string | null;
  sizeKb: number | null;
  locked?: boolean;
}

export interface CourseLesson {
  id: string;
  title: string;
  description: string | null;
  order: number;
  durationMin: number | null;
  videoId: string | null;
  video: Video | null;
  resources: LessonResource[];
  locked?: boolean;
}

export interface CourseSection {
  id: string;
  title: string;
  order: number;
  lessons: CourseLesson[];
}

export interface CourseResource {
  id: string;
  title: string;
  type: "PDF" | "LINK" | "IMAGE" | "AUDIO" | "OTHER";
  url: string | null;
  sizeKb: number | null;
  locked?: boolean;
}

export interface CourseQuiz {
  id: string;
  title: string;
  passScore: number;
  _count: {
    questions: number;
  };
}

/** Product data; may be empty {} in response when course has no product */
export interface ProductData {
  id?: string | null;
  type?: string | null;
  title?: string | null;
  description?: string | null;
  price?: number | null;
  currency?: string | null;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string | null;

  // List API fields
  bannerImageId?: string | null;
  bannerUrl?: string | null;

  // Legacy / alternative image field used by some endpoints
  bannerImage?: string | null;

  level: string | null;
  access: "FREE" | "PAID" | "PUBLIC" | "PREMIUM";

  // Optional flags/metadata that may or may not be present in all responses
  isPremium?: boolean;
  instructorName: string | null;
  locked?: boolean;
  hasAccess?: boolean;
  avgRating?: number | null;
  ratingCount?: number;

  sections?: CourseSection[];
  resources?: CourseResource[];
  quizzes?: CourseQuiz[];
  productData?: ProductData;
  _count?: {
    sections: number;
    resources: number;
    quizzes: number;
  };
  createdAt: string;
  updatedAt: string;
}

// ============================================================================
// TYPES - Entitlement System
// ============================================================================

export interface Entitlement {
  id: string;
  userId: string;
  productId: string;
  startsAt: string;
  expiresAt: string | null;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  product: {
    id: string;
    type: string;
    title: string;
    description: string | null;
    price: number;
    currency: string;
    course: {
      id: string;
      title: string;
      slug: string;
      bannerImage: string | null;
      isActive: boolean;
    } | null;
    bundle: any | null;
    liveEvent: any | null;
  };
  purchase: {
    id: string;
    status: string;
    amount: number;
    currency: string;
    paidAt: string | null;
  } | null;
  subscription: any | null;
}

// ============================================================================
// TYPES - Purchase System
// ============================================================================

export interface Purchase {
  id: string;
  userId: string;
  productId: string;
  provider: "BKASH" | "SSL";
  status:
    | "PENDING"
    | "PAID"
    | "FAILED"
    | "REFUNDED"
    | "CANCELED"
    | "ON_HOLD";
  amount: number;
  currency: string;
  providerPaymentId: string | null;
  providerTrxId: string | null;
  paidAt: string | null;
  createdAt: string;
  updatedAt: string;
}

// ============================================================================
// REQUEST TYPES
// ============================================================================

export interface GetCoursesParams {
  page?: number;
  limit?: number;
  q?: string;
  access?: "FREE" | "PAID" | "PUBLIC" | "PREMIUM";
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface CheckoutRequest {
  productId: string;
}

export interface InitSslPaymentRequest {
  purchaseId: string;
}

export interface ConfirmPurchaseRequest {
  purchaseId: string;
  valId?: string;
}

// ============================================================================
// RESPONSE TYPES
// ============================================================================

export interface GetCoursesResponse {
  success: boolean;
  message: string;
  data: {
    courses: Course[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

/** Product item in all-types course response */
export interface AllTypeCourseProduct {
  id: string;
  type: string;
  title: string;
  description: string | null;
  price: number;
  currency: string;
}

/** Course item from GET /api/v1/client/courses/all-types */
export interface AllTypeCourseItem {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  bannerImageId: string | null;
  bannerUrl: string | null;
  level: string;
  access: "FREE" | "PAID" | "PUBLIC" | "PREMIUM";
  isActive: boolean;
  instructorName: string;
  category: string | null;
  createdAt: string;
  updatedAt: string;
  products: AllTypeCourseProduct[];
  bundleCourses: unknown[];
  _count: {
    sections: number;
    resources: number;
    quizzes: number;
  };
}

export interface GetAllTypeCoursesResponse {
  success: boolean;
  message: string;
  data: {
    courses: AllTypeCourseItem[];
    total: number;
  };
}

export interface CourseResponse {
  success: boolean;
  message: string;
  data: {
    course: Course;
  };
}

export interface CourseContentResponse {
  success: boolean;
  message: string;
  data: {
    course: {
      id: string;
      title: string;
      slug: string;
      description: string | null;
      bannerImageId?: string | null;
      bannerUrl?: string | null;
      bannerImage?: string | null;
      level: string | null;
      access: "FREE" | "PAID" | "PUBLIC" | "PREMIUM";
      isPremium?: boolean;
      instructorName: string | null;
      sections: CourseSection[];
      resources: CourseResource[];
    };
  };
}

export interface CourseAccessResponse {
  success: boolean;
  message: string;
  data: {
    courseId: string;
    courseTitle: string;
    courseSlug: string;
    hasAccess: boolean;
    reason: string;
  };
}

export interface CourseResourcesResponse {
  success: boolean;
  message: string;
  data: {
    courseId: string;
    resources: CourseResource[];
    lessonResources: (CourseResource & { lessonId: string })[];
  };
}

export interface CourseQuizzesResponse {
  success: boolean;
  message: string;
  data: {
    courseId: string;
    quizzes: CourseQuiz[];
  };
}

export interface EntitlementsResponse {
  success: boolean;
  message: string;
  data: Entitlement[];
}

export interface CheckoutResponse {
  success: boolean;
  message: string;
  data: {
    purchaseId: string;
  };
}

export interface InitSslPaymentResponse {
  success: boolean;
  message: string;
  data: {
    gatewayUrl: string;
  };
}

export interface PurchaseStatusResponse {
  success: boolean;
  message: string;
  data: Purchase;
}

export interface ConfirmPurchaseResponse {
  success: boolean;
  message: string;
  data?: any;
}

export interface ActionResponse {
  success: boolean;
  message: string;
}

// ============================================================================
// REDUX API SLICE
// ============================================================================

export const coursesApi = createApi({
  reducerPath: "coursesApi",
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
  tagTypes: [
    "Courses",
    "Course",
    "CourseContent",
    "CourseResources",
    "CourseQuizzes",
    "Entitlements",
    "Purchase",
    "CourseReviews",
    "MyCourseReview",
  ],
  endpoints: (builder) => ({
    // ========================================================================
    // COURSE ENDPOINTS
    // ========================================================================

    /**
     * GET /api/v1/client/courses/all
     * List active courses with pagination and filtering
     */
    getCourses: builder.query<GetCoursesResponse, GetCoursesParams | void>({
      query: (params) => {
        const {
          page = 1,
          limit = 10,
          q,
          access,
          sortBy = "createdAt",
          sortOrder = "desc",
        } = params || {};

        const queryParams = new URLSearchParams();
        queryParams.append("page", page.toString());
        queryParams.append("limit", limit.toString());
        if (q) queryParams.append("q", q);
        if (access) queryParams.append("access", access);
        queryParams.append("sortBy", sortBy);
        queryParams.append("sortOrder", sortOrder);

        return {
          url: `/api/v1/client/courses/all?${queryParams.toString()}`,
          method: "GET",
        };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.data.courses.map(({ id }) => ({
                type: "Courses" as const,
                id,
              })),
              { type: "Courses", id: "LIST" },
            ]
          : [{ type: "Courses", id: "LIST" }],
    }),

    /**
     * GET /api/v1/client/courses/all-types
     * Get all courses (free, paid, premium) with product and bundle data
     */
    getAllTypeCourses: builder.query<GetAllTypeCoursesResponse, void>({
      query: () => ({
        url: `/api/v1/client/courses/all-types`,
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.courses.map(({ id }) => ({
                type: "Courses" as const,
                id,
              })),
              { type: "Courses", id: "LIST" },
            ]
          : [{ type: "Courses", id: "LIST" }],
    }),

    /**
     * GET /api/v1/client/courses/:slug
     * Get course by slug with structure (applies lock rules)
     */
    getCourseBySlug: builder.query<CourseResponse, string>({
      query: (slug) => ({
        url: `/api/v1/client/courses/${slug}`,
        method: "GET",
      }),
      providesTags: (_result, _error, slug) => [{ type: "Course", id: slug }],
    }),

    /**
     * GET /api/v1/client/courses/:slug/content
     * Get course content with entitlement guard (requires auth)
     */
    getCourseContent: builder.query<CourseContentResponse, string>({
      query: (slug) => ({
        url: `/api/v1/client/courses/${slug}/content`,
        method: "GET",
      }),
      providesTags: (_result, _error, slug) => [
        { type: "CourseContent", id: slug },
        { type: "Course", id: slug },
      ],
    }),

    /**
     * GET /api/v1/client/courses/:id/access
     * Check course access (entitlement check) (requires auth)
     */
    checkCourseAccess: builder.query<CourseAccessResponse, string>({
      query: (id) => ({
        url: `/api/v1/client/courses/${id}/access`,
        method: "GET",
      }),
      providesTags: (_result, _error, id) => [{ type: "Course", id }],
    }),

    /**
     * GET /api/v1/client/courses/:courseId/resources
     * Get course resources (requires auth, entitlement guard)
     */
    getCourseResources: builder.query<CourseResourcesResponse, string>({
      query: (courseId) => ({
        url: `/api/v1/client/courses/${courseId}/resources`,
        method: "GET",
      }),
      providesTags: (_result, _error, courseId) => [
        { type: "CourseResources", id: courseId },
        { type: "Course", id: courseId },
      ],
    }),

    /**
     * GET /api/v1/client/courses/:courseId/quizzes
     * Get course quizzes (requires auth, entitlement guard)
     */
    getCourseQuizzes: builder.query<CourseQuizzesResponse, string>({
      query: (courseId) => ({
        url: `/api/v1/client/courses/${courseId}/quizzes`,
        method: "GET",
      }),
      providesTags: (_result, _error, courseId) => [
        { type: "CourseQuizzes", id: courseId },
        { type: "Course", id: courseId },
      ],
    }),

    /**
     * POST /api/v1/client/courses/:id/view
     * Track course view activity (requires auth)
     */
    viewCourse: builder.mutation<ActionResponse, string>({
      query: (id) => ({
        url: `/api/v1/client/courses/${id}/view`,
        method: "POST",
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "Course", id },
        { type: "Courses", id: "LIST" },
      ],
    }),

    // ========================================================================
    // ENTITLEMENT ENDPOINTS
    // ========================================================================

    /**
     * GET /api/v1/client/entitlements
     * Get user entitlements (requires auth)
     */
    getEntitlements: builder.query<EntitlementsResponse, void>({
      query: () => ({
        url: `/api/v1/client/entitlements`,
        method: "GET",
      }),
      providesTags: ["Entitlements"],
    }),

    // ========================================================================
    // PURCHASE ENDPOINTS
    // ========================================================================

    /**
     * POST /api/v1/client/checkout
     * Start checkout - creates Purchase with PENDING status (requires auth)
     */
    createCheckout: builder.mutation<CheckoutResponse, CheckoutRequest>({
      query: (body) => ({
        url: `/api/v1/client/checkout`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Entitlements", "Purchase"],
    }),

    /**
     * POST /api/v1/payments/ssl/init
     * Initialize SSL payment session (requires auth)
     */
    initSslPayment: builder.mutation<InitSslPaymentResponse, InitSslPaymentRequest>({
      query: (body) => ({
        url: `/api/v1/payments/ssl/init`,
        method: "POST",
        body,
      }),
    }),

    /**
     * GET /api/v1/client/purchases/:purchaseId
     * Get purchase status (requires auth)
     */
    getPurchaseStatus: builder.query<PurchaseStatusResponse, string>({
      query: (purchaseId) => ({
        url: `/api/v1/client/purchases/${purchaseId}`,
        method: "GET",
      }),
      providesTags: (_result, _error, purchaseId) => [
        { type: "Purchase", id: purchaseId },
      ],
    }),

    /**
     * POST /api/v1/client/purchases/confirm
     * Confirm purchase - verify payment and create entitlement (requires auth)
     */
    confirmPurchase: builder.mutation<
      ConfirmPurchaseResponse,
      ConfirmPurchaseRequest
    >({
      query: (body) => ({
        url: `/api/v1/client/purchases/confirm`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Entitlements", "Purchase", "Course"],
    }),

    // ========================================================================
    // VIDEO PLAYBACK ENDPOINTS
    // ========================================================================

    /**
     * GET /api/v1/client/videos/:id/playback
     * Get video playback token (requires auth)
     */
    getVideoPlayback: builder.query<VideoPlaybackResponse, string>({
      query: (videoId) => ({
        url: `/api/v1/client/videos/${videoId}/playback`,
        method: "GET",
      }),
    }),

    // ========================================================================
    // REVIEW ENDPOINTS
    // ========================================================================

    getCourseReviews: builder.query<GetReviewsResponse, GetReviewsParams>({
      query: ({ slug, page = 1, limit = 20 }) => ({
        url: `/api/v1/client/courses/${slug}/reviews`,
        params: { page, limit },
      }),
      providesTags: (_result, _error, { slug }) => [
        { type: "CourseReviews", id: slug },
      ],
    }),

    getMyCourseReview: builder.query<GetMyReviewResponse, string>({
      query: (slug) => `/api/v1/client/courses/${slug}/reviews/me`,
      providesTags: (_result, _error, slug) => [
        { type: "MyCourseReview", id: slug },
      ],
    }),

    upsertCourseReview: builder.mutation<
      UpsertReviewResponse,
      UpsertReviewRequest
    >({
      query: ({ slug, ...body }) => ({
        url: `/api/v1/client/courses/${slug}/reviews`,
        method: "POST",
        body,
      }),
      invalidatesTags: (_result, _error, { slug }) => [
        { type: "CourseReviews", id: slug },
        { type: "MyCourseReview", id: slug },
        { type: "Course", id: slug },
      ],
    }),
  }),
});

// ============================================================================
// EXPORT HOOKS
// ============================================================================

export const {
  // Course queries
  useGetCoursesQuery,
  useGetAllTypeCoursesQuery,
  useGetCourseBySlugQuery,
  useGetCourseContentQuery,
  useCheckCourseAccessQuery,
  useGetCourseResourcesQuery,
  useGetCourseQuizzesQuery,

  // Course mutations
  useViewCourseMutation,

  // Entitlement queries
  useGetEntitlementsQuery,
  useLazyGetEntitlementsQuery,

  // Purchase queries
  useGetPurchaseStatusQuery,
  useLazyGetPurchaseStatusQuery,

  // Purchase mutations
  useCreateCheckoutMutation,
  useInitSslPaymentMutation,
  useConfirmPurchaseMutation,

  // Video playback queries
  useGetVideoPlaybackQuery,
  useLazyGetVideoPlaybackQuery,

  // Review queries & mutations
  useGetCourseReviewsQuery,
  useGetMyCourseReviewQuery,
  useUpsertCourseReviewMutation,
} = coursesApi;

