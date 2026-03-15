import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "@/slices/auth";

const baseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.API_BASE_URL ?? "";

// =============================================================================
// TYPES - Payment API (client-facing, matches PAYMENT_API.md)
// =============================================================================

export interface StartCheckoutRequest {
  productId: string;
  provider?: string;
  siteRef?: string;
}

export interface StartCheckoutResponse {
  success: boolean;
  message: string;
  data: {
    purchaseId: string;
    productId: string;
  };
}

export interface InitializePaymentRequest {
  amount: number;
  currency: string;
  metaData: Record<string, unknown>;
  provider?: string;
  projectKey?: string;
  siteRef?: string;
}

export interface InitializePaymentResponse {
  success: boolean;
  message: string;
  data: unknown;
}

export interface StartPaymentAttemptRequest {
  transactionId: string;
  amount: number;
  currency: string;
  metaData: Record<string, unknown>;
  provider?: string;
  merchantInvoiceNumber?: string;
  siteRef?: string;
  product?: Record<string, unknown>;
}

export interface StartPaymentAttemptResponse {
  success: boolean;
  message: string;
  data: unknown;
}

// =============================================================================
// REDUX API SLICE - Payment
// =============================================================================

export const paymentApi = createApi({
  reducerPath: "paymentApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    /**
     * POST /api/v1/client/checkout/start
     * Start checkout - creates Purchase with PENDING status (requires auth)
     */
    startCheckout: builder.mutation<
      StartCheckoutResponse,
      StartCheckoutRequest
    >({
      query: (body) => ({
        url: "/api/v1/client/checkout/start",
        method: "POST",
        body,
      }),
    }),

    /**
     * POST /api/v1/client/payment/initialize
     * Initialize payment session with external provider (requires auth)
     */
    initializePayment: builder.mutation<
      InitializePaymentResponse,
      InitializePaymentRequest
    >({
      query: (body) => ({
        url: "/api/v1/client/payment/initialize",
        method: "POST",
        body,
      }),
    }),

    /**
     * POST /api/v1/client/payment/:transactionId/attempt
     * Start payment attempt for existing transaction (requires auth)
     */
    startPaymentAttempt: builder.mutation<
      StartPaymentAttemptResponse,
      StartPaymentAttemptRequest
    >({
      query: ({ transactionId, ...body }) => ({
        url: `/api/v1/client/payment/${transactionId}/attempt`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useStartCheckoutMutation,
  useInitializePaymentMutation,
  useStartPaymentAttemptMutation,
} = paymentApi;
