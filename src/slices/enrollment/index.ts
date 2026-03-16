import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  enrollmentApi,
  type EnrollmentEntitySummary,
  type EnrollmentRecord,
  type EnrollmentItemType,
} from "./api";

export interface EnrollmentState {
  /**
   * The last successful enrollment record created for the user.
   */
  lastEnrollment: EnrollmentRecord | null;
  /**
   * The last item we attempted to enroll into (whether or not access was granted).
   */
  lastItem: EnrollmentEntitySummary | null;
  /**
   * Whether an enrollment mutation is currently in flight.
   */
  isEnrolling: boolean;
  /**
   * Optional hint about the last enrollment type (video/class/challenge/course).
   */
  lastType?: EnrollmentItemType;
}

const initialState: EnrollmentState = {
  lastEnrollment: null,
  lastItem: null,
  isEnrolling: false,
  lastType: undefined,
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    /**
     * Manually set the last enrollment context (useful for navigation flows).
     */
    setEnrollmentContext(
      state,
      action: PayloadAction<{
        enrollment?: EnrollmentRecord | null;
        item?: EnrollmentEntitySummary | null;
        type?: EnrollmentItemType;
      }>
    ) {
      const { enrollment, item, type } = action.payload;
      if (enrollment !== undefined) {
        state.lastEnrollment = enrollment ?? null;
      }
      if (item !== undefined) {
        state.lastItem = item ?? null;
      }
      if (type !== undefined) {
        state.lastType = type;
      }
    },
    /**
     * Clear cached enrollment context.
     */
    clearEnrollmentContext(state) {
      state.lastEnrollment = null;
      state.lastItem = null;
      state.isEnrolling = false;
      state.lastType = undefined;
    },
  },
  extraReducers: (builder) => {
    // Track addEnrollmentByItemId lifecycle
    builder.addMatcher(
      enrollmentApi.endpoints.addEnrollmentByItemId.matchPending,
      (state) => {
        state.isEnrolling = true;
      }
    );

    builder.addMatcher(
      enrollmentApi.endpoints.addEnrollmentByItemId.matchFulfilled,
      (state, action) => {
        const { data } = action.payload;
        state.isEnrolling = false;
        if (data) {
          state.lastItem = data.item ?? null;
          state.lastEnrollment = data.enrollment ?? null;

          if (data.item?.type) {
            state.lastType = data.item.type as EnrollmentItemType;
          }
        }
      }
    );

    builder.addMatcher(
      enrollmentApi.endpoints.addEnrollmentByItemId.matchRejected,
      (state) => {
        state.isEnrolling = false;
      }
    );

    // Clear enrollments on auth/logout, mirroring entitlements slice behaviour.
    builder.addMatcher(
      (action) => action.type === "auth/logout",
      (state) => {
        state.lastEnrollment = null;
        state.lastItem = null;
        state.isEnrolling = false;
        state.lastType = undefined;
      }
    );
  },
});

export const { setEnrollmentContext, clearEnrollmentContext } =
  enrollmentSlice.actions;
export const enrollmentReducer = enrollmentSlice.reducer;

// Re-export API and hooks for convenience (similar to payment slice).
export {
  enrollmentApi,
  type EnrollmentEntitySummary,
  type EnrollmentRecord,
  type EnrollmentItemType,
} from "./api";
export {
  useGetMyEnrollmentsQuery,
  useLazyGetMyEnrollmentsQuery,
  useAddEnrollmentByItemIdMutation,
} from "./api";

