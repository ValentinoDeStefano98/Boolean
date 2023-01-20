<template>
  <div class="container pt-5 pb-3">
    <div class="row">
      <div class="col-3 text-start">
        <h5>About</h5>
        <p class="size"><span class="text-primary">MasterStudy</span> is Education WordPress theme featured by Learning Management System (LMS) for online education. Developed by <span class="text-primary">SystemThemes</span>.</p>
        <div>
          <i class="fa-brands fa-twitter me-3"></i>
          <i class="fa-brands fa-instagram me-3"></i>
          <i class="fa-brands fa-git me-3"></i>
        </div>
      </div>
      <div class="col-3 text-start">
        <h5>Contact</h5>
        <p class="size">USA, California 20, First Avenue, <br> California</p>
        <span class="size">Tel: +1 212 458 300 32</span>
        <br> 
        <span class="size">Fax: +1 212 375 24 414</span>
        <br>
        <span class="size text-secondary">info@masterstudy.com</span>
      </div>
      <div class="col-3 text-start">
        <h5>Pages</h5>
        <div class="d-flex">
          <ul class="ps-0">
            <li class="size">Blog</li>
            <li class="size">Home</li>
            <li class="size">Shortcodes</li>
          </ul>
          <ul>
            <li class="size">Blog</li>
            <li class="size">Home</li>
            <li class="size">Shortcodes</li>
          </ul>
        </div>
      </div>
      <div class="col-3 text-start">
        <h4>Blog</h4>
        <div class="container p-0">
          <div class="row mb-3">
            <div class="col-4">
              <img class="img" src="./../assets/img/photo-1517520287167-4bbf64a00d66-50x50.jpeg" alt="">
            </div>
            <div class="col-8 text-start p-0">
              <p class="size m-0">Our main target is to "Developing Yourself as a Leader"</p>
              <span class="size text-secondary mt-n3">-August 9, 2018</span>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <img class="img" src="./../assets/img/photo-1490376840453-5f616fbebe5b-50x50.jpeg" alt="">
            </div>
            <div class="col-8 text-start p-0">
              <p class="size m-0">Those Other College Expenses You Aren't Thinking About</p>
              <span class="size text-secondary">-June 3, 2015</span>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'FooterComp',

}
</script>

<style scoped lang="scss">
.size{
  font-size: 0.8em;
}

.img{
  max-width: 100%;
}
</style>