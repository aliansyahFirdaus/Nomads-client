import { defineStore } from "pinia";

export const logout = defineStore({
  id: "logout",
  actions: {
    logoutProcess() {
        console.log("logout");
      localStorage.clear();
    },
  },
});
