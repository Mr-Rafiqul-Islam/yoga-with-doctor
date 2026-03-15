import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface PendingCheckoutState {
  purchaseId: string | null;
  productId: string | null;
  courseSlug: string | null;
}

const initialState: PendingCheckoutState = {
  purchaseId: null,
  productId: null,
  courseSlug: null,
};

const pendingCheckoutSlice = createSlice({
  name: "pendingCheckout",
  initialState,
  reducers: {
    setPendingCheckout: (
      state,
      action: PayloadAction<{
        purchaseId: string;
        productId: string;
        courseSlug: string;
      }>
    ) => {
      state.purchaseId = action.payload.purchaseId;
      state.productId = action.payload.productId;
      state.courseSlug = action.payload.courseSlug;
    },
    clearPendingCheckout: (state) => {
      state.purchaseId = null;
      state.productId = null;
      state.courseSlug = null;
    },
  },
});

export const { setPendingCheckout, clearPendingCheckout } =
  pendingCheckoutSlice.actions;
export const pendingCheckoutReducer = pendingCheckoutSlice.reducer;
