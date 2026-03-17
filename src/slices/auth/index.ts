import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

// --- Inline token store (localStorage) - same API as mobile tokenStore ---
const ACCESS_TOKEN_KEY = "ywd-access-token";
const REFRESH_TOKEN_KEY = "ywd-refresh-token";

function canUseDOM(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function getToken(): string | null {
  if (!canUseDOM()) return null;
  return window.localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getRefreshToken(): string | null {
  if (!canUseDOM()) return null;
  return window.localStorage.getItem(REFRESH_TOKEN_KEY);
}

function saveToken(accessToken: string, refreshToken: string): void {
  if (!canUseDOM()) return;
  window.localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  window.localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
}

function removeToken(): void {
  if (!canUseDOM()) return;
  window.localStorage.removeItem(ACCESS_TOKEN_KEY);
  window.localStorage.removeItem(REFRESH_TOKEN_KEY);
}

// --- Base URL ---
const baseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.API_BASE_URL ?? "";

// Custom base query with token in header
const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = getToken();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  const isLogoutRequest =
    typeof args === "object" &&
    "url" in args &&
    typeof args.url === "string" &&
    args.url.includes("/logout");

  if (result.error && result.error.status === 401 && !isLogoutRequest) {
    const refreshToken = getRefreshToken();

    if (refreshToken) {
      const refreshResult = await baseQuery(
        {
          url: "/api/v1/client/refresh",
          method: "POST",
          body: { refreshToken },
        },
        api,
        extraOptions
      );

      if (refreshResult.data) {
        const refreshData = refreshResult.data as {
          success: boolean;
          data: { accessToken: string; refreshToken: string };
        };
        if (refreshData.success && refreshData.data) {
          saveToken(refreshData.data.accessToken, refreshData.data.refreshToken);
          result = await baseQuery(args, api, extraOptions);
        } else {
          removeToken();
          api.dispatch({ type: "auth/logout" });
        }
      } else {
        removeToken();
        api.dispatch({ type: "auth/logout" });
      }
    } else {
      removeToken();
      api.dispatch({ type: "auth/logout" });
    }
  }

  return result;
};

// --- Types ---
export interface User {
  id: string;
  name: string;
  phone: string;
  email?: string | null;
  isPremium: boolean;
  isActive: boolean;
  profilePicture?: string | null;
  createdAt: string;
  updatedAt: string;
  role: "USER" | "ADMIN";
  PoliceStation?: string | null;
  address?: string | null;
  age?: number | null;
  bio?: string | null;
  city?: string | null;
  coverImage?: string | null;
  coverImagePublicId?: string | null;
  gender?: string | null;
  goals?: string[] | string | null; 
  intensity?: string | null;
  interests?: string[] | string | null;
  username?: string | null;
  website?: string | null;
}

export interface LoginCredentials {
  phone: string;
  password: string;
  deviceId: string;
  platform: "web" | "android" | "ios";
}

export interface RegisterCredentials {
  name?: string;
  phone: string;
  password: string;
  deviceId: string;
  platform: "web" | "android" | "ios";
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: User;
}

export interface LoginSuccessResponse {
  success: boolean;
  message: string;
  data: {
    user: {
      id: string;
      phone: string;
      name: string;
      email: string | null;
      isPremium: boolean;
      isActive: boolean;
      profilePicture: string | null;
    };
    accessToken: string;
    refreshToken: string;
  };
}

export interface LoginOTPRequiredResponse {
  success: boolean;
  message: "OTP_REQUIRED";
  data: {
    phone: string;
  };
}

export type LoginResponse = LoginSuccessResponse | LoginOTPRequiredResponse;

export interface RegisterResponse {
  success: boolean;
  message: "OTP_SENT";
  data: {
    phone: string;
  };
}

export interface VerifyRegisterOTPResponse {
  success: boolean;
  message: string;
  data: {
    user: {
      id: string;
      phone: string;
      name: string;
    };
    accessToken: string;
    refreshToken: string;
  };
}

export interface VerifyRegisterOTPCredentials {
  phone: string;
  otp: string;
  deviceId: string;
  platform: "web" | "android" | "ios";
}

export interface VerifyLoginOTPCredentials {
  phone: string;
  otp: string;
  deviceId: string;
  platform: "web" | "android" | "ios";
}

export interface ForgotPasswordCredentials {
  phone: string;
}

export interface ResetPasswordCredentials {
  phone: string;
  otp: string;
  newPassword: string;
}

export interface RefreshTokenCredentials {
  refreshToken: string;
}

// --- Auth API ---
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginCredentials>({
      query: (credentials) => ({
        url: "/api/v1/client/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
      async onQueryStarted(_credentials, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (
            data.success &&
            data.message !== "OTP_REQUIRED" &&
            "accessToken" in data.data
          ) {
            saveToken(data.data.accessToken, data.data.refreshToken);
          }
        } catch {
          // Error handling in component
        }
      },
    }),
    register: builder.mutation<RegisterResponse, RegisterCredentials>({
      query: (credentials) => ({
        url: "/api/v1/client/register",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),
    verifyRegisterOTP: builder.mutation<
      VerifyRegisterOTPResponse,
      VerifyRegisterOTPCredentials
    >({
      query: (credentials) => ({
        url: "/api/v1/client/register/verify",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
      async onQueryStarted(_credentials, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.success && data.data.accessToken) {
            saveToken(data.data.accessToken, data.data.refreshToken);
          }
        } catch {
          // Error handling in component
        }
      },
    }),
    verifyLoginOTP: builder.mutation<
      VerifyRegisterOTPResponse,
      VerifyLoginOTPCredentials
    >({
      query: (credentials) => ({
        url: "/api/v1/client/login/verify",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
      async onQueryStarted(_credentials, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.success && data.data.accessToken) {
            saveToken(data.data.accessToken, data.data.refreshToken);
          }
        } catch {
          // Error handling in component
        }
      },
    }),
    forgotPassword: builder.mutation<
      { success: boolean; message: string; data?: { phone: string } },
      ForgotPasswordCredentials
    >({
      query: (credentials) => ({
        url: "/api/v1/client/forgot-password",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),
    resetPassword: builder.mutation<
      { success: boolean; message: string },
      ResetPasswordCredentials
    >({
      query: (credentials) => ({
        url: "/api/v1/client/reset-password",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),
    refreshToken: builder.mutation<
      { success: boolean; data: { accessToken: string; refreshToken: string } },
      RefreshTokenCredentials
    >({
      query: (credentials) => ({
        url: "/api/v1/client/refresh",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
      async onQueryStarted(_credentials, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data.success && data.data.accessToken) {
            saveToken(data.data.accessToken, data.data.refreshToken);
          }
        } catch {
          // Error handling in component
        }
      },
    }),
    logout: builder.mutation<{ success: boolean; message: string }, void>({
      query: () => ({
        url: "/api/v1/client/logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          removeToken();
          dispatch({ type: "auth/logout" });
        } catch {
          removeToken();
          dispatch({ type: "auth/logout" });
        }
      },
    }),
    getCurrentUser: builder.query<{ success: boolean; data: User }, void>({
      query: () => ({
        url: "/api/v1/client/me",
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),
  }),
});

// --- Auth slice (state) ---
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
      if (!action.payload) {
        state.user = null;
        state.isLoading = false;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        const response = action.payload;
        if (response.message === "OTP_REQUIRED") {
          state.isAuthenticated = false;
          state.isLoading = false;
        } else if (response.success && "accessToken" in response.data) {
          if (response.data.user) {
            state.user = {
              id: response.data.user.id,
              phone: response.data.user.phone,
              name: response.data.user.name,
              email: response.data.user.email ?? null,
              isPremium: response.data.user.isPremium,
              isActive: response.data.user.isActive,
              profilePicture: response.data.user.profilePicture ?? null,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            } as User;
          }
          state.isAuthenticated = true;
          state.isLoading = false;
        }
      }
    );
    builder.addMatcher(authApi.endpoints.login.matchRejected, (state) => {
      state.isLoading = false;
    });
    builder.addMatcher(
      authApi.endpoints.getCurrentUser.matchFulfilled,
      (state, action) => {
        state.user = action.payload.data;
        state.isAuthenticated = true;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.getCurrentUser.matchRejected,
      (state, action) => {
        const error = action.payload as FetchBaseQueryError | undefined;
        if (error?.status === 401 || error?.status === 403) {
          state.user = null;
          state.isAuthenticated = false;
        }
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.verifyRegisterOTP.matchFulfilled,
      (state, action) => {
        if (action.payload.success && action.payload.data.user) {
          state.user = {
            id: action.payload.data.user.id,
            phone: action.payload.data.user.phone,
            name: action.payload.data.user.name,
            email: null,
            isPremium: false,
            isActive: true,
            profilePicture: null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          } as User;
        }
        state.isAuthenticated = true;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.verifyRegisterOTP.matchRejected,
      (state) => {
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.verifyLoginOTP.matchFulfilled,
      (state, action) => {
        if (action.payload.success && action.payload.data.user) {
          state.user = {
            id: action.payload.data.user.id,
            phone: action.payload.data.user.phone,
            name: action.payload.data.user.name,
            email: null,
            isPremium: false,
            isActive: true,
            profilePicture: null,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          } as User;
        }
        state.isAuthenticated = true;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.verifyLoginOTP.matchRejected,
      (state) => {
        state.isLoading = false;
      }
    );
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    });
    builder.addMatcher(authApi.endpoints.logout.matchRejected, (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    });
  },
});

export const {
  setUser,
  setAuthenticated,
  setLoading,
  logout: logoutAction,
} = authSlice.actions;
export const authReducer = authSlice.reducer;

// --- Hooks ---
export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyRegisterOTPMutation,
  useVerifyLoginOTPMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useRefreshTokenMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
} = authApi;
