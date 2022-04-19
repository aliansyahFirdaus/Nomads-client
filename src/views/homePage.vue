<script>
import NavbarComponent from "../components/navbarComponent.vue";
import HeroComponent from "../components/hero/heroComponent.vue";
import FilterAdvance from "../components/filterAdvance.vue";
import CardTravelHorizon from "../components/cardTravelHorizon.vue";
export default {
  data() {
    return {
      data: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
      length: 3,
      loading: false,
    };
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        if (this.length > this.data.length) return;
        this.length = this.length + 3;
        this.loading = false;
      }, 500);
    },
  },
  computed: {
    companiesLoaded() {
      return this.data.slice(0, this.length);
    },
  },
  componens: {},
  components: {
    NavbarComponent,
    HeroComponent,
    FilterAdvance,
    CardTravelHorizon,
  },
};
</script>

<template>
  <NavbarComponent class="fixed-top" />
  <HeroComponent class="hero" />
  <!-- <FilterAdvance class="filter"/> -->

  <div class="container">
    <div class="row">
      <div class="col">
        <div class="row list-prod d-flex justify-content-center">
          <CardTravelHorizon v-for="view in companiesLoaded" />
        </div>
      </div>
      <div class="text-center my-4">
        <button class="btn btn-dark px-5" v-if="loading">Please Wait</button>
        <button class="btn btn-dark px-5" v-else v-show="length !== data.length" @click.prevent="loadMore">
          Load More
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter {
  right: 0;
  left: 0;
  bottom: 230px;
  position: absolute;
  border-radius: 20px;
}

.hero {
  position: relative;
}

/* .list-prod {
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
} */
</style>
