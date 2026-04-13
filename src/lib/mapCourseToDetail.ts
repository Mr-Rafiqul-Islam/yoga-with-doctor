import type { Course } from "@/slices/courses";
import type {
  CourseDetailData,
  CourseLesson as DetailLesson,
  CourseModule as DetailModule,
} from "@/features/courses/data/courseDetailData";
import { DEFAULT_INCLUDES } from "@/features/courses/data/courseDetailData";
import {
  formatHumanMediaDuration,
  lessonDurationSeconds,
} from "@/lib/formatMediaDuration";

const FALLBACK_THUMBNAIL =
  "https://via.placeholder.com/640x360.png?text=Course";
const FALLBACK_INSTRUCTOR_AVATAR =
  "https://drshahalam.com/wp-content/uploads/2026/02/Dr-Shah-Alam-Website-Hero.jpeg";
const STATIC_INSTRUCTOR_TITLE = "Orthopedics Specialist, Spine Surgeion, Yoga Instructor";
const STATIC_LEARNING_OUTCOMES = [
  "Evidence-based techniques for wellness",
  "Step-by-step guided sessions",
  "Lifetime access to course materials",
  "Access on mobile and desktop",
];




function formatLevel(level: string | null): string {
  if (!level) return "Wellness";
  const lower = level.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

function formatPrice(price: number, currency: string): string {
  if (currency.toUpperCase() === "BDT") {
    return `৳ ${price.toLocaleString("en-BD")}`;
  }
  return `${currency} ${price.toFixed(2)}`;
}

export function mapCourseToCourseDetailData(course: Course): CourseDetailData {
  const sections = course.sections ?? [];
  const isFreeAccess =
    course.access === "FREE" || course.access === "PUBLIC";
  const product = course.productData;
  const hasPrice =
    product?.price != null &&
    typeof product.price === "number" &&
    product.currency;

  const STATIC_DISCOUNT_PERCENT = 20;

  const price = hasPrice
    ? formatPrice(product!.price!, product!.currency ?? "BDT")
    : isFreeAccess
      ? "Free"
      : "৳ 997";

  const staticOriginalPriceAmount = hasPrice
    ? (product!.price! * STATIC_DISCOUNT_PERCENT) / 100 + product!.price!
    : 0;

  const originalPrice = hasPrice
    ? formatPrice(staticOriginalPriceAmount, product!.currency ?? "BDT")
    : "";
  const discountPercent = hasPrice ? STATIC_DISCOUNT_PERCENT : 0;

  const intro = course.introVideo ?? null;
  const hasIntroPlayback =
    intro?.status === "READY" &&
    intro.muxPlaybackId != null &&
    intro.muxPlaybackId !== "";

  const firstLessonId =
    sections[0]?.lessons?.[0]?.id ??
    sections.flatMap((s) => s.lessons ?? [])[0]?.id ??
    null;

  const previewLessonId = hasIntroPlayback ? null : firstLessonId;

  const curriculum: DetailModule[] = sections.map((section) => {
    const lessons = section.lessons ?? [];
    const totalSec = lessons.reduce(
      (sum, l) => sum + (lessonDurationSeconds(l) ?? 0),
      0
    );
    const totalDuration = formatHumanMediaDuration(totalSec);

    const detailLessons: DetailLesson[] = lessons.map((lesson) => ({
      id: lesson.id,
      title: lesson.title.trim(),
      duration: lessonDurationSeconds(lesson),
      description: lesson.description ?? null,
      order: lesson.order,
      durationMin: lesson.durationMin ?? null,
      videoId: lesson.videoId ?? null,
      video: lesson.video ?? null,
      locked: lesson.locked,
      // First lesson preview only when there is no dedicated intro video.
      isPreview: previewLessonId != null && lesson.id === previewLessonId,
      isLocked: lesson.locked ?? false,
    }));

    return {
      id: section.id,
      title: section.title,
      lessonCount: lessons.length,
      totalDuration,
      lessons: detailLessons,
    };
  });

  const totalLessons = sections.reduce(
    (sum, section) => sum + (section.lessons?.length ?? 0),
    0
  );

  const totalLessonResources = sections.reduce((sum, section) => {
    const lessons = section.lessons ?? [];
    return (
      sum +
      lessons.reduce((innerSum, lesson) => innerSum + (lesson.resources?.length ?? 0), 0)
    );
  }, 0);

  const courseResources =
    course.resources?.length ?? course._count?.resources ?? 0;
  const totalResources = courseResources + totalLessonResources;

  const includes: CourseDetailData["includes"] = [
    {
      icon: DEFAULT_INCLUDES[0]?.icon ?? "play_circle",
      text: `${totalLessons} On-demand video lessons`,
    },
    {
      icon: DEFAULT_INCLUDES[1]?.icon ?? "description",
      text: `${totalResources} Downloadable resources`,
    },
    ...DEFAULT_INCLUDES.slice(2),
  ];

  return {
    courseId: course.id,
    slug: course.slug,
    access: course.access,
    title: course.title,
    category: formatLevel(course.level),
    description: course.description ?? "",
    thumbnailUrl:
      course.bannerUrl ?? course.bannerImage ?? FALLBACK_THUMBNAIL,
    ...(hasIntroPlayback && intro
      ? {
          introMuxPlaybackId: intro.muxPlaybackId!,
          introPosterUrl: intro.thumbnail,
        }
      : {}),
    rating: course.avgRating != null ? course.avgRating.toFixed(1) : "0.0",
    reviewCount: course.ratingCount ?? 0,
    instructorName: course.instructorName ?? "Yoga with Doctor",
    instructorTitle: STATIC_INSTRUCTOR_TITLE,
    instructorAvatarUrl: FALLBACK_INSTRUCTOR_AVATAR,
    learningOutcomes: STATIC_LEARNING_OUTCOMES,
    curriculum,
    price,
    originalPrice,
    discountPercent,
    includes,
  };
}
