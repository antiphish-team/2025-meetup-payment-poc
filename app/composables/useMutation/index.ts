import type { FetchError } from 'ofetch';

export const useMutation = <Response, Request, E = Error>(fn: (payload: Request) => Promise<Response>) => {
    const loading = ref(false);
    const error = ref<FetchError<E> | null>(null);
    const data = ref<Response | null>(null);

    const execute = async (payload: Request) => {
        loading.value = true;
        error.value = null;
        data.value = null;

        try {
            const res = await fn(payload);
            data.value = res;
        } catch (e) {
            error.value = e as FetchError<E>;
        } finally {
            loading.value = false;
        }
    };

    return {
        loading,
        error,
        data,
        execute,
    };
};