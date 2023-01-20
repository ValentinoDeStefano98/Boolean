<template>
  <div id="app">
   
    <header>
      <LogoComponent/>
      <HeaderNavComponent/>
    </header>

    <main>
      <MainTop/>
      <MainBottom/>
    </main>

    <footer>
      <FooterTop/>
      <FooterBottom/>
    </footer>
    
  </div>
</template>

<script>
import LogoComponent from './components/LogoComponent.vue'
import HeaderNavComponent from './components/HeaderNavComponent.vue'
import MainTop from './components/MainTop.vue'
import MainBottom from './components/MainBottom.vue'
import FooterTop from './components/FooterTop.vue'
import FooterBottom from './components/FooterBottom.vue'

export default {
  name: 'App',
  components: {
   LogoComponent,
   HeaderNavComponent,
   MainTop,
   MainBottom,
   FooterTop,
   FooterBottom
  }
}
</script>

<style lang="scss">

@import './style/reset.scss';
@import './style/mixin.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  margin: 0 auto;
}

header{
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 80%;
  margin: 0 auto;
  padding: 15px 0;
}
</style>
