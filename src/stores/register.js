import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = "https://nomads-iproject-travel.herokuapp.com";
// const BASE_URL = "http://localhost:3000";

export const register = defineStore({
  id: "register",
  state: () => ({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    passwordRegister: "",
    emailRegister: "",
  }),
  actions: {
    async registerProcess() {
      try {
        const response = await axios.post(`${BASE_URL}/user/register`, {
          firstName: this.firstName,
          lastName: this.lastName,
          phoneNumber: this.phoneNumber,
          password: this.passwordRegister,
          email: this.emailRegister,
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
});
