<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TitoloComponente></TitoloComponente>
    <JumboComp></JumboComp>
  </div>
</template>

<script>

import TitoloComponente from './components/TitoloComponente.vue'
import JumboComp from './components/JumboComp.vue'

export default {
  name: 'App',
  components: {
    TitoloComponente,
    JumboComp
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
</style>
