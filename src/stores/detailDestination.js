import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const destinationById = defineStore({
  id: "destinationById",
  state: () => ({
    destination: {},
  }),
  actions: {
    async getDestinationById(id) {
      console.log(id);
      try {
        const response = await axios.get(`${BASE_URL}/destination/${id}`, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(response.data);
        console.log("hai");
        this.destination = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
