import { configureStore } from "@reduxjs/toolkit";
import { classApi } from "@/services/classApi";
import uiReducer from "../slices/uiSlice";
import { videoApi } from "@/services/videoApi";
import { authApi, authReducer } from "../slices/auth";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [classApi.reducerPath]: classApi.reducer,
    [videoApi.reducerPath]: videoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      classApi.middleware,
      videoApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
