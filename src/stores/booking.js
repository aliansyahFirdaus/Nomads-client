import { defineStore } from "pinia";
import axios from "axios";

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

    bookingByNumber: {},
  }),

  getters: {
    personCalculate() {
      let priceCal = 0;

      if (this.child > 0) {
        priceCal += (this.price * this.child) / 2;
      } else {
        this.price + 0;
      }

      if (this.infant > 0) {
        priceCal += (this.price * this.infant) / 3;
      } else {
        this.price + 0;
      }

      if (this.adult > 0) {
        priceCal += this.price * this.adult;
      } else {
        this.price + 0;
      }

      console.log(this.price);

      return (this.price = priceCal);
    },

    discountCalculate() {
      if (this.discount > 0) {
        let disc = this.discount / 100;
        let priceDisc = disc * this.personCalculate;
        return this.personCalculate - priceDisc;
      } else {
        return this.personCalculate;
      }
    },

    total() {
      if (this.tax > 0) {
        let tax = this.tax / 100;
        let priceDisc = tax * this.discountCalculate;
        return this.discountCalculate - priceDisc;
      } else {
        return this.discountCalculate;
      }
    },
  },

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
    async createDestinationBooking() {
      try {
        const response = await axios.post(
          `${BASE_URL}/booking`,
          {
            paymentMethod: this.paymentMethod,
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
            totalPayment: this.total,
            discount: this.discount,
          },
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );

        console.log(response);

        this.routes.push({
          name: "booking-success-page",
          params: `${response.data.numberBooking}`,
        });
      } catch (err) {
        console.log(err);
      }
    },
    async getDestinationByNumber(number) {
      try {
        const response = await axios.get(`${BASE_URL}/booking/${number}`, {
          headers: { access_token: localStorage.access_token },
        });

        console.log(response);

        this.bookingByNumber = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
