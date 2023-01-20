<template>
  <div class="big">
    <!-- Componente contenitore di tutti i film / serie tv con props da passare ai figli per ottenere i valori da stampare -->
    <FilmsComp :propsArrayFilms2="propsArrayFilms" :propsArraySeries2="propsArraySeries" :propsArrayActors2="propsArrayActors"/>
  </div>
</template>

<script>
import FilmsComp from './partials/FilmsComp.vue'

export default {
  //Cambiare il nome con quello del componente creato
  name: 'MainComp',
  components: {
    FilmsComp,
  },
  props: {
    propsArrayFilms: Array,
    propsArraySeries: Array,
    propsArrayActors: Array
  }
}
</script>

<style scoped lang="scss">

.big{
    height: 80vh;
    background-color: grey;
    overflow: auto;
}

</style>