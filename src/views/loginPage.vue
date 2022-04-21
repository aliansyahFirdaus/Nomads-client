<script>
import { mapActions, mapWritableState } from "pinia";
import { login } from "../stores/login";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapWritableState(login, ["email", "password"]),
  },
  methods: {
    ...mapActions(login, ["loginProcess"]),
  },
  componens: {},
};
</script>

<template>
  <div class="modal-dialog modal-dialog-centered modal-xl" id="modal">
    <div class="modal-content">
      <div class="modal-body p-0">
        <div class="row">
          <div class="col d-flex align-items-center justify-content-center">
            <form style="width: 400px">
              <!-- Headline -->
              <h1 class="mb-5" style="font-weight: 800">Login</h1>

              <!-- Email -->
              <div class="mb-3">
                <label for="emailLogin" class="form-label">Email address</label>
                <input
                required
                  type="email"
                  class="form-control"
                  id="emailLogin"
                  v-model="email"
                />
              </div>

              <!-- Password -->
              <div class="mb-4">
                <label for="passwordLogin" class="form-label">Password</label>
                <input
                required
                  type="password"
                  class="form-control"
                  id="passwordLogin"
                  v-model="password"
                />
              </div>

              <!-- Button Submit -->
              <div class="row px-2" style="margin-top: 30px">
                <button
                  type="submit"
                  class="btn btn-primary"
                  @click.prevent="loginProcess"
                >
                  Login
                </button>
              </div>

              <!-- Direct -->
              <div class="text-center mt-4">
                <p>
                  You don't have an account?
                  <a href="#" data-bs-toggle="modal" data-bs-target="#register"
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
</template>

<style></style>
