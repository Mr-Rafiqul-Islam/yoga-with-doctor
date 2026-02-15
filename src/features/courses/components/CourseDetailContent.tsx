"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CourseDetailData, CourseLesson } from "../data/courseDetailData";

const TABS = ["About Course", "Curriculum", "Reviews"] as const;

export interface CourseDetailContentProps {
  course: CourseDetailData;
  /** When false: locked variant (lock overlay, Enroll to Unlock). When true: unlocked (play, access lessons). */
  isEnrolled: boolean;
}

export function CourseDetailContent({ course, isEnrolled }: CourseDetailContentProps) {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[0]>("About Course");

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {/* Main column */}
      <div className="space-y-8 lg:col-span-2">
        {/* Video section: locked vs unlocked */}
        <div className="relative overflow-hidden rounded-2xl bg-black shadow-lg aspect-video">
          <Image
            src={course.thumbnailUrl}
            alt=""
            fill
            className="object-cover opacity-60"
            sizes="(max-width: 1024px) 100vw, 66vw"
            priority
          />
          {!isEnrolled ? (
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
          ) : (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-t from-black/50 to-transparent">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 ring-2 ring-white/40 backdrop-blur-md transition-transform hover:scale-105">
                <span className="material-icons-outlined text-5xl text-white">play_arrow</span>
              </div>
              <p className="mt-3 text-sm font-medium text-white">Start Course</p>
            </div>
          )}
          <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-700">
            <div
              className="h-full bg-primary"
              style={{ width: isEnrolled ? "0%" : "0%" }}
              aria-hidden
            />
          </div>
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
          <p className="mb-6 leading-relaxed text-muted dark:text-gray-300">
            {course.description}
          </p>
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
              href="#"
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
                onClick={() => setActiveTab(tab)}
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
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft dark:border-gray-800 dark:bg-surface">
            <h3 className="font-display text-xl font-bold text-foreground dark:text-white mb-6">
              What you will learn
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {course.learningOutcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3">
                  <span className="material-icons-outlined mt-0.5 text-xl text-primary">
                    check_circle
                  </span>
                  <span className="text-sm text-muted dark:text-gray-300">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Curriculum" && (
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
                      isEnrolled={isEnrolled}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Reviews" && (
          <p className="text-muted">Reviews will be displayed here.</p>
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
            {!isEnrolled ? (
              <Link
                href={`/courses/${course.slug}?enrolled=1`}
                className="mb-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 px-4 font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary-dark"
              >
                Enroll Now
                <span className="material-icons-outlined text-sm">arrow_forward</span>
              </Link>
            ) : (
              <div className="mb-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 px-4 font-semibold text-white shadow-lg shadow-primary/30">
                <span className="material-icons-outlined text-sm">check_circle</span>
                Enrolled
              </div>
            )}
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
        </div>
      </aside>
    </div>
  );
}

function LessonRow({
  lesson,
  isEnrolled,
}: {
  lesson: CourseLesson;
  isEnrolled: boolean;
}) {
  const locked = !isEnrolled && lesson.isLocked;
  const canPlay = isEnrolled || lesson.isPreview;

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
              ? "bg-muted text-muted dark:bg-gray-700 dark:text-gray-400"
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
      {canPlay && (
        <span className="rounded-lg border border-primary px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white">
          {lesson.isPreview ? "Preview" : "Play"}
        </span>
      )}
      {locked && (
        <span className="material-icons-outlined text-gray-300 dark:text-gray-500">lock</span>
      )}
    </div>
  );
}
