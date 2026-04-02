"use client";

import { useRouter } from "next/navigation";
import { useAppSelector } from "@/stores";
import { useCheckCourseAccessQuery } from "@/slices/courses";

export type CourseCatalogCardCtaProps = {
  courseId?: string;
  slug?: string;
  access?: "FREE" | "PAID" | "PUBLIC" | "PREMIUM";
  onRequireLogin: () => void;
};

export function CourseCatalogCardCta({
  courseId,
  slug,
  access,
  onRequireLogin,
}: CourseCatalogCardCtaProps) {
  const router = useRouter();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { unlockedCourseIds } = useAppSelector(
    (state) => state.entitlements
  );

  const { data: accessData } = useCheckCourseAccessQuery(courseId ?? "", {
    skip: !courseId || !isAuthenticated,
  });
  const hasAccessFromApi = accessData?.data?.hasAccess ?? false;
  const isUnlocked = !!courseId && unlockedCourseIds.includes(courseId);
  const effectiveEnrolled =
  isAuthenticated && (hasAccessFromApi || isUnlocked);

  const handleClick = (e: React.MouseEvent, onAuthed: () => void) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) {
      onRequireLogin();
      return;
    }
    onAuthed();
  };

  const className =
    "rounded-lg bg-primary px-4 py-2 text-body-md font-medium text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900";

  // If content is public (FREE/PUBLIC) and we have a slug, let the user go straight in
  // if (isPublic && slug) {
  //   return (
  //     <button
  //       type="button"
  //       onClick={(e) => {
  //         e.preventDefault();
  //         e.stopPropagation();
  //         router.push(`/courses/${slug}/lesson`);
  //       }}
  //       className={className}
  //     >
  //       Get Start
  //     </button>
  //   );
  // }

  if (effectiveEnrolled && slug) {
    return (
      <button
        type="button"
        onClick={(e) => handleClick(e, () => router.push(`/courses/${slug}/lesson`))}
        className={className}
      >
        Get started
      </button>
    );
  }

  if (access === "PAID") {
    return (
      <button
        type="button"
        onClick={(e) =>
          handleClick(e, () => {
            if (slug) {
              router.push(`/checkout/review?courseSlug=${slug}`);
            } else {
              router.push("/checkout/review");
            }
          })
        }
        className={className}
      >
        Buy Now
      </button>
    );
  }

  if (access === "PREMIUM") {
    return (
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          router.push("/pricing");
        }}
        className={className}
      >
        Get Premium
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={(e) =>
        handleClick(e, () => {
          // Future: open enroll / checkout flow
        })
      }
      className={className}
    >
      Enroll Now
    </button>
  );
}

