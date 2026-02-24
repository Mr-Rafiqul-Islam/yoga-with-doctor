import type { CourseWithMeta } from "@/types/course";

export type DashboardUser = {
  name: string;
  role: string;
  avatarSrc: string;
};

export type DashboardStats = {
  courses: number;
  certificates: number;
  points: string;
};

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

export const DEFAULT_USER: DashboardUser = {
  name: "Sarah Jenkins",
  role: "Wellness Enthusiast",
  avatarSrc:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDmyxoefgit0eX7UXZsRMIrbSGPe8QDVaK0Vm8vc6ZlmhNJ52EEXDKavc0GpULLt6SK9SjkEctxDQTeK_Rz3fCH_nd5bxoxEvQDDFN115EaayUVx6nBQSGh_DofxV9RMsOzYGE---aedkqRq9vdejM7rydgWtPND7YMBCJUZ3229gvcrlIA9Jdi4IiJ8-qyi5brPrzSIy-nHltSnVv-vPuu-CmUoDKI3ZWROcJ4_kCazFSjjr8XMgyxTTaoVxXI5CozAcwJwMV9MA",
};

export const DEFAULT_STATS: DashboardStats = {
  courses: 15,
  certificates: 12,
  points: "2.5k",
};

export const QUICK_ACCESS_ITEMS: QuickAccessItem[] = [
  {
    icon: "favorite",
    label: "Wishlist",
    count: "3 Items",
    href: "/dashboard/wishlist",
    color: "text-red-500",
  },
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
  {
    icon: "credit_card",
    label: "Billing",
    action: "Manage",
    href: "/dashboard/billing",
    color: "text-primary",
  },
];
