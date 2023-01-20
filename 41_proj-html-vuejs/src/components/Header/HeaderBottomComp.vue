<template>
  <div class="container py-3">
    <div class="row d-flex align-items-center">
      <div class="col-2">
        <img class="logo" src="./../../assets/img/MasterStudy_logo.svg" alt="">
      </div>
      <div class="col-4 d-flex text-center align-items-center">
        <h6 class="me-2 my-0 text-uppercase"><i class="fa-solid fa-bars me-1"></i>Category</h6>
        <form class="d-flex">
          <div class="me-1">
            <input placeholder="Search courses" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <button class="px-3 bg-primary rounded"><i class="fa-solid fa-magnifying-glass text-white"></i></button>
        </form>
      </div>
      <div class="col-3 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-megaphone me-1" viewBox="0 0 16 16">
          <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z"/>
        </svg>
        <span class="me-3 size">Became an insctructor</span>
        <span class="size"> <i class="fa-solid fa-briefcase me-1"></i>For Enterprise</span>
      </div>
      <div class="col-3 text-end">
        <span class="size me-3 text-primary"> <i class="fa-regular fa-user me-1"></i>Log in</span>
        <button class="btn btn-primary button-signup me-4 px-4 text-uppercase hover">Sign up</button>
        <span class="text-primary"><i class="fa-regular fa-bookmark"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBottomComp',

}
</script>

<style scoped lang="scss">
.container{
  width: 90%;
  margin: 0 auto;
}

.logo{
  max-width: 100%;
}

button{
  border: none;
}

.size{
  font-size: 0.9em;
}

.button-signup{
  border-radius: 30px;
}

.hover:hover{
  background-color: #365182;
}
</style>