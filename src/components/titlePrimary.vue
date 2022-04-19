<script>
export default {
  props: {
    title: String,
  },
};
</script>

<template>
  <h1 class="mt-5 ms-4 text-center">{{ title }}</h1>
</template>

<style>
    h1 {
        font-weight: 600;
    }
</style>
