"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAppSelector } from "@/stores/hooks";
import { Modal } from "@/components/Modal";

export type CourseCardProps = {
  title: string;
  description: string;
  instructorName: string;
  instructorTitle: string;
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
  /** When true, show "Details" instead of "Enroll Now" */
  isEnrolled?: boolean;
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
  description,
  instructorName,
  instructorTitle,
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
  isEnrolled = false,
}: CourseCardProps) {
  const linkHref = slug ? `/courses/${slug}` : href;
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleEnrollClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) {
      setShowLoginModal(true);
    } else {
      // Future: open enroll / checkout flow
    }
  };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-surface shadow-elevation-sm transition-all hover:shadow-elevation-md dark:bg-gray-800 sm:flex-row">
      <Link
        href={linkHref}
        className="flex flex-1 flex-col outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:flex-row sm:min-w-0"
      >
        {/* Image area — left */}
        <div className="relative h-48 flex-shrink-0 sm:w-2/5 sm:h-auto">
          <Image
            src={bannerImage}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 40vw"
          />
          {imageBadge && (
            <span
              className={`absolute left-3 top-3 rounded px-2 py-1 text-xs font-bold text-white shadow-sm ${IMAGE_BADGE_STYLES[imageBadgeVariant]}`}
            >
              {imageBadge}
            </span>
          )}
        </div>

        {/* Content area — right */}
        <div className="flex flex-1 flex-col justify-between p-6 sm:w-3/5">
          <div>
            <div className="mb-2 flex items-start justify-between gap-2">
              {contentTag && (
                <span
                  className={`rounded px-2 py-0.5 text-xs font-medium ${CONTENT_TAG_STYLES[contentTagVariant]}`}
                >
                  {contentTag}
                </span>
              )}
              {rating && (
                <span className="flex items-center text-sm font-bold text-yellow-500">
                  <span className="material-icons-outlined mr-1 text-base" aria-hidden>
                    star
                  </span>
                  {rating}
                </span>
              )}
            </div>
            <h3 className="mb-2 font-display text-xl font-bold text-foreground dark:text-white">
              {title}
            </h3>
            <p className="mb-4 line-clamp-2 text-sm text-muted dark:text-gray-400">
              {description}
            </p>
          </div>
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src={instructorAvatarSrc}
                alt=""
                width={32}
                height={32}
                className="rounded-full border border-border object-cover dark:border-gray-600"
              />
              <div className="text-sm">
                <p className="font-medium text-foreground dark:text-white">
                  {instructorName}
                </p>
                <p className="text-xs text-muted dark:text-gray-400">
                  {instructorTitle}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-border pt-4 dark:border-gray-700">
              <span className="text-xl font-bold text-foreground dark:text-white">
                {price}
              </span>
              {isEnrolled ? (
                <span className="rounded-lg border border-border bg-gray-100 px-4 py-2 text-sm font-medium text-foreground dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                  Details
                </span>
              ) : (
                <button
                  type="button"
                  onClick={handleEnrollClick}
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-variant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  Enroll Now
                </button>
              )}
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
