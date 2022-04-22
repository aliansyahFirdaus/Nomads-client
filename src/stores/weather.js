import { defineStore } from "pinia";
import axios from "axios";

const API = "0cc319ae9016d6e05353f0183e45ec24";

export const weather = defineStore({
  id: "weather",
  state: () => ({
    weatherRes: "",
  }),
  actions: {
    async getWeather(city) {
      console.log(city);
      try {
        const weather = await axios.get(
          `http://localhost:3000/weather/${city}&appid=${API}`
        );

        this.weatherRes = weather.data.weather[0].description;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
