/**
 * Extended data for the free video details page: medical benefits, doctor's note,
 * next in series, related premium. Image URLs hotlinked from design/HTML source.
 */

import { ArticleAuthor } from "@/features/articles/data/dummyArticles";
import { ClassVideo } from "@/slices/classes";

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
  id: string;
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
  avgRating?: number | null;
  ratingCount?: number;
  author: ArticleAuthor;
  video: ClassVideo;
  nextInSeries?: NextInSeriesItem[];
  relatedPremium?: RelatedPremiumItem[];
}


