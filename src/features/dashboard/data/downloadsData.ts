export type DownloadType = "PDF" | "VIDEO" | "AUDIO" | "ARCHIVE";

export type DownloadStatus = "COMPLETED" | "DOWNLOADING" | "PAUSED";

export type DownloadItem = {
  id: string;
  title: string;
  size: string;
  downloadedAt: string;
  type: DownloadType;
  status: DownloadStatus;
  progress?: number;
  remainingTime?: string;
  totalSize?: string;
  icon: string;
  iconColor: string;
  actionLink: string;
  actionLabel: string;
  actionButtonLabel: string;
  actionButtonIcon: string;
};

export const DOWNLOAD_ITEMS: DownloadItem[] = [
  {
    id: "1",
    title: "Holistic Nutrition Plan",
    size: "2.4 MB",
    downloadedAt: "Downloaded 2h ago",
    type: "PDF",
    status: "COMPLETED",
    icon: "description",
    iconColor: "text-purple-600",
    actionLink: "#",
    actionLabel: "View Course Details",
    actionButtonLabel: "Re-download",
    actionButtonIcon: "download",
  },
  {
    id: "2",
    title: "Morning Yoga Routine",
    size: "156 MB",
    downloadedAt: "Downloaded Yesterday",
    type: "VIDEO",
    status: "COMPLETED",
    icon: "play_circle",
    iconColor: "text-pink-600",
    actionLink: "#",
    actionLabel: "Watch Preview",
    actionButtonLabel: "Play Offline",
    actionButtonIcon: "play_arrow",
  },
  {
    id: "3",
    title: "Meditation for Sleep",
    size: "12 MB",
    downloadedAt: "Downloaded 3d ago",
    type: "AUDIO",
    status: "COMPLETED",
    icon: "headphones",
    iconColor: "text-blue-600",
    actionLink: "#",
    actionLabel: "Track Details",
    actionButtonLabel: "Listen",
    actionButtonIcon: "play_arrow",
  },
  {
    id: "4",
    title: "Advanced Anatomy",
    size: "450 MB",
    downloadedAt: "Downloaded 1w ago",
    type: "ARCHIVE",
    status: "COMPLETED",
    icon: "folder",
    iconColor: "text-yellow-600",
    actionLink: "#",
    actionLabel: "View Contents",
    actionButtonLabel: "Open",
    actionButtonIcon: "folder_open",
  },
  {
    id: "5",
    title: "Ayurveda Basics.pdf",
    size: "3.2 MB / 8.5 MB",
    downloadedAt: "45s remaining",
    type: "PDF",
    status: "DOWNLOADING",
    progress: 38,
    remainingTime: "45s remaining",
    totalSize: "8.5 MB",
    icon: "download",
    iconColor: "text-gray-600",
    actionLink: "#",
    actionLabel: "",
    actionButtonLabel: "Pause",
    actionButtonIcon: "pause",
  },
  {
    id: "6",
    title: "Evening Stretch Routine",
    size: "102 MB",
    downloadedAt: "Downloaded 2w ago",
    type: "VIDEO",
    status: "COMPLETED",
    icon: "play_circle",
    iconColor: "text-pink-600",
    actionLink: "#",
    actionLabel: "Watch Preview",
    actionButtonLabel: "Play Offline",
    actionButtonIcon: "play_arrow",
  },
];

export const DOWNLOAD_FILTER_TABS = [
  { id: "all", label: "All Files", active: true },
  { id: "pdf", label: "PDF Guides", active: false },
  { id: "videos", label: "Videos", active: false },
  { id: "audio", label: "Audio", active: false },
] as const;

