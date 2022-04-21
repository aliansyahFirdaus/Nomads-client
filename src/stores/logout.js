import { defineStore } from "pinia";
import router from "../router";
import axios from "axios";

const BASE_URL = "https://nomads-iproject-travel.herokuapp.com";

export const logout = defineStore({
  id: "logout",
  actions: {
    logoutProcess() {
        console.log("logout");
      localStorage.clear();
    },
  },
});
