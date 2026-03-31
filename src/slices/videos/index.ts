import { createReauthBaseQuery } from "@/slices/auth";
import { createApi } from "@reduxjs/toolkit/query/react";

// Define the base API for videos
export const videoApi = createApi({
  reducerPath: "videoApi",
  baseQuery: createReauthBaseQuery(),
  tagTypes: ["Video"],
  endpoints: (builder) => ({
    getVideoPlaybackToken: builder.query({
      query: (videoId: string) =>
        `/api/v1/client/videos/${videoId}/playback`,
      providesTags: (_result, _error, videoId) => [
        { type: "Video", id: videoId },
      ],
    }),
  }),
});

export const { useLazyGetVideoPlaybackTokenQuery } = videoApi;
