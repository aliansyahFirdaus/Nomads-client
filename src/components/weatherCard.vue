<script>
export default {
  data() {
    return {
      img: `https://source.unsplash.com/random/130x130/?${this.weather}`,
    };
  },
  props: {
    weather: String,
  },
};
</script>

<template>
  <div class="card mb-3" style="max-width: 700px">
    <div class="row g-0">
      <div class="col-md-8">
        <div class="card-body">
          <h1 class="card-title"> <img src="http://openweathermap.org/img/wn/10d@2x.png" width="100" > {{ weather }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
