<script>
import { mapActions } from "pinia";
import { destinationById } from "../stores/detailDestination";

export default {
  data() {
    return {
      include: [],
    };
  },
  props: {
    data: Object,
  },
  computed: {
    includeSpliter() {
      return (this.include = this.data.include.split("-"));
    },
    priceFormater() {
      return (this.data.price = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(this.data.price));
    },
  },
  methods: {
    ...mapActions(destinationById, ["getDestinationById"]),
    getISOCountry(country) {
      const isoCountries = {
        AF: "Afghanistan",
        AX: "Aland Islands",
        AL: "Albania",
        DZ: "Algeria",
        AS: "American Samoa",
        AD: "Andorra",
        AO: "Angola",
        AI: "Anguilla",
        AQ: "Antarctica",
        AG: "Antigua And Barbuda",
        AR: "Argentina",
        AM: "Armenia",
        AW: "Aruba",
        AU: "Australia",
        AT: "Austria",
        AZ: "Azerbaijan",
        BS: "Bahamas",
        BH: "Bahrain",
        BD: "Bangladesh",
        BB: "Barbados",
        BY: "Belarus",
        BE: "Belgium",
        BZ: "Belize",
        BJ: "Benin",
        BM: "Bermuda",
        BT: "Bhutan",
        BO: "Bolivia",
        BA: "Bosnia And Herzegovina",
        BW: "Botswana",
        BV: "Bouvet Island",
        BR: "Brazil",
        IO: "British Indian Ocean Territory",
        BN: "Brunei Darussalam",
        BG: "Bulgaria",
        BF: "Burkina Faso",
        BI: "Burundi",
        KH: "Cambodia",
        CM: "Cameroon",
        CA: "Canada",
        CV: "Cape Verde",
        KY: "Cayman Islands",
        CF: "Central African Republic",
        TD: "Chad",
        CL: "Chile",
        CN: "China",
        CX: "Christmas Island",
        CC: "Cocos (Keeling) Islands",
        CO: "Colombia",
        KM: "Comoros",
        CG: "Congo",
        CD: "Congo, Democratic Republic",
        CK: "Cook Islands",
        CR: "Costa Rica",
        CI: "Cote D'Ivoire",
        HR: "Croatia",
        CU: "Cuba",
        CY: "Cyprus",
        CZ: "Czech Republic",
        DK: "Denmark",
        DJ: "Djibouti",
        DM: "Dominica",
        DO: "Dominican Republic",
        EC: "Ecuador",
        EG: "Egypt",
        SV: "El Salvador",
        GQ: "Equatorial Guinea",
        ER: "Eritrea",
        EE: "Estonia",
        ET: "Ethiopia",
        FK: "Falkland Islands (Malvinas)",
        FO: "Faroe Islands",
        FJ: "Fiji",
        FI: "Finland",
        FR: "France",
        GF: "French Guiana",
        PF: "French Polynesia",
        TF: "French Southern Territories",
        GA: "Gabon",
        GM: "Gambia",
        GE: "Georgia",
        DE: "Germany",
        GH: "Ghana",
        GI: "Gibraltar",
        GR: "Greece",
        GL: "Greenland",
        GD: "Grenada",
        GP: "Guadeloupe",
        GU: "Guam",
        GT: "Guatemala",
        GG: "Guernsey",
        GN: "Guinea",
        GW: "Guinea-Bissau",
        GY: "Guyana",
        HT: "Haiti",
        HM: "Heard Island & Mcdonald Islands",
        VA: "Holy See (Vatican City State)",
        HN: "Honduras",
        HK: "Hong Kong",
        HU: "Hungary",
        IS: "Iceland",
        IN: "India",
        ID: "Indonesia",
        IR: "Iran, Islamic Republic Of",
        IQ: "Iraq",
        IE: "Ireland",
        IM: "Isle Of Man",
        IL: "Israel",
        IT: "Italy",
        JM: "Jamaica",
        JP: "Japan",
        JE: "Jersey",
        JO: "Jordan",
        KZ: "Kazakhstan",
        KE: "Kenya",
        KI: "Kiribati",
        KR: "Korea",
        KW: "Kuwait",
        KG: "Kyrgyzstan",
        LA: "Lao People's Democratic Republic",
        LV: "Latvia",
        LB: "Lebanon",
        LS: "Lesotho",
        LR: "Liberia",
        LY: "Libyan Arab Jamahiriya",
        LI: "Liechtenstein",
        LT: "Lithuania",
        LU: "Luxembourg",
        MO: "Macao",
        MK: "Macedonia",
        MG: "Madagascar",
        MW: "Malawi",
        MY: "Malaysia",
        MV: "Maldives",
        ML: "Mali",
        MT: "Malta",
        MH: "Marshall Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MU: "Mauritius",
        YT: "Mayotte",
        MX: "Mexico",
        FM: "Micronesia, Federated States Of",
        MD: "Moldova",
        MC: "Monaco",
        MN: "Mongolia",
        ME: "Montenegro",
        MS: "Montserrat",
        MA: "Morocco",
        MZ: "Mozambique",
        MM: "Myanmar",
        NA: "Namibia",
        NR: "Nauru",
        NP: "Nepal",
        NL: "Netherlands",
        AN: "Netherlands Antilles",
        NC: "New Caledonia",
        NZ: "New Zealand",
        NI: "Nicaragua",
        NE: "Niger",
        NG: "Nigeria",
        NU: "Niue",
        NF: "Norfolk Island",
        MP: "Northern Mariana Islands",
        NO: "Norway",
        OM: "Oman",
        PK: "Pakistan",
        PW: "Palau",
        PS: "Palestinian Territory, Occupied",
        PA: "Panama",
        PG: "Papua New Guinea",
        PY: "Paraguay",
        PE: "Peru",
        PH: "Philippines",
        PN: "Pitcairn",
        PL: "Poland",
        PT: "Portugal",
        PR: "Puerto Rico",
        QA: "Qatar",
        RE: "Reunion",
        RO: "Romania",
        RU: "Russia",
        RW: "Rwanda",
        BL: "Saint Barthelemy",
        SH: "Saint Helena",
        KN: "Saint Kitts And Nevis",
        LC: "Saint Lucia",
        MF: "Saint Martin",
        PM: "Saint Pierre And Miquelon",
        VC: "Saint Vincent And Grenadines",
        WS: "Samoa",
        SM: "San Marino",
        ST: "Sao Tome And Principe",
        SA: "Saudi Arabia",
        SN: "Senegal",
        RS: "Serbia",
        SC: "Seychelles",
        SL: "Sierra Leone",
        SG: "Singapore",
        SK: "Slovakia",
        SI: "Slovenia",
        SB: "Solomon Islands",
        SO: "Somalia",
        ZA: "South Africa",
        GS: "South Georgia And Sandwich Isl.",
        ES: "Spain",
        LK: "Sri Lanka",
        SD: "Sudan",
        SR: "Suriname",
        SJ: "Svalbard And Jan Mayen",
        SZ: "Swaziland",
        SE: "Sweden",
        CH: "Switzerland",
        SY: "Syrian Arab Republic",
        TW: "Taiwan",
        TJ: "Tajikistan",
        TZ: "Tanzania",
        TH: "Thailand",
        TL: "Timor-Leste",
        TG: "Togo",
        TK: "Tokelau",
        TO: "Tonga",
        TT: "Trinidad And Tobago",
        TN: "Tunisia",
        TR: "Turkey",
        TM: "Turkmenistan",
        TC: "Turks And Caicos Islands",
        TV: "Tuvalu",
        UG: "Uganda",
        UA: "Ukraine",
        AE: "United Arab Emirates",
        GB: "United Kingdom",
        US: "United States",
        UM: "United States Outlying Islands",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VU: "Vanuatu",
        VE: "Venezuela",
        VN: "Viet Nam",
        VG: "Virgin Islands, British",
        VI: "Virgin Islands, U.S.",
        WF: "Wallis And Futuna",
        EH: "Western Sahara",
        YE: "Yemen",
        ZM: "Zambia",
        ZW: "Zimbabwe",
      };

      return Object.keys(isoCountries)
        .find((key) => isoCountries[key] === country)
        .toLowerCase();
    },
    flag(country) {
      return `https://flagcdn.com/w20/${this.getISOCountry(country)}.png`;
    },
    toDetailPage() {
      // this.getDestinationById(1)
      this.$router.push({ name: "detail-page", params: { id: this.data.id } });
    },
  },
};
</script>

