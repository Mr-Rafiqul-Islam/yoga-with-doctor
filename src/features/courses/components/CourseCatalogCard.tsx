"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "@/components/Modal";
import { CourseCatalogCardCta } from "./CourseCatalogCardCta";
import { useCheckCourseAccessQuery } from "@/slices/courses";

export type CourseCatalogCardProps = {
  title: string;
  bannerImage: string;
  imageAlt: string;
  category: string;
  instructorName: string;
  instructorAvatarSrc: string;
  price: string;
  /** Strikethrough price when discounted */
  originalPrice?: string;
  /** When true, show "Course Access" button to lesson page; when false, show "Enroll Now". When logged in, this can be overridden by useCheckCourseAccessQuery (hasAccess). */
  isEnrolled?: boolean;
  /** Course ID (UUID) for access check when user is logged in. If provided and authenticated, hasAccess from API is used for button. */
  courseId?: string;
  /** Access type coming from API. Used to pick CTA when user does not yet have access. */
  access?: "FREE" | "PAID" | "PUBLIC" | "PREMIUM";
  /** URL for the card link. If omitted, built from slug as /courses/[slug]. */
  href?: string;
  /** Course slug for detail page; used to build href when href is not set */
  slug?: string;
  /** Badge on image: BESTSELLER (green) or NEW (light) */
  imageBadge?: "BESTSELLER" | "NEW";
  /** Show premium badge icon top-right */
  premiumBadge?: boolean;
  rating?: string | null;
  ratingCount?: number;
};

export function CourseCatalogCard({
  title,
  bannerImage,
  imageAlt,
  category,
  instructorName,
  instructorAvatarSrc,
  price,
  originalPrice,
  courseId,
  access,
  href,
  slug,
  imageBadge,
  premiumBadge = false,
  rating,
}: CourseCatalogCardProps) {
  const linkHref = href ?? (slug ? `/courses/${slug}` : "#");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const isPremium = premiumBadge || access === "PREMIUM";

  const { data } = useCheckCourseAccessQuery(courseId ?? "", {
    skip: !courseId,
  });
  const hasAccess = access === "PAID" && data?.data?.hasAccess;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-elevation-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-elevation-md dark:border-gray-800 dark:bg-surface">
      <Link
        href={linkHref}
        className="flex flex-1 flex-col outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
      >
        {/* Image */}
        <div className="relative h-48 shrink-0 overflow-hidden">
          {bannerImage && (
            <Image
              src={bannerImage ?? null}
              alt={imageAlt}
              fill
              className={`object-cover transition-transform duration-500 group-hover:scale-105 ${isPremium ? "blur-[1px]" : ""}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          )}
          {imageBadge === "BESTSELLER" && (
            <span className="absolute left-0 top-4 z-10 rounded-r-full bg-primary px-3 py-1 text-xs font-bold text-white shadow-elevation-sm">
              BESTSELLER
            </span>
          )}
          {imageBadge === "NEW" && (
            <span className="absolute left-4 top-4 z-10 rounded-md border border-border bg-white/90 px-2 py-1 text-xs font-bold text-primary shadow-elevation-sm backdrop-blur-md dark:border-gray-700 dark:bg-black/60">
              NEW
            </span>
          )}
          {hasAccess && (
            <span
              className={`absolute right-0 ${isPremium ? "top-12" : "top-4"} z-10 rounded-l-full backdrop-blur-sm px-3 py-1 text-xs font-bold bg-blue-50 text-black shadow-elevation-sm flex items-center gap-1`}
            >
              Owned{" "}
              <span className="material-icons-outlined text-sm" aria-hidden>
                check_circle
              </span>
            </span>
          )}
          {isPremium && (
            <>
              <span className="absolute left-0 top-4 z-10 rounded-r-full bg-orange-400 px-3 py-1 text-xs font-bold text-black shadow-elevation-sm">
                PREMIUM
              </span>
              <span
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-orange-400 shadow-elevation-sm backdrop-blur-sm "
                aria-hidden
              >
                <span className="material-icons-outlined text-xl text-black">
                  workspace_premium
                </span>
              </span>
            </>
          )}
          {isPremium && (
            <span
              className="absolute inset-0 z-10 flex items-center justify-center"
              aria-hidden
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/35 bg-transparent shadow-xl backdrop-blur-md">
                <span className="material-icons-outlined text-3xl text-white">
                  lock
                </span>
              </span>
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2 flex items-start justify-between gap-2">
            <span className="rounded bg-sage-light px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-primary dark:bg-sage-dark dark:text-primary-on-dark">
              {category}
            </span>
            {rating != null && (
              <span
                className="flex items-center text-accent"
                aria-label={`Rating ${rating}`}
              >
                <span className="material-icons-outlined text-sm" aria-hidden>
                  star
                </span>
                <span className="ml-1 text-xs font-bold text-foreground dark:text-gray-300">
                  {rating}
                </span>
              </span>
            )}
          </div>

          <h3 className="mb-4 font-display text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary dark:text-white">
            {title}
          </h3>

          <div className="mb-4 flex items-center gap-2">
            <Image
              src={instructorAvatarSrc}
              alt=""
              width={24}
              height={24}
              className="rounded-full border border-border object-cover dark:border-gray-600"
            />
            <p className="text-xs text-muted dark:text-gray-400">
              {instructorName}
            </p>
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-border pt-4 dark:border-gray-800">
            {access === "PREMIUM" ? (
              <div className="text-xs font-bold text-foreground dark:text-white">
                Started from BDT 99<sub>/ month</sub>
              </div>
            ) : (
              <div>
                {originalPrice != null && (
                  <span className="block text-xs text-muted line-through">
                    {originalPrice}
                  </span>
                )}
                <span className="text-lg font-bold text-foreground dark:text-white">
                  {price}
                </span>
              </div>
            )}
            <CourseCatalogCardCta
              courseId={courseId}
              slug={slug}
              access={access}
              onRequireLogin={() => setShowLoginModal(true)}
            />
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
