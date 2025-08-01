export default defineNuxtPlugin(() => {
  const fetch = $fetch.create({
    retryStatusCodes: [403],
    retry: 1,
    onRequest({ options }: { options: any }) {
      options.headers = {
        ...options.headers,
      };
    },
    onResponseError({ response, options }) {
      const error = createError({
        message: "Response error",
        cause: response,
        data: options,
      });
      console.error(error);
    },
  });

  return {
    provide: {
      api: fetch,
    },
  };
});
