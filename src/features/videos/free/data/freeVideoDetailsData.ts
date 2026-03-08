/**
 * Extended data for the free video details page: medical benefits, doctor's note,
 * next in series, related premium. Image URLs hotlinked from design/HTML source.
 */

import { ArticleAuthor } from "@/features/articles/data/dummyArticles";
import { ClassVideo } from "@/services/classApi";

export interface MedicalBenefit {
  title: string;
  description: string;
  icon: "mood" | "heart" | "energy" | "sleep";
}

export interface DoctorNote {
  name: string;
  title: string;
  avatarUrl: string;
  quote: string;
  tags: string[];
}

export interface NextInSeriesItem {
  title: string;
  subtitle: string;
  thumbnailUrl: string;
  duration: string;
  slug: string;
}

export interface RelatedPremiumItem {
  title: string;
  author: string;
  duration: string;
  thumbnailUrl: string;
}

export interface FreeVideoDetails {
  id: number;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: string[];
  props: string[];
  focus: string[];
  meta: string | null;
  totalViews: number;
  access: "PUBLIC" | "PREMIUM" | "PAID";
  mediaAssetId: string;
  createdAt: string;
  updatedAt: string;
  adminId: string;
  enrollmentCount: number;
  isEnrolled: boolean;
  author: ArticleAuthor;
  video: ClassVideo;
  nextInSeries?: NextInSeriesItem[];
  relatedPremium?: RelatedPremiumItem[];
}



const DEFAULT_DETAILS: FreeVideoDetails = {
  medicalBenefitsIntro:
    "This practice supports overall wellness with evidence-based movements. Always consult your healthcare provider before starting a new exercise routine.",
  benefits: [
    { title: "Mood Boost", description: "Supports mental wellbeing.", icon: "mood" },
    { title: "Heart Health", description: "Gentle cardiovascular support.", icon: "heart" },
  ],
  doctorNote: {
    name: "Dr. Emily Stone",
    title: "MD",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfrZBrZrQTGudbw1s_of5w9QgtbfhVa0ch1VL4VIAO65-myLuTa3F16Ce0vL_XXy6A0gD2V_fpoQ_WUj7eplobZIqm1RlcM3MDWhGk24B1DUs2cNWszJYs1wu7biRz7y4hV179Cr1xgEG6A5_wnnt_VlNAw-Qdz8C6zwpXS62pTpLjzIjMPeT-UESnVHia4nrGSTx8FVHjk8yRc9eouNMFbjkJQZ_tO8CbjMn0C_tUR_GRV2JLf0IL04B9bept6zWEk4hC9_8Omg",
    quote:
      "Gentle movement and mindful breathing can support recovery and daily function. Listen to your body and modify as needed.",
    tags: ["#Wellness", "#MindBody"],
  },
  nextInSeries: [],
  relatedPremium: [
    {
      title: "Advanced Flow",
      author: "With Master Yogi",
      duration: "0h 45m",
      thumbnailUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBlFHh_JSg3Vjc5E5l5sSInL4cUdUs1gJzRJpZH3JKHQ7UtrPgU7ydROC3iGrF6v2lp-KxtSI9HnDhliPs62-Gg9B3KXnFPeSslV_bywxZRGpDVjOn0P4NPodHNrpMTDvRt-5HO-Jfk_Wtesh36xPiv9bppAHdzyEdawHUWAOaDxet5krBytlazt_T5-16Hl2S4K9p6H1k-DqF8Gk5PyZ-_AHpeRhE81BvfyaSTmCmtQHYN4YbZvd3g0CK0yRDIUgSfjgiN4SVCBA",
    },
    {
      title: "Core Strength",
      author: "Dr. Sarah Jen",
      duration: "0h 30m",
      thumbnailUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAoZXF9e0FPC5dn97ykRKDBGXMHUF7ZkEpx3lBS7YPcQ9HbntYtXIIuXki1VqYAcC2cbOYIfiu39CK5rdKDLcJ1UCLKg4oju8jcxtNNAGUmoxjyLOQ_DNNt5HShvdhSeUdpEi4RPR_Je1HGaKPoaCFYgY8ouU3HFFlTFBPwpUzk4ltRlsCWPnnuX5Bp_kW8q9FASijJKQs8QjWN_bAUNYV_AzcZ54HoWdQqH4hjm2EcVo4qMDGS5BnFLIacljpoMJpifdCc96QQwg",
    },
    {
      title: "Deep Sleep",
      author: "Restorative Yoga",
      duration: "0h 90m",
      thumbnailUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDNDju-IUSBSY6qsz4C7LKFFzcWWsS53lSjnoHbHHooZ-myId6vuK02r3T6a8tqOxZLmdMX6hLx0OG3DWmszXHpAGZajObAO37KxefNpolwPVtEv-d4hNhsI-R3o0-XtHSgTS7uOi2WrhxdcAEZjnpLTzc1aeBl4_b-jp-pxjJlwy3emnxV-i8QKSn0wtBtFjGccib2lLOKDGyrU-VoZVfNJk6LqKI7cMlKSQ3xQEN6PExNT5Lpp8EVFSxuHhqDm0L6bXX7Ed7Pxg",
    },
  ],
};

const DETAILS_BY_SLUG: Record<string, FreeVideoDetails> = {
  "morning-sunshine-flow": MORNING_SUNSHINE_DETAILS,
};

/** Get extended details for a free video by slug. Returns default details when slug has no override. */
export function getFreeVideoDetailsBySlug(slug: string): FreeVideoDetails {
  return DETAILS_BY_SLUG[slug] ?? DEFAULT_DETAILS;
}
