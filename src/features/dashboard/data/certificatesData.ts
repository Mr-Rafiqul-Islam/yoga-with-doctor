export type CertificateCategory =
  | "Yoga Practice"
  | "Meditation"
  | "Nutrition"
  | "Other";

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  duration: string;
  category: CertificateCategory;
  icon: string;
  iconColor: string;
  gradientFrom: string;
  gradientTo: string;
};

export const CERTIFICATES: Certificate[] = [
  {
    id: "1",
    title: "Advanced Hatha Yoga",
    issuer: "Issued by Dr. Emily Stone",
    issueDate: "Oct 24, 2023",
    duration: "40 Hours",
    category: "Yoga Practice",
    icon: "spa",
    iconColor: "text-accent",
    gradientFrom: "from-gray-100",
    gradientTo: "to-gray-200 dark:to-gray-900",
  },
  {
    id: "2",
    title: "Mindfulness Meditation",
    issuer: "Issued by Yoga Alliance",
    issueDate: "Sep 15, 2023",
    duration: "25 Hours",
    category: "Meditation",
    icon: "self_improvement",
    iconColor: "text-blue-400",
    gradientFrom: "from-blue-50",
    gradientTo: "to-indigo-50 dark:to-slate-800",
  },
  {
    id: "3",
    title: "Holistic Nutrition Basics",
    issuer: "Issued by Dr. Alan Green",
    issueDate: "Aug 02, 2023",
    duration: "15 Hours",
    category: "Nutrition",
    icon: "restaurant_menu",
    iconColor: "text-emerald-500",
    gradientFrom: "from-green-50",
    gradientTo: "to-emerald-50 dark:to-emerald-900/20",
  },
  {
    id: "4",
    title: "Anatomy for Yogis",
    issuer: "Issued by University of Health",
    issueDate: "Jul 10, 2023",
    duration: "30 Hours",
    category: "Yoga Practice",
    icon: "fitness_center",
    iconColor: "text-orange-400",
    gradientFrom: "from-orange-50",
    gradientTo: "to-red-50 dark:to-orange-900/20",
  },
  {
    id: "5",
    title: "Prenatal Yoga Support",
    issuer: "Issued by Mothers Wellness",
    issueDate: "Jun 05, 2023",
    duration: "20 Hours",
    category: "Yoga Practice",
    icon: "child_care",
    iconColor: "text-purple-400",
    gradientFrom: "from-purple-50",
    gradientTo: "to-pink-50 dark:to-purple-900/20",
  },
  {
    id: "6",
    title: "Breathwork & Pranayama",
    issuer: "Issued by The Breathing Space",
    issueDate: "May 18, 2023",
    duration: "10 Hours",
    category: "Meditation",
    icon: "waves",
    iconColor: "text-teal-400",
    gradientFrom: "from-teal-50",
    gradientTo: "to-cyan-50 dark:to-cyan-900/20",
  },
];

export const CERTIFICATE_FILTER_TABS = [
  { id: "all", label: "All Certificates", active: true },
  { id: "yoga", label: "Yoga Practice", active: false },
  { id: "meditation", label: "Meditation", active: false },
  { id: "nutrition", label: "Nutrition", active: false },
] as const;

