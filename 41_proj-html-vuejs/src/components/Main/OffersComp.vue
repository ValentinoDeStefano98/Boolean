<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-6 p-4 ps-0">
        <div class="container border">
          <div class="row p-5">
            <div class="col-4">
              <img class="poster-small" src="./../../assets/img/image_box_1-221x231.png" alt="">
            </div>
            <div class="col-8 text-start">
              <h3>Became an instructor</h3>
              <p>Teach what you love. Masterstudy gives you the tools to create a course.</p>
              <button class="btn btn-primary text-uppercase hover px-4">Start teaching</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 p-4 pe-0">
        <div class="container border">
          <div class="row p-5">
            <div class="col-4">
              <img class="poster-big" src="./../../assets/img/image_box_2-234x231.png" alt="">
            </div>
            <div class="col-8 text-start">
              <h3>Setup for business</h3>
              <p>Get unlimited acces to 2,500 of Udemy's top courses for your team.</p>
              <button class="btn btn-primary text-uppercase hover px-4">Doing business</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OffersComp',

}
</script>

<style scoped lang="scss">
.poster-small{
  max-width: 100%;
}

.poster-big{
  max-width: 106%;
}

.btn{
  border-radius: 30px;
}

.hover:hover{
  background-color: #4AD7A8;
}
</style>