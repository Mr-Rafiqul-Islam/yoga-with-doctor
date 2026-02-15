/**
 * Full course detail data for the course detail page (locked vs unlocked variants).
 * Image URLs hotlinked from design/HTML source.
 */

export interface CourseLesson {
  id: string;
  title: string;
  duration: string;
  /** Free to watch without enrolling (preview) */
  isPreview: boolean;
  /** When locked variant: not accessible until enrolled */
  isLocked?: boolean;
}

export interface CourseModule {
  id: string;
  title: string;
  lessonCount: number;
  totalDuration: string;
  lessons: CourseLesson[];
}

export interface CourseDetailData {
  slug: string;
  title: string;
  category: string;
  description: string;
  thumbnailUrl: string;
  rating: string;
  reviewCount: number;
  instructorName: string;
  instructorTitle: string;
  instructorAvatarUrl: string;
  learningOutcomes: string[];
  curriculum: CourseModule[];
  price: string;
  originalPrice: string;
  discountPercent: number;
  includes: { icon: string; text: string }[];
}

const MORNING_SUNSHINE: CourseDetailData = {
  slug: "morning-sunshine-flow",
  title: "Morning Sunshine Flow for Beginners",
  category: "Mindfulness",
  description:
    "Start your day with intention and vitality. This medically-reviewed sequence combines gentle stretching with evidence-based mindfulness techniques to reduce cortisol levels and improve morning joint mobility. Perfect for beginners seeking a scientifically grounded approach to wellness.",
  thumbnailUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC1niabbyl6sRL9o0E72XzGDlMT8pgUCqFgBJeIFXXeX1sS7QfHw8Gpv8kqb6elwmeumti1ZK82tCorlFpA1yPfs_Br4oUx3ZAq_FAf4rRzzeYXaMqsULnIJUm6RCO6kRa3Iz8rGlR2EtKLpe4v5Kgkh2JkA3-d53XgPLBDzxM8f5pUk5YgiuxN-hCbiHLFRxcE1iLcgxcYCuW7nahqC9Ou4uomZ9zE2nKlQdqPvnKzF_YCS-8T6qILvVwRXjN2EfnLqAHbQqu88g",
  rating: "4.9",
  reviewCount: 245,
  instructorName: "Dr. Sarah West",
  instructorTitle: "MD, PhD in Sports Medicine",
  instructorAvatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCKnT0nefbomqEVDuG3v2MeMMsk8Mj7AvM4UlbHA2qYFirH0S2Rx_ggxxgw8cZe3t7CmrB-S8nUynAF4AdiNIv733KALsYkhbP4IX7iSp3q5dyLIm4WzWLf4RNdmMSBm1Eyvygp2A8jA4p8wIqXDN2zNrBwpw30YLvDa3sYU4gTsyCBN52fDsP5yZjqxtDqleK_i2y0_dX94J3OsB_wfNzoffm1Q6NMXoKmIpVrhMy6eWkAE-ej0Gf_dKAenGFzFTB9gOFNpjLQpA",
  learningOutcomes: [
    "Proper alignment for 15 foundational poses",
    "Breathing techniques to lower heart rate",
    "Joint mobilization for morning stiffness",
    "Mindfulness habits for stress reduction",
  ],
  curriculum: [
    {
      id: "m1",
      title: "Module 1: Foundations of Flow",
      lessonCount: 3,
      totalDuration: "25m",
      lessons: [
        { id: "l1", title: "1. Introduction to Breathwork", duration: "8:30 min", isPreview: true },
        { id: "l2", title: "2. Spinal Warm-up Sequence", duration: "12:15 min", isPreview: true },
        {
          id: "l3",
          title: "3. Sun Salutation A Breakdown",
          duration: "15:00 min",
          isPreview: false,
          isLocked: true,
        },
      ],
    },
    {
      id: "m2",
      title: "Module 2: Building Strength",
      lessonCount: 4,
      totalDuration: "45m",
      lessons: [
        {
          id: "l4",
          title: "4. Warrior Series Fundamentals",
          duration: "10:45 min",
          isPreview: false,
          isLocked: true,
        },
      ],
    },
  ],
  price: "$24.00",
  originalPrice: "$49.00",
  discountPercent: 51,
  includes: [
    { icon: "play_circle", text: "12 On-demand video lessons" },
    { icon: "description", text: "3 Downloadable resources" },
    { icon: "all_inclusive", text: "Full lifetime access" },
    { icon: "devices", text: "Access on mobile and desktop" },
    { icon: "verified", text: "Certificate of completion" },
  ],
};

const DETAIL_BY_SLUG: Record<string, CourseDetailData> = {
  "morning-sunshine-flow": MORNING_SUNSHINE,
};

export function getCourseDetailBySlug(slug: string): CourseDetailData | null {
  return DETAIL_BY_SLUG[slug] ?? null;
}
