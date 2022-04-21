<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { booking } from "../stores/booking";
import { destinationById } from "../stores/detailDestination";
import NavbarComponent from "../components/navbarComponent.vue";

export default {
  components: { NavbarComponent },
  computed: {
    ...mapState(booking, ["bookingByNumber"]),
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
    ...mapState(booking, ["total", "discountCalculate", "personCalculate"]),
  },
  methods: {
    ...mapActions(destinationById, ["getDestinationById"]),
    ...mapActions(booking, ["getDestinationByNumber"]),
    priceFormater(price) {
      let priceFormat = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(price);
      return priceFormat;
    },
  },
  created() {
    this.getDestinationByNumber(this.$route.params.name);
  },
};
</script>

<template>
  <NavbarComponent />
  <div class="container" style="margin-top: 180px">
    <!-- Message Notification -->
    <div class="row mt-5">
      <div class="col-1">
        <i
          class="fa-solid fa-circle-check"
          style="font-size: 80px; color: green"
        ></i>
      </div>
      <div class="col">
        <h3>
          <strong>{{ bookingByNumber.firstName }}</strong
          >, your order was submitted successfully!
        </h3>
        <p>
          Booking details has been sent to:
          <strong
            ><u>{{ bookingByNumber.email }}</u></strong
          >
        </p>
      </div>
      <div class="col-4" style="border-left: 4px solid blueviolet">
        <div class="row pt-2 ps-4">
          <p>
            <strong>Booking Number:</strong> {{ bookingByNumber.bookingNumber }}
          </p>
          <p><strong>Booking Date:</strong> {{ bookingByNumber.createdAt }}</p>
          <p>
            <strong>Payment Method:</strong> {{ bookingByNumber.paymentMethod }}
          </p>
          <p><strong>Status:</strong> {{ bookingByNumber.bookingStatus }}</p>
        </div>
      </div>
    </div>

    <!-- Table -->
    <div class="row" style="margin-top: 70px; margin-bottom: 100px">
      <div class="col-7 border" style="padding: 40px">
        <h2>Your information</h2>
        <table class="table mt-5">
          <tbody>
            <tr>
              <td class="py-4"><strong>First name</strong></td>
              <td class="py-4">{{ bookingByNumber.firstName }}</td>
            </tr>
            <tr>
              <td class="py-4"><strong>Last name</strong></td>
              <td class="py-4">{{ bookingByNumber.lastName }}</td>
            </tr>
            <tr>
              <td class="py-4"><strong>Email</strong></td>
              <td class="py-4">{{ bookingByNumber.email }}</td>
            </tr>
            <tr>
              <td class="py-4"><strong>Address Line</strong></td>
              <td class="py-4">{{ bookingByNumber.addressLine }}</td>
            </tr>
            <tr>
              <td class="py-4"><strong>City</strong></td>
              <td class="py-4">{{ bookingByNumber.city }}</td>
            </tr>
            <tr>
              <td class="py-4"><strong>Zip</strong></td>
              <td class="py-4">{{ bookingByNumber.zipCode }}</td>
            </tr>
            <tr>
              <td class="py-4"><strong>Special Requirement</strong></td>
              <td class="py-4">{{ bookingByNumber.specialRequirement }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- <div class="col border ms-4" style="padding: 40px">
        <h2>Your item</h2>
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
      </div> -->
    </div>
  </div>
</template>

<style scoped></style>
