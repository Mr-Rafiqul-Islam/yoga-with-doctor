"use client";

import { useCallback, useMemo, useState, type FormEvent } from "react";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import {
  answersForQuestion,
  answerParticipantLabel,
  formatAnswerTimestamp,
  formatDiscDate,
  getFetchErrorMessage,
  LESSON_DISCUSSION_FILTERS,
  LESSON_DISCUSSION_PAGE_SIZE,
  questionCardAccentClass,
  questionParticipantLabel,
  replyShellClasses,
} from "@/features/courses/lib/lessonTabDiscussionUtils";
import {
  DiscussionAuthorAvatar,
  RoleBadge,
} from "@/features/courses/components/lesson/LessonTabDiscussionWidgets";
import { useAppSelector } from "@/stores/hooks";
import {
  useCreateCourseDiscussionAnswerMutation,
  useCreateCourseDiscussionQuestionMutation,
  useGetCourseDiscussionChannelQuery,
  useGetCourseDiscussionQuestionsQuery,
  type CourseDiscussionQuestion,
  type CourseDiscussionQuestionFilterType,
  type CourseDiscussionQuestionsNormalized,
} from "@/slices/courseDiscussion";

export interface LessonTabDiscussionProps {
  courseId?: string;
  lessonId?: string;
}

