import { defineStore } from "pinia";
import { ref } from "vue";

export const useBasketStore = defineStore("basket", () => {
  const isBasket = ref(false);

  return { isBasket};
});
