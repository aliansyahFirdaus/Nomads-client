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
        const geoCoding = await axios.get(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API}`
        );

        const lat = geoCoding.data[0].lat;
        const lon = geoCoding.data[0].lon;

        const weather = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}`
        );

        this.weatherRes = weather.data.weather[0].description;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
