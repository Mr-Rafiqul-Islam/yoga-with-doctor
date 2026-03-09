import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/**
 * Global UI state only. Do not store server/fetched data here — use TanStack Query.
 */

export type ThemeMode = "light" | "dark" | "system";

interface UIState {
  mobileMenuOpen: boolean;
  modalOpen: boolean;
  theme: ThemeMode;
}

const initialState: UIState = {
  mobileMenuOpen: false,
  modalOpen: false,
  theme: "system",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileMenuOpen = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false;
    },
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.modalOpen = action.payload;
    },
    openModal: (state) => {
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    },
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.theme = action.payload;
    },
  },
});

export const {
  setMobileMenuOpen,
  toggleMobileMenu,
  closeMobileMenu,
  setModalOpen,
  openModal,
  closeModal,
  setTheme,
} = uiSlice.actions;

export default uiSlice.reducer;
