import type { CourseWithMeta } from "@/types/course";


export type QuickAccessItem = {
  icon: string;
  label: string;
  href: string;
  color: string;
  count?: string;
  action?: string;
};

export type ContinueLearningCourse = CourseWithMeta & {
  progress: number;
  timeLeft?: string;
  badge?: "Popular" | "New";
};





export const QUICK_ACCESS_ITEMS: QuickAccessItem[] = [
  // {
  //   icon: "favorite",
  //   label: "Wishlist",
  //   count: "3 Items",
  //   href: "/dashboard/wishlist",
  //   color: "text-red-500",
  // },
  {
    icon: "bookmark",
    label: "Articles",
    count: "12 Saved",
    href: "/dashboard/library/saved-articles",
    color: "text-blue-500",
  },
  {
    icon: "download",
    label: "Downloads",
    count: "5 Files",
    href: "/dashboard/library/downloads",
    color: "text-purple-500",
  },
  // {
  //   icon: "credit_card",
  //   label: "Billing",
  //   action: "Manage",
  //   href: "/dashboard/billing",
  //   color: "text-primary",
  // },
];
