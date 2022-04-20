import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const login = defineStore({
  id: "login",
  state: () => ({
    email: "",
    password: "",
    isLogin: false,
  }),
  actions: {
    async loginProcess() {
      try {
        const response = await axios.post(`${BASE_URL}/user/login`, {
          email: this.email,
          password: this.password,
        });
        localStorage.access_token = response.data.access_token;
        this.isLogin = true;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
