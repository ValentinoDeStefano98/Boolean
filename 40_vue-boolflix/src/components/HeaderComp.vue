<template>
  <header>
    <div class="bg-dark py-4">
        <div class="container">
            <div class="row d-flex align-items-center">
                <!-- Logo / titolo -->
                <div class="col-8 text-start d-flex align-items-center">
                    <h1 class="text-uppercase text-danger mb-0">Boolflix</h1>
                    <ul class="text-white d-flex align-items-center m-0">
                        <li class="fw-bold" role="button">Home</li>
                        <li role="button">Serie TV</li>
                        <li role="button">Film</li>
                        <li role="button">Nuovi e popolari</li>
                        <li role="button">La mia lista</li>
                    </ul>
                </div>
                <div class="col-4">
                    <!-- Barra di ricerca -->
                    <form>
                        <div class="form-group d-flex justify-content-end">
                            <input type="text" class="form-control w-50 me-2" placeholder="Digita il nome del film" v-model.trim="objectName" @keydown.enter.prevent="$emit( 'searchTitle', objectName)">
                            <button type="submit" class="btn btn-danger" @click.prevent="$emit('searchTitle', objectName)">Cerca</button>
                        </div>
                    </form>                
                </div>
            </div>
        </div>
    </div>   
  </header>
</template>

<script>
export default {
  name: 'HeaderComp',
  data(){
      return{
        objectName: '',  
      }   
    },
}
</script>

<style scoped lang="scss">
 /*Inserire style componente*/
template{
    height: 20vh;
}

li{
    list-style: none;
    margin: 0 10px;
}
</style>