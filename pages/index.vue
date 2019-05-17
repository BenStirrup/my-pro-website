<template>
  <div id="landing-page">
    <navbar />
    <a id="my-job" name="my-job" />
    <job />
    <divider />
    <a id="past-jobs" name="past-jobs" />
    <past-jobs />
    <projects />
    <divider />
    <a id="benefits" name="benefits" />
    <benefits />
  </div>
</template>

<script>
import Vue from 'vue'
import VueMq from 'vue-mq'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faTimes,
  faCommentsDollar,
  faPlaneDeparture
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Navbar from '~/components/Navbar.vue'
import Job from '~/components/Job.vue'
import PastJobs from '~/components/PastJobs.vue'
import Projects from '~/components/Projects.vue'
import Benefits from '~/components/Benefits.vue'
import Divider from '~/components/Divider.vue'

Vue.use(VueMq, {
  breakpoints: {
    mobile: 601,
    tablet: 1201,
    desktop: Infinity
  },
  defaultBreakpoint: 'mobile'
})

library.add([faBars, faTimes, faCommentsDollar, faPlaneDeparture])
Vue.component('font-awesome-icon', FontAwesomeIcon)

export default {
  components: {
    Navbar,
    Job,
    PastJobs,
    Projects,
    Divider,
    Benefits
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/style/mixins.scss';

#landing-page {
  margin: auto;
  padding: 20px;
  padding-top: 110px;
  min-height: 100vh;
  max-width: 1200px;
  display: flex;
  flex-direction: column;

  @include mobile-only {
    padding-top: 70px;
  }
}
</style>
