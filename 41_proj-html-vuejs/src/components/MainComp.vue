<template>
  <div>
    <JumboComp/>
    <ReadMoreComp/>
    <RecentCoursesComp/>
    <StatsNewsletterComp/>
    <PopularCoursesComp/>
    <OffersComp/>
    <PreFooterComp/>
  </div>
</template>

<script>

import JumboComp from './Main/Jumbo/JumboComp.vue'
import ReadMoreComp from './Main/ReadMoreComp.vue'
import RecentCoursesComp from './Main/RecentCoursesComp.vue'
import StatsNewsletterComp from './Main/StatsNewsletterComp.vue'
import PopularCoursesComp from './Main/PopularCoursesComp.vue'
import OffersComp from './Main/OffersComp.vue'
import PreFooterComp from './Main/PreFooterComp.vue'

export default {
  name: 'MainComp',
  components: {
    JumboComp,
    ReadMoreComp,
    RecentCoursesComp,
    StatsNewsletterComp,
    PopularCoursesComp,
    OffersComp,
    PreFooterComp
  }
}
</script>

<style scoped lang="scss">

</style>