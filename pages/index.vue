<template>
  <div class="page-container">
    <navbar />
    <a id="my-job" name="my-job" />
    <job class="section" />
    <divider />
    <a id="past-jobs" name="past-jobs" />
    <past-jobs class="section" />
    <divider />
    <a id="benefits" name="benefits" />
    <benefits class="section" />
  </div>
</template>

<script>
import Vue from 'vue'
import VueMq from 'vue-mq'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Navbar from '~/components/Navbar.vue'
import Job from '~/components/Job.vue'
import PastJobs from '~/components/PastJobs.vue'
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

library.add([faBars, faTimes])
Vue.component('font-awesome-icon', FontAwesomeIcon)

export default {
  components: {
    Navbar,
    Job,
    PastJobs,
    Divider,
    Benefits
  }
}
</script>

<style scoped lang="scss">
.page-container {
  margin: auto;
  margin-top: 70px;
  padding: 20px;
  min-height: 100vh;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
}

.section {
  padding: 30px 0;
}
</style>
