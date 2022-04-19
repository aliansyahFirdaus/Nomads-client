<script>
export default {
  props: {
    img: String,
  },
};
</script>

<template>
  <div class="carousel-item">
    <img :src="img" class="d-block w-100" />
  </div>
</template>

<style></style>