export function LessonTabDiscussion({ courseId, lessonId }: LessonTabDiscussionProps) {
  const isAuthenticated = useAppSelector((s) => s.auth.isAuthenticated);
  const [filterType, setFilterType] = useState<CourseDiscussionQuestionFilterType>("LATEST");
  const [page, setPage] = useState(1);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [answerDraftByQuestionId, setAnswerDraftByQuestionId] = useState<Record<string, string>>(
    {}
  );
  const [openAnswerId, setOpenAnswerId] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [answerErrorById, setAnswerErrorById] = useState<Record<string, string | null>>({});

  const {
    data: channelRes,
    isLoading: channelLoading,
    isError: channelError,
    error: channelErr,
  } = useGetCourseDiscussionChannelQuery(courseId ?? "", {
    skip: !courseId,
  });

  const channelReady = Boolean(courseId && channelRes?.success && channelRes.data);

  const questionsArg = useMemo(
    () =>
      ({
        courseId: courseId ?? "",
        page,
        limit: LESSON_DISCUSSION_PAGE_SIZE,
        filterType,
      }) as const,
    [courseId, page, filterType]
  );

  const skipQuestions = !courseId || !isAuthenticated || !channelReady;

  const {
    data: questionsRes,
    isLoading: questionsLoading,
    isFetching: questionsFetching,
    isError: questionsIsError,
    error: questionsErr,
    refetch: refetchQuestions,
  } = useGetCourseDiscussionQuestionsQuery(questionsArg, {
    skip: skipQuestions,
  });

  const normalized: CourseDiscussionQuestionsNormalized | undefined = useMemo(() => {
    const d = questionsRes?.data;
    if (d && typeof d === "object" && "questions" in d && Array.isArray((d as { questions: unknown }).questions)) {
      return d as CourseDiscussionQuestionsNormalized;
    }
    return undefined;
  }, [questionsRes?.data]);

  const questions = normalized?.questions ?? [];
  const pagination = normalized?.pagination;

  const [createQuestion, createQuestionState] = useCreateCourseDiscussionQuestionMutation();
  const [createAnswer, createAnswerState] = useCreateCourseDiscussionAnswerMutation();

  const channelErrMsg = channelError ? getFetchErrorMessage(channelErr as FetchBaseQueryError) : null;
  const channelStatus =
    channelError && channelErr && typeof channelErr === "object" && "status" in channelErr
      ? (channelErr as FetchBaseQueryError).status
      : undefined;

  const handleFilterChange = useCallback((next: CourseDiscussionQuestionFilterType) => {
    setFilterType(next);
    setPage(1);
  }, []);

  const onSubmitQuestion = async (e: FormEvent) => {
    e.preventDefault();
    if (!courseId) return;
    setFormError(null);
    const title = newTitle.trim();
    const content = newContent.trim();
    if (!title || !content) {
      setFormError("Title and details are required.");
      return;
    }
    try {
      const res = await createQuestion({
        courseId,
        body: {
          title,
          content,
          ...(lessonId ? { lessonId } : {}),
        },
      }).unwrap();
      if (!res.success) {
        setFormError(typeof res.error === "string" ? res.error : "Could not post question.");
        return;
      }
      setNewTitle("");
      setNewContent("");
    } catch (unknownErr) {
      const err = unknownErr as { data?: { error?: string } };
      setFormError(err?.data?.error ?? "Could not post question.");
    }
  };

  const submitAnswer = async (questionId: string) => {
    if (!courseId) return;
    const content = (answerDraftByQuestionId[questionId] ?? "").trim();
    setAnswerErrorById((prev) => ({ ...prev, [questionId]: null }));
    if (!content) {
      setAnswerErrorById((prev) => ({ ...prev, [questionId]: "Write a reply first." }));
      return;
    }
    try {
      await createAnswer({
        courseId,
        body: { questionId, content },
      }).unwrap();
      setAnswerDraftByQuestionId((prev) => ({ ...prev, [questionId]: "" }));
      setOpenAnswerId(null);
    } catch (unknownErr) {
      const err = unknownErr as { data?: { error?: string } };
      setAnswerErrorById((prev) => ({
        ...prev,
        [questionId]: err?.data?.error ?? "Could not post reply.",
      }));
    }
  };

  if (!courseId) {
    return (
      <section
        id="discussion"
        aria-labelledby="discussion-heading"
        className="rounded-2xl border border-border bg-surface p-6 shadow-soft dark:border-gray-800 dark:bg-surface sm:p-8"
      >
        <h2
          id="discussion-heading"
          className="mb-4 flex items-center gap-2 font-display text-2xl font-bold text-foreground dark:text-white"
        >
          <span className="material-icons-outlined text-primary" aria-hidden>
            forum
          </span>
          Discussion
        </h2>
        <p className="text-muted dark:text-gray-400">
          Discussion is unavailable until course information loads.
        </p>
      </section>
    );
  }

  return (
    <section
      id="discussion"
      aria-labelledby="discussion-heading"
      className="rounded-2xl border border-border bg-surface p-6 shadow-soft dark:border-gray-800 dark:bg-surface sm:p-8"
    >
      <h2
        id="discussion-heading"
        className="mb-4 flex items-center gap-2 font-display text-2xl font-bold text-foreground dark:text-white"
      >
        <span className="material-icons-outlined text-primary" aria-hidden>
          forum
        </span>
        Discussion
      </h2>

      {channelLoading && (
        <div className="space-y-3" aria-busy="true">
          <div className="h-4 max-w-md animate-pulse rounded bg-muted" />
          <div className="h-4 max-w-sm animate-pulse rounded bg-muted" />
        </div>
      )}

      {!channelLoading && channelError && (
        <div className="rounded-xl border border-border bg-muted/30 p-4 dark:border-gray-700 dark:bg-gray-900/40">
          <p className="font-medium text-foreground dark:text-white">
            {channelStatus === 404
              ? "No discussion channel for this course yet."
              : channelStatus === 400
                ? "Discussion is not enabled for this course."
                : "Discussion is temporarily unavailable."}
          </p>
          {channelErrMsg && (
            <p className="mt-1 text-body-md text-muted dark:text-gray-400">{channelErrMsg}</p>
          )}
        </div>
      )}

      {!channelLoading && !channelError && !channelRes?.success && (
        <p className="text-muted dark:text-gray-400">Could not load discussion for this course.</p>
      )}

      {!channelLoading && channelReady && isAuthenticated && (
        <>
          <p className="text-muted dark:text-gray-400">
            Ask questions and share insights with other students.{lessonId ? " New threads can be linked to this lesson." : ""}
          </p>

          <form
            onSubmit={onSubmitQuestion}
            className="mt-6 space-y-4 rounded-xl border border-border p-4 dark:border-gray-700"
          >
            <h3 className="font-display text-lg font-semibold text-foreground dark:text-white">
              Start a question
            </h3>
            {formError && (
              <p className="text-body-md text-red-600 dark:text-red-400" role="alert">
                {formError}
              </p>
            )}
            <div>
              <label htmlFor="discussion-q-title" className="sr-only">
                Title
              </label>
              <input
                id="discussion-q-title"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-700 dark:bg-gray-950"
                placeholder="Short title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                maxLength={240}
                disabled={createQuestionState.isLoading}
              />
            </div>
            <div>
              <label htmlFor="discussion-q-body" className="sr-only">
                Details
              </label>
              <textarea
                id="discussion-q-body"
                className="min-h-[100px] w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-700 dark:bg-gray-950"
                placeholder="Describe your question…"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                disabled={createQuestionState.isLoading}
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-lg bg-primary px-4 py-2 text-body-md font-semibold text-primary-foreground disabled:opacity-50"
                disabled={createQuestionState.isLoading}
              >
                {createQuestionState.isLoading ? "Posting…" : "Post question"}
              </button>
            </div>
          </form>

          <div className="mt-8">
            <div className="mb-4 flex flex-wrap gap-2">
              {LESSON_DISCUSSION_FILTERS.map((f) => (
                <button
                  key={f.value}
                  type="button"
                  onClick={() => handleFilterChange(f.value)}
                  className={`rounded-full border px-3 py-1 text-body-md transition ${
                    filterType === f.value
                      ? "border-primary bg-primary/10 font-semibold text-primary dark:text-primary"
                      : "border-border text-muted hover:border-primary/50 dark:border-gray-700"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {questionsIsError && (
              <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/40">
                <p className="text-body-md text-red-800 dark:text-red-200">
                  {getFetchErrorMessage(questionsErr as FetchBaseQueryError) ??
                    "Could not load questions."}
                </p>
                <button
                  type="button"
                  className="mt-2 text-body-md font-medium text-primary underline"
                  onClick={() => void refetchQuestions()}
                >
                  Try again
                </button>
              </div>
            )}

            {!questionsIsError && questionsLoading && (
              <div className="space-y-3" aria-busy="true">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-20 animate-pulse rounded-xl bg-muted" />
                ))}
              </div>
            )}

            {!questionsIsError && !questionsLoading && questions.length === 0 && (
              <div className="rounded-xl border border-dashed border-border p-8 text-center dark:border-gray-700">
                <span className="material-icons-outlined text-4xl text-muted">forum</span>
                <p className="mt-2 text-body-md text-muted">
                  No questions in this view yet. Be the first to ask one.
                </p>
              </div>
            )}

            {!questionsIsError && questions.length > 0 && (
              <ul className="space-y-4">
                {questions.map((q) => {
                  const id = String(q.id);
                  const title = q.title?.trim() || "Untitled";
                  const excerpt = (() => {
                    if (typeof q.content !== "string") return null;
                    const raw = q.content.trim();
                    if (!raw) return null;
                    return raw.length > 280 ? `${raw.slice(0, 280)}…` : raw;
                  })();
                  const solved = Boolean(q.isSolved);
                  const pinned = Boolean(q.isPinned);
                  const answerList = answersForQuestion(q);
                  const answerCountBadge = q.answerCount ?? answerList.length;
                  const open = openAnswerId === id;
                  const qAuthor = q.author ?? q.user;
                  const qLabel = questionParticipantLabel(qAuthor);
                  return (
                    <li
                      key={id}
                      className={`rounded-xl border border-border p-4 dark:border-gray-700 ${questionCardAccentClass(qAuthor?.role ?? null)}`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <p className="font-display text-lg font-semibold text-foreground dark:text-white">
                            {title}
                          </p>
                          <div className="mt-3 flex gap-3">
                            <DiscussionAuthorAvatar author={qAuthor} size="md" />
                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <p className="text-body-sm font-medium text-foreground dark:text-white">
                                  {qLabel}
                                </p>
                                <RoleBadge role={qAuthor?.role ?? null} />
                              </div>
                              <p className="mt-0.5 text-xs text-muted">
                                {q.createdAt ? formatDiscDate(q.createdAt) : ""}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex shrink-0 flex-wrap justify-end gap-2">
                          {pinned && (
                            <span className="rounded bg-amber-100 px-2 py-0.5 text-body-xs font-medium text-amber-900 dark:bg-amber-900/40 dark:text-amber-100">
                              Pinned
                            </span>
                          )}
                          {solved && (
                            <span className="rounded bg-emerald-100 px-2 py-0.5 text-body-xs font-medium text-emerald-900 dark:bg-emerald-900/40 dark:text-emerald-100">
                              Solved
                            </span>
                          )}
                          <span className="rounded px-2 py-0.5 text-body-xs text-muted">
                            {answerCountBadge}{" "}
                            {answerCountBadge === 1 ? "answer" : "answers"}
                          </span>
                        </div>
                      </div>
                      {excerpt && (
                        <p className="mt-3 whitespace-pre-wrap text-body-md text-foreground/90 dark:text-gray-200">
                          {excerpt}
                        </p>
                      )}

                      {answerList.length > 0 && (
                        <div
                          className="mt-5 border-t border-border pt-5 dark:border-gray-700"
                          aria-label="Replies to this question"
                        >
                          <h4 className="mb-3 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-muted">
                            <span
                              className="material-icons-outlined text-base text-primary"
                              aria-hidden
                            >
                              forum
                            </span>
                            Replies ({answerList.length})
                          </h4>
                          <div
                            className={
                              answerList.length > 3
                                ? "max-h-[min(26rem,45vh)] overflow-y-auto overscroll-y-contain rounded-lg border border-border/70 bg-muted/20 py-3 pl-2 pr-3 dark:border-gray-700 dark:bg-gray-950/40"
                                : undefined
                            }
                            {...(answerList.length > 3
                              ? {
                                  role: "region",
                                  "aria-label": "Replies — scroll to see all",
                                }
                              : {})}
                          >
                          <ul className="space-y-3">
                            {answerList.map((ans) => {
                              const aAuthor = ans.author;
                              const aRole = aAuthor?.role ?? null;
                              const aLabel = answerParticipantLabel(aAuthor);
                              return (
                              <li
                                key={ans.id}
                                className={`relative rounded-r-lg py-3 pl-3 pr-2 ${replyShellClasses(aRole)}`}
                              >
                                <div className="flex flex-wrap items-start justify-between gap-2">
                                  <div className="flex min-w-0 items-start gap-2">
                                    <DiscussionAuthorAvatar author={aAuthor} size="sm" />
                                    <div className="min-w-0">
                                      <div className="flex flex-wrap items-center gap-2">
                                        <p className="truncate text-sm font-medium text-foreground dark:text-white">
                                          {aLabel}
                                        </p>
                                        <RoleBadge
                                          role={aRole}
                                          suppressModeratorChip={
                                            aRole?.toUpperCase() === "MODERATOR"
                                          }
                                        />
                                      </div>
                                      <p className="text-xs text-muted">
                                        {formatAnswerTimestamp(ans.createdAt)}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex flex-wrap items-center gap-1.5">
                                    {ans.isBest && (
                                      <span className="rounded bg-emerald-100 px-2 py-0.5 text-body-xs font-medium text-emerald-900 dark:bg-emerald-900/50 dark:text-emerald-100">
                                        Best answer
                                      </span>
                                    )}
                                    {ans.isPinned && (
                                      <span className="rounded bg-amber-100 px-2 py-0.5 text-body-xs font-medium text-amber-900 dark:bg-amber-900/40 dark:text-amber-100">
                                        Pinned
                                      </span>
                                    )}
                                    {ans.likeCount > 0 && (
                                      <span className="inline-flex items-center gap-0.5 rounded bg-muted px-2 py-0.5 text-body-xs text-muted">
                                        <span className="material-icons-outlined text-sm leading-none">
                                          thumb_up
                                        </span>
                                        {ans.likeCount}
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <p className="mt-2 whitespace-pre-wrap text-body-md text-foreground/95 dark:text-gray-200">
                                  {ans.content}
                                </p>
                              </li>
                            );
                            })}
                          </ul>
                          </div>
                        </div>
                      )}

                      <div className="mt-4 border-t border-border pt-4 dark:border-gray-700">
                        {!open ? (
                          <button
                            type="button"
                            className="text-body-md font-medium text-primary hover:underline"
                            onClick={() => setOpenAnswerId(id)}
                          >
                            Reply
                          </button>
                        ) : (
                          <div className="space-y-2">
                            {answerErrorById[id] && (
                              <p className="text-body-sm text-red-600 dark:text-red-400" role="alert">
                                {answerErrorById[id]}
                              </p>
                            )}
                            <textarea
                              className="min-h-[80px] w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-700 dark:bg-gray-950"
                              placeholder="Write your answer…"
                              value={answerDraftByQuestionId[id] ?? ""}
                              onChange={(e) =>
                                setAnswerDraftByQuestionId((prev) => ({
                                  ...prev,
                                  [id]: e.target.value,
                                }))
                              }
                              disabled={createAnswerState.isLoading}
                            />
                            <div className="flex gap-2">
                              <button
                                type="button"
                                className="rounded-lg bg-primary px-3 py-1.5 text-body-md font-semibold text-primary-foreground disabled:opacity-50"
                                onClick={() => void submitAnswer(id)}
                                disabled={createAnswerState.isLoading}
                              >
                                {createAnswerState.isLoading ? "Posting…" : "Post reply"}
                              </button>
                              <button
                                type="button"
                                className="rounded-lg border border-border px-3 py-1.5 text-body-md text-muted dark:border-gray-600"
                                onClick={() => {
                                  setOpenAnswerId(null);
                                  setAnswerErrorById((prev) => ({ ...prev, [id]: null }));
                                }}
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}

            {pagination &&
              (pagination.totalPages != null && pagination.totalPages > 1 ? (
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <p className="text-body-sm text-muted">
                    Page {pagination.page ?? page} of {pagination.totalPages}
                    {pagination.total != null ? ` · ${pagination.total} total` : ""}
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="rounded-lg border border-border px-3 py-1.5 text-body-md disabled:opacity-40 dark:border-gray-700"
                      disabled={(pagination.page ?? page) <= 1 || questionsFetching}
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      className="rounded-lg border border-border px-3 py-1.5 text-body-md disabled:opacity-40 dark:border-gray-700"
                      disabled={
                        questionsFetching ||
                        (typeof pagination.totalPages === "number" &&
                          (pagination.page ?? page) >= pagination.totalPages)
                      }
                      onClick={() => setPage((p) => p + 1)}
                    >
                      Next
                    </button>
                  </div>
                </div>
              ) : null)}
          </div>
        </>
      )}
    </section>
  );
}
