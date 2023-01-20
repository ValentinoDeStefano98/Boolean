<template>
  <div class="container mt-4">
    <h2 v-if="propsArrayFilms2 != ''" class="text-white text-uppercase fw-bold">Film</h2>
    <div class="row row-cols-4">
        <!-- Card dei film -->
        <FilmsCard v-for="(elem, index) in propsArrayFilms2" :key="index" :arrayFilms="elem"/>
    </div>
    <h2 v-if="propsArraySeries2 != ''" class="text-white text-uppercase fw-bold">Serie TV</h2>
    <div class="row row-cols-4">
        <!-- Card delle serie tv -->
        <SeriesCard v-for="(elem, index) in propsArraySeries2" :key="index" :arraySeries="elem"/>
    </div>   
  </div>
</template>

<script>
import FilmsCard from './FilmsCard'
import SeriesCard from './SeriesCard'
export default {
  name: 'FilmsComp',
  components: {
      FilmsCard,
      SeriesCard
  },
  props: {
    propsArrayFilms2: Array,
    propsArraySeries2: Array
  }
}
</script>

<style scoped lang="scss">
 /*Inserire style componente*/

</style>