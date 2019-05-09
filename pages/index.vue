<template>
  <div class="page-container">
    <navbar />
    <job />
  </div>
</template>

<script>
import Vue from 'vue'
import VueMq from 'vue-mq'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Navbar from '~/components/navbar.vue'
import Job from '~/components/job.vue'

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
    Job
  }
}
</script>

<style scoped lang="scss">
.page-container {
  margin: auto;
  padding: 15px;
  min-height: 100vh;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
}
</style>
