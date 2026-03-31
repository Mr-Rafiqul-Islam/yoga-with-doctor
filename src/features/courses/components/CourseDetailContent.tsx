"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MuxPlayer from "@mux/mux-player-react";
import { Modal } from "@/components/Modal";
import { CourseCatalogCardCta } from "./CourseCatalogCardCta";
import type { CourseDetailData, CourseLesson } from "../data/courseDetailData";
import { CourseReviewSection } from "@/features/reviews/components/CourseReviewSection";

const TABS = ["About Course", "Curriculum", "Reviews"] as const;

export interface CourseDetailContentProps {
  course: CourseDetailData;
  /** Kept for backward compatibility but UI is now driven purely by course data. */
  isEnrolled: boolean;
}

export function CourseDetailContent({ course, isEnrolled }: CourseDetailContentProps) {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[0]>("About Course");
  const [showLoginModal, setShowLoginModal] = useState(false);

  const previewLesson = useMemo(() => {
    const allLessons = course.curriculum.flatMap((m) => m.lessons);
    return allLessons.find(
      (lesson) =>
        lesson.isPreview &&
        lesson.video &&
        (lesson.video as any)?.muxPlaybackId
    );
  }, [course.curriculum]);

  const muxPlaybackId =
    (previewLesson?.video as any)?.muxPlaybackId as string | undefined;
    

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {/* Main column */}
      <div className="space-y-8 lg:col-span-2">
        {/* Video section: autoplay preview if available, otherwise locked thumbnail */}
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-black shadow-lg">
          {muxPlaybackId ? (
            <MuxPlayer
              playbackId={muxPlaybackId}
              poster={course.thumbnailUrl}
              autoPlay
              playsInline
              streamType="on-demand"
              className="h-full w-full"
              style={{
                aspectRatio: "auto",
                height: "100%",
                width: "100%",
                "--controls-backdrop-color": "transparent",
                "--media-object-fit": "cover",
                "--media-object-position": "center",
              }}
            />
          ) : (
            <>
              <Image
                src={course.thumbnailUrl}
                alt=""
                fill
                className="object-cover opacity-60"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px]">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30 backdrop-blur-md">
                  <span className="material-icons-outlined text-3xl text-white">lock</span>
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold text-white">
                  This course is locked
                </h3>
                <a
                  href="#sidebar-enroll"
                  className="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary-dark"
                >
                  Enroll to Unlock
                </a>
              </div>
            </>
          )}
        </div>

        {/* Meta + title + description + instructor */}
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="rounded-md bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary dark:bg-sage-dark dark:text-primary-on-dark">
              {course.category}
            </span>
            <div className="flex items-center text-accent">
              <span className="material-icons-outlined fill-current text-sm">star</span>
              <span className="ml-1 text-sm font-bold text-foreground dark:text-white">
                {course.rating}
              </span>
              <span className="ml-1 text-xs text-muted">({course.reviewCount} reviews)</span>
            </div>
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground dark:text-white md:text-4xl mb-4">
            {course.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 rounded-xl border border-border bg-surface p-4 shadow-sm dark:border-gray-800 dark:bg-surface">
            <Image
              src={course.instructorAvatarUrl}
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-full border-2 border-primary/20 object-cover"
            />
            <div>
              <p className="text-sm font-bold text-foreground dark:text-white">
                {course.instructorName}
              </p>
              <p className="text-xs text-muted dark:text-gray-400">{course.instructorTitle}</p>
            </div>
            <Link
              href="https://drshahalam.com"
              target="_blank"
              className="ml-auto text-sm font-medium text-primary hover:underline"
            >
              View Profile
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <nav className="-mb-px border-b border-border dark:border-gray-700">
          <div className="flex space-x-8">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab as (typeof TABS)[0])}
                className={`whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "border-primary text-primary"
                    : "border-transparent text-muted hover:border-gray-300 hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>

        {/* Tab content: About (What you will learn) */}
        {activeTab === "About Course" && (
          <div className="space-y-4">
          <article className="prose prose-sm prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: course.description }} />
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft dark:border-gray-800 dark:bg-surface">
            <h3 className="font-display text-xl font-bold text-foreground dark:text-white mb-6">
              What you will learn
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {course.learningOutcomes.map((outcome) => (
                <div key={outcome} className="flex items-center gap-3">
                  <span className="material-icons-outlined mt-0.5 text-xl text-primary">
                    check_circle
                  </span>
                  <span className="text-sm text-muted dark:text-gray-300">{outcome}</span>
                </div>
              ))}
            </div>
          </div></div>
        )}

        {activeTab === ("Curriculum" as (typeof TABS)[0]) && (
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-foreground dark:text-white">
              Course Curriculum
            </h3>
            <div className="space-y-3">
              {course.curriculum.map((module) => (
                <div key={module.id}>
                  <div className="flex items-center justify-between rounded-xl bg-muted/50 px-4 py-4 dark:bg-gray-800/50">
                    <span className="font-medium text-foreground dark:text-white">
                      {module.title}
                    </span>
                    <span className="text-xs text-muted">
                      {module.lessonCount} Lessons • {module.totalDuration}
                    </span>
                  </div>
                  {module.lessons.map((lesson) => (
                    <LessonRow
                      key={lesson.id}
                      lesson={lesson}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === ("Reviews" as (typeof TABS)[0]) && (
          <CourseReviewSection slug={course.slug} isEnrolled={isEnrolled} />
        )}
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-1">
        <div className="sticky top-24 space-y-6">
          <div
            id="sidebar-enroll"
            className="rounded-2xl border border-border bg-surface p-6 shadow-soft dark:border-gray-800 dark:bg-surface"
          >
            <div className="mb-6 flex items-end gap-3">
              <span className="text-3xl font-bold text-foreground dark:text-white">
                {course.price}
              </span>
              <span className="mb-1 text-lg text-muted line-through">{course.originalPrice}</span>
              <span className="mb-1.5 rounded bg-secondary px-2 py-1 text-xs font-bold text-primary dark:bg-sage-dark dark:text-primary-on-dark">
                -{course.discountPercent}%
              </span>
            </div>
            <div className="mb-6 [&>button]:w-full [&>button]:py-3.5">
              <CourseCatalogCardCta
                courseId={course.courseId}
                slug={course.slug}
                access={course.access}
                onRequireLogin={() => setShowLoginModal(true)}
              />
            </div>
            <div className="space-y-4 border-t border-border pt-6 dark:border-gray-700">
              <h4 className="text-sm font-semibold text-foreground dark:text-white">
                This course includes:
              </h4>
              <div className="space-y-3">
                {course.includes.map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="material-icons-outlined text-muted text-sm">
                      {item.icon as "play_circle"}
                    </span>
                    <span className="text-sm text-muted dark:text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 text-center shadow-soft dark:border-gray-800 dark:bg-surface">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary dark:bg-sage-dark">
              <span className="material-icons-outlined text-xl text-primary">security</span>
            </div>
            <h4 className="mb-1 text-sm font-bold text-foreground dark:text-white">
              30-Day Money-Back Guarantee
            </h4>
            <p className="text-xs text-muted">
              Not satisfied? Get a full refund within 30 days.
            </p>
          </div>

          <Modal
            isOpen={showLoginModal}
            onClose={() => setShowLoginModal(false)}
            title="Login required"
          >
            <p className="mb-6 text-muted">Please log in to enroll in this course.</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setShowLoginModal(false)}
                className="order-2 rounded-lg border border-border px-4 py-2 text-body-md font-medium text-foreground transition-colors hover:bg-gray-100 sm:order-1 dark:hover:bg-gray-800"
              >
                Cancel
              </button>
              <Link
                href="/auth/login"
                onClick={() => setShowLoginModal(false)}
                className="order-1 inline-flex justify-center rounded-lg bg-primary px-4 py-2 text-body-md font-medium text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:order-2"
              >
                Go to Login
              </Link>
            </div>
          </Modal>
        </div>
      </aside>
    </div>
  );
}

function LessonRow({
  lesson,
}: {
  lesson: CourseLesson;
}) {
  const locked = lesson.isLocked ?? !lesson.isPreview;

  return (
    <div
      className={`flex items-center justify-between rounded-xl border px-4 py-4 transition-shadow dark:border-gray-800 ${
        locked
          ? "opacity-75 bg-surface dark:bg-surface"
          : "bg-surface hover:shadow-sm dark:bg-surface"
      } ${locked ? "" : "border-border"}`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
            locked
              ? "bg-gray-300 text-muted dark:bg-gray-700 dark:text-gray-400"
              : "bg-primary/10 text-primary"
          }`}
        >
          <span className="material-icons-outlined text-sm">
            {locked ? "lock" : "play_arrow"}
          </span>
        </div>
        <div>
          <p
            className={`text-sm font-medium ${
              locked ? "text-muted dark:text-gray-400" : "text-foreground dark:text-white"
            }`}
          >
            {lesson.title}
          </p>
          <p className={`text-xs ${locked ? "text-muted" : "text-muted"}`}>{lesson.duration}</p>
        </div>
      </div>
      
      {locked && (
        <span className="material-icons-outlined text-gray-300 dark:text-gray-500">lock</span>
      )}
    </div>
  );
}
