import { defineStore } from "pinia";
import router from "../router";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const login = defineStore({
  id: "login",
  state: () => ({
    email: "",
    password: "",
    isLogin: false
  }),
  actions: {
    async loginProcess() {
      console.log("hai");
      try {
        const response = await axios.post(`${BASE_URL}/user/login`, {
          email: this.email,
          password: this.password,
        });
        console.log(response);
        localStorage.access_token = response.data.access_token;
        localStorage.firstName = response.data.firstName;
        router.push({name: "home-page"});
      } catch (err) {
        console.log(err);
      }
    },
  },
});
