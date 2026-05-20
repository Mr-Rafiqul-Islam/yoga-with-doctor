import { createApi } from "@reduxjs/toolkit/query/react";
import { createReauthBaseQuery } from "@/slices/auth";

// =============================================================================
// TYPES - Lead API (client-facing, matches lead.controller.js)
// =============================================================================

export type LeadSource = "WEB" | "ANDROID" | "IOS";

export interface CreateLeadRequest {
  name: string;
  phone: string;
  email?: string;
  campaignItemId?: string;
  source?: LeadSource;
}

export interface LeadRecord {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  source: string;
  status: string;
  campaignItemId: string | null;
  managedByAdminId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateLeadResponse {
  success: boolean;
  message: string;
  data: {
    lead: LeadRecord;
    campaignItem?: unknown | null;
  };
}

// =============================================================================
// REDUX API SLICE - Lead
// =============================================================================

export const leadApi = createApi({
  reducerPath: "leadApi",
  baseQuery: createReauthBaseQuery((headers) => {
    headers.set("Content-Type", "application/json");
  }),
  endpoints: (builder) => ({
    /**
     * POST /api/v1/client/campaigns/leads
     * Collect a lead. campaignItemId is optional.
     */
    createLead: builder.mutation<CreateLeadResponse, CreateLeadRequest>({
      query: (body) => ({
        url: "/api/v1/client/campaigns/leads",
        method: "POST",
        body: {
          ...body,
          source: body.source ?? "WEB",
        },
      }),
    }),
  }),
});

export const { useCreateLeadMutation } = leadApi;
