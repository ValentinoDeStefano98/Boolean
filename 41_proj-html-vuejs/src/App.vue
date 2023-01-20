<template>
  <div id="app">
    <!-- Sezione Header -->
    <HeaderComp/>
    <!-- Sezione Main -->
    <MainComp/>
    <!-- Sezione Footer -->
    <FooterComp/>
  </div>
</template>

<script>
//import bootstrap
import "bootstrap"
//import dei componenti
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp
  }
}
</script>

<style lang="scss">
//import bootstrap
@import "bootstrap/dist/css/bootstrap.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app{
  max-width: 1440px;
  margin: 0 auto;
}

</style>
