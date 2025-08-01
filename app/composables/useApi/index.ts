
import type { ApiOptions } from "./type";

export const useApi = <T>(
  url:string,
  options?: ApiOptions<T>
) => {

  return useFetch(url, {
    $fetch: useNuxtApp().$api,
    method: "get",
    ...options,
  });
};
