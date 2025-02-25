import { defineStore } from "pinia";
import { ref } from "vue";

export const loading = ref(false);
export const useAuthStore = defineStore("auth", () => {
  const userLoggedIn = ref<boolean>(false);
  const dialog = ref(false);

  const FETCH_LOGIN = async (user: object) => {
    loading.value = true;
    try {
      localStorage.setItem("token", "");
    } catch (error: any) {
      console.log(error);
    }
  };
  const logout = () => {
    localStorage.clear();
  };
  return { FETCH_LOGIN, userLoggedIn, logout, loading, dialog };
});
