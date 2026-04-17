import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import { getGlobalSearch } from "@/services/globalSearch";
import type { GlobalSearchData, GlobalSearchMeta } from "@/types/globalSearch";
import { ApiError } from "@/services/api";

export interface GlobalSearchState {
  query: string;
  isOpen: boolean;
  loading: boolean;
  error: string | null;
  results: GlobalSearchData | null;
  meta: GlobalSearchMeta | null;
}

const initialState: GlobalSearchState = {
  query: "",
  isOpen: false,
  loading: false,
  error: null,
  results: null,
  meta: null,
};

export const fetchGlobalSearch = createAsyncThunk<
  Awaited<ReturnType<typeof getGlobalSearch>>,
  { search: string; limitPerType?: number },
  { rejectValue: string }
>(
  "globalSearch/fetch",
  async ({ search, limitPerType = 5 }, { rejectWithValue }) => {
    try {
      return await getGlobalSearch(search, limitPerType);
    } catch (e) {
      const message =
        e instanceof ApiError
          ? e.message
          : "Something went wrong. Please try again.";
      return rejectWithValue(message);
    }
  }
);

const globalSearchSlice = createSlice({
  name: "globalSearch",
  initialState,
  reducers: {
    setGlobalSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
      const trimmed = action.payload.trim();
      if (trimmed.length < 2) {
        state.results = null;
        state.meta = null;
        state.error = null;
        state.loading = false;
        if (trimmed.length === 0) {
          state.isOpen = false;
        }
      }
    },
    setGlobalSearchOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    clearGlobalSearch: (state) => {
      state.query = "";
      state.isOpen = false;
      state.loading = false;
      state.error = null;
      state.results = null;
      state.meta = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGlobalSearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGlobalSearch.fulfilled, (state, action) => {
        const requested = action.meta.arg.search.trim();
        if (requested !== state.query.trim()) {
          return;
        }
        state.loading = false;
        const payload = action.payload;
        if (payload.success && payload.data) {
          state.results = payload.data;
          state.meta = payload.meta ?? null;
          state.error = null;
        } else {
          state.error =
            payload.message || "Could not load search results.";
          state.results = null;
          state.meta = null;
        }
      })
      .addCase(fetchGlobalSearch.rejected, (state, action) => {
        const arg = action.meta.arg;
        if (arg && arg.search.trim() !== state.query.trim()) {
          return;
        }
        state.loading = false;
        state.error =
          typeof action.payload === "string"
            ? action.payload
            : "Search failed. Please try again.";
      });
  },
});

export const {
  setGlobalSearchQuery,
  setGlobalSearchOpen,
  clearGlobalSearch,
} = globalSearchSlice.actions;

export default globalSearchSlice.reducer;
