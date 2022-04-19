<script>
import NavbarComponent from "../components/navbarComponent.vue";
import HeroComponent from "../components/hero/heroComponent.vue";
import FilterAdvance from "../components/filterAdvance.vue";
import CardTravelHorizon from "../components/cardTravelHorizon.vue";
import TitlePrimary from "../components/titlePrimary.vue";
import SubHeading from "../components/subHeading.vue";
import LoginPage from "./loginPage.vue";
export default {
  data() {
    return {
      data: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
      length: 4,
      loading: false,
    };
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        if (this.length > this.data.length) return;
        this.length += this.length;
        this.loading = false;
      }, 500);
    },
  },
  computed: {
    companiesLoaded() {
      return this.data.slice(0, this.length);
    },
  },
  componens: {},
  components: {
    NavbarComponent,
    HeroComponent,
    FilterAdvance,
    CardTravelHorizon,
    TitlePrimary,
    SubHeading,
    LoginPage,
  },
};
</script>

<template>
  <NavbarComponent class="fixed-top" />
  <HeroComponent class="hero" />

  <!-- Main -->
  <div class="container-fluid product-list" style="width: 1450px">
    <FilterAdvance class="filter" />

    <!-- Value -->
    <div class="row px-4" style="margin-top: 130px">
      <div class="col-4 text-start">
        <h5 class="text-primary-color" style="font-size: 27px">
          What we serve
        </h5>
        <h1 class="my-3" style="font-size: 51px; font-weight: 800">
          Top Service <br />
          For You <span style="font-size: 30px">🔥</span>
        </h1>
        <p class="text-secondary" style="width: 250px">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
      </div>
      <div class="col d-flex align-items-center">
        <div class="row text-start">
          <div class="col value">
            <img
              src="../assets/Icon/earth.png"
              class="mb-3 ms-4"
              alt=""
              width="60"
              style="transform: rotate(20deg)"
            />
            <h3 style="font-weight: 800">Travelnya gratis</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              assumenda.
            </p>
          </div>
        </div>
      </div>
      <div class="col d-flex align-items-end">
        <div class="row text-start">
          <div class="col value">
            <img
              src="../assets/Icon/money.png"
              class="mb-3 ms-4"
              alt=""
              width="60"
              style="transform: rotate(10deg)"
            />
            <h3 style="font-weight: 800">Travelnya gratis</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              assumenda.
            </p>
          </div>
        </div>
      </div>
      <div class="col d-flex align-items-center">
        <div class="row text-start">
          <div class="col value">
            <img
              src="../assets/Icon/travel.png"
              class="mb-3 ms-4"
              alt=""
              width="60"
              style="transform: rotate(350deg)"
            />
            <h3 style="font-weight: 800">Travelnya gratis</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              assumenda.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Jualan 1 -->
    <div class="row px-4" style="margin-top: 130px">
      <!-- Card Jualan -->
      <div class="col">
        <div class="row d-flex align-items-center">
          <div class="card text-center" style="width: 18rem; border: 0">
            <img
              src="../assets/usa-new-york.jpeg"
              class="card-img-top img-jualan1 img-thumbnail shadow"
              style="border-radius: 40px"
            />
            <div class="card-body card-jualan">
              <h2 class="card-title" style="font-weight: 800">New York, USA</h2>
              <div
                class="row mt-3 bg-light py-2 icon"
                style="border-radius: 50px"
              >
                <div class="col text-end">
                  <i class="fa-solid fa-user-plus me-1"></i>
                  <span class="text-icon">20 visitor</span>
                </div>
                <div class="col text-start">
                  <i class="fa-solid fa-star me-1"></i>
                  <span class="text-icon">4.3 Rating</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card text-center" style="width: 20rem; border: 0">
            <img
              src="../assets/Korea.webp"
              class="card-img-top img-jualan2 img-thumbnail shadow"
              style="border-radius: 40px"
            />
            <div class="card-body card-jualan">
              <h2 class="card-title" style="font-weight: 800">Seoul, Korea</h2>
              <div
                class="row mt-3 bg-light py-2 icon"
                style="border-radius: 50px"
              >
                <div class="col text-end">
                  <i class="fa-solid fa-user-plus me-1"></i>
                  <span class="text-icon">20 visitor</span>
                </div>
                <div class="col text-start">
                  <i class="fa-solid fa-star me-1"></i>
                  <span class="text-icon">4.3 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-6">
        <div class="row">
          <h5 class="text-primary-color" style="font-size: 27px">
            Best recomended destination
          </h5>
          <h5></h5>
          <h1 class="my-4" style="font-size: 51px; font-weight: 800">
            This week's best tourist spot that is always frequented
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            doloribus fugit, ipsa, iure at, quae incidunt aliquid error facere
            repellendus id veritatis quidem
          </p>
          <div class="row mt-4">
            <div class="col">
              <h2>120+</h2>
              <p>Holiday package</p>
            </div>
            <div class="col">
              <h2>40+</h2>
              <p>Luxury Hotel</p>
            </div>
            <div class="col">
              <h2>20+</h2>
              <p>Satisfed Traveler</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Flight with -->
    <div class="row flight-with" style="margin-top: 130px">
      <div class="col d-flex align-items-center justify-content-center">
        <img src="../assets/airline/Airasia.png" width="130" />
      </div>
      <div class="col d-flex align-items-center justify-content-center">
        <img src="../assets/airline/Citilink (1).png" width="130" />
      </div>
      <div class="col d-flex align-items-center justify-content-center">
        <img src="../assets/airline/Etihad (1).png" width="130" />
      </div>
      <div class="col d-flex align-items-center justify-content-center">
        <img src="../assets/airline/Garuda Indonesia (1).png" width="130" />
      </div>
      <div class="col d-flex align-items-center justify-content-center">
        <img src="../assets/airline/Scoot (1).png" width="90" />
      </div>
      <div class="col d-flex align-items-center justify-content-center">
        <img src="../assets/airline/Singapore Airlines (1).png" width="130" />
      </div>
    </div>

    <!-- Product List -->
    <div class="row" style="margin-top: 100px">
      <TitlePrimary title="Recomendation" />
      <SubHeading text="Beberapa rekomendasi dari kami untuk kamu" />

      <!-- Card -->
      <div class="col">
        <div class="row list-prod d-flex justify-content-center">
          <CardTravelHorizon v-for="view in companiesLoaded" />
        </div>
      </div>

      <!-- Button Load more -->
      <div class="text-center my-5">
        <button class="btn btn-dark btn-lg px-5 loading" v-if="loading">
          Please Wait
        </button>
        <button
          class="btn btn-dark btn-lg px-5"
          v-else
          v-show="length <= data.length"
          @click.prevent="loadMore"
        >
          Load More
        </button>
      </div>
    </div>
  </div>

  <!-- How to Payment -->

  <!-- Login -->
  <div
    class="modal fade"
    id="login"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-body p-0">
          <div class="row">
            <div class="col d-flex align-items-center justify-content-center">
              <form style="width: 400px">
                <!-- Headline -->
                <h1 class="mb-5" style="font-weight: 800">Login</h1>

                <!-- Email -->
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Email address</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <!-- Password -->
                <div class="mb-4">
                  <label for="exampleInputPassword1" class="form-label"
                    >Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <!-- Button Submit -->
                <div class="row px-2" style="margin-top: 30px">
                  <button type="submit" class="btn btn-primary">Login</button>
                </div>

                <!-- Direct -->
                <div class="text-center mt-4">
                  <p>
                    You don't have an account?
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#register"
                      >Register!</a
                    >
                  </p>
                </div>
              </form>
            </div>
            <div class="col">
              <img src="https://dummyimage.com/600x500/000/fff" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Register -->
  <div
    class="modal fade"
    id="register"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-body p-0">
          <div class="row">
            <div class="col d-flex align-items-center justify-content-center">
              <form style="width: 400px">
                <!-- Headline -->
                <h1 class="mb-5 text-center" style="font-weight: 800">Register</h1>

                <!-- Firstname Lastname -->
                <div class="row">
                  <div class="col">
                    <div class="mb-4">
                      <label for="exampleInputEmail1" class="form-label"
                        >First Name</label
                      >
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="mb-4">
                      <label for="exampleInputEmail1" class="form-label"
                        >Last Name</label
                      >
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>
                </div>

                <!-- Email -->
                <div class="mb-4">
                  <label for="exampleInputEmail1" class="form-label"
                    >Email address</label
                  >
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <!-- Password -->
                <div class="mb-4">
                  <label for="exampleInputPassword1" class="form-label"
                    >Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <!-- Phone Number -->
                <div class="mb-4">
                  <label for="exampleInputPassword1" class="form-label"
                    >Phone Number</label
                  >
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">+62</span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>

                <!-- Remember Me -->
                <!-- <div class="mb-4 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1"
                    >Check me out</label
                  >
                </div> -->

                <!-- Botton Submit -->
                <div class="row px-2" style="margin-top: 30px">
                  <button type="submit" class="btn btn-primary">
                    Register
                  </button>
                </div>

                <!-- Direct -->
                <div class="text-center mt-4">
                  <p>
                    You have an account?
                    <a href="#" data-bs-toggle="modal" data-bs-target="#login"
                      >Login!</a
                    >
                  </p>
                </div>
              </form>
            </div>
            <div class="col">
              <img src="https://dummyimage.com/600x700/000/fff" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loading {
  cursor: wait;
}

.img-jualan1 {
  height: 350px;
  width: 300px;
  object-fit: cover;
}

.img-jualan2 {
  height: 400px;
  width: 300px;
  object-fit: cover;
}

.text-icon {
  font-weight: 600;
}

.filter {
  right: 0;
  left: 0;
  bottom: 240px;
  position: absolute;
  border-radius: 20px;
}

.hero {
  position: relative;
}

.product-list {
  margin-top: 140px;
}

.card-jualan .icon {
  font-size: 13px;
}
</style>
