import { getToken } from "@/slices/auth";
import type { GlobalSearchApiResponse } from "@/types/globalSearch";
import { api } from "./api";

export async function getGlobalSearch(
  search: string,
  limitPerType: number
): Promise<GlobalSearchApiResponse> {
  const token = getToken();
  return api.get<GlobalSearchApiResponse>("/api/v1/client/search", {
    params: { search, limitPerType },
    credentials: "include",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
}
