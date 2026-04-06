import { createApi } from "@reduxjs/toolkit/query/react";
import { createReauthBaseQuery } from "@/slices/auth";

// =============================================================================
// Types — channel + questions (community payload is loosely typed)
// =============================================================================

export interface CourseDiscussionChannel {
  id: string;
  name?: string | null;
  description?: string | null;
  courseId?: string | null;
  [key: string]: unknown;
}

export interface CourseDiscussionChannelResponse {
  success: boolean;
  data?: CourseDiscussionChannel;
  error?: string;
}

export interface CourseDiscussionQuestionAuthor {
  id?: string;
  name?: string | null;
  avatarUrl?: string | null;
  [key: string]: unknown;
}

/** Answer row nested on each question from GET .../questions (community shape). */
export interface CourseDiscussionAnswer {
  id: string;
  questionId: string;
  authorId: string;
  content: string;
  isActive: boolean;
  isPinned: boolean;
  isBest: boolean;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  author?: CourseDiscussionQuestionAuthor | null;
  [key: string]: unknown;
}

export interface CourseDiscussionQuestion {
  id: string;
  title?: string | null;
  content?: string | null;
  answerCount?: number | null;
  bestAnswerId?: string | null;
  isSolved?: boolean | null;
  isPinned?: boolean | null;
  lessonId?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  author?: CourseDiscussionQuestionAuthor | null;
  user?: CourseDiscussionQuestionAuthor | null;
  /** Nested replies when the API includes them on each question. */
  answers?: CourseDiscussionAnswer[] | null;
  [key: string]: unknown;
}

export interface CourseDiscussionQuestionsPagination {
  page?: number;
  limit?: number;
  total?: number;
  totalPages?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
}

export interface CourseDiscussionQuestionsNormalized {
  questions: CourseDiscussionQuestion[];
  pagination?: CourseDiscussionQuestionsPagination;
}

export interface CourseDiscussionQuestionsResponse {
  success: boolean;
  data?: CourseDiscussionQuestionsNormalized | unknown;
  error?: string;
}

export type CourseDiscussionQuestionFilterType =
  | "MY"
  | "UNANSWERED"
  | "SOLVED"
  | "TOP"
  | "LATEST";

export interface GetCourseDiscussionQuestionsArg {
  courseId: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc" | string;
  filterType?: CourseDiscussionQuestionFilterType | string;
}

export interface CreateCourseDiscussionQuestionBody {
  title: string;
  content: string;
  tags?: string[];
  lessonId?: string;
}

export interface CreateCourseDiscussionQuestionArg {
  courseId: string;
  body: CreateCourseDiscussionQuestionBody;
}

export interface CreateCourseDiscussionQuestionResponse {
  success: boolean;
  data?: CourseDiscussionQuestion | unknown;
  error?: string;
}

export interface CreateCourseDiscussionAnswerBody {
  questionId: string;
  content: string;
}

export interface CreateCourseDiscussionAnswerArg {
  courseId: string;
  body: CreateCourseDiscussionAnswerBody;
}

/** Create-answer response; aligns with community answer object. */
export type ChannelAnswerPayload = CourseDiscussionAnswer;

export interface CreateCourseDiscussionAnswerResponse {
  success: boolean;
  data?: ChannelAnswerPayload | unknown;
  error?: string;
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}

function normalizeQuestionAnswers(q: CourseDiscussionQuestion): CourseDiscussionQuestion {
  const raw = q.answers;
  if (!Array.isArray(raw)) {
    return q;
  }
  const answers = [...raw].sort(
    (a, b) =>
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );
  return { ...q, answers };
}

function pickPagination(o: Record<string, unknown>): CourseDiscussionQuestionsPagination | undefined {
  const pagination = o.pagination ?? o.meta;
  if (!isRecord(pagination)) {
    const page = o.page;
    const limit = o.limit;
    const total = o.total;
    if (page === undefined && limit === undefined && total === undefined) return undefined;
    return {
      page: typeof page === "number" ? page : Number(page),
      limit: typeof limit === "number" ? limit : Number(limit),
      total: typeof total === "number" ? total : Number(total),
    };
  }
  return {
    page: typeof pagination.page === "number" ? pagination.page : Number(pagination.page),
    limit: typeof pagination.limit === "number" ? pagination.limit : Number(pagination.limit),
    total: typeof pagination.total === "number" ? pagination.total : Number(pagination.total),
    totalPages:
      typeof pagination.totalPages === "number"
        ? pagination.totalPages
        : pagination.totalPages != null
          ? Number(pagination.totalPages)
          : undefined,
    hasNextPage: typeof pagination.hasNextPage === "boolean" ? pagination.hasNextPage : undefined,
    hasPreviousPage:
      typeof pagination.hasPreviousPage === "boolean" ? pagination.hasPreviousPage : undefined,
  };
}

