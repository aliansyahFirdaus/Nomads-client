<script></script>

<template>
  <div class="container bg-light">
    <div class="row filter-section">
      <div
        class="col btn filter-button me-4 d-flex align-items-center justify-content-center"
      >
        <h3>Explore Now</h3>
      </div>
      <div class="col filter-badge py-2 px-4 me-4">
        <div class="row">
          <div
            class="col-3 text-secondary d-flex align-items-center justify-content-center me-2 border"
            style="border-radius: 15px"
          >
            <i class="fa-solid fa-location-dot" style="font-size: 30px"></i>
          </div>
          <div class="col">
            <div class="row">
              <div class="dropdown">
                <h5 class="mt-0">Country</h5>

                <input
                  class="form-control search-country"
                  list="datalistOptions"
                  id="exampleDataList"
                  placeholder="Search"
                />

                <datalist id="datalistOptions">
                  <option value="San Francisco"></option>
                  <option value="New York"></option>
                  <option value="Seattle"></option>
                  <option value="Los Angeles"></option>
                  <option value="Chicago"></option>
                </datalist>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col filter-badge py-2 px-4 me-4">
        <div class="row">
          <div
            class="col-3 text-secondary d-flex align-items-center justify-content-center me-2 border"
            style="border-radius: 15px"
          >
            <i class="fa-solid fa-dollar-sign" style="font-size: 30px"></i>
          </div>
          <div class="col">
            <div class="row">
              <div class="dropdown">
                <h5 class="mt-0">Average Price</h5>

                <h3
                  class="mb-0 dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  200k - 300k
                </h3>

                <div class="dropdown-menu">
                  <input
                    type="range"
                    class="form-range dropdown-item"
                    min="0"
                    max="5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col filter-badge py-2 px-4">
        <div class="row">
          <div
            class="col-3 text-secondary d-flex align-items-center justify-content-center me-2 border"
            style="border-radius: 15px"
          >
            <i class="fa-solid fa-paper-plane" style="font-size: 30px"></i>
          </div>
          <div class="col">
            <div class="row">
              <h5 class="mt-0 text-secondary">Date</h5>
              <h3 class="mb-0">24 Jan 2021</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1400px;
}

.filter-section {
  padding: 30px;
}

.filter-button {
  border-radius: 15px;
  background-color: rgb(95, 95, 210);
}

.filter-button:hover {
  background-color: rgb(75, 75, 170);
}

.filter-button h3 {
  font-size: 20px;
  font-weight: 800;
  color: white;
}

.filter-badge h5 {
  font-size: 18px;
  font-weight: 400;
}

.filter-badge h3 {
  font-size: 23px;
  font-weight: 600;
  padding: 3px 0;
  color: rgb(0, 0, 0);
}

.form-control {
  width: 120%;
  font-weight: 600;
  background-color: rgba(218, 29, 29, 0);
  font-size: 23px;
  padding: 0 !important;
}

input::-webkit-calendar-picker-indicator {
  opacity: 0;
}

.dropdown-menu {
  padding-top: 10px;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
}

.search-country {
  border: 0;
  padding: 0;
}

.form-control:focus {
  box-shadow: none;
  background-color: rgba(240, 248, 255, 0);
}

.dropdown-toggle::after {
  content: none;
}
</style>
