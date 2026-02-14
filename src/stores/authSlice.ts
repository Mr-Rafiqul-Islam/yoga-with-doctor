import { createSlice } from "@reduxjs/toolkit";
import type { LoginSuccessData } from "@/services/authApi";
import { authApi } from "@/services/authApi";

export type AuthUser = LoginSuccessData["user"];

export interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
};

function setUserFromData(
  state: AuthState,
  user: AuthUser | undefined | null
): void {
  if (user) {
    state.user = user;
    state.isAuthenticated = true;
  } else {
    state.user = null;
    state.isAuthenticated = false;
  }
  state.isLoading = false;
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: { payload: AuthUser | null }) {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setLoading(state, action: { payload: boolean }) {
      state.isLoading = action.payload;
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          if (payload.message === "OTP_REQUIRED") {
            state.isLoading = false;
            return;
          }
          if (
            payload.success &&
            "data" in payload &&
            "user" in payload.data &&
            payload.data.user
          ) {
            setUserFromData(state, payload.data.user as AuthUser);
          }
        }
      )
      .addMatcher(
        authApi.endpoints.verifyLoginOTP.matchFulfilled,
        (state, { payload }) => {
          if (payload.success && payload.data?.user) {
            setUserFromData(state, payload.data.user as AuthUser);
          }
        }
      )
      .addMatcher(
        authApi.endpoints.verifyRegisterOTP.matchFulfilled,
        (state, { payload }) => {
          if (payload.success && payload.data?.user) {
            setUserFromData(state, {
              id: payload.data.user.id,
              phone: payload.data.user.phone,
              name: payload.data.user.name,
              email: null,
              isPremium: false,
              isActive: true,
              profilePicture: null,
            });
          }
        }
      )
      .addMatcher(authApi.endpoints.getCurrentUser.matchFulfilled, (state, { payload }) => {
        if (payload.success && payload.data?.user) {
          setUserFromData(state, payload.data.user);
        }
      })
      .addMatcher(authApi.endpoints.getCurrentUser.matchRejected, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.isLoading = false;
      })
      .addMatcher(
        (action) => action.type === "auth/logout",
        (state) => {
          state.user = null;
          state.isAuthenticated = false;
          state.isLoading = false;
        }
      );
  },
});

export const { setUser, setLoading, logout: logoutAction } = authSlice.actions;
export default authSlice.reducer;
