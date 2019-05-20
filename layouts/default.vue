<template>
  <div id="default-layout">
    <navbar />
    <nuxt />
  </div>
</template>

<script>
import Vue from 'vue'
import VueMq from 'vue-mq'

import Navbar from '~/components/Navbar.vue'

Vue.use(VueMq, {
  breakpoints: {
    mobile: 601,
    tablet: 1201,
    desktop: Infinity
  },
  defaultBreakpoint: 'mobile'
})

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import '~/assets/style/mixins.scss';

#default-layout {
  margin: auto;
  padding-top: 150px;
  max-width: 1200px;

  @include mobile-only {
    padding-top: 90px;
  }
}
</style>
