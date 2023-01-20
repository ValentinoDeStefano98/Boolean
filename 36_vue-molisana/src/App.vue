<template>
  <div id="app">

    <header>
      <LogoComp/>
      <NavComp/>
    </header>

    <main>
      <h2>Contenuto</h2>
    </main>

    <FooterComp/>

  </div>
</template>

<script>
//Importo i componenti
import LogoComp from './components/LogoComp.vue'
import NavComp from './components/NavComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
   LogoComp,
   NavComp,
   FooterComp
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

main{
  background-image: url('./assets/img/background.jpeg');
}
</style>
