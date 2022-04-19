<script>
export default {
  data() {
    return {
      name: "Zoma",
    };
  },
  computed: {},
  methods: {},
  componens: {},
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
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
        <ul class="navbar-nav py-2 ms-auto mb-2 me-3 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>

            <!-- Dropdown -->
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>

        <!-- Toogle Darkmode -->
        <!-- <div class="form-check form-switch mx-3">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div> -->

        <!-- Login button -->
        <button class="btn btn-sm btn-success mx-3"><i class="fa-solid fa-right-to-bracket me-1"></i> Login</button>

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
          <p style="font-size: 23px; margin-top: 15px; color: azure" v-if="name">
            {{ name[0] }}
          </p>
          <p v-else><i class="fa-solid fa-user pt-3 text-light"></i></p>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.btn {
  padding-left: 15px !important;
  padding-right: 15px !important;
}

.nav-item {
    margin: 0 15px;
}
</style>
