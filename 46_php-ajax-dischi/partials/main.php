<main>
    <div class="container d-flex justify-content-center align-items-center">
        <div class="row row-cols-5 my-5">                  
            <div class="col my-2 posterContainer text-center" v-for="elm in filteredGenre()">
                <div class="miniContainer" >
                    <img class="poster" :src="`${elm.poster}`" alt="poster">
                    <h5 class="text-uppercase text-white mt-4"> {{elm.title}} </h5>
                    <h6 class="mt-4 grey"> {{ elm.author }} </h6>
                    <h6 class="grey"> {{ elm.year }} </h6>
                </div>                       
            </div>                                        
        </div>           
    </div>
</main>