<template>
  <div class="card m-2" style="width: 21rem; padding: 7px; border-radius: 9px">
    <img
      src="https://dummyimage.com/350x275/000/fff"
      class="card-img-top"
      style="border-radius: 30px"
    />

    <i class="fa-regular fa-heart" style="font-size: 25px"></i>

    <div class="card-body">
      <div class="card-title">
        <div class="row">
          <div class="col">
            <div class="row">
              <!-- <router-link
                class="text-decoration-none tour-name"
                :to="{ name: 'detail-page', params: { id: data.id } }"
              > -->
              <h4 style="font-weight: 800; cursor: pointer;" @click="toDetailPage">
                {{ data.city }}
              </h4>
              <!-- </router-link> -->
              <div class="col-2 me-1">
                <img :src="flag(data.country)" />
              </div>
              <div class="col">
                <p class="card-text">{{ data.country }}</p>
              </div>
            </div>
          </div>
          <div class="col text-end mt-2 me-2">
            <img src="../assets/airline/Garuda Indonesia.png" width="70" />
          </div>
        </div>
      </div>
      <!-- <div class="card-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nostrum.</p>
      </div> -->
    </div>

    <ul class="list-group list-group-flush">
      <div class="row m-0">
        <div class="col">
          <div class="row">
            <li
              class="list-group-item"
              v-for="(include, i) in includeSpliter.slice(0, 2)"
              :key="i"
            >
              <i
                class="fa-solid fa-circle-check"
                style="font-size: 15px; margin-right: 5px"
              ></i>
              {{ include }}
            </li>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <li
              class="list-group-item"
              v-for="(include, i) in includeSpliter.slice(2, 4)"
              :key="i"
            >
              <i
                class="fa-solid fa-circle-check"
                style="font-size: 15px; margin-right: 5px"
              ></i>
              {{ include }}
            </li>
          </div>
        </div>
      </div>
    </ul>

    <!-- <div class="card-body">
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div> -->

    <div class="card-footer border-0 mt-3 py-3">
      <div class="row d-flex align-items-center">
        <div class="col-5 d-flex justify-content-end">
          <button
            class="btn btn-success"
            style="padding: 7px 30px; font-weight: 800"
          >
            Book
          </button>
        </div>
        <div class="col text-center">
          <h5 class="m-0" style="font-size: 20px">{{ priceFormater }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-group,
.list-group-item {
  border: 0;
}

.card {
  border: 0;
  border-radius: 0;
}

.list-group {
  font-size: 15px;
}

.card-img-top {
  position: relative;
}

.btn {
  border-radius: 30px !important;
}

.tour-name {
  cursor: pointer;
  color: black !important;
}

.tour-name:hover {
  color: blueviolet !important;
}

.fa-heart {
  position: absolute;
  right: 25px;
  top: 25px;
  color: aliceblue;
  cursor: pointer;
}

.fa-heart:hover {
  color: rgb(216, 54, 54);
}

.card-footer {
  border-radius: 100px;
}
</style>
