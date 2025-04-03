export const useCounterStore = defineStore(
  "counter",
  () => {
    const count = ref(1);
    const count1 = ref(1);

    return { count, count1 };
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.localStorage(), // 加了存到 localStorage，不加存到 cookie 里，存的都是 counter:{count: 103} 这种格式
      pick: ["count"], // 不加，默认是全部都存，加了只存 count
    },
  },
);
