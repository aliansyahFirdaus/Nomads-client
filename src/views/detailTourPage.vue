<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { destinationById } from "../stores/detailDestination";
import { booking } from "../stores/booking";
import { weather } from "../stores/weather";
import NavbarComponent from "../components/navbarComponent.vue";
import WeatherCard from "../components/weatherCard.vue";

export default {
  data() {
    return {
      image: "",
    };
  },
  computed: {
    ...mapWritableState(booking, ["adult", "child", "infant", "price"]),
    ...mapState(destinationById, ["destination"]),
    ...mapState(weather, ["weatherRes"]),
    priceFormater() {
      let newPrice = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(this.destination.price);

      return newPrice;
    },
    dateFormater() {
      return this.destination.departure;
    },
    imageGenerator() {
      return (this.image = `https://source.unsplash.com/random/1920x500/?${this.destination.country}`);
    },
  },
  methods: {
    ...mapActions(booking, [
      "adultIncrements",
      "childIncrements",
      "infantIncrements",
      "adultDecrement",
      "childDecrement",
      "infantDecrement",
    ]),
    ...mapActions(destinationById, ["getDestinationById"]),
    ...mapActions(weather, ["getWeather"]),
    toBookingPage() {
      this.price = this.destination.price;
      this.$router.push({ name: "booking-page" });
    },
  },
  componens: {},
  created() {
    this.getDestinationById(this.$route.params.id);
    this.getWeather(this.$route.params.city);
  },
  components: { NavbarComponent, WeatherCard },
};
</script>

