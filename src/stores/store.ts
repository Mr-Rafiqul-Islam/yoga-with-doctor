import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "../slices/uiSlice";
import { videoApi } from "@/slices/videos";
import { authApi, authReducer } from "../slices/auth";
import { classApi } from "@/slices/classes";
import { coursesApi } from "@/slices/courses";
import { articlesApi } from "@/slices/articles";
import { paymentApi, paymentReducer } from "@/slices/payment";
import { pendingCheckoutReducer } from "@/slices/pendingCheckout";
import { entitlementsReducer } from "@/slices/entitlements";
import { enrollmentReducer, enrollmentApi } from "@/slices/enrollment";
import { profileApi } from "@/slices/profile";


export const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: authReducer,
    payment: paymentReducer,
    pendingCheckout: pendingCheckoutReducer,
    entitlements: entitlementsReducer,
    enrollment: enrollmentReducer,
    [authApi.reducerPath]: authApi.reducer,
    [classApi.reducerPath]: classApi.reducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
    [articlesApi.reducerPath]: articlesApi.reducer,
    [videoApi.reducerPath]: videoApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
    [enrollmentApi.reducerPath]: enrollmentApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      classApi.middleware,
      coursesApi.middleware,
      articlesApi.middleware,
      videoApi.middleware,
      paymentApi.middleware,
      enrollmentApi.middleware,
      profileApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
