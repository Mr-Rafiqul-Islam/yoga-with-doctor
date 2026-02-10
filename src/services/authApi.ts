import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import {
  getToken,
  getRefreshToken,
  saveToken,
  removeToken,
} from "@/utils/tokenStore";

const baseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.API_BASE_URL ?? "";

const rawBaseQuery = fetchBaseQuery({
  baseUrl,
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
  let result = await rawBaseQuery(args, api, extraOptions);

  const isLogoutRequest =
    typeof args === "object" &&
    "url" in args &&
    typeof args.url === "string" &&
    args.url.includes("/logout");

  if (result.error && result.error.status === 401 && !isLogoutRequest) {
    const refreshToken = getRefreshToken();

    if (refreshToken) {
      const refreshResult = await rawBaseQuery(
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
          data?: { accessToken: string; refreshToken: string };
        };

        if (refreshData.success && refreshData.data) {
          saveToken(
            refreshData.data.accessToken,
            refreshData.data.refreshToken
          );
          result = await rawBaseQuery(args, api, extraOptions);
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
            saveToken(data.data.accessToken, data.data.refreshToken);
          }
        } catch {
          // handled in UI
        }
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useVerifyRegisterOTPMutation,
} = authApi;

