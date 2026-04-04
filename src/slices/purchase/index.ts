import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQueryWithReauth } from "@/slices/auth";

/** Mirrors `PRODUCT_TYPES` in ywd-core-api `payments.constants.js` */
export type PurchaseProductType =
  | "COURSE_ONE_TIME"
  | "BUNDLE_ONE_TIME"
  | "BUNDLE_SUBSCRIPTION"
  | "PREMIUM_SUBSCRIPTION"
  | "LIVE_EVENT_TICKET";

/** Mirrors `PURCHASE_STATUS` in ywd-core-api */
export type PurchaseStatus =
  | "PENDING"
  | "PAID"
  | "FAILED"
  | "REFUNDED"
  | "CANCELED"
  | "ON_HOLD";

export interface PurchaseCourse {
  id: string;
  title: string;
  slug: string;
  bannerImage: string | null;
  isActive: boolean;
}

export interface PurchaseBundle {
  id: string;
  title: string;
  slug: string;
  isActive: boolean;
}

export interface PurchaseLiveEvent {
  id: string;
  title: string;
  startsAt: string;
  endsAt: string;
  status: string;
}

export interface PurchaseProduct {
  id: string;
  type: PurchaseProductType;
  title: string;
  description: string | null;
  price: number | null;
  currency: string | null;
  course: PurchaseCourse | null;
  bundle: PurchaseBundle | null;
  liveEvent: PurchaseLiveEvent | null;
}

export interface PurchaseEntitlement {
  id: string;
  startsAt: string | null;
  expiresAt: string | null;
}

export interface PurchaseRecord {
  id: string;
  displayId: string;
  transactionId: string | null;
  productId: string;
  provider: string;
  status: PurchaseStatus;
  amount: number;
  currency: string;
  providerPaymentId: string | null;
  providerTrxId: string | null;
  paidAt: string | null;
  createdAt: string;
  updatedAt: string;
  product: PurchaseProduct;
  entitlement: PurchaseEntitlement | null;
}

export interface PurchaseHistoryPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface GetPurchaseHistoryData {
  purchases: PurchaseRecord[];
  pagination: PurchaseHistoryPagination;
}

export interface GetPurchaseHistoryResponse {
  success: boolean;
  message?: string;
  data: GetPurchaseHistoryData;
}

export interface GetPurchaseHistoryParams {
  page?: number;
  limit?: number;
  search?: string;
  type?: PurchaseProductType | string;
  status?: PurchaseStatus | string;
}

export interface GetPurchaseSummaryData {
  totalSpent: number;
  currency: string;
  lastMonthSpent: number;
  previousMonthSpent: number;
  lastMonthChangePercent: number | null;
}

export interface GetPurchaseSummaryResponse {
  success: boolean;
  data: GetPurchaseSummaryData;
}

/** GET /api/v1/client/purchases/by-transaction/:transactionId */
export interface GetPurchaseByTransactionResponse {
  success: boolean;
  message?: string;
  data: PurchaseRecord;
}

function buildPurchasesQueryString(params: GetPurchaseHistoryParams | void): string {
  if (!params) return "";
  const sp = new URLSearchParams();
  if (params.page != null) sp.set("page", String(params.page));
  if (params.limit != null) sp.set("limit", String(params.limit));
  if (params.search?.trim()) sp.set("search", params.search.trim());
  if (params.type) sp.set("type", params.type);
  if (params.status) sp.set("status", params.status);
  const q = sp.toString();
  return q ? `?${q}` : "";
}

export const purchaseApi = createApi({
  reducerPath: "purchaseApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Purchase"],
  endpoints: (builder) => ({
    /**
     * GET /api/v1/client/purchases
     */
    getPurchaseHistory: builder.query<GetPurchaseHistoryResponse, GetPurchaseHistoryParams | void>({
      query: (params) => ({
        url: `/api/v1/client/purchases${buildPurchasesQueryString(params)}`,
        method: "GET",
      }),
      providesTags: (result) =>
        result?.data?.purchases?.length
          ? [
              { type: "Purchase" as const, id: "LIST" },
              ...result.data.purchases.map((p) => ({ type: "Purchase" as const, id: p.id })),
            ]
          : [{ type: "Purchase" as const, id: "LIST" }],
    }),

    /**
     * GET /api/v1/client/purchases/summary
     */
    getPurchaseSummary: builder.query<GetPurchaseSummaryResponse, void>({
      query: () => ({
        url: "/api/v1/client/purchases/summary",
        method: "GET",
      }),
      providesTags: [{ type: "Purchase" as const, id: "SUMMARY" }],
    }),

    /**
     * GET /api/v1/client/purchases/by-transaction/:transactionId
     */
    getPurchaseByTransaction: builder.query<GetPurchaseByTransactionResponse, string>({
      query: (transactionId) => ({
        url: `/api/v1/client/purchases/by-transaction/${encodeURIComponent(transactionId)}`,
        method: "GET",
      }),
      providesTags: (result) =>
        result?.data
          ? [{ type: "Purchase" as const, id: result.data.id }]
          : [{ type: "Purchase" as const, id: "LIST" }],
    }),
  }),
});

export const {
  useGetPurchaseHistoryQuery,
  useGetPurchaseSummaryQuery,
  useGetPurchaseByTransactionQuery,
  useLazyGetPurchaseHistoryQuery,
} = purchaseApi;
