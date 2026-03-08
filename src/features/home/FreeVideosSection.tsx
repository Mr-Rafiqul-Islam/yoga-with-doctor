'use client';
import Link from "next/link";
import { VideoCard } from "./VideoCard";
import { VideoCardSkeleton } from "../videos/free/components/VideoCard";
import { useGetClassesQuery } from "@/services/classApi";
import { classItemToVideoCard } from "../videos/free/utils/classToVideoCard";
import { useMemo } from "react";

const FREE_VIDEOS = [
  {
    title: "Morning Sunshine Flow",
    duration: "15:00",
    level: "Beginner",
    instructor: "Dr. Sarah West",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuATRwpUZpL2DZgsV5mVP1WIbg-XYrxGvha4qQOfxPMutyHoV5h1HnwXAKONgvZbw1DYOAS23VBajCdAo9wUWdwTMJ01xD9XdZwvI8ziBQGpEpLq-kxfjNrAiLHFpfz6CXnbDSt9FLEt3C5oDMkuDQMmF09amZO7XyF5Ccts1bNr0v87I-zRLic0qUxDEY1TgSyMcaNZ8-Ll2vq6lRZ7wOnfyXbYobvxDMngeXxfT-k3GbURt4LXAUXu0RC6RbzrkAIIyLOQME2W-A",
    imageAlt: "Morning Sunshine Flow",
  },
  {
    title: "Deep Stretch & Wake Up",
    duration: "22:45",
    level: "Medium",
    instructor: "Dr. James Lee",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAlDpjRB47IE5mErGLzzTDluY84YSZwXesuxtMfoRBk6LmT41JTncKOmknx0HNzr2_f1FuWcW__BjokijY3y1vq_X_8xipqThhidOGBFfbK_qCXQRrNitOLDe4CEiXrILaTOUNwON35eZdAfpWYrDMc4Nbk_P42XLYQnjpomuj2ZM_f36JVW-R0930HlYirCmvqKeMaDSkmle7uz3YWh4-PJsAxpV4PAw2m-DbSYOW9_UW9CwFsoR03H8u1956796JDpdW4GPJXrA",
    imageAlt: "Deep Stretch & Wake Up",
  },
  {
    title: "Quick Office Relief",
    duration: "08:20",
    level: "Beginner",
    instructor: "Dr. Sarah West",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6eqDYIncuaGdTpw7ZY68M9movarZa4UcdX5FTfHp9GOTfMlbREyUpfqQlrCiljiWbz8YZOjd5kgC4yiURYuJkIriT2jORgF1wRM0QG1Y6JyIE0bbv0vV8UQM9ifkqA9oPovAnl3NV4SEAB2SXV46tOrpW7fjJAp_iYgLbqDDc7HUa1Pm1UX83NaQYwQ31AW-dJJoJQIcuHMMbykVG2v3Z4TIF8NQAtgVQe3c75Dr9_sKZMVXNbaLibovRkk-UZinpFiBKkAIFEg",
    imageAlt: "Quick Office Relief",
  },
  {
    title: "Bedtime Flow for Sleep",
    duration: "30:00",
    level: "All Levels",
    instructor: "Dr. Chen",
    thumbnail:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhtz8rXRgrT7mhX901JV33qKK0-YQqVqIiGc26wixIJ1gzuanCuBrtuzxxqcJ1DSCkzRnj4tqhz-5bNeJ53UpGDg2lAiUEohij3nAk195988oUpHZ88Xuej4s5zaGsOKRC-KkxyhWeFubDtiXTRI8CCTKCzrCJna4n6-jVpg5Ed7V87UHa0v_wbhssoM4JkaytXWAuxVDGS1ILGPLLy1gfQO-C8QbChRbIqpcqOLmiNEaUYBss1VcSiKo0eKtLOZ3EF0DvPFkoFA",
    imageAlt: "Bedtime Flow for Sleep",
  },
];
const PAGE_SIZE = 20;

export function FreeVideosSection() {
  const { data, isLoading, isFetching } = useGetClassesQuery({
    page: 1,
    limit: PAGE_SIZE,
  });
  const videosFromApi = useMemo(
    () => (data?.data?.classes ?? []).filter((item) => item.access === "PUBLIC").slice(0, 4).map(classItemToVideoCard),
    [data?.data?.classes]
  );

  const showSkeleton = isLoading || isFetching;

  return (
    <section
      className="mx-auto mb-20 max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="free-videos-heading"
    >
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2
            id="free-videos-heading"
            className="font-serif text-3xl font-bold text-foreground"
          >
            Free Videos
          </h2>
          <p className="mt-2 text-body-md text-muted">
            Start your morning with these quick sessions
          </p>
        </div>
        <Link
          href="/videos/free"
          className="text-body-md font-medium text-primary transition-colors hover:text-primary-variant focus:outline-none  rounded-radius-sm shrink-0"
        >
          See all
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {showSkeleton
          ? Array.from({ length: 4 }).map((_, i) => (
              <VideoCardSkeleton key={i} />
            ))
          : videosFromApi.map((video) => (
              <VideoCard key={video.title} {...video} />
            ))}
      </div>
    </section>
  );
}
