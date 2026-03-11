/**
 * Full course detail data for the course detail page (locked vs unlocked variants).
 * Image URLs hotlinked from design/HTML source.
 */

export interface CourseLesson {
  id: string;
  title: string;
  duration: string;
  description?: string | null;
  order?: number;
  durationMin?: number | null;
  videoId?: string | null;
  /** Full video object from API (for future Mux player) */
  video?: unknown | null;
  /** Backend lock flag (if provided) */
  locked?: boolean;
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
  courseId?: string;
  slug: string;
  access?: "FREE" | "PAID" | "PUBLIC" | "PREMIUM";
  title: string;
  category: string;
  description: string;
  thumbnailUrl: string;
  /** Optional Mux playback ID for the primary course video (used on lesson page). */
  muxPlaybackId?: string;
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

/** Static "This course includes" list when API does not provide it */
export const DEFAULT_INCLUDES: CourseDetailData["includes"] = [
  { icon: "play_circle", text: "12 On-demand video lessons" },
  { icon: "description", text: "3 Downloadable resources" },
  { icon: "all_inclusive", text: "Full lifetime access" },
  { icon: "devices", text: "Access on mobile and desktop" },
  { icon: "verified", text: "Certificate of completion" },
];

const COURSE_30_DAYS: CourseDetailData = {
  slug: "30-days-morning-challenge",
  title: "30 Days Morning Challenge",
  category: "Wellness",
  description:
    "Transform your morning routine completely with this structured 4-week program designed to boost energy, improve focus, and establish lasting habits. Each day builds on the previous with guided sessions.",
  thumbnailUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAl5sh3m1JkzS6vXJf1AiHbQ7HbkwXmogEuoUNu89BY4FiNl-Jt6VNdrATCw48Ac6bKq6C1YvGUXzH96rvEzBziDcgVzL-pJjtdJcVx_p1yD10XgC9c0VDiOyesOlruYCZj4p22QmZ5AKgFe3EQI6zrfWtB8yFNpLb612L9bPIC-yOtQsP4AyS0ZuSi-X8HYLGenWyxVeOwjZ1ffveWdIp1tfaU_SkZM3SyEqvwCFiTK37yuKpKL9rjVPo_Ksy0y246nsk76c2SCg",
  rating: "4.9",
  reviewCount: 312,
  instructorName: "Dr. Sarah West",
  instructorTitle: "Yoga Therapist",
  instructorAvatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCcCPXblS8FdKk_trqEsEscmah-35VqgwkRX_bvp_bmBDKLHrRxNJH7DTuV-j4mdjK7BqjYOlF2MFFVSDoo6BMFqlB_XwL4gWJxx-WHDIVECFZ2kIwyWxS_miy3FrdDyo8TT6nDzAHqdfbIcfgt5H65XCDXaWySLEhfXXPZ2wKoh5kvvY8tNSetwYaftrF-67lB9A5faoB2ahLwTdw7Hs-NWfRk2cgojoOwtF2svDzWejtly4w90hBuSnUYbUDgV25ZP3mwWkcILQ",
  learningOutcomes: [
    "Build a consistent morning routine in 30 days",
    "Increase energy and mental clarity",
    "Develop mindfulness and stress resilience",
    "Create sustainable wellness habits",
  ],
  curriculum: [
    {
      id: "m1",
      title: "Week 1: Foundation",
      lessonCount: 7,
      totalDuration: "2h 10m",
      lessons: [
        { id: "l1", title: "1. Introduction & Day 1 Flow", duration: "15:00 min", isPreview: true },
        { id: "l2", title: "2. Breath & Stretch Basics", duration: "20:00 min", isPreview: true },
        { id: "l3", title: "3. Day 3–7 Guided Sessions", duration: "18:00 min", isPreview: false, isLocked: true },
      ],
    },
    {
      id: "m2",
      title: "Week 2–4: Deepening Practice",
      lessonCount: 21,
      totalDuration: "6h 30m",
      lessons: [
        { id: "l4", title: "4. Week 2 Overview", duration: "22:00 min", isPreview: false, isLocked: true },
      ],
    },
  ],
  price: "৳ 2,500",
  originalPrice: "৳ 3,500",
  discountPercent: 29,
  includes: DEFAULT_INCLUDES,
};

const SPINE_HEALTH: CourseDetailData = {
  slug: "spine-health-posture",
  title: "Spine Health & Posture",
  category: "Medical Insight",
  description:
    "Correct posture imbalances and alleviate chronic back pain with targeted movements. Designed with input from orthopedic specialists, this course helps you strengthen supporting muscles and improve spinal mobility.",
  thumbnailUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCXenBRNUIpbGZ3QkXPBagzXQtePaEveSt8c589bfMqRryVB8OmOtnJq6FYFvqhlqTZ3v2XIs5OXZnHV0ce8s_blNR0mnvMtRNBgpt40NzcVo8HWxU_JV5yaoQan-IuBUrZCbdhsjI03mCEk7DeohAKGa4MnBydTcmMBefwrHD_bLJk0Af4qV2S0e5MI3jM9eK48gzaDK-JEAhkGCZGMkJCkeGRvXUOZh4Xm3mB5RbGoaURhOdrnmuTc6umsO7g2p1pbJt_iaaJUA",
  rating: "4.8",
  reviewCount: 189,
  instructorName: "Dr. James Lee",
  instructorTitle: "Orthopedic Specialist",
  instructorAvatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAaeIKDB_CNf-nNcubY2BP5dpybYevP51rzL3_wgmphX7WM_6--LZXN2So9gXdUPQircQ2wX7QTYbYGQ6ZkbSVLRoicMc0apT2QMgCjoLR4I_1yZ5HTUa8KytSfQPqQuhoBoFEVbluPC6DafejugL3Pp4clr_1d5W9lI-SSdwNMNKHXpYY8gsQH7GHqZWtDK6ytlAu705M3KLVO3bW_-HAeeMLrnsmIkCvYUyYM9Mc2ubvN-mQ8t75gfc3Q7qRW7WX9tHBvM0f8kQ",
  learningOutcomes: [
    "Identify and correct common posture issues",
    "Reduce lower back and neck discomfort",
    "Strengthen core and spinal support muscles",
    "Apply ergonomic principles daily",
  ],
  curriculum: [
    {
      id: "m1",
      title: "Module 1: Assessment & Basics",
      lessonCount: 4,
      totalDuration: "35m",
      lessons: [
        { id: "l1", title: "1. Posture Self-Assessment", duration: "10:00 min", isPreview: true },
        { id: "l2", title: "2. Spinal Mobility Intro", duration: "12:00 min", isPreview: true },
        { id: "l3", title: "3. Core Activation", duration: "13:00 min", isPreview: false, isLocked: true },
      ],
    },
    {
      id: "m2",
      title: "Module 2: Strength & Maintenance",
      lessonCount: 5,
      totalDuration: "50m",
      lessons: [
        { id: "l4", title: "4. Building Support Strength", duration: "15:00 min", isPreview: false, isLocked: true },
      ],
    },
  ],
  price: "৳ 3,200",
  originalPrice: "৳ 4,000",
  discountPercent: 20,
  includes: DEFAULT_INCLUDES,
};

const DEEP_STRETCH: CourseDetailData = {
  slug: "deep-stretch-wake-up-routine",
  title: "Deep Stretch & Wake Up Routine",
  category: "Flexibility",
  description:
    "A focused sequence to wake up your body and improve flexibility. Ideal for morning or post-work, with emphasis on safe stretching and mobility.",
  thumbnailUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAhQO0cMqToV1hs9n0Z88Zuf1LpwvvcT4pYXBH__igFZOabHfgTHPVgjfsEfHpfy3sV9Yvjs9kyOJ4jzgbiePWuPJFZG9jonJPYgj4U1jx6qOyxItKcdsp79w_mkxdsqzKgjBIJpaTPaHpMO_IDC4m607z-Cd_gOJko2GZYultd-mh9FY8v3E658_NZlktETxXnJAq00pQxdvTtsNooxrjLStmudOEhiyifOnWJP4mXMAJc-4y4zjiI4du4A2sejJ1rcs81hc3IGQ",
  rating: "4.7",
  reviewCount: 156,
  instructorName: "Master Yogi",
  instructorTitle: "Certified Yoga Instructor",
  instructorAvatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB9Pa5afW50cGqXtq9KVR9pVFHGLy_v7Vy2G4CScYa87KpBHVrcDlfi-DBcgha-Hp-maV_2gzd5uTsYR93FzdRj51JJW0U5NJx2oxNTTOSptVjAxLIytEmuy2c64_CVUJ3UnybmKckxJ0fgOoMFRj2HNoIsCz4ZXKGoWdHWRsoqzNuDVu8JVmZ8fHZ9MI-nVQYj3B1CnnNvL0BrHRuzP4LsE2Sbh72B9iyvcKl732vNhzmSYI87gEBpT5ipfRws57TjSey2C42X4Q",
  learningOutcomes: [
    "Improve overall flexibility safely",
    "Learn effective wake-up stretches",
    "Release tension in major muscle groups",
    "Build a 20-minute daily routine",
  ],
  curriculum: [
    {
      id: "m1",
      title: "Wake Up Flow",
      lessonCount: 3,
      totalDuration: "20m",
      lessons: [
        { id: "l1", title: "1. Gentle Warm-up", duration: "5:00 min", isPreview: true },
        { id: "l2", title: "2. Full Body Stretch", duration: "10:00 min", isPreview: true },
        { id: "l3", title: "3. Cool Down & Breath", duration: "5:00 min", isPreview: false, isLocked: true },
      ],
    },
  ],
  price: "$19.00",
  originalPrice: "$29.00",
  discountPercent: 34,
  includes: DEFAULT_INCLUDES,
};

const MINDFULNESS_MASTERY: CourseDetailData = {
  slug: "mindfulness-mastery-finding-peace",
  title: "Mindfulness Mastery: Finding Peace",
  category: "Meditation",
  description:
    "Develop a sustainable mindfulness practice with evidence-based techniques. Reduce anxiety and improve emotional regulation through guided meditation and breathwork.",
  thumbnailUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDV3YuAsUHqJk1WqRUhNsK1-MI4M8HWOZw3xLjUVdaS0N5Obk-qK14hnab2fdNvujxUbdS0uiZE-KH_Gr7t3G58LVLmA_4SikfPjaSRh0W3hmfXt8-l_HZFJIkzzd29-Xuz28lhDzu1bV7Q70qbCiaYXJHWnaPhjbmw2whT0gx_jGnSQXJvtfsEZQeCYAj-6juacEHw8-LBbc15IRTly90ogeAv1j1V_zt4NA-xj9dU1nSni2ZlsVcRU0TBCxs7CBvJIFhoTjxKKw",
  rating: "5.0",
  reviewCount: 98,
  instructorName: "Dr. Sarah West",
  instructorTitle: "Yoga Therapist",
  instructorAvatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCKTv9h-ae0vrQFpa7hMrD43CN0Na9Gb2p0ShY20Vhmf0F5vwQTxeNYaQGZZElOcqvGZi-H2xaktZGWM3vFQ9XFdvk8qO-IZ6aNTYOprmQ9hm9uW7AjNsYpilt78CYLJnssu4o6QZxFGsls75GXUvxBoidEZyzMsfWiH-J_01I4YOK6XRHf_KOyH-5ZMiWRXPd88VZYFu4kzRVunC0bkopW3iFfLMWjXSdNUp52aUTpSyVLZYEbCNSQ8QonLpANEFjfcM8ZUoIOZA",
  learningOutcomes: [
    "Establish a daily meditation habit",
    "Use breathwork to manage stress",
    "Apply mindfulness in daily life",
    "Find lasting emotional balance",
  ],
  curriculum: [
    {
      id: "m1",
      title: "Foundations of Mindfulness",
      lessonCount: 4,
      totalDuration: "45m",
      lessons: [
        { id: "l1", title: "1. What Is Mindfulness?", duration: "12:00 min", isPreview: true },
        { id: "l2", title: "2. Breath Awareness", duration: "10:00 min", isPreview: true },
        { id: "l3", title: "3. Body Scan Practice", duration: "15:00 min", isPreview: false, isLocked: true },
      ],
    },
  ],
  price: "$35.00",
  originalPrice: "$45.00",
  discountPercent: 22,
  includes: DEFAULT_INCLUDES,
};

const ADVANCED_FLOW_BACK: CourseDetailData = {
  slug: "advanced-flow-back-pain-relief",
  title: "Advanced Flow for Back Pain Relief",
  category: "Therapy",
  description:
    "A focused session for alleviating chronic lower back tension safely. Combines mobility, strength, and relaxation for lasting relief. Best after completing a beginner course.",
  thumbnailUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCLJAHwUYj-DVz9wKe65A2wbfyFveEOU2AETE18wGmqA6O83jSjTFgcul9wG7GmHK6imrtMEWxJwCGDbe7TYsDxsaX44c_OV4bgQn2xB_Mifw0CYZ2QfrzDGtUZ7--pcEBa4ro7vjRATuwfy-x8dQovWFfUMsFMxH1OoUvEE-o5rgJh6PG-oed4zU3yaHo8bUn8pTts4pekcNV2TQ9BHt5BEcljuK2cDNe7hWVOu6b3aYaTSBBGTv_jvxizsBF_9CRrYLmiDnoTvQ",
  rating: "4.8",
  reviewCount: 134,
  instructorName: "Alex Chen, PT",
  instructorTitle: "Physical Therapist",
  instructorAvatarUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBhaWURg1poNEzCk0xsKDTAOqTQ1O7Ryb63QffMP4g_lTJroZbxCbxZXQg0y-pqbq8bF3iF_M1CwZUHI_EFjfTJku1P1wZGnKF4S5lMUkcKSSPDy5VndI1V7WO1JiCy2g-Jr_pMP6VJy3P4CfhZzKoBtfqcErCLWVu9OP4QEuYCEp6-Dl4ZG3lX4aapP4T2cWHgbK9VPry9jppI1UwqzdbvIUuhcX3rqK13WKkBHwBO5WgFUONQRgEv6c33tcQD4TFLmSXEF2sRCQ",
  learningOutcomes: [
    "Safely reduce chronic back pain",
    "Improve lumbar mobility and stability",
    "Progress from beginner to advanced moves",
    "Prevent future flare-ups",
  ],
  curriculum: [
    {
      id: "m1",
      title: "Assessment & Prep",
      lessonCount: 2,
      totalDuration: "18m",
      lessons: [
        { id: "l1", title: "1. Back Safety Guidelines", duration: "8:00 min", isPreview: true },
        { id: "l2", title: "2. Warm-up for Back", duration: "10:00 min", isPreview: false, isLocked: true },
      ],
    },
    {
      id: "m2",
      title: "Advanced Flow",
      lessonCount: 4,
      totalDuration: "42m",
      lessons: [
        { id: "l3", title: "3. Main Relief Sequence", duration: "15:00 min", isPreview: false, isLocked: true },
      ],
    },
  ],
  price: "$29.00",
  originalPrice: "$39.00",
  discountPercent: 26,
  includes: DEFAULT_INCLUDES,
};

const DETAIL_BY_SLUG: Record<string, CourseDetailData> = {
  "morning-sunshine-flow": MORNING_SUNSHINE,
  "30-days-morning-challenge": COURSE_30_DAYS,
  "spine-health-posture": SPINE_HEALTH,
  "deep-stretch-wake-up-routine": DEEP_STRETCH,
  "mindfulness-mastery-finding-peace": MINDFULNESS_MASTERY,
  "advanced-flow-back-pain-relief": ADVANCED_FLOW_BACK,
};

export function getCourseDetailBySlug(slug: string): CourseDetailData | null {
  return DETAIL_BY_SLUG[slug] ?? null;
}
