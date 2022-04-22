import { defineStore } from "pinia";
import router from "../router";
import axios from "axios";

// const BASE_URL = "https://nomads-iproject-travel.herokuapp.com";
const BASE_URL = "http://localhost:3000";

export const booking = defineStore({
  id: "booking",
  state: () => ({
    paymentMethod: "",

    price: 0,
    discount: 30,
    tax: 0,

    totalPayment: 0,
    child: 0,
    adult: 1,
    infant: 0,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    addressLine: "",
    city: "",
    zipCode: "",
    specialRequirement: "",
    destinationId: 0,

    bookingByNumber: {},
  }),

  getters: {},

  actions: {
    adultIncrements() {
      this.adult++;
    },
    childIncrements() {
      this.child++;
    },
    infantIncrements() {
      this.infant++;
    },
    adultDecrement() {
      this.adult--;
    },
    childDecrement() {
      this.child--;
    },
    infantDecrement() {
      this.infant--;
    },

    personCalculate(price) {
      let priceCal = 0;

      if (this.child > 0) {
        priceCal += (price * this.child) / 2;
      } else {
        price + 0;
      }

      if (this.infant > 0) {
        priceCal += (price * this.infant) / 3;
      } else {
        price + 0;
      }

      if (this.adult > 0) {
        priceCal += price * this.adult;
      } else {
        price + 0;
      }

      return (this.price = priceCal);
    },
    discountCalculate() {
      if (this.discount > 0) {
        let disc = this.discount / 100;
        let priceDisc = disc * this.price;
        return this.price - priceDisc;
      } else {
        return this.price;
      }
    },
    total() {
      if (this.tax > 0) {
        let tax = this.tax / 100;
        let priceDisc = tax * this.discountCalculate();
        return Math.floor(this.discountCalculate() - priceDisc);
      } else {
        return this.discountCalculate();
      }
    },

    async paymentProcess() {
      try {
        const paymentProcess = await axios.post(
          `${BASE_URL}/booking/checkout`,
          {
            bookNumber: "1124",
            firstName: this.firstName,
            lastName: this.lastName,
            phoneNumber: this.phoneNumber,
            email: this.email,
            addressLine: this.addressLine,
            city: this.city,
            zipCode: this.zipCode,
            payment: Math.round(this.total()),
          },
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );

        console.log(paymentProcess);

        await snap.pay(paymentProcess.data.token);

      } catch (err) {
        console.log(err);
      }
    },

    async createDestinationBooking() {
      try {
        const response = await axios.post(
          `${BASE_URL}/booking/`,
          {
            child: this.child,
            adult: this.adult,
            infant: this.infant,
            firstName: this.firstName,
            lastName: this.lastName,
            phoneNumber: this.phoneNumber,
            email: this.email,
            addressLine: this.addressLine,
            city: this.city,
            zipCode: this.zipCode,
            specialRequirement: this.specialRequirement,
            totalPayment: this.total(),
            discount: this.discount,
            destinationId: this.destinationId,
          },
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );

        // router.push({
        //   name: "booking-success-page",
        //   params: { name: `${response.data.data.numberBooking}` },
        // });
      } catch (err) {
        console.log(err);
      }
    },

    async getDestinationByNumber(number) {
      try {
        const response = await axios.get(`${BASE_URL}/booking/${number}`, {
          headers: { access_token: localStorage.access_token },
        });

        this.bookingByNumber = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
