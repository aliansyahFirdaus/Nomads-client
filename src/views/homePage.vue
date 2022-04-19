<script>
import NavbarComponent from "../components/navbarComponent.vue";
import HeroComponent from "../components/hero/heroComponent.vue";
import FilterAdvance from "../components/filterAdvance.vue";
export default {
  data() {
    return {
    };
  },
  computed: {},
  methods: {},
  componens: {},
  components: { NavbarComponent, HeroComponent, FilterAdvance },
};
</script>

<template>
  <NavbarComponent class="fixed-top"/>
  <HeroComponent class="hero"/>
  <!-- <FilterAdvance class="filter"/> -->
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
</style>
