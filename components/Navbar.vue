<template>
  <div class="navbar-container" :class="{ responsive: showResponsiveMenu }">
    <template>
      <div class="topnav">
        <img
          src="/logos/logo_black.svg"
          :style="isMobile ? 'max-width: 40px' : 'max-width: 75px'"
          alt="Logo of this website"
        />
        <mq-layout mq="mobile">
          <font-awesome-icon
            v-if="showResponsiveMenu"
            icon="times"
            @click="hideMenu()"
          />
          <font-awesome-icon v-else icon="bars" @click="showMenu()" />
        </mq-layout>
        <mq-layout mq="tablet+" class="menu">
          <v-button class="item text-xxs" @click="scrollTo('my-job')">
            What I do
          </v-button>
          <v-button class="item text-xxs" @click="scrollTo('past-jobs')">
            Previous work
          </v-button>
          <v-button class="item text-xxs" @click="scrollTo('benefits')">
            Benefits
          </v-button>
        </mq-layout>
      </div>
      <div v-if="showResponsiveMenu" class="menu responsive">
        <v-button
          class="item responsive text-xs"
          @click="scrollTo('my-job'), hideMenu()"
        >
          What I do
        </v-button>
        <v-button
          class="item responsive text-xs"
          @click="scrollTo('past-jobs'), hideMenu()"
        >
          Previous work
        </v-button>
        <v-button
          class="item responsive text-xs"
          @click="scrollTo('benefits'), hideMenu()"
        >
          Benefits
        </v-button>
      </div>
    </template>
  </div>
</template>

<script>
import Button from '~/components/Button.vue'

export default {
  components: { 'v-button': Button },
  data() {
    return { showResponsiveMenu: false }
  },
  computed: {
    isMobile() {
      return this.$mq === 'mobile'
    }
  },
  watch: {
    isMobile: function(currentIsMobile) {
      if (!currentIsMobile) {
        this.hideMenu()
      }
    }
  },
  methods: {
    showMenu() {
      this.showResponsiveMenu = true
    },
    hideMenu() {
      this.showResponsiveMenu = false
    },
    scrollTo(id) {
      const element = document.getElementById(id)
      const scrollOptions = {
        block: 'center',
        inline: 'center',
        behavior: 'smooth'
      }
      element.scrollIntoView(scrollOptions)
      history.pushState(null, null, '#' + id)
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/style/mixins.scss';

.navbar-container {
  position: fixed;
  top: 0;
  width: 100vw;
  max-width: 1200px;
  padding: 15px;
  padding-bottom: 0;
  background-color: white;
  z-index: 1;
  display: flex;
  flex-direction: column;
  &.responsive {
    height: 100vh;
  }

  .topnav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    border-bottom: 2px solid black;
  }
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.responsive {
    flex-direction: column;
    padding-top: 50px;
  }

  .item {
    display: flex;
    justify-content: center;
    margin: 0 5px;
    width: 140px;
    &.responsive {
      width: 140px;
      margin: 15px;
    }
  }
}
</style>
