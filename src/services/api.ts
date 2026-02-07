/**
 * Centralized API client.
 * Base URL from env; typed responses; no business logic.
 */

const getBaseUrl = (): string => {
  const url =
    process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.API_BASE_URL ?? "";
  if (!url.trim()) {
    throw new Error(
      "API base URL is not set. Set NEXT_PUBLIC_API_BASE_URL or API_BASE_URL."
    );
  }
  return url.replace(/\/$/, "");
};

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly statusText: string,
    public readonly body?: unknown
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export type RequestConfig = Omit<RequestInit, "body"> & {
  body?: RequestInit["body"] | object;
  params?: Record<string, string | number | boolean | undefined>;
};

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("content-type");
  const isJson =
    contentType?.includes("application/json") ?? false;

  let body: unknown;
  try {
    body = isJson ? await response.json() : await response.text();
  } catch {
    body = undefined;
  }

  if (!response.ok) {
    const message =
      (body && typeof body === "object" && "message" in body &&
        typeof (body as { message: unknown }).message === "string")
        ? (body as { message: string }).message
        : response.statusText || `Request failed with status ${response.status}`;
    throw new ApiError(
      message,
      response.status,
      response.statusText,
      body
    );
  }

  return body as T;
}

function buildUrl(path: string, params?: RequestConfig["params"]): string {
  const base = getBaseUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = new URL(normalizedPath, base);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        url.searchParams.set(key, String(value));
      }
    });
  }

  return url.toString();
}

function request<T>(
  path: string,
  init?: RequestConfig
): Promise<T> {
  const { params, body: rawBody, ...rest } = init ?? {};
  const url = buildUrl(path, params);

  const isPlainObject =
    rawBody !== undefined &&
    rawBody !== null &&
    typeof rawBody === "object" &&
    !(rawBody instanceof FormData) &&
    !(rawBody instanceof URLSearchParams) &&
    !(rawBody instanceof Blob) &&
    !(rawBody instanceof ArrayBuffer);

  const body = rawBody === undefined || rawBody === null
    ? undefined
    : isPlainObject
      ? JSON.stringify(rawBody)
      : (rawBody as BodyInit);

  const headers: Record<string, string> = {
    ...(init?.headers && typeof init.headers === "object" && !(init.headers instanceof Headers)
      ? (init.headers as Record<string, string>)
      : {}),
  };

  if (body !== undefined && typeof body === "string" && !headers["Content-Type"]) {
    headers["Content-Type"] = "application/json";
  }

  return fetch(url, {
    ...rest,
    headers,
    body,
  }).then(handleResponse<T>);
}

export const api = {
  get: <T>(path: string, config?: Omit<RequestConfig, "body" | "method">) =>
    request<T>(path, { ...config, method: "GET" }),

  post: <T>(path: string, config?: RequestConfig) =>
    request<T>(path, { ...config, method: "POST" }),

  put: <T>(path: string, config?: RequestConfig) =>
    request<T>(path, { ...config, method: "PUT" }),

  patch: <T>(path: string, config?: RequestConfig) =>
    request<T>(path, { ...config, method: "PATCH" }),

  delete: <T>(path: string, config?: Omit<RequestConfig, "body">) =>
    request<T>(path, { ...config, method: "DELETE" }),
};
