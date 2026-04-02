"use client";

import { LoadingScreen } from "@/components/ui/LoadingScreen";
import {
  useGetClassBySlugQuery,
  type ClassItem,
  type ClassResponse,
} from "@/slices/classes";
import type { FreeVideoDetails } from "../data/freeVideoDetailsData";
import { classItemToVideoCard } from "../utils/classToVideoCard";
import { FreeVideoDetailsContent } from "./FreeVideoDetailsContent";

function resolveClassPayload(
  response: ClassResponse | undefined,
): ClassItem | FreeVideoDetails | null {
  const inner = response?.data;
  if (inner == null || typeof inner !== "object") return null;
  if (
    "class" in inner &&
    inner.class != null &&
    typeof inner.class === "object"
  ) {
    return inner.class as ClassItem;
  }
  return inner as FreeVideoDetails;
}

export interface FreeVideoDetailsContainerProps {
  slug: string;
}

export function FreeVideoDetailsContainer({ slug }: FreeVideoDetailsContainerProps) {
  const { data, isLoading, isFetching, error } = useGetClassBySlugQuery(slug);

  const classData = resolveClassPayload(data);
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

  const videoCard = classItemToVideoCard(classData);

  return (
    <FreeVideoDetailsContent
      video={videoCard}
      details={classData as FreeVideoDetails}
    />
  );
}

