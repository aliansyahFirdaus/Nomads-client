<script>
import { mapActions, mapState } from "pinia";
import { booking } from "../stores/booking";
import NavbarComponent from "../components/navbarComponent.vue";

export default {
  components: { NavbarComponent },
  computed: {
    ...mapState(booking, ["bookingByNumber"]),
  },
  methods: {
    ...mapActions(booking, ["getDestinationByNumber"]),
  },
  created() {
    this.getDestinationByNumber(this.$route.params.name);
  },
};
</script>

<template>
  <NavbarComponent />
  <div class="container">
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
          <strong>{{ bookingByNumber.email }}</strong>
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
    <div class="row mt-5">
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

      <div class="col border ms-4" style="padding: 40px">
        <h2>Your item</h2>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
