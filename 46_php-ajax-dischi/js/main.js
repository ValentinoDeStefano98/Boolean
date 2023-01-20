var app = new Vue({
  el: '#app',
  data: {
    arrayDischi: [],
    genreSearched: '',
    genreSelected: '',
  },
  created(){
    axios.get( 'http://localhost/Boolean/Progetti/php-ajax-dischi/partials/database.php' )
        .then((res) => {
          console.log(res.data);
          this.arrayDischi = res.data;
        })
  },
  methods: {
    //Metodo per la ricerca del genere tramite select
    filteredGenre(){
      if (this.genreSelected == " "){
        return this.arrayDischi;
      } else {
        return this.arrayDischi.filter((elm) =>{
          return elm.genre.includes((this.genreSelected));
        })
      }
    },
    /*
    Metodo per la ricerca del genere tramite barra di ricerca
    filteredGenre2(){
      if (this.genreSearched == ""){
        return this.arrayDischi;
      } else {
        return this.arrayDischi.filter((elm) =>{
          return elm.genre.includes((this.genreSearched));
        })
      }
    }
    */
  }
})