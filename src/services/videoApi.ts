import { getToken } from "@/utils/tokenStore";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.API_BASE_URL ?? "";

// Define the base API for videos
export const videoApi = createApi({
  reducerPath: "videoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Video"],
  endpoints: (builder) => ({
    getVideoPlaybackToken: builder.query({
      query: (id) =>
        `/api/v1/client/classes/videos/${id}/playback`,
      providesTags: (_result, _error, id) => [
        { type: "Video", id },
      ],
    }),
  }),
});

export const { useLazyGetVideoPlaybackTokenQuery } = videoApi;
