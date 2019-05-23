<template>
  <div id="default-layout">
    <div id="default-layout-content">
      <navbar />
      <nuxt />
    </div>
    <v-footer />
  </div>
</template>

<script>
import Vue from 'vue'
import VueMq from 'vue-mq'

import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

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
    Navbar,
    'v-footer': Footer
  }
}
</script>

<style lang="scss">
@import '~/assets/style/mixins.scss';

#default-layout {
  position: relative;
  padding-top: 150px;
  padding-bottom: 320px;
  min-height: 100vh;

  @include mobile-only {
    padding-top: 90px;
    padding-bottom: 220px;
  }

  #default-layout-content {
    max-width: 1200px;
    margin: auto;
  }
}
</style>
