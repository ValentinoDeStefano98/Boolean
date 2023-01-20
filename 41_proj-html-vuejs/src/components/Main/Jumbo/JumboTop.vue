<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-6 d-flex flex-column justify-content-center text-start">
        <h1>Start Investing in You</h1>
        <p>With over 1200 courses in 18 subjects, you're guaranteed to find something that's right for you.</p>
        <div>
          <button class="btn btn-primary text-uppercase p-2 px-4">Join for free</button>
        </div>
        
      </div>
      <div class="col-6 dad">
        <img class="base" src="./../../../assets/img/base.png" alt="">
        <div class="book1-son">
          <img class="book1-img" src="./../../../assets/img/book1.png" alt="">
        </div>
        <div class="book2-son">
          <img class="book2-img" src="./../../../assets/img/book2.png" alt="">
        </div>
        <div class="son3">
          <img class="son3-img" src="./../../../assets/img/bubblespeech.png" alt="">
        </div>
        <div class="son4">
          <img class="son4-img" src="./../../../assets/img/magnifier.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JumboTop',

}
</script>

<style scoped lang="scss">
.container{
  width: 65%;
  margin: 0 auto;
}

.base{
  max-width: 100%;
}

.btn{
  border-radius: 30px;
}

.dad{
  position: relative;
}

.book1-son{
  position: absolute;
  top: 20%;
  right: 5%;
}

.book2-son{
  position: absolute;
  top: 60%;
  right: 20%;
}

.son3{
  position: absolute;
  top: 12%;
  right: 8%;
}

.son4{
  position: absolute;
  top: 68%;
  right: 12%;
}

.son4-img{
  max-width: 70%;
}

.son3-img{
  max-width: 60%;
}

.book1-img{
  max-width: 80%;
}

.book2-img{
  max-width: 70%;
}
</style>