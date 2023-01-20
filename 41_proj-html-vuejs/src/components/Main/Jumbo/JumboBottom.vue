<template>
  <div class="container py-5">
    <div class="row d-flex justify-content-between">
      <div class="col-8 p-0 zoom">
          <img class="poster" src="./../../../assets/img/cat_1-770x375.jpg" alt="">
        <div class="container p-0 m-0 w-100 py-2">
          <div class="row">
            <div class="col-6 text-start">
              <span class="fw-bold">Software Development</span>
            </div>
            <div class="col-6 text-end">
              <span class="size">5 Courses</span> 
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 d-flex flex-column justify-content-beetwen pe-0">
        <div class="zoom">
          <img class="poster" src="./../../../assets/img/cat_2-370x155.jpg" alt="">
          <div class="container p-0 m-0 w-100 pt-1 pb-4">
          <div class="row row-cols">
            <div class="col-6 text-start">
              <span class="fw-bold">Art</span>
            </div>
            <div class="col-6 text-end">
              <span class="size">8 Courses</span> 
            </div>
          </div>
        </div>
        </div> 
        
        <div class="zoom">
          <img class="poster" src="./../../../assets/img/cat_3-370x155.jpg" alt="">
          <div class="container p-0 m-0 w-100 pt-1">
          <div class="row row-cols mt-1">
            <div class="col-6 text-start">
              <span class="fw-bold">Material Design</span>
            </div>
            <div class="col-6 text-end">
              <span class="size">5 Courses</span> 
            </div>
          </div>
        </div>
        </div>       
      </div>
    </div>

    <div class="row">
      <div class="col-4 ps-0">
        <div class="zoom">
          <img class="poster" src="./../../../assets/img/cat_5-370x155.jpg" alt="">
          <div class="container p-0 m-0 w-100">
          <div class="row pt-1">
            <div class="col-6 text-start">
              <span class="fw-bold">Music</span>
            </div>
            <div class="col-6 text-end">
              <span class="size">5 Courses</span> 
            </div>
          </div>
        </div>
        </div>
        
      </div>   
      <div class="col-4 px-1">
        <div class="zoom">
          <img class="poster" src="./../../../assets/img/cat_4-370x155.jpg" alt="">
          <div class="container p-0 m-0 w-100">
          <div class="row pt-1">
            <div class="col-6 text-start">
              <span class="fw-bold">Exercise</span>
            </div>
            <div class="col-6 text-end">
              <span class="size">7 Courses</span> 
            </div>
          </div>
        </div>
        </div>
        
      </div>   
      <div class="col-4 pe-0">
        <div class="zoom">
          <img class="poster" src="./../../../assets/img/cat_6-370x155.jpg" alt="">
          <div class="container p-0 m-0 w-100">
          <div class="row pt-1">
            <div class="col-6 text-start">
              <span class="fw-bold">Photography</span> 
            </div>
            <div class="col-6 text-end">
              <span class="size">4 Courses</span> 
            </div>
          </div>
        </div>
        </div>
        
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'JumboBottom',

}
</script>

<style scoped lang="scss">
.container{
  width: 65%;
  margin: 0 auto;
}

.poster{
  max-width: 100%;
}

.size{
  font-size: 0.9em;
}

.zoom{
  transition: 0.2s;
}

.zoom:hover{
  transform: scale(0.9);
}
</style>