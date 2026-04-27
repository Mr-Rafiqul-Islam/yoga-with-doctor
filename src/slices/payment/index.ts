import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  useStartCheckoutMutation,
  useStartCampaignCheckoutMutation,
  useInitializePaymentMutation,
  useStartPaymentAttemptMutation,
} from "./api";

export type PaymentStatus = "PENDING" | "SUCCESS" | "FAILED" | "CANCELLED";

export interface PaymentState {
  lastPurchaseId?: string;
  lastTransactionId?: string;
  lastStatus?: PaymentStatus;
}

const initialState: PaymentState = {};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPaymentContext(
      state,
      action: PayloadAction<{
        purchaseId?: string;
        transactionId?: string;
        status?: PaymentStatus;
      }>,
    ) {
      const { purchaseId, transactionId, status } = action.payload;
      if (purchaseId !== undefined) {
        state.lastPurchaseId = purchaseId;
      }
      if (transactionId !== undefined) {
        state.lastTransactionId = transactionId;
      }
      if (status !== undefined) {
        state.lastStatus = status;
      }
    },
    clearPaymentContext(state) {
      state.lastPurchaseId = undefined;
      state.lastTransactionId = undefined;
      state.lastStatus = undefined;
    },
  },
});

export const { setPaymentContext, clearPaymentContext } = paymentSlice.actions;
export const paymentReducer = paymentSlice.reducer;

// Re-export API and hooks
export { paymentApi } from "./api";
export type {
  PaymentProvider,
  StartCheckoutRequest,
  StartCheckoutResponse,
  StartCampaignCheckoutRequest,
  StartCampaignCheckoutResponse,
  InitializePaymentRequest,
  InitializePaymentResponse,
  StartPaymentAttemptRequest,
  StartPaymentAttemptResponse,
} from "./api";
export {
  useStartCheckoutMutation,
  useStartCampaignCheckoutMutation,
  useInitializePaymentMutation,
  useStartPaymentAttemptMutation,
};
