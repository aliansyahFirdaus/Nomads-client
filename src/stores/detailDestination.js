import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = "https://nomads-iproject-travel.herokuapp.com";

export const destinationById = defineStore({
  id: "destinationById",
  state: () => ({
    destination: {},
  }),
  actions: {
    async getDestinationById(id) {
      try {
        const response = await axios.get(`${BASE_URL}/destination/${id}`, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.destination = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
