<template>
    <div class="col text-center my-2 posterContainer">
        <div class="miniContainer">
            <img :src="poster" alt="copertina canzone" class="poster">
            <h5 class="text-uppercase text-white mt-4">{{title}}</h5>
            <h6 class="mt-4 grey">{{author}}</h6>
            <h6 class="grey">{{year}}</h6>
        </div>
        
    </div>   
</template>

<script>

export default{
    name: 'CardLibrary',
    props:{
        poster: String,
        title: String,
        author: String,
        genre: String,
        year: String,
    }
}

</script>

<style scoped lang="scss">

.posterContainer{
    width: 80%;
    padding: 15px 0;
    flex-basis: calc((100% / 5) - 40px);
    margin: 0 20px;
    background-color: #2D3A46;
}

.miniContainer{
    width: 90%;
    margin: 0 auto;
}

.poster{
    max-width: 80%;
}

.grey{
    color: #747778;
}
</style>