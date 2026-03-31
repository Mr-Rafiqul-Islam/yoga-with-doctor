export interface ReviewUser {
  id: string;
  name: string;
  profilePicture: string | null;
}

export interface Review {
  id: string;
  rating: number;
  review: string | null;
  status: "PENDING" | "APPROVED" | "REJECTED";
  createdAt: string;
  updatedAt: string;
  user: ReviewUser;
}

export interface ReviewStats {
  avgRating: number | null;
  ratingCount: number;
}

export interface GetReviewsResponse {
  success: boolean;
  message: string;
  data: {
    reviews: Review[];
    courseStats?: ReviewStats;
    classStats?: ReviewStats;
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

export interface GetMyReviewResponse {
  success: boolean;
  message: string;
  data: { review: Review | null };
}

export interface UpsertReviewRequest {
  slug: string;
  rating: number;
  review?: string;
}

export interface UpsertReviewResponse {
  success: boolean;
  message: string;
  data: {
    review: Review;
    courseStats?: ReviewStats;
    classStats?: ReviewStats;
  };
}

export interface GetReviewsParams {
  slug: string;
  page?: number;
  limit?: number;
}
