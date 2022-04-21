<script>
import BannerHero from "./bannerHero.vue";
export default {
  data() {
    return {
      banner: [
        {
          img: "https://source.unsplash.com/random/1750x600/?travel",
        },
        {
          img: "https://source.unsplash.com/random/1750x600/?traveling",
        },
        {
          img: "https://source.unsplash.com/random/1750x600/?tour",
        },
      ],
    };
  },
  components: { BannerHero },
};
</script>

<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <BannerHero
        v-for="(item, i) in banner"
        :class="i === 0 ? 'active' : ''"
        :img="item.img"
      />
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style></style>
