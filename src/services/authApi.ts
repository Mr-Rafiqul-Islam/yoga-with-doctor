import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import {
  getToken,
  setAccessToken,
  clearAccessToken,
} from "@/utils/tokenStore";

const baseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.API_BASE_URL ?? "";

const rawBaseQuery = fetchBaseQuery({
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

/**
 * Refresh uses HttpOnly cookie (no body). Backend reads refresh token from cookie,
 * returns new accessToken in body. Frontend never sees or stores refresh token.
 */
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await rawBaseQuery(args, api, extraOptions);

  const isLogoutRequest =
    typeof args === "object" &&
    "url" in args &&
    typeof args.url === "string" &&
    args.url.includes("/logout");

  const isRefreshRequest =
    typeof args === "object" &&
    "url" in args &&
    typeof args.url === "string" &&
    args.url.includes("/refresh");

  if (result.error && result.error.status === 401 && !isLogoutRequest && !isRefreshRequest) {
    const refreshResult = await rawBaseQuery(
      {
        url: "/api/v1/client/refresh",
        method: "POST",
        body: {},
      },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      const refreshData = refreshResult.data as {
        success: boolean;
        data?: { accessToken: string };
      };

      if (refreshData.success && refreshData.data?.accessToken) {
        setAccessToken(refreshData.data.accessToken);
        result = await rawBaseQuery(args, api, extraOptions);
      } else {
        clearAccessToken();
        api.dispatch({ type: "auth/logout" });
      }
    } else {
      clearAccessToken();
      api.dispatch({ type: "auth/logout" });
    }
  }

  return result;
};

export interface LoginCredentials {
  phone: string;
  password: string;
  deviceId: string;
  platform: "web" | "android" | "ios";
}

export interface RegisterCredentials {
  name: string;
  phone: string;
  password: string;
  deviceId: string;
  platform: "web" | "android" | "ios";
}

export interface LoginSuccessData {
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
}

export interface LoginSuccessResponse {
  success: boolean;
  message: string;
  data: LoginSuccessData;
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

export interface VerifyRegisterOTPCredentials {
  phone: string;
  otp: string;
  deviceId: string;
  platform: "web" | "android" | "ios";
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

export interface VerifyLoginOTPCredentials {
  phone: string;
  otp: string;
  deviceId: string;
  platform: "web" | "android" | "ios";
}

export interface VerifyLoginOTPResponse {
  success: boolean;
  message: string;
  data: {
    user: {
      id: string;
      phone: string;
      name: string;
      email?: string | null;
      isPremium?: boolean;
      isActive?: boolean;
      profilePicture?: string | null;
    };
    accessToken: string;
    refreshToken: string;
  };
}

export interface CurrentUserResponse {
  success: boolean;
  data: {
    user: LoginSuccessData["user"];
  };
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
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
            setAccessToken(data.data.accessToken);
          }
        } catch {
          // handled in UI
        }
      },
    }),
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
            "data" in data &&
            "accessToken" in data.data &&
            data.data.accessToken
          ) {
            setAccessToken(data.data.accessToken);
          }
        } catch {
          // handled in UI
        }
      },
    }),
    verifyLoginOTP: builder.mutation<
      VerifyLoginOTPResponse,
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
            setAccessToken(data.data.accessToken);
          }
        } catch {
          // handled in UI
        }
      },
    }),
    logout: builder.mutation<{ success: boolean }, void>({
      query: () => ({
        url: "/api/v1/client/logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
        } finally {
          clearAccessToken();
          dispatch({ type: "auth/logout" });
        }
      },
    }),
    getCurrentUser: builder.query<CurrentUserResponse, void>({
      query: () => ({ url: "/api/v1/client/me" }),
      providesTags: ["Auth"],
    }),
    /** Restore session on app load: no auth header, refresh token sent via HttpOnly cookie. */
    refreshSession: builder.mutation<
      { success: boolean; data: { accessToken: string } },
      void
    >({
      query: () => ({
        url: "/api/v1/client/refresh",
        method: "POST",
        body: {},
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useVerifyRegisterOTPMutation,
  useLoginMutation,
  useVerifyLoginOTPMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
  useRefreshSessionMutation,
} = authApi;

