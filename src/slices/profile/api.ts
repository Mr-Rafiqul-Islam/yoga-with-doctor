import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "@/slices/auth";

// =============================================================================
// TYPES — client profile API (matches profile.controller.js)
// =============================================================================

/** Public profile shape returned by GET/PATCH /api/v1/client/profile */
export interface ProfileUser {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  profilePicture: string | null;
  address: string | null;
  city: string | null;
  PoliceStation: string | null;
  age: number | null;
  gender: string | null;
  goals: Record<string, unknown> | null;
  interests: Record<string, unknown> | null;
  intensity: Record<string, unknown> | null;
  username: string | null;
  bio: string | null;
  coverImage: string | null;
  coverImagePublicId: string | null;
  website: string | null;
  isVerified: boolean;
  followersCount: number;
  followingCount: number;
  postsCount: number;
  isActive: boolean;
  isPremium: boolean;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetProfileResponse {
  success: boolean;
  message: string;
  data: { user: ProfileUser };
}

export interface UpdateProfileRequest {
  name?: string;
  email?: string | null;
  /** When changing to a new number, backend requires `otp` after request-otp. */
  phone?: string | null;
  otp?: string;
  profilePicture?: string | null;
  profilePicturePublicId?: string | null;
  address?: string | null;
  city?: string | null;
  PoliceStation?: string | null;
  age?: number | string | null;
  gender?: "MALE" | "FEMALE" | null | "";
  goals?: Record<string, unknown> | null;
  interests?: Record<string, unknown> | null;
  intensity?: Record<string, unknown> | null;
  username?: string | null;
  bio?: string | null;
  coverImage?: string | null;
  coverImagePublicId?: string | null;
  website?: string | null;
}

export interface UpdateProfileResponse {
  success: boolean;
  message: string;
  data: { user: ProfileUser };
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmPassword?: string;
}

export interface ChangePasswordResponse {
  success: boolean;
  message: string;
}

export interface DeleteAccountRequest {
  password: string;
  /** Backend accepts `true` or the literal `"DELETE"`. */
  confirmDelete: true | "DELETE";
  hardDelete?: boolean;
}

export interface DeleteAccountResponse {
  success: boolean;
  message: string;
}

// =============================================================================
// REDUX API SLICE — Profile
// =============================================================================

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    /**
     * GET /api/v1/client/profile
     */
    getProfile: builder.query<GetProfileResponse, void>({
      query: () => ({
        url: "/api/v1/client/profile",
        method: "GET",
      }),
      providesTags: [{ type: "Profile", id: "ME" }],
    }),

    /**
     * PATCH /api/v1/client/profile
     */
    updateProfile: builder.mutation<UpdateProfileResponse, UpdateProfileRequest>({
      query: (body) => ({
        url: "/api/v1/client/profile",
        method: "PATCH",
        body,
      }),
      invalidatesTags: [{ type: "Profile", id: "ME" }],
    }),

    /**
     * POST /api/v1/client/profile/change-password
     */
    changePassword: builder.mutation<
      ChangePasswordResponse,
      ChangePasswordRequest
    >({
      query: (body) => ({
        url: "/api/v1/client/profile/change-password",
        method: "POST",
        body,
      }),
    }),

    /**
     * DELETE /api/v1/client/profile/account
     */
    deleteAccount: builder.mutation<DeleteAccountResponse, DeleteAccountRequest>({
      query: (body) => ({
        url: "/api/v1/client/profile/account",
        method: "DELETE",
        body,
      }),
      invalidatesTags: [{ type: "Profile", id: "ME" }],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useLazyGetProfileQuery,
  useUpdateProfileMutation,
  useChangePasswordMutation,
  useDeleteAccountMutation,
} = profileApi;