<template>
  <NavbarComponent />
  <div class="container-fluid p-0" style="position: relative">
    <div class="img-banner">
      <img :src="imageGenerator" style="object-fit: cover" />
    </div>
    <div
      class="container"
      style="position: absolute; top: 350px; right: 0; left: 0"
    >
      <div class="row">
        <!-- <h1> {{ destination }} </h1> -->
        <div class="col-9 text-start">
          <div class="row text-light" style="padding: 16px 0">
            <h1 style="font-size: 50px">{{ destination.city }}</h1>
            <h3 class="pt-2">{{ destination.day }}</h3>
          </div>
          <div class="row mt-5 icon-detail">
            <div class="col">
              <div class="row mt-4">
                <div class="col">
                  <h3>
                    <i class="fa-solid fa-circle-check me-2"></i> Free Booking
                  </h3>
                </div>
                <div class="col">
                  <h3>
                    <i class="fa-solid fa-circle-check me-2"></i>
                    {{ destination.include.split("-")[0] }}
                  </h3>
                </div>
                <div class="col">
                  <h3>
                    <i class="fa-solid fa-circle-check me-2"></i>
                    {{ destination.include.split("-")[1] }}
                  </h3>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col">
                  <h3>
                    <i class="fa-solid fa-circle-check me-2"></i> Free Dinner
                  </h3>
                </div>
                <div class="col">
                  <h3>
                    <i class="fa-solid fa-circle-check me-2"></i>
                    {{ destination.include.split("-")[2] }}
                  </h3>
                </div>
                <div class="col">
                  <h3>
                    <i class="fa-solid fa-circle-check me-2"></i>
                    {{ destination.include.split("-")[3] }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div
            class="row mt-5 menu-detail text-light"
            style="background-color: darkgray; font-weight: 800"
          >
            <div class="col text-center py-4">
              <a href="#detail" class="text-decoration-none text-light"
                ><h5>Detail</h5></a
              >
            </div>
            <div class="col text-center py-4">
              <a href="#map" class="text-decoration-none text-light"></a>
              <h5>Map</h5>
            </div>
            <div class="col text-center py-4">
              <a href="#photo" class="text-decoration-none text-light"></a>
              <h5>Photo</h5>
            </div>
            <div class="col text-center py-4">
              <a href="#weather" class="text-decoration-none text-light"></a>
              <h5>Weather</h5>
            </div>
          </div>
          <div id="map" class="row mt-5" style="width: 900px">
            <h1 class="mb-5">Tour Detail</h1>
            <p>
              {{ destination.overview }}
            </p>
          </div>
          <div id="map" class="row mt-5" style="width: 900px">
            <h1 class="mb-5">Map</h1>
            <p>
              {{ destination.overview }}
            </p>
          </div>
          <div id="photo" class="row mt-5" style="width: 900px">
            <h1 class="mb-5">Photo</h1>
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://source.unsplash.com/random/1750x600/?travel"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://source.unsplash.com/random/1750x600/?travel"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://source.unsplash.com/random/1750x600/?travel"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div id="wheater" class="row mt-5" style="width: 900px">
            <h1 class="mb-5">Weather</h1>
            <p>
              <WeatherCard :weather="weatherRes" />
            </p>
          </div>
        </div>

        <div class="col">
          <div class="row" style="background-color: #0278ae">
            <div
              class="col d-flex align-items-center"
              style="height: 150px; padding-left: 37px"
            >
              <h3 style="font-size: 35px; font-weight: 800; color: azure">
                {{ priceFormater }}
              </h3>
            </div>
          </div>

          <!-- Date -->
          <div class="row py-4 border">
            <div class="col-7">
              <div class="row ps-4">
                <h3 class="m-0" style="font-weight: 800">Date</h3>
                <p class="m-0">departure</p>
              </div>
            </div>
            <div class="col d-flex align-items-center justify-content-start">
              <h5>26/12/2019</h5>
            </div>
          </div>

          <!-- Adult -->
          <div class="row py-4 border">
            <div class="col-7">
              <div class="row ps-4">
                <h3 class="m-0" style="font-weight: 800">Adults</h3>
                <p class="m-0">Over 18 old</p>
              </div>
            </div>
            <div class="col d-flex align-items-center justify-content-start">
              <div class="row">
                <div class="col text-center">
                  <button
                    @click.prevent="adultDecrement"
                    :disabled="adult === 0"
                  >
                    -
                  </button>
                </div>
                <div class="col text-center">
                  <span> {{ adult }} </span>
                </div>
                <div class="col text-center">
                  <button @click.prevent="adultIncrements">+</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Child -->
          <div class="row py-4 border">
            <div class="col-7">
              <div class="row ps-4">
                <h3 class="m-0" style="font-weight: 800">Child</h3>
                <p class="m-0">Under 13 years old</p>
              </div>
            </div>
            <div class="col d-flex align-items-center justify-content-start">
              <div class="row">
                <div class="col text-center">
                  <button
                    @click.prevent="childDecrement"
                    :disabled="child === 0"
                  >
                    -
                  </button>
                </div>
                <div class="col text-center">
                  <span> {{ child }} </span>
                </div>
                <div class="col text-center">
                  <button @click.prevent="childIncrements">+</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Infant -->
          <div class="row py-4 border">
            <div class="col-7">
              <div class="row ps-4">
                <h3 class="m-0" style="font-weight: 800">Infant</h3>
                <p class="m-0">Under 3 years old</p>
              </div>
            </div>
            <div class="col d-flex align-items-center justify-content-start">
              <div class="row">
                <div class="col text-center">
                  <button
                    @click.prevent="infantDecrement"
                    :disabled="infant === 0"
                  >
                    -
                  </button>
                </div>
                <div class="col text-center">
                  <span> {{ infant }} </span>
                </div>
                <div class="col text-center">
                  <button @click.prevent="infantIncrements">+</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Book Now -->
          <div class="row border">
            <button
              class="py-3 border-0 btn-book"
              style="font-weight: 800"
              @click.prevent="toBookingPage"
            >
              Book Now
            </button>
          </div>

          <!-- Getting Help -->
          <div
            class="row border mt-5 p-4 text-light"
            style="background-color: #0278ae"
          >
            <h3 style="font-weight: 800; color: #fcd900">Get Any Question?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <div class="row my-2">
              <div class="col-2">
                <i class="fa-solid fa-envelope-open"></i>
              </div>
              <div class="col">
                <h5>Email</h5>
              </div>
            </div>
            <div class="row">
              <div class="col-2">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div class="col">
                <h5>Call Center</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-detail h3 {
  font-size: 25px;
}

.img-banner {
  background: linear-gradient(rgba(29, 37, 113, 0), rgb(0, 0, 0));
}

.img-banner img {
  opacity: 0.4;
}

.menu-detail h5 {
  cursor: pointer;
}

.btn-book:hover {
  background-color: rgb(222, 222, 222);
}
</style>
