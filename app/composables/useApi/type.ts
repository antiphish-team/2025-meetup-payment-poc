import type { UseFetchOptions } from "#app";



export type ApiOptions<T> = Omit<UseFetchOptions<T>, "$fetch" | "method">
export type UseApi<T> = {
  url: string
  options: ApiOptions<T>
}

