import type { ContinueLearningCourse } from "@/features/dashboard/data/dashboardData";
import type { EnrollmentSummary } from "@/slices/enrollment/api";
import type { Entitlement } from "@/slices/courses";

const PLACEHOLDER_BANNER = "/images/placeholders/course-banner.jpg";

export function mapEnrollmentsToCourses(
  enrollments: EnrollmentSummary[],
): ContinueLearningCourse[] {
  return enrollments
    .filter((enrollment) => enrollment.course)
    .map((enrollment) => {
      const course = enrollment.course!;

      const bannerImage =
        (course as { bannerUrl?: string }).bannerUrl ??
        course.bannerImage ??
        PLACEHOLDER_BANNER;

      const slug = course.slug ?? undefined;

      return {
        title: course.title,
        bannerImage,
        imageAlt: course.title,
        category: "Course",
        instructorName: "Dr. Shah Alam",
        instructorAvatarSrc:
          "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=80",
        price: "Included in your access",
        originalPrice: undefined,
        isEnrolled: true,
        courseId: course.id,
        access: ((course as { access?: string }).access ??
          "PUBLIC") as ContinueLearningCourse["access"],
        href: slug ? `/courses/${slug}` : undefined,
        slug,
        imageBadge: undefined,
        premiumBadge: (course as { access?: string }).access === "PREMIUM",
        rating: undefined,
        level: ((course as { level?: string }).level ??
          "BEGINNER") as ContinueLearningCourse["level"],
        goals: [],
        progress: 0,
        timeLeft: undefined,
        badge: undefined,
      } satisfies ContinueLearningCourse;
    });
}

/** One row per course id; prefers newest entitlement by updatedAt. */
export function mapEntitlementsToCourses(
  entitlements: Entitlement[],
): ContinueLearningCourse[] {
  const byCourseId = new Map<string, Entitlement>();

  for (const ent of entitlements) {
    if (!ent.isActive || !ent.product?.course?.isActive) continue;
    const course = ent.product.course;
    const id = course.id;
    const prev = byCourseId.get(id);
    if (!prev || ent.updatedAt > prev.updatedAt) {
      byCourseId.set(id, ent);
    }
  }

  return [...byCourseId.values()].map((entitlement) => {
    const course = entitlement.product.course!;

    const bannerImage =
      course.bannerImage?.trim() ? course.bannerImage : PLACEHOLDER_BANNER;
    const slug = course.slug || undefined;

    return {
      title: course.title,
      bannerImage,
      imageAlt: course.title,
      category: "Course",
      instructorName: "Dr. Shah Alam",
      instructorAvatarSrc:
        "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=80",
      price: "Included in your access",
      originalPrice: undefined,
      isEnrolled: true,
      courseId: course.id,
      access: "PAID" as ContinueLearningCourse["access"],
      href: slug ? `/courses/${slug}` : undefined,
      slug,
      imageBadge: undefined,
      premiumBadge: false,
      rating: undefined,
      level: "BEGINNER" as ContinueLearningCourse["level"],
      goals: [],
      progress: 0,
      timeLeft: undefined,
      badge: undefined,
    } satisfies ContinueLearningCourse;
  });
}

export function mergeEnrollmentAndEntitlements(
  fromEnrollments: ContinueLearningCourse[],
  fromEntitlements: ContinueLearningCourse[],
): ContinueLearningCourse[] {
  const enrollmentIds = new Set(fromEnrollments.map((c) => c.courseId));
  const entitlementOnly = fromEntitlements.filter(
    (c) => !enrollmentIds.has(c.courseId),
  );
  return [...fromEnrollments, ...entitlementOnly];
}

export function countMergedLibraryCourses(
  enrollmentRows: EnrollmentSummary[],
  entitlements: Entitlement[],
): number {
  return mergeEnrollmentAndEntitlements(
    mapEnrollmentsToCourses(enrollmentRows),
    mapEntitlementsToCourses(entitlements),
  ).length;
}
