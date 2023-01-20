<template>
    <footer>
        <div class="col">
            <LogoComp/>
        </div>
        <div class="col">
            <PastificioCompMenu/>
        </div>
        <div class="col">
            <ProdottiMenuComp/>
        </div>
    </footer>
    
</template>

<script>
import LogoComp from './LogoComp.vue'
import PastificioCompMenu from './PastificioCompMenu.vue'
import ProdottiMenuComp from './ProdottiMenuComp.vue'

export default {
    name: 'FooterComp',
    components: {
        LogoComp,
        PastificioCompMenu,
        ProdottiMenuComp
    }
}
</script>

<style scoped lang="scss">
    footer{
        display: flex;
        width: 70%;
        margin: auto;
    }

    .col{
        width: calc(100% / 3);
    }
</style>