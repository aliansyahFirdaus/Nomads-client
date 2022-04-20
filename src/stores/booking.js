import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const booking = defineStore({
  id: "booking",
  state: () => ({
    adult: 2,
    child: 0,
    infant: 0,
    discount: 30,
  }),
  actions: {
    adultIncrements() {
      console.log(this.adult);
      this.adult++;
    },
    childIncrements() {
      this.child++;
    },
    infantIncrements() {
      this.infant++;
    },
    adultDecrement() {
      console.log(this.adult);
      this.adult--;
    },
    childDecrement() {
      this.child--;
    },
    infantDecrement() {
      this.infant--;
    },
    async createDestinationBooking() {
      try {
        const response = axios.post(
          `${BASE_URL}/booking`,
          {
            adult: 0,
            child: 0,
          },
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
