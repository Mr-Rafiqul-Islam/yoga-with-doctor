import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "../slices/uiSlice";
import { videoApi } from "@/slices/videos";
import { authApi, authReducer } from "../slices/auth";
import { classApi } from "@/slices/classes";
import { coursesApi } from "@/slices/courses";
import { paymentApi, paymentReducer } from "@/slices/payment";
import { pendingCheckoutReducer } from "@/slices/pendingCheckout";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: authReducer,
    payment: paymentReducer,
    pendingCheckout: pendingCheckoutReducer,
    [authApi.reducerPath]: authApi.reducer,
    [classApi.reducerPath]: classApi.reducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
    [videoApi.reducerPath]: videoApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      classApi.middleware,
      coursesApi.middleware,
      videoApi.middleware,
      paymentApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
