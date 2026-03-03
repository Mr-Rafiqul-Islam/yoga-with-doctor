import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@/services/authApi";
import { classApi } from "@/services/classApi";
import authReducer from "./authSlice";
import uiReducer from "./uiSlice";
import { authPersistMiddleware } from "./authPersistMiddleware";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [classApi.reducerPath]: classApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      classApi.middleware,
      authPersistMiddleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
