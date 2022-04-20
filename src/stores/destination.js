import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const destination = defineStore({
  id: "destination",
  state: () => ({
    data: [],
  }),
  actions: {
    async getAllDestination() {
      try {
        const response = await axios.get(`${BASE_URL}/destination`, {
          headers: {
            access_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImVtYWlsIjoxMSwiaWF0IjoxNjUwMzg5OTgyfQ.I-wZu1mLskJ8myK7EMXSu3LklVp_Z4XVVUshMxXyN6k",
          },
        });
        this.data = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  getter: {

  },
});
