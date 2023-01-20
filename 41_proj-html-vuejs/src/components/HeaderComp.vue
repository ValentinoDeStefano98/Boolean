<template>
  <div>
    <HeaderTopComp/>
    <HeaderBottomComp/>
  </div>
</template>

<script>
import HeaderTopComp from './Header/HeaderTopComp.vue'
import HeaderBottomComp from './Header/HeaderBottomComp.vue'

export default {
  name: 'HeaderComp',
  components: {
    HeaderTopComp,
    HeaderBottomComp
  }
}
</script>

<style scoped lang="scss">

</style>