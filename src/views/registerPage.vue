<script>
import { mapActions, mapWritableState } from "pinia";
import { register } from "../stores/register";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapWritableState(register, [
      "firstName",
      "lastName",
      "phoneNumber",
      "passwordRegister",
      "emailRegister",
    ]),
  },
  methods: {
    ...mapActions(register, ["registerProcess"]),
  },
  componens: {},
};
</script>

<template>
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-body p-0">
        <div class="row">
          <div class="col d-flex align-items-center justify-content-center">
            <form style="width: 400px">
              <!-- Headline -->
              <h1 class="mb-5 text-center" style="font-weight: 800">
                Register
              </h1>

              <!-- Firstname Lastname -->
              <div class="row">
                <div class="col">
                  <div class="mb-4">
                    <label for="firstName" class="form-label">First Name</label>
                    <input
                      required
                      type="text"
                      class="form-control"
                      id="firstName"
                      v-model="firstName"
                    />
                  </div>
                </div>
                <div class="col">
                  <div class="mb-4">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input
                      required
                      type="text"
                      class="form-control"
                      id="lastName"
                      v-model="lastName"
                    />
                  </div>
                </div>
              </div>

              <!-- Email -->
              <div class="mb-4">
                <label for="emailRegister" class="form-label"
                  >Email address</label
                >
                <input
                  required
                  type="email"
                  class="form-control"
                  id="emailRegister"
                  v-model="emailRegister"
                />
              </div>

              <!-- Password -->
              <div class="mb-4">
                <label for="passwordRegister" class="form-label"
                  >Password</label
                >
                <input
                  required
                  type="password"
                  class="form-control"
                  id="passwordRegister"
                  v-model="passwordRegister"
                />
              </div>

              <!-- Phone Number -->
              <div class="mb-4">
                <label for="phoneNumber" class="form-label">Phone Number</label>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="phone">+62</span>
                  <input
                    required
                    type="text"
                    class="form-control"
                    placeholder="6289666934400"
                    aria-label="phoneNumber"
                    aria-describedby="phone"
                    v-model="phoneNumber"
                  />
                </div>
              </div>

              <!-- Botton Submit -->
              <div class="row px-2" style="margin-top: 30px">
                <button
                  type="submit"
                  class="btn btn-primary"
                  @click.prevent="registerProcess"
                >
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
</template>

<style></style>
