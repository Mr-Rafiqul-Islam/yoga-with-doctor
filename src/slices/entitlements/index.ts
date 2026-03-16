import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface EntitlementsState {
  unlockedCourseIds: string[];
}

const initialState: EntitlementsState = {
  unlockedCourseIds: [],
};

const entitlementsSlice = createSlice({
  name: "entitlements",
  initialState,
  reducers: {
    setUnlockedCourseIds: (state, action: PayloadAction<string[]>) => {
      state.unlockedCourseIds = action.payload;
    },
    clearUnlockedCourseIds: (state) => {
      state.unlockedCourseIds = [];
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type === "auth/logout",
      (state) => {
        state.unlockedCourseIds = [];
      }
    );
  },
});

export const { setUnlockedCourseIds, clearUnlockedCourseIds } =
  entitlementsSlice.actions;
export const entitlementsReducer = entitlementsSlice.reducer;

