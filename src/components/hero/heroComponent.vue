<script>
import BannerHero from "./bannerHero.vue";
export default {
  data() {
    return {
      banner: [
        {
          img: "https://dummyimage.com/1750x600/000/fff",
        },
        {
          img: "https://dummyimage.com/1750x600/370c70/fff",
        },
        {
          img: "https://dummyimage.com/1750x600/6e0c0c/fff",
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
