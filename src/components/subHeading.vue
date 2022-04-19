<script>
export default {
  props: {
    text: String,
  },
};
</script>

<template>
  <p class="mb-5 ms-4 text-secondary">{{ text }}</p>
</template>

<style scoped>
    p {
        font-size: 20px;
        font-weight: 400;
    }
</style>
