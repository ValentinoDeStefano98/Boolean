<template>
  <div>
    <div class="big-container mt-5">
      <div class="top-section">
        <h2> We are Proud</h2>
        <p class="text-secondary">Certificates courses are instructured by highly educated and qualified instructors who hold doctoral and master's level degrees.</p>
      </div>
      
      <div class="container numbers-container">
        <div class="row">
          <div class="col-3 border-end">
            <div class="big-font">
              2000
            </div>
            <div class="text-uppercase">
              students
            </div>
          </div>
          <div class="col-3 border-end">
            <div class="big-font">
              950
            </div>
            <div class="text-uppercase">
              courses
            </div>
          </div>
          <div class="col-3 border-end">
            <div class="big-font">
              1600
            </div>
            <div class="text-uppercase">
              hours video
            </div>
          </div>
          <div class="col-3">
            <div class="big-font">
              150
            </div>
            <div class="text-uppercase">
              countries reached
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div class="newsletter-container">
      <div class="container py-4">
        <div class="row">
          <div class="col-6 text-start">
            <h4 class="text-white">Subscribe our newsletter</h4>
            <p class="text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
          </div>
          <div class="col-6">
            <form>
              <h5 class="text-white text-uppercase">Your e-mail address</h5>
              <div class="mb-3 d-flex">  
                <input placeholder="Enter your E-mail" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <button class="btn btn-primary text-uppercase">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        
      </div>
  </div>
</template>

<script>
export default {
  name: 'StatsNewsletterComp',

}
</script>

<style scoped lang="scss">
.big-container{
  width: 100%;
  background-image: url("./../../assets/img/we_proud.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 60%;
  background-position-y: 100%;
  background-color: #F0F4F9;
}

.newsletter-container{
  background-color: #4bd7a8;
  width: 100%;
}

.numbers-container{
  width: 65%;
  margin: 0 auto;
  padding-bottom: 200px;
}

.top-section{
  padding: 50px 0;
}

.big-font{
  font-size: 3.5em;
}

.container{
  width: 65%;
  margin: 0 auto;
}
</style>