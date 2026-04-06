import { configureStore, createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";

import uiReducer from "../slices/uiSlice";
import { videoApi } from "@/slices/videos";
import { authApi, authReducer, logoutAction } from "../slices/auth";
import { classApi } from "@/slices/classes";
import { coursesApi } from "@/slices/courses";
import { articlesApi } from "@/slices/articles";
import { paymentApi, paymentReducer } from "@/slices/payment";
import { pendingCheckoutReducer } from "@/slices/pendingCheckout";
import { entitlementsReducer } from "@/slices/entitlements";
import { enrollmentReducer, enrollmentApi } from "@/slices/enrollment";
import { profileApi } from "@/slices/profile";
import { purchaseApi } from "@/slices/purchase";
import { courseDiscussionApi } from "@/slices/courseDiscussion";

export const authLogoutListener = createListenerMiddleware();
authLogoutListener.startListening({
  matcher: isAnyOf(logoutAction),
  effect: (_action, listenerApi) => {
    listenerApi.dispatch(authApi.util.resetApiState());
    listenerApi.dispatch(articlesApi.util.resetApiState());
    listenerApi.dispatch(coursesApi.util.resetApiState());
    listenerApi.dispatch(videoApi.util.resetApiState());
    listenerApi.dispatch(classApi.util.resetApiState());
    listenerApi.dispatch(paymentApi.util.resetApiState());
    listenerApi.dispatch(enrollmentApi.util.resetApiState());
    listenerApi.dispatch(profileApi.util.resetApiState());
    listenerApi.dispatch(purchaseApi.util.resetApiState());
    listenerApi.dispatch(courseDiscussionApi.util.resetApiState());
  },
});

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
    [purchaseApi.reducerPath]: purchaseApi.reducer,
    [courseDiscussionApi.reducerPath]: courseDiscussionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(authLogoutListener.middleware).concat(
      authApi.middleware,
      classApi.middleware,
      coursesApi.middleware,
      articlesApi.middleware,
      videoApi.middleware,
      paymentApi.middleware,
      enrollmentApi.middleware,
      profileApi.middleware,
      purchaseApi.middleware,
      courseDiscussionApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
