<script></script>

<template>
  <div class="card m-2" style="width: 21rem; padding: 7px; border-radius: 9px">
    <img src="https://dummyimage.com/350x275/000/fff" class="card-img-top" style="border-radius: 30px;"/>

    <i class="fa-regular fa-heart" style="font-size: 25px;"></i>

    <div class="card-body">
      <div class="card-title">
        <div class="row">
          <div class="col">
            <div class="row">
              <h4 style="font-weight: 800">Cappadocia</h4>
              <div class="col-2 me-1">
                <img src="https://flagcdn.com/w20/tr.png" />
              </div>
              <div class="col"><p class="card-text">Turkey</p></div>
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
            <li class="list-group-item">
              <i
                class="fa-solid fa-circle-check"
                style="font-size: 15px; margin-right: 5px"
              ></i>
              An item
            </li>
            <li class="list-group-item">
              <i
                class="fa-solid fa-circle-check"
                style="font-size: 15px; margin-right: 5px"
              ></i>
              A second item
            </li>
          </div>
        </div>
        <div class="col">
          <div class="row">
            <li class="list-group-item">
              <i
                class="fa-solid fa-circle-check"
                style="font-size: 15px; margin-right: 5px"
              ></i>
              An item
            </li>
            <li class="list-group-item">
              <i
                class="fa-solid fa-circle-check"
                style="font-size: 15px; margin-right: 5px"
              ></i>
              A second item
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
          <h5 class="m-0" style="font-size: 20px">Rp. 3.000.000</h5>
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
