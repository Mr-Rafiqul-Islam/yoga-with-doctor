import { create } from "zustand";

/**
 * Global UI state only. Do not store server/fetched data here — use TanStack Query.
 */

export type ThemeMode = "light" | "dark" | "system";

type UIState = {
  // Mobile menu (header)
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;

  // Modal
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  setModalOpen: (open: boolean) => void;

  // Theme (future-ready: apply class to <html> in a client wrapper)
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
};

export const useUIStore = create<UIState>((set) => ({
  mobileMenuOpen: false,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  toggleMobileMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),

  modalOpen: false,
  openModal: () => set({ modalOpen: true }),
  closeModal: () => set({ modalOpen: false }),
  setModalOpen: (open) => set({ modalOpen: open }),

  theme: "system",
  setTheme: (theme) => set({ theme }),
}));
