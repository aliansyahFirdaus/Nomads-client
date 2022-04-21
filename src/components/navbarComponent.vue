<script>
import { mapActions, mapState } from "pinia";
import { login } from "../stores/login";
import { logout } from "../stores/logout";
import LoginPage from "../views/loginPage.vue";
import RegisterPage from "../views/registerPage.vue";
export default {
  data() {
    return {
      name: localStorage.firstName,
      token: localStorage.access_token,
    };
  },
  computed: {},
  methods: {
    ...mapActions(logout, ["logoutProcess"]),
  },
  componens: {},
  components: { LoginPage, RegisterPage },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg py-2 navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/logo/logo-bw.png" alt="" width="70" height="64" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Menu -->
        <ul class="navbar-nav ms-auto me-4 mb-lg-0">
          <li class="nav-item me-2">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home</router-link
            >
          </li>

          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/wishlist"
              >Wishlist</router-link
            >
          </li>

          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/booklist"
              >Booking</router-link
            >
          </li>
        </ul>

        <!-- Avatar -->
        <div
          class="col-1 bg-secondary d-flex justify-content-center align-items-center"
          style="
            width: 42px;
            height: 42px;
            border-radius: 50%;
            text-align: center;
          "
        >
          <p
            style="font-size: 23px; margin-top: 15px; color: azure"
            v-if="name"
          >
            {{ name[0] }}
          </p>
          <p v-else><i class="fa-solid fa-user pt-3 text-light"></i></p>
        </div>

        <!-- Greeting -->
        <div class="div ms-4" v-if="token">
          <div class="btn-group">
            <button class="btn text-light btn-sm" type="button">
              Hello! {{ name }}
            </button>
            <button
              type="button"
              class="btn btn-sm text-secondary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu py-2 px-3" @click="logoutProcess">
              <i
                class="fa-solid fa-power-off me-2"
                style="font-size: 14px; color: brown"
              ></i>
              Logout
            </ul>
          </div>
        </div>

        <!-- Login button -->
        <button
          class="btn btn-sm btn-success ms-4"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#login"
          v-else
        >
          <i class="fa-solid fa-right-to-bracket me-1"></i>
          Login/Register
        </button>
      </div>
    </div>
  </nav>

  <!-- Login -->
  <div class="modal" id="login" tabindex="-1" aria-hidden="true">
    <LoginPage />
  </div>

  <!-- Register -->
  <div class="modal fade" id="register" tabindex="-1" aria-hidden="true">
    <RegisterPage />
  </div>
</template>

<style scoped>
.btn {
  padding-left: 15px !important;
  padding-right: 15px !important;
}

.bg-dark {
  opacity: 0.9;
}

.nav-item {
  font-weight: 600;
}
</style>
