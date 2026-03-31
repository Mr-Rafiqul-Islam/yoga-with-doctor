"use client";

import { Provider } from "react-redux";

import { AuthHydration } from "./AuthHydration";
import { SessionTokenSync } from "./SessionTokenSync";
import { store } from "./store";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthHydration />
      <SessionTokenSync />
      {children}
    </Provider>
  );
}
