"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "@/components/Modal";
import { CourseCatalogCardCta } from "@/features/courses/components/CourseCatalogCardCta";

export type CourseCardProps = {
  title: string;
  shortDescription: string;
  instructorName: string;
  instructorTitle?: string;
  instructorAvatarSrc: string;
  price: string;
  /** Badge on the image (e.g. BESTSELLER, MEDICAL INSIGHT) */
  imageBadge?: string;
  imageBadgeVariant?: "green" | "blue";
  /** Tag in content area (e.g. New Course, Updated) */
  contentTag?: string;
  contentTagVariant?: "blue" | "purple";
  rating?: string;
  bannerImage: string;
  imageAlt: string;
  /** Course slug for detail page; when set, card body links to /courses/[slug] */
  slug?: string;
  /** Override detail link (used when slug not set) */
  href?: string;
  courseId?: string;
  access?: "FREE" | "PAID" | "PUBLIC" | "PREMIUM";
};

const IMAGE_BADGE_STYLES = {
  green: "bg-primary text-white",
  blue: "bg-blue-500 text-white",
} as const;

const CONTENT_TAG_STYLES = {
  blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  purple: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
} as const;

export function CourseCard({
  title,
  shortDescription,
  instructorName,
  instructorAvatarSrc,
  price,
  imageBadge,
  imageBadgeVariant = "green",
  contentTag,
  contentTagVariant = "blue",
  rating,
  bannerImage,
  imageAlt,
  slug,
  href = "/courses",
  courseId,
  access,
}: CourseCardProps) {
  const linkHref = slug ? `/courses/${slug}` : href;
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-elevation-sm transition-all hover:shadow-elevation-md dark:bg-gray-800">
      <Link
        href={linkHref}
        className="flex h-full flex-col outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <div className="relative aspect-video w-full overflow-hidden bg-muted/40">
          <Image
            src={bannerImage}
            alt={imageAlt}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {imageBadge && (
            <span
              className={`absolute left-2 top-2 rounded px-2 py-0.5 text-[10px] font-bold uppercase text-white shadow-sm ${IMAGE_BADGE_STYLES[imageBadgeVariant]}`}
            >
              {imageBadge}
            </span>
          )}
        </div>

        <div className="flex w-full min-w-0 flex-1 flex-col justify-between p-4">
          <div>
            <div className="mb-1.5 flex items-start justify-between gap-2">
              {contentTag && (
                <span
                  className={`rounded px-2 py-0.5 text-[11px] font-medium ${CONTENT_TAG_STYLES[contentTagVariant]}`}
                >
                  {contentTag}
                </span>
              )}
              {rating && (
                <span className="flex shrink-0 items-center text-xs font-bold text-yellow-500">
                  <span className="material-icons-outlined mr-0.5 text-sm" aria-hidden>
                    star
                  </span>
                  {rating}
                </span>
              )}
            </div>
            <h3 className="mb-2 line-clamp-2 font-display text-base font-bold leading-snug text-foreground dark:text-white">
              {title}
            </h3>
            <p className="line-clamp-2 text-sm leading-relaxed text-muted dark:text-gray-400">
              {shortDescription}
            </p>
          </div>

          <div className="mt-3 space-y-3">
            <div className="flex items-center gap-2.5">
              <Image
                src={instructorAvatarSrc}
                alt=""
                width={28}
                height={28}
                className="h-7 w-7 shrink-0 rounded-full border border-border object-cover dark:border-gray-600"
              />
              <div className="min-w-0 text-xs">
                <p className="truncate font-medium text-foreground dark:text-white">
                  {instructorName}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 border-t border-border pt-3 dark:border-gray-700 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-lg font-bold text-foreground dark:text-white">
                {price}
              </span>
              <CourseCatalogCardCta
                courseId={courseId}
                slug={slug}
                access={access}
                onRequireLogin={() => setShowLoginModal(true)}
              />
            </div>
          </div>
        </div>
      </Link>

      <Modal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        title="Login required"
      >
        <p className="text-muted mb-6">
          Please log in to enroll in this course.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => setShowLoginModal(false)}
            className="order-2 sm:order-1 rounded-lg border border-border px-4 py-2 text-body-md font-medium text-foreground transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Cancel
          </button>
          <Link
            href="/auth/login"
            onClick={() => setShowLoginModal(false)}
            className="order-1 sm:order-2 inline-flex justify-center rounded-lg bg-primary px-4 py-2 text-body-md font-medium text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Go to Login
          </Link>
        </div>
      </Modal>
    </article>
  );
}

/**
 * Skeleton placeholder for CourseCard during initial load.
 */
export function CourseCardSkeleton() {
  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-elevation-sm"
      aria-hidden
    >
      <div className="aspect-video w-full bg-muted/40" />
      <div className="flex w-full min-w-0 flex-1 flex-col justify-between p-4">
        <div>
          <div className="mb-1.5 flex items-start justify-between gap-2">
            <div className="h-4 w-16 animate-pulse rounded bg-muted/50" />
            <div className="h-4 w-10 animate-pulse rounded bg-muted/40" />
          </div>
          <div className="mb-2 space-y-1.5">
            <div className="h-4 w-full max-w-[95%] animate-pulse rounded bg-muted/50" />
            <div className="h-4 w-[75%] animate-pulse rounded bg-muted/50" />
          </div>
          <div className="space-y-1.5">
            <div className="h-3 w-full animate-pulse rounded bg-muted/40" />
            <div className="h-3 w-[85%] animate-pulse rounded bg-muted/40" />
          </div>
        </div>
        <div className="mt-3 space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 shrink-0 animate-pulse rounded-full bg-muted/40" />
            <div className="space-y-1.5">
              <div className="h-2.5 w-24 animate-pulse rounded bg-muted/50" />
              <div className="h-2.5 w-20 animate-pulse rounded bg-muted/40" />
            </div>
          </div>
          <div className="flex flex-col gap-2 border-t border-border pt-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="h-5 w-16 animate-pulse rounded bg-muted/50" />
            <div className="h-9 w-24 animate-pulse rounded-lg bg-muted/50" />
          </div>
        </div>
      </div>
    </div>
  );
}