/**
 * Normalize community list payloads: array root or { questions | items | data: [] }.
 */
export function normalizeCourseDiscussionQuestionsData(
  raw: unknown
): CourseDiscussionQuestionsNormalized {
  if (raw == null) return { questions: [] };
  if (Array.isArray(raw)) {
    const questions = (raw as CourseDiscussionQuestion[]).map(normalizeQuestionAnswers);
    return { questions };
  }
  if (!isRecord(raw)) return { questions: [] };
  const list = raw.questions ?? raw.items ?? raw.data;
  if (Array.isArray(list)) {
    const questions = (list as CourseDiscussionQuestion[]).map(normalizeQuestionAnswers);
    return {
      questions,
      pagination: pickPagination(raw),
    };
  }
  return { questions: [], pagination: pickPagination(raw) };
}

// =============================================================================
// API slice
// =============================================================================

export const courseDiscussionApi = createApi({
  reducerPath: "courseDiscussionApi",
  baseQuery: createReauthBaseQuery((headers) => {
    headers.set("Content-Type", "application/json");
  }),
  tagTypes: ["CourseDiscussionChannel", "CourseDiscussionQuestions"],
  endpoints: (builder) => ({
    getCourseDiscussionChannel: builder.query<
      CourseDiscussionChannelResponse,
      string
    >({
      query: (courseId) => ({
        url: `/api/v1/client/course-discussion-channel/channel/${courseId}`,
        method: "GET",
      }),
      providesTags: (_result, _error, courseId) => [
        { type: "CourseDiscussionChannel", id: courseId },
      ],
    }),

    getCourseDiscussionQuestions: builder.query<
      CourseDiscussionQuestionsResponse,
      GetCourseDiscussionQuestionsArg
    >({
      query: ({ courseId, page = 1, limit = 10, sortBy, sortOrder, filterType }) => {
        const params = new URLSearchParams();
        params.set("page", String(page));
        params.set("limit", String(limit));
        if (sortBy) params.set("sortBy", sortBy);
        if (sortOrder) params.set("sortOrder", sortOrder);
        if (filterType) params.set("filterType", filterType);
        return {
          url: `/api/v1/client/course-discussion-channel/channel/${courseId}/questions?${params.toString()}`,
          method: "GET",
        };
      },
      transformResponse: (response: CourseDiscussionQuestionsResponse) => {
        if (!response?.success || response.data === undefined) {
          return response;
        }
        const normalized = normalizeCourseDiscussionQuestionsData(response.data);
        return {
          ...response,
          data: normalized,
        };
      },
      providesTags: (_result, _error, arg) => [
        { type: "CourseDiscussionQuestions", id: arg.courseId },
      ],
    }),

    createCourseDiscussionQuestion: builder.mutation<
      CreateCourseDiscussionQuestionResponse,
      CreateCourseDiscussionQuestionArg
    >({
      query: ({ courseId, body }) => ({
        url: `/api/v1/client/course-discussion-channel/channel/${courseId}/questions`,
        method: "POST",
        body,
      }),
      invalidatesTags: (_result, _error, arg) => [
        { type: "CourseDiscussionQuestions", id: arg.courseId },
      ],
    }),

    createCourseDiscussionAnswer: builder.mutation<
      CreateCourseDiscussionAnswerResponse,
      CreateCourseDiscussionAnswerArg
    >({
      query: ({ courseId, body }) => ({
        url: `/api/v1/client/course-discussion-channel/channel/${courseId}/answers`,
        method: "POST",
        body,
      }),
      invalidatesTags: (_result, _error, arg) => [
        { type: "CourseDiscussionQuestions", id: arg.courseId },
      ],
    }),
  }),
});

export const {
  useGetCourseDiscussionChannelQuery,
  useGetCourseDiscussionQuestionsQuery,
  useCreateCourseDiscussionQuestionMutation,
  useCreateCourseDiscussionAnswerMutation,
} = courseDiscussionApi;
