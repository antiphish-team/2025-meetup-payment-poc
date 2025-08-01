

export const useUserStore = defineStore("user", () => {
  // const user = shallowRef<GetUser | undefined>();

  // const init = async () => {
  //   if (user.value) return;
  //   try {
  //     const { data } = await useApi<GetUser>("/user");
  //     user.value = data.value;
  //   } catch {
  //     user.value = undefined;
  //   }
  // };

  // return { user, init };
});
