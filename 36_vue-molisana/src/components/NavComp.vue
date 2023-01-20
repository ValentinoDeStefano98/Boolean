<template>
    <div id="app">
        <ul>
            <li>Home</li>
            <li class="active">Prodotti</li>
            <li>Chi siamo</li>
            <li>Contatti</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NavComp',
}
</script>

<style scoped lang="scss">
@import '../style/variabili.scss';
@import '../style/mixin.scss';

    ul{
        list-style-type: none;
        display: flex;
        justify-content: center;

        li{
            margin: 0 20px;
            padding: 10px;
        }

        .active{
            background: $light-blue;
        }
    }   
</style>