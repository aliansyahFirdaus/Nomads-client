import { defineStore } from "pinia";
import router from "../router";
import axios from "axios";
// import router from "vue-toast-notification";
// import "vue-toast-notification/dist/theme-sugar.css";

// const BASE_URL = "https://nomads-iproject-travel.herokuapp.com";
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
      console.log("hai");
      try {
        const response = await axios.post(`${BASE_URL}/user/login`, {
          email: this.email,
          password: this.password,
        });
        console.log(response);
        localStorage.access_token = response.data.access_token;
        localStorage.firstName = response.data.firstName;
        router.push({ name: "home-page" });
        toast.open("Howdy!");
      } catch (err) {
        console.log(err);
      }
    },
  },
});
