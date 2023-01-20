<template>
    <div class="backgroundContainer">
        <div class="bigContainer">
            <div class="linkContainer">
            <div>
                <DcComicsComponent/>
            </div>
            <div>
                <ShopComponent/>
            </div>
            <div>
                <DcComponent/>
            </div> 
            <div>
                <SitesComponent/>
            </div>           
            </div>
            <div class="footerLogoContainer">
                <FootersLogo/>
            </div>
        </div>
        
        
    </div>
</template>

<script>
import DcComicsComponent from './FootersComponent/DcComicsComponent.vue'
import ShopComponent from './FootersComponent/ShopComponent.vue'
import DcComponent from './FootersComponent/DcComponent.vue'
import SitesComponent from './FootersComponent/SitesComponent.vue'
import FootersLogo from './FootersComponent/FootersLogo.vue'

export default {
    name: 'FooterTop',
    components: {
        DcComicsComponent,
        ShopComponent,
        DcComponent,
        SitesComponent,
        FootersLogo
    }
}
</script>

<style scoped lang="scss">
.backgroundContainer{
    height: 400px;
    background-image: url('../assets/img/footer-bg.jpg');
}

.bigContainer{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.linkContainer{
    padding: 20px 0;
    height: 400px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
</style>