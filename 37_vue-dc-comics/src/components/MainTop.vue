<template>
    <div class="container">
        <div class="jumbo">
            <div class="buttonContainer">
                <span class="currentSeries">Current Series</span>
            </div>
       </div>
        <div class="top">          
            <ProductSection/>          
        </div>      
    </div>
    
</template>

<script>
import ProductSection from '../components/ProductSection.vue'
export default {
    components: {
        ProductSection
    },
    name: 'MainTop',
}
</script>

<style scoped lang="scss">
.top{
    width: 100%;
    color: white;
    text-transform: uppercase;
    background-color: black;
    padding: 20px 0;
}

.jumbo{
    background-image: url(../assets/img/jumbotron.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
    text-align: start;
}

.currentSeries{
    display: inline-block;
    margin-top: 280px;
    color: white;
    background-color: #0282F9;
    padding: 10px;
    text-transform: uppercase;
    font-weight: bold;
}

.buttonContainer{
    width: 80%;
    margin: 0 auto;
}
</style>