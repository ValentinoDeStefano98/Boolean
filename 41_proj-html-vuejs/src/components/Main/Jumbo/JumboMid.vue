<template>
  <div class="container">
    <div class="row d-flex justify-content-between">
      <div class="col-4 text-start minifont background py-2">
        <div>
          <i class="fa-solid fa-earth-americas fs-2 py-3 text-primary"></i>
          <h6>Worldwide recognize</h6>
          <p>Our online course certificates can be used <br> around the world and also in most popular universities and companies.</p>
        </div>
        
      </div>
      <div class="col-4 text-start minifont background py-2">
        <i class="fs-2 my-3 fa-solid fa-tv text-primary"></i>
        <h6>Mostly Online Learning (sd)</h6>
        <p>Masterstudy online certificates can be <br> obtained in a range of specialized areas and typically take about a year to complete.</p>
      </div>
      <div class="col-4 text-start minifont background py-2">
        <i class="fa-solid fa-calendar-check fs-2 my-3 text-primary"></i>
        <h6>Graduate in as little as 1 Year</h6>
        <p>Online post-graduate certificates are a popular <br> way to develop your professional <br> qualifications of Masterstudy.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JumboMid',

}
</script>

<style scoped lang="scss">
.container{
  width: 65%;
  margin: 0 auto;
}

.minifont{
  font-size: 0.8em;
}

.background{
  background-color: #e4e8ed;
  transition: 0.2s;
}

.background:hover{
  background-color: #a1bae2;
}
</style>