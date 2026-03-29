'use client';
import Link from "next/link";
import { VideoCard } from "./VideoCard";
import { VideoCardSkeleton } from "../videos/free/components/VideoCard";
import { useGetClassesQuery } from "@/slices/classes";
import { classItemToVideoCard } from "../videos/free/utils/classToVideoCard";
import { useMemo } from "react";


const PAGE_SIZE = 4;

export function FreeVideosSection() {
  const { data, isLoading, isFetching } = useGetClassesQuery({
    page: 1,
    limit: PAGE_SIZE,
    access: "PUBLIC",
  });
  const videosFromApi = useMemo(
    () => (data?.data?.classes ?? []).map(classItemToVideoCard),
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
          href="/videos"
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
