import { createApi } from "@reduxjs/toolkit/query/react";

import { createReauthBaseQuery } from "@/slices/auth";
import { getNotificationServiceOrigin } from "@/lib/notificationSocket";

function notificationApiOrigin(): string {
  return getNotificationServiceOrigin().replace(/\/+$/, "");
}

const notificationBaseQuery = createReauthBaseQuery((headers, api) => {
  const state = api.getState() as { auth?: { user?: { id: string } | null } };
  const userId = state.auth?.user?.id;
  if (userId) {
    headers.set("x-user-id", userId);
  }
});

// =============================================================================
// Types (aligned with mobile notifications slice / backend)
// =============================================================================

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  body: string;
  imageUrl: string | null;
  data: Record<string, unknown> | null;
  isRead: boolean;
  readAt: string | null;
  groupKey: string | null;
  createdAt: string;
}

export type NotificationType =
  | "MARKETING"
  | "SYSTEM"
  | "COURSE_PUBLISHED"
  | "BUNDLE_PUBLISHED"
  | "SERIES_PUBLISHED"
  | "FREE_CLASS_PUBLISHED"
  | "COURSE_COMMUNITY_POST"
  | "COURSE_COMMUNITY_REPLY"
  | "FEED_POST"
  | "FEED_POST_PUBLISHED"
  | "FEED_COMMENT"
  | "FEED_LIKE"
  | "COMMENT_REPLY"
  | "REACT"
  | "FOLLOW"
  | "MENTION"
  | "PURCHASE_PAID"
  | "SUBSCRIPTION_STATUS";

export interface NotificationsListResponse {
  success: boolean;
  message?: string;
  data: {
    notifications: Notification[];
  };
  meta: {
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

export interface UnreadCountResponse {
  success: boolean;
  message?: string;
  data: {
    unreadCount: number;
  };
}

// =============================================================================
// API slice (no device / push registration — web only)
// =============================================================================

export const notificationsApi = createApi({
  reducerPath: "notificationsApi",
  baseQuery: notificationBaseQuery,
  tagTypes: ["Notifications", "UnreadCount"],
  endpoints: (builder) => ({
    getNotifications: builder.infiniteQuery<
      NotificationsListResponse,
      { limit?: number; unreadOnly?: boolean } | void,
      number
    >({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
          const { page, totalPages } = lastPage.meta?.pagination ?? {};
          if (typeof page !== "number" || typeof totalPages !== "number") {
            return undefined;
          }
          return page < totalPages ? page + 1 : undefined;
        },
      },
      query: ({ pageParam, queryArg }) => {
        const limit = queryArg?.limit ?? 20;
        const unreadOnly = queryArg?.unreadOnly ?? false;
        return {
          url: `${notificationApiOrigin()}/api/v1/notifications`,
          params: { page: pageParam, limit, unreadOnly },
        };
      },
      providesTags: (result) => {
        if (!result?.pages?.length) {
          return [{ type: "Notifications" as const, id: "LIST" }];
        }
        const notifications = result.pages.flatMap(
          (p) => p.data?.notifications ?? []
        );
        return [
          ...notifications.map(({ id }) => ({
            type: "Notifications" as const,
            id,
          })),
          { type: "Notifications" as const, id: "LIST" },
        ];
      },
    }),

    getUnreadCount: builder.query<UnreadCountResponse, void>({
      query: () => `${notificationApiOrigin()}/api/v1/notifications/unread-count`,
      providesTags: ["UnreadCount"],
    }),

    markAsRead: builder.mutation<
      { success: boolean; message: string; data: { notification: Notification } },
      string
    >({
      query: (id) => ({
        url: `${notificationApiOrigin()}/api/v1/notifications/${id}/read`,
        method: "PATCH",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Notifications", id },
        { type: "Notifications", id: "LIST" },
        "UnreadCount",
      ],
    }),

    markAllAsRead: builder.mutation<
      { success: boolean; message: string; data: { updated: number } },
      void
    >({
      query: () => ({
        url: `${notificationApiOrigin()}/api/v1/notifications/read-all`,
        method: "PATCH",
      }),
      invalidatesTags: [{ type: "Notifications", id: "LIST" }, "UnreadCount"],
    }),

    deleteNotification: builder.mutation<
      { success: boolean; message: string },
      string
    >({
      query: (id) => ({
        url: `/api/v1/client/notifications/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [
        { type: "Notifications", id },
        { type: "Notifications", id: "LIST" },
        "UnreadCount",
      ],
    }),
  }),
});

export const {
  useGetNotificationsInfiniteQuery,
  useGetUnreadCountQuery,
  useMarkAsReadMutation,
  useMarkAllAsReadMutation,
  useDeleteNotificationMutation,
} = notificationsApi;
