import Link from "next/link";
import { CourseCard } from "./CourseCard";

const TRENDING_COURSES = [
  {
    title: "30 Days Morning Challenge",
    description:
      "Transform your morning routine completely with this structured 4-week program designed to boost energy.",
    instructorName: "Dr. Sarah West",
    instructorTitle: "Yoga Therapist",
    instructorAvatarSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcCPXblS8FdKk_trqEsEscmah-35VqgwkRX_bvp_bmBDKLHrRxNJH7DTuV-j4mdjK7BqjYOlF2MFFVSDoo6BMFqlB_XwL4gWJxx-WHDIVECFZ2kIwyWxS_miy3FrdDyo8TT6nDzAHqdfbIcfgt5H65XCDXaWySLEhfXXPZ2wKoh5kvvY8tNSetwYaftrF-67lB9A5faoB2ahLwTdw7Hs-NWfRk2cgojoOwtF2svDzWejtly4w90hBuSnUYbUDgV25ZP3mwWkcILQ",
    price: "৳ 2,500",
    imageBadge: "BESTSELLER",
    imageBadgeVariant: "green" as const,
    contentTag: "New Course",
    contentTagVariant: "blue" as const,
    rating: "4.9",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAl5sh3m1JkzS6vXJf1AiHbQ7HbkwXmogEuoUNu89BY4FiNl-Jt6VNdrATCw48Ac6bKq6C1YvGUXzH96rvEzBziDcgVzL-pJjtdJcVx_p1yD10XgC9c0VDiOyesOlruYCZj4p22QmZ5AKgFe3EQI6zrfWtB8yFNpLb612L9bPIC-yOtQsP4AyS0ZuSi-X8HYLGenWyxVeOwjZ1ffveWdIp1tfaU_SkZM3SyEqvwCFiTK37yuKpKL9rjVPo_Ksy0y246nsk76c2SCg",
    imageAlt: "30 Days Morning Challenge",
  },
  {
    title: "Spine Health & Posture",
    description:
      "Correct posture imbalances and alleviate chronic back pain with targeted movements.",
    instructorName: "Dr. James Lee",
    instructorTitle: "Orthopedic Specialist",
    instructorAvatarSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAaeIKDB_CNf-nNcubY2BP5dpybYevP51rzL3_wgmphX7WM_6--LZXN2So9gXdUPQircQ2wX7QTYbYGQ6ZkbSVLRoicMc0apT2QMgCjoLR4I_1yZ5HTUa8KytSfQPqQuhoBoFEVbluPC6DafejugL3Pp4clr_1d5W9lI-SSdwNMNKHXpYY8gsQH7GHqZWtDK6ytlAu705M3KLVO3bW_-HAeeMLrnsmIkCvYUyYM9Mc2ubvN-mQ8t75gfc3Q7qRW7WX9tHBvM0f8kQ",
    price: "৳ 3,200",
    imageBadge: "MEDICAL INSIGHT",
    imageBadgeVariant: "blue" as const,
    contentTag: "Updated",
    contentTagVariant: "purple" as const,
    rating: "4.8",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXenBRNUIpbGZ3QkXPBagzXQtePaEveSt8c589bfMqRryVB8OmOtnJq6FYFvqhlqTZ3v2XIs5OXZnHV0ce8s_blNR0mnvMtRNBgpt40NzcVo8HWxU_JV5yaoQan-IuBUrZCbdhsjI03mCEk7DeohAKGa4MnBydTcmMBefwrHD_bLJk0Af4qV2S0e5MI3jM9eK48gzaDK-JEAhkGCZGMkJCkeGRvXUOZh4Xm3mB5RbGoaURhOdrnmuTc6umsO7g2p1pbJt_iaaJUA",
    imageAlt: "Spine Health & Posture",
  },
];

export function TrendingCoursesSection() {
  return (
    <section
      className="mx-auto mb-24 max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="trending-courses-heading"
    >
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2
            id="trending-courses-heading"
            className="font-display text-3xl font-bold text-foreground dark:text-white"
          >
            Trending Courses
          </h2>
          <p className="mt-2 text-sm text-muted dark:text-gray-400">
            Comprehensive programs to transform your health
          </p>
        </div>
        <Link
          href="/courses"
          className="shrink-0 text-sm font-medium text-primary transition-colors hover:text-primary-variant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-radius-sm dark:text-primary"
        >
          View Catalog
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {TRENDING_COURSES.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </section>
  );
}
