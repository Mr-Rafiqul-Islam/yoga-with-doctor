import { createApi } from "@reduxjs/toolkit/query/react";

import { createReauthBaseQuery } from "@/slices/auth";
import { getNotificationServiceOrigin } from "@/lib/notificationSocket";

function notificationApiOrigin(): string {
  return getNotificationServiceOrigin().replace(/\/+$/, "");
}

/** Optional; when set, sent as `projectKey` on all client-notification requests. */
export function getNotificationProjectKey(): string | undefined {
  const k = process.env.NEXT_PUBLIC_NOTIFICATION_PROJECT_KEY as string | undefined;
  return k?.trim() || undefined;
}

function clientNotificationsBase(): string {
  return `${notificationApiOrigin()}/api/v1/client/notifications`;
}

const notificationBaseQuery = createReauthBaseQuery((headers, api) => {
  const state = api.getState() as { auth?: { user?: { id: string } | null } };
  const userId = state.auth?.user?.id;
  if (userId) {
    headers.set("x-user-id", userId);
  }
});

// =============================================================================
// Types — ywd-notification-hub client-notifications API
// =============================================================================

export type UserNotificationStatus = "UNREAD" | "READ" | "ARCHIVED";

/** Inbox row from GET /api/v1/client/notifications (Prisma UserNotification JSON). */
export interface ClientNotification {
  id: string;
  userId: string;
  projectKey: string | null;
  sourceService: string | null;
  notificationJobId: string | null;
  event: string;
  channel: string;
  title: string | null;
  body: string;
  imageUrl: string | null;
  icon: string | null;
  actionUrl: string | null;
  actionType: string;
  entityType: string | null;
  entityId: string | null;
  payload: Record<string, unknown> | null;
  status: UserNotificationStatus;
  isSeen: boolean;
  seenAt: string | null;
  readAt: string | null;
  createdAt: string;
  updatedAt: string;
}

/** @deprecated Use ClientNotification — kept for gradual migration */
export type Notification = ClientNotification;

/** @deprecated Hub uses string `event`; kept as loose alias */
export type NotificationType = string;

export interface NotificationsListData {
  items: ClientNotification[];
  page: number;
  limit: number;
  total: number;
  unreadCount: number;
}

export interface NotificationsListResponse {
  success: boolean;
  message: string;
  data: NotificationsListData;
}

export interface UnreadCountResponse {
  success: boolean;
  message: string;
  data: {
    count: number;
  };
}

export interface MarkReadResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
    status: "READ";
    readAt: string;
  };
}

export interface MarkAllReadResponse {
  success: boolean;
  message: string;
  data: {
    updated: number;
  };
}

export interface ArchiveNotificationResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
    status: "ARCHIVED";
  };
}

function projectParams(projectKey?: string): { projectKey?: string } {
  const key = projectKey ?? getNotificationProjectKey();
  return key ? { projectKey: key } : {};
}

// =============================================================================
// API slice
// =============================================================================

export const notificationsApi = createApi({
  reducerPath: "notificationsApi",
  baseQuery: notificationBaseQuery,
  tagTypes: ["Notifications", "UnreadCount"],
  endpoints: (builder) => ({
    getNotifications: builder.infiniteQuery<
      NotificationsListResponse,
      { limit?: number; status?: "UNREAD" | "READ"; projectKey?: string } | void,
      number
    >({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
          const d = lastPage.data;
          if (!d) return undefined;
          const { page, limit, total } = d;
          if (
            typeof page !== "number" ||
            typeof limit !== "number" ||
            typeof total !== "number"
          ) {
            return undefined;
          }
          return page * limit < total ? page + 1 : undefined;
        },
      },
      query: ({ pageParam, queryArg }) => {
        const limit = queryArg?.limit ?? 20;
        const status = queryArg?.status;
        return {
          url: clientNotificationsBase(),
          params: {
            page: pageParam,
            limit,
            ...projectParams(queryArg?.projectKey),
            ...(status ? { status } : {}),
          },
        };
      },
      providesTags: (result) => {
        if (!result?.pages?.length) {
          return [{ type: "Notifications" as const, id: "LIST" }];
        }
        const items = result.pages.flatMap((p) => p.data?.items ?? []);
        return [
          ...items.map(({ id }) => ({
            type: "Notifications" as const,
            id,
          })),
          { type: "Notifications" as const, id: "LIST" },
        ];
      },
    }),

    getUnreadCount: builder.query<
      UnreadCountResponse,
      { projectKey?: string } | void
    >({
      query: (arg) => ({
        url: `${clientNotificationsBase()}/unread-count`,
        params: projectParams(arg?.projectKey),
      }),
      providesTags: ["UnreadCount"],
    }),

    markAsRead: builder.mutation<MarkReadResponse, { id: string; projectKey?: string }>({
      query: ({ id, projectKey }) => ({
        url: `${clientNotificationsBase()}/${id}/read`,
        method: "PATCH",
        params: projectParams(projectKey),
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Notifications", id },
        { type: "Notifications", id: "LIST" },
        "UnreadCount",
      ],
    }),

    markAllAsRead: builder.mutation<
      MarkAllReadResponse,
      { projectKey?: string } | void
    >({
      query: (arg) => ({
        url: `${clientNotificationsBase()}/mark-all-read`,
        method: "PATCH",
        params: projectParams(arg?.projectKey),
      }),
      invalidatesTags: [{ type: "Notifications", id: "LIST" }, "UnreadCount"],
    }),

    archiveNotification: builder.mutation<
      ArchiveNotificationResponse,
      { id: string; projectKey?: string }
    >({
      query: ({ id, projectKey }) => ({
        url: `${clientNotificationsBase()}/${id}/archive`,
        method: "PATCH",
        params: projectParams(projectKey),
      }),
      invalidatesTags: (result, error, { id }) => [
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
  useArchiveNotificationMutation,
} = notificationsApi;
