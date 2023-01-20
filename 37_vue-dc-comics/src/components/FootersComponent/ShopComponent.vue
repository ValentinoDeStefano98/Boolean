<template>
    <div>
        <h3>Shop</h3>
        <ul>
            <li v-for="(element, index) in menuShop" :key='index'>
                <a :href="`${element.url}`"> {{ element.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ShopComponent',
    data() {
        return {
            menuShop: [
                {
                    name: 'Shop DC',
                    url: '/shopdc'
                },
                {
                    name: 'Shop DC Collectibles',
                    url: '/shopdccollectibles'
                },
            ]
        }
    }
}
</script>

<style scoped lang="scss">

h3{
    color: white;
    padding: 20px 15px;
    text-align: start;
    text-transform: uppercase;
}

li{
    list-style-type: none;
    margin: 0 15px;
    text-align: start;
    
}

a{
    text-decoration: none;
    color: lightgray;
}
</style>