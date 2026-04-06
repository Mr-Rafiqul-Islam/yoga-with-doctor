export {
  courseDiscussionApi,
  useGetCourseDiscussionChannelQuery,
  useGetCourseDiscussionQuestionsQuery,
  useCreateCourseDiscussionQuestionMutation,
  useCreateCourseDiscussionAnswerMutation,
  normalizeCourseDiscussionQuestionsData,
} from "./api";

export type {
  CourseDiscussionChannel,
  CourseDiscussionChannelResponse,
  CourseDiscussionAnswer,
  CourseDiscussionQuestion,
  CourseDiscussionQuestionAuthor,
  CourseDiscussionQuestionsPagination,
  CourseDiscussionQuestionsNormalized,
  CourseDiscussionQuestionsResponse,
  CourseDiscussionQuestionFilterType,
  GetCourseDiscussionQuestionsArg,
  CreateCourseDiscussionQuestionBody,
  CreateCourseDiscussionQuestionArg,
  CreateCourseDiscussionQuestionResponse,
  CreateCourseDiscussionAnswerBody,
  CreateCourseDiscussionAnswerArg,
  CreateCourseDiscussionAnswerResponse,
  ChannelAnswerPayload,
} from "./api";
