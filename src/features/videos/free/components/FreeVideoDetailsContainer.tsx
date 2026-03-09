"use client";

import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { useGetClassBySlugQuery } from "@/slices/classes";
import type { ClassItem } from "@/slices/classes";
import type { FreeVideoDetails } from "../data/freeVideoDetailsData";
import { classItemToVideoCard } from "../utils/classToVideoCard";
import { FreeVideoDetailsContent } from "./FreeVideoDetailsContent";



export interface FreeVideoDetailsContainerProps {
  slug: string;
}

export function FreeVideoDetailsContainer({ slug }: FreeVideoDetailsContainerProps) {
  const { data, isLoading, isFetching, error } = useGetClassBySlugQuery(slug);

  // Support both shapes: data.class or data directly
  const classData = (data as any)?.data?.class ?? (data as any)?.data ?? null;
  if ((isLoading || isFetching) && !classData) {
    return (
      <LoadingScreen
        className="min-h-[50vh]"
        message="Loading your free class"
      />
    );
  }

  if (!classData || error) {
    return (
      <section
        className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface p-8 text-center shadow-soft"
        aria-label="Video not found"
      >
        <p className="text-body-lg font-medium text-foreground">
          This free video is currently unavailable.
        </p>
        <p className="mt-2 text-body-md text-muted">
          Please go back to the library and try another class.
        </p>
      </section>
    );
  }

  const videoCard = classItemToVideoCard(classData as ClassItem);

  return <FreeVideoDetailsContent video={videoCard} details={classData as FreeVideoDetails} />;
}

