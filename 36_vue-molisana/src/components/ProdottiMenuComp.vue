<template>
    <div>
        <h3>Prodotti</h3>
        <ul>
            <li v-for="(element, index) in menuProdotti" :key='index'>
                <a :href="'${element.url}'"> {{ element.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ProdottiMenuComp',
    data() {
        return {
            menuProdotti: [
                {
                    name: 'Il Pastificio',
                    url: '/il-pastificio'
                },
                {
                    name: 'Grano',
                    url: '/grano'
                },
                {
                    name: 'Filiera',
                    url: '/filiera'
                },
                {
                    name: '100 Anni di Pasta',
                    url: '/100-anni-di-pasta'
                },
                {
                    name: 'Sartoria della Pasta',
                    url: '/sartoria-della-pasta'
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import '../style/mixin.scss';

ul{
    @include listaVerticale(left, column);
    padding-inline-start: 0;
    margin-block-start: 0;
}

h3{
    text-align: left;
}
</style>
