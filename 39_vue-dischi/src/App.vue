<template>
  <div>
    <!-- Componente dell'header (logo) -->
    <HeaderComp/>
    <div class="container d-flex justify-content-center align-items-center">
      <!-- Componente main (filtri ricerca + album) -->
      <LibraryComp/>
    </div>
  </div>
</template>

<script>
import "bootstrap"
//Importo i componenti
import HeaderComp from './components/HeaderComp.vue'
import LibraryComp from './components/LibraryComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    LibraryComp
  },
}
</script>

<style lang="scss">
@import "bootstrap/dist/css/bootstrap.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html{
  max-width: 1440px;
  margin: 0 auto;
}

body{
  background-color: #1E2D3B;
}

.container{
  width: 70%;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

</style>