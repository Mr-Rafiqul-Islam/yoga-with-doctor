import { createApi } from "@reduxjs/toolkit/query/react";
import { createReauthBaseQuery } from "@/slices/auth";

// =============================================================================
// TYPES - Payment API (client-facing, matches PAYMENT_API.md)
// =============================================================================

export interface StartCheckoutRequest {
  productId: string;
  siteRef: string;
  meta: {
    platform: "WEB";
    clientType: "BROWSER";
    appId: "ywd-web";
    returnMode: "REDIRECT";
    deepLink: string | null;
    successUrl: string;
    failUrl: string;
    cancelUrl: string;
  };
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
  data: {
    success: boolean;
    data: {
      checkoutUrl: string;
      gatewayUrl: string;
      sessionKey: string;
    };
  };
}

// =============================================================================
// REDUX API SLICE - Payment
// =============================================================================

export const paymentApi = createApi({
  reducerPath: "paymentApi",
  baseQuery: createReauthBaseQuery((headers) => {
    headers.set("Content-Type", "application/json");
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
