<template>
  <div id="app">
    <!-- Sezione header con logo e barra di ricerca / emit per importare il contenuto della ricerca -->
    <HeaderComp @searchTitle="searchMetod"/>
    <!-- Sezione contenente tutti i film e le serie tv filtrate in base alla ricerca / props con valore da passare ai figli -->
    <MainComp :propsArrayFilms="arrayFilms" :propsArraySeries="arraySeries" :propsArrayActors="arrayActors"/>
  </div>
</template>

<script>
//import bootstrap
import "bootstrap"
//import axios
import axios from 'axios';

//import componenti
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp
  },
  data(){
    return{
      api_key: "4048103a1557792906164decde399a31",
      inputName: '',
      arrayFilms: [],
      arraySeries: [],
      arrayActors: []
    }    
  },
  created() {
    //all'interno del created le api non vengono richiamate correttamente generando errore, quindi ho provato ad inserirle all'interno della funzione searchMetod
  },
  methods: {
    searchMetod(name){
      this.inputName = name
      console.log(this.inputName)
      axios.get( `https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&language=en-US&page=1&include_adult=false&query=${this.inputName}`)
        .then ((res) => {
          console.log(res.data.results);
          //assegno il valore dell'api ad un array di film inizialmente vuoto
          this.arrayFilms = res.data.results;
      }),
      axios.get( `https://api.themoviedb.org/3/search/tv?api_key=${this.api_key}&language=en-US&page=1&include_adult=false&query=${this.inputName}`)
        .then ((res) => {
          console.log(res.data.results);
          //assegno il valore dell'api ad un array di serie tv inizialmente vuoto
          this.arraySeries = res.data.results;
      })
      axios.get( `https://api.themoviedb.org/3/search/person?api_key=${this.api_key}&language=en-US&page=1&include_adult=false&query=${this.inputName}`)
        .then ((res) => {
          console.log(res.data.results);
          //assegno il valore dell'api ad un array di serie tv inizialmente vuoto
          this.arrayActors = res.data.results;
      })
    }
  },
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
  //margin-top: 60px;
}

html{
  max-width: 1440px;
  margin: 0 auto;
}

</style>
