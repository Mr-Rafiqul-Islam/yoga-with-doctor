import { createApi } from "@reduxjs/toolkit/query/react";
import { createReauthBaseQuery } from "@/slices/auth";

// =============================================================================
// TYPES - Payment API (client-facing, matches PAYMENT_API.md)
// =============================================================================

/** Matches `PAYMENT_PROVIDERS` in ywd-core-api */
export type PaymentProvider = "SSL" | "BKASH";

export interface StartCheckoutRequest {
  productId: string;
  provider?: PaymentProvider;
  siteRef: string;
  meta: {
    userId?: string | null;
    platform: "WEB";
    clientType: "BROWSER";
    appId: "ywd-web";
    returnMode: "REDIRECT";
    deepLink: string | null;
    successUrl: string;
    failUrl: string;
    cancelUrl: string;
    /**
     * Some clients (guest/campaign) send these. Standard checkout does not require them.
     * Kept optional for compatibility across checkout flows.
     */
    userMode?: string;
  };
  userId?: string | null;
}

export interface StartCheckoutResponse {
  success: boolean;
  message: string;
  data: {
    purchaseId: string;
    productId: string;
  };
}

export interface StartCampaignCheckoutRequest {
  campaignItemId: string;
  selectedChildIds?: string[];
  provider?: PaymentProvider;
  projectKey?: string;
  siteRef?: string;
  meta: StartCheckoutRequest["meta"];
  /** Required by core API `startCampaignCheckout` controller. */
  userId: string | null;
}

export interface StartCampaignCheckoutResponse {
  success: boolean;
  message: string;
  data: {
    purchase: {
      id: string;
      productId: string;
      amount?: number;
      reusedCheckout?: boolean;
    };
  };
}

export interface InitializePaymentRequest {
  /** Required by core API initialize controller. */
  userId?: string | null;
  amount: number;
  currency: string;
  metaData: Record<string, unknown>;
  provider?: PaymentProvider;
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
  /** Required by core API payment attempt controller. */
  userId?: string | null;
  amount: number;
  currency: string;
  metaData: Record<string, unknown>;
  provider?: PaymentProvider;
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
     * POST /api/v1/client/campaigns/start-checkout
     * Campaign checkout - creates Purchase with PENDING status (requires auth + userId in body)
     */
    startCampaignCheckout: builder.mutation<
      StartCampaignCheckoutResponse,
      StartCampaignCheckoutRequest
    >({
      query: (body) => ({
        url: "/api/v1/client/campaigns/start-checkout",
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
  useStartCampaignCheckoutMutation,
  useInitializePaymentMutation,
  useStartPaymentAttemptMutation,
} = paymentApi;
