"use client";

import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { useGetClassBySlugQuery } from "@/services/classApi";
import type { ClassItem } from "@/services/classApi";
import type { FreeVideoDetails } from "../data/freeVideoDetailsData";
import { classItemToVideoCard } from "../utils/classToVideoCard";
import { FreeVideoDetailsContent } from "./FreeVideoDetailsContent";

function buildDetailsFromClass(classData: ClassItem): FreeVideoDetails {
  const description =
    (classData.shortDescription?.replace(/<[^>]+>/g, "") ??
    "This practice supports overall wellness with evidence-based movements. Always consult your healthcare provider before starting a new routine.") as string;

  const difficulty = classData.video?.level ?? classData.video?.level ?? "Beginner";

  return {
    difficulty,
    instructorTitle: "Clinically guided practice",
    medicalBenefitsIntro: description,
    benefits: [
      {
        title: "Mood Boost",
        description: "Gentle movement and breathwork can improve mood and reduce stress.",
        icon: "mood",
      },
      {
        title: "Heart Health",
        description: "Low-impact sequences support circulation and cardiovascular health.",
        icon: "heart",
      },
    ],
    doctorNote: {
      name: "Dr. Sarah West",
      title: "MD, Yoga Therapist",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCKnT0nefbomqEVDuG3v2MeMMsk8Mj7AvM4UlbHA2qYFirH0S2Rx_ggxxgw8cZe3t7CmrB-S8nUynAF4AdiNIv733KALsYkhbP4IX7iSp3q5dyLIm4WzWLf4RNdmMSBm1Eyvygp2A8jA4p8wIqXDN2zNrBwpw30YLvDa3sYU4gTsyCBN52fDsP5yZjqxtDqleK_i2y0_dX94J3OsB_wfNzoffm1Q6NMXoKmIpVrhMy6eWkAE-ej0Gf_dKAenGFzFTB9gOFNpjLQpA",
      quote:
        "Use this class as a structured, safe way to explore movement. Listen to your body and pause if you feel pain rather than stretch through it.",
      tags: ["#ClinicalYoga", "#EvidenceBased"],
    },
    nextInSeries: [],
    relatedPremium: [],
  };
}

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
  const details = buildDetailsFromClass(classData as ClassItem);

  return <FreeVideoDetailsContent video={videoCard} details={details} />;
}

