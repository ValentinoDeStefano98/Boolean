<template>
    <div class="col py-3">
      <div class="text-white p-3">
          <!-- Container principale della card -->
          <div class="flip-card">
              <!-- Contenuto interno della card -->
              <div class="flip-card-inner">
                  <!-- Poster della card -->
                  <div class="flip-card-front">
                      <img :src="`https://image.tmdb.org/t/p/w342${arrayFilms.poster_path}`" alt="" class="poster-img">
                  </div>
                  <!-- Retro della card -->
                  <div class="flip-card-back">
                        <h2 class="fw-bold">{{arrayFilms.title}}</h2>
                        <h6>{{arrayFilms.original_title}}</h6>
                        <div class="d-flex justify-content-center align-items-center">
                            <span class="d-inline-block">Lingua: </span>
                            <span class="flagContainer d-inline-block " :class="(arrayFilms.original_language == 'en') ? 'uk' : (arrayFilms.original_language == 'it' ) ? 'ita' : 'unknown' "></span>
                        </div>
                        <div class="my-3">
                            <i class="fa-solid fa-star" :class="changeScore() >= 1 ? 'text-warning' : ''"></i>
                            <i class="fa-solid fa-star" :class="changeScore() >= 2 ? 'text-warning' : ''"></i>
                            <i class="fa-solid fa-star" :class="changeScore() >= 3 ? 'text-warning' : ''"></i>
                            <i class="fa-solid fa-star" :class="changeScore() >= 4 ? 'text-warning' : ''"></i>
                            <i class="fa-solid fa-star" :class="changeScore() == 5 ? 'text-warning' : ''"></i> 
                        </div>
                        <div>
                            <p>{{arrayFilms.overview}}</p>
                        </div>
                  </div>
                </div>
            </div>
          
          <!-- Voto del contenuto -->
          <!-- <div>
            <i class="fa-solid fa-star" :class="changeScore() >= 1 ? 'text-warning' : ''"></i>
            <i class="fa-solid fa-star" :class="changeScore() >= 2 ? 'text-warning' : ''"></i>
            <i class="fa-solid fa-star" :class="changeScore() >= 3 ? 'text-warning' : ''"></i>
            <i class="fa-solid fa-star" :class="changeScore() >= 4 ? 'text-warning' : ''"></i>
            <i class="fa-solid fa-star" :class="changeScore() == 5 ? 'text-warning' : ''"></i> 
          </div> -->        
        </div>
    </div>
</template>

<script>
export default {
  //Cambiare il nome con quello del componente creato
  name: 'FilmsCard',
  props: {
      arrayFilms: Object
  },
  methods: {
      changeScore() {
          let score = parseInt(this.arrayFilms.vote_average);
          return parseInt(score / 2);
      }
  }
}
</script>

<style scoped lang="scss">
 /*Inserire style componente*/

.flagContainer{
    height: 24px;
    width: 24px;
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
}

.ita{
    background-image: url(./../../assets/img/ita.png);
}

.uk{
    background-image: url(./../../assets/img/uk-flag.png);
}

.unknown{
    background-image: url(./../../assets/img/unknown.png);
}

.flip-card{
    background-color: transparent;
    width: 300px;
    height: 450px;
    perspective: 1000px;
}

.poster-img{
    width: 300px;
    height: 450px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: black;
  color: white;
  transform: rotateY(180deg);
  padding: 10px;
}

</style>