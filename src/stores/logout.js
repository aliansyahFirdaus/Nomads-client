import { defineStore } from "pinia";
import router from "../router";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const logout = defineStore({
  id: "logout",
  actions: {
    logoutProcess() {
        console.log("logout");
      localStorage.clear();
    },
  },
});
