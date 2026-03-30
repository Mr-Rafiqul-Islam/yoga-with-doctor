import type { Course } from "@/slices/courses";
import type {
  CourseDetailData,
  CourseLesson as DetailLesson,
  CourseModule as DetailModule,
} from "@/features/courses/data/courseDetailData";
import { DEFAULT_INCLUDES } from "@/features/courses/data/courseDetailData";

const FALLBACK_THUMBNAIL =
  "https://via.placeholder.com/640x360.png?text=Course";
const FALLBACK_INSTRUCTOR_AVATAR =
  "https://drshahalam.com/wp-content/uploads/2026/02/Dr-Shah-Alam-Website-Hero.jpeg";
const STATIC_RATING = "4.9";
const STATIC_REVIEW_COUNT = 245;
const STATIC_INSTRUCTOR_TITLE = "Orthopedics Specialist, Spine Surgeion, Yoga Instructor";
const STATIC_LEARNING_OUTCOMES = [
  "Evidence-based techniques for wellness",
  "Step-by-step guided sessions",
  "Lifetime access to course materials",
  "Access on mobile and desktop",
];
const STATIC_ORIGINAL_PRICE = "৳ 1,499";
const STATIC_DISCOUNT_PERCENT = 20;



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

  const price = hasPrice
    ? formatPrice(product!.price!, product!.currency ?? "BDT")
    : isFreeAccess
      ? "Free"
      : "৳ 997";

  const originalPrice = hasPrice ? STATIC_ORIGINAL_PRICE : "";
  const discountPercent = hasPrice ? STATIC_DISCOUNT_PERCENT : 0;

  const firstLessonId =
    sections[0]?.lessons?.[0]?.id ??
    sections.flatMap((s) => s.lessons ?? [])[0]?.id ??
    null;

  const curriculum: DetailModule[] = sections.map((section) => {
    const lessons = section.lessons ?? [];
    const totalMin = lessons.reduce(
      (sum, l) => sum + (l.durationMin ?? 0),
      0
    );
    const totalDuration =
      totalMin >= 60
        ? `${Math.floor(totalMin / 60)}h ${totalMin % 60}m`
        : `${totalMin}m`;

    const detailLessons: DetailLesson[] = lessons.map((lesson) => ({
      id: lesson.id,
      title: lesson.title.trim(),
      duration: lesson.durationMin ? `${lesson.durationMin} min` : "—",
      description: lesson.description ?? null,
      order: lesson.order,
      durationMin: lesson.durationMin ?? null,
      videoId: lesson.videoId ?? null,
      video: lesson.video ?? null,
      locked: lesson.locked,
      // For now: only the first lesson is preview across all courses.
      // Later: replace with an API flag if/when available.
      isPreview: firstLessonId != null && lesson.id === firstLessonId,
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
    rating: STATIC_RATING,
    reviewCount: STATIC_REVIEW_COUNT,
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
