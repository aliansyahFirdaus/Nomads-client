<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { booking } from "../stores/booking";
import NavbarComponent from "../components/navbarComponent.vue";
import { destinationById } from "../stores/detailDestination";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(destinationById, ["getDestinationById"]),
    ...mapActions(booking, ["createDestinationBooking"]),

    priceFormater(price) {
      let priceFormat = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(price);
      return priceFormat;
    },
  },
  computed: {
    ...mapWritableState(booking, [
      "paymentMethod",

      "price",
      "discount",
      "tax",

      "child",
      "adult",
      "infant",
      "firstName",
      "lastName",
      "phoneNumber",
      "email",
      "addressLine",
      "city",
      "zipCode",
      "specialRequirement",
    ]),
    ...mapState(destinationById, ["destination"]),
    ...mapState(booking, ["total", "discountCalculate", "personCalculate"])
  },
  components: { NavbarComponent },
  created() {
    this.getDestinationById(this.$route.params.id);
  },
};
</script>

<template>
  <NavbarComponent />

  <div class="container">
    <div class="row mt-5">
      <!-- Form Book -->
      <div class="col-8 pe-5">
        <h3 style="font-weight: 800">Booking Submitions</h3>
        <hr />
        <form class="mt-5">
          <div class="row">
            <div class="col">
              <!-- Firstname -->
              <div class="mb-5">
                <label for="firstName" class="form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder="Mark"
                  v-model="firstName"
                />
              </div>

              <!-- Email -->
              <div class="mb-5">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="markmanson@gmail.com"
                  v-model="email"
                />
              </div>

              <!-- Address line -->
              <div class="mb-5">
                <label for="adress-line" class="form-label">Address line</label>
                <input
                  type="text"
                  class="form-control"
                  id="adress-line"
                  placeholder="4919 Godfrey Road"
                  v-model="addressLine"
                />
              </div>
            </div>
            <div class="col">
              <!-- Lastname -->
              <div class="mb-5">
                <label for="lastname" class="form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastname"
                  placeholder="Manson"
                  v-model="lastName"
                />
              </div>

              <!-- Phone number -->
              <div class="mb-5">
                <label for="phoneNumber" class="form-label">Phone</label>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="phone">+62</span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="6289666934400"
                    aria-label="phoneNumber"
                    aria-describedby="phone"
                    v-model="phoneNumber"
                  />
                </div>
              </div>

              <div class="row mb-5">
                <!-- City -->
                <div class="col">
                  <label for="city" class="form-label">City</label>
                  <input
                    type="text"
                    class="form-control"
                    id="city"
                    placeholder="Jombang"
                    v-model="city"
                  />
                </div>

                <!-- Zip code -->
                <div class="col">
                  <div>
                    <label for="zip" class="form-label">Zip code</label>
                    <input
                      type="text"
                      class="form-control"
                      id="zip"
                      placeholder="16300"
                      v-model="zipCode"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Aditional Request</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Special Requirement"
                v-model="specialRequirement"
              ></textarea>
            </div>
          </div>

          <div class="row mt-5">
            <!-- Payment Methods -->
            <h3 style="font-weight: 800">Payment Methods</h3>

            <hr />

            <div class="row mt-4" style="margin-bottom: 60px">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Bank Transfer"
                  id="BankTransfer"
                  v-model="paymentMethod"
                />
                <label class="form-check-label" for="BankTransfer">
                  Bank Transfer
                  <!-- <img
                src="https://upload.wikimedia.org/wikipedia/id/thumb/e/e4/ATM_PRIMA.png/1200px-ATM_PRIMA.png"
                width="70"
                alt=""
              /> -->
                </label>
              </div>
            </div>
            <div class="row" style="margin-bottom: 60px">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Gopay"
                  id="Gopay"
                  v-model="paymentMethod"
                />
                <label class="form-check-label" for="Gopay">
                  Gopay
                  <!-- <img
                src="https://upload.wikimedia.org/wikipedia/id/thumb/e/e4/ATM_PRIMA.png/1200px-ATM_PRIMA.png"
                width="70"
                alt=""
              /> -->
                </label>
              </div>
            </div>
            <div class="row" style="margin-bottom: 60px">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Dana"
                  id="Dana"
                  v-model="paymentMethod"
                />
                <label class="form-check-label" for="Dana">
                  Bank Transfer
                  <!-- <img
                src="https://upload.wikimedia.org/wikipedia/id/thumb/e/e4/ATM_PRIMA.png/1200px-ATM_PRIMA.png"
                width="70"
                alt=""
              /> -->
                </label>
              </div>
            </div>
            <div class="row" style="margin-bottom: 50px">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  value="Indomart"
                  id="Indomart"
                  v-model="paymentMethod"
                />
                <label class="form-check-label" for="Indomart">
                  Bank Transfer
                  <!-- <img
                src="https://upload.wikimedia.org/wikipedia/id/thumb/e/e4/ATM_PRIMA.png/1200px-ATM_PRIMA.png"
                width="70"
                alt=""
              /> -->
                </label>
              </div>
            </div>

            <!-- Terms and Condition -->
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="tnc" />
              <label class="form-check-label" for="tnc">
                <p>
                  I have read and accept the <a href="#">Terms Condition</a> and
                  <a href="#"> Privacy Policy </a>
                </p>
              </label>
            </div>

            <!-- Submit Button -->
            <div class="col-4 mt-4 mb-5">
              <div class="row">
                <a
                  href="https://app.sandbox.midtrans.com/snap/snap.js"
                  class="btn btn-dark"
                  style="border-radius: 0 !important; font-weight: 800"
                  @click.prevent="createDestinationBooking"
                >
                  Submit
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>

      <!-- Your book Detail -->
      <div class="col">
        <h3 style="font-weight: 800">Your Booking</h3>
        <div class="row border mt-3 p-3">
          <div class="col p-4">
            <h5>Lorem ipsum dolor sit amet consectetur</h5>
            <p style="color: #92a9bd; font-size: 17px; margin-top: 15px">
              <i class="fa-solid fa-map-pin me-3"></i>{{ destination.city }},
              {{ destination.country }}
            </p>
          </div>
          <div class="col-4 d-flex align-items-center justify-content-center">
            <img src="https://dummyimage.com/100x100/000/fff" alt="" />
          </div>
        </div>
        <div class="row border p-3" style="border-top: 0 !important">
          <div class="col p-4">
            <p>Type tour : {{ destination.typeTour }}</p>
            <p>Departure : {{ destination.departure }}</p>
            <p>Duration : {{ destination.day }}</p>
            <div
              class="row py-2 px-4"
              style="background-color: #e6e6e6; margin-top: 30px"
            >
              <p style="font-weight: 800; margin-top: 10px" v-if="adult > 0">
                Number of Adult: {{ adult }}
              </p>
              <div v-if="child > 0">
                <hr />
                <p style="font-weight: 800; margin-top: 10px">
                  Number of Child: {{ child }}
                </p>
              </div>
              <div v-if="infant > 0">
                <hr />
                <p style="font-weight: 800; margin-top: 10px">
                  Number of Infant: {{ infant }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row border p-3" style="border-top: 0 !important">
          <div class="col p-4">
            <p>Adult price</p>
            <p>Discount</p>
            <p>Subtotal</p>
            <p>Tax</p>
            <h5 style="font-weight: 800">Pay Amount</h5>
          </div>
          <div class="col p-4 text-end">
            <p>{{ priceFormater(personCalculate) }}</p>
            <p>{{ discount }}%</p>
            <p>{{ priceFormater(discountCalculate) }}</p>
            <p>0%</p>
            <h5 style="font-weight: 800">
              {{ priceFormater(total) }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
