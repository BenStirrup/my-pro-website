<template>
  <div id="default-layout">
    <div id="background" />
    <navbar />
    <div id="default-layout-content">
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
  },
  mounted() {
    window.Calendly.initBadgeWidget({
      url:
        'https://calendly.com/benjamin-stirrup-web-development/project-meeting',
      text: 'Schedule meeting',
      color: '#00a2ff',
      textColor: 'white',
      branding: false
    })
  }
}
</script>

<style lang="scss">
#background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url('/stars.svg');
  background-size: 100% 100%;
  z-index: -1;
}

#default-layout {
  position: relative;
  min-height: 100vh;
  padding-top: 150px;
  padding-bottom: 350px;

  @include mobile-only {
    padding-top: 100px;
    padding-bottom: 400px;
  }

  #default-layout-content {
    max-width: 1200px;
    margin: auto;
    z-index: 0;
  }
}
</style>
