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
          <a class="item text-xs" @click="scrollTo('my-job')">What I do</a>
          <vertical-divider class="item text-lg" />
          <a class="item text-xs" @click="scrollTo('past-jobs')">What I did</a>
          <vertical-divider class="item text-lg" />
          <a class="item text-xs" @click="scrollTo('benefits')"
            >What I offer you
          </a>
        </mq-layout>
      </div>
      <div v-if="showResponsiveMenu" class="responsive-menu">
        <a
          class="responsive-item text-sm"
          @click="
            hideMenu()
            scrollTo('my-job')
          "
          >What I do
        </a>
        <divider no-margin />
        <a
          class="responsive-item text-sm"
          @click="
            hideMenu()
            scrollTo('past-jobs')
          "
          >What I did
        </a>
        <divider no-margin />
        <a
          class="responsive-item text-sm"
          @click="
            hideMenu()
            scrollTo('benefits')
          "
          >What I offer you
        </a>
      </div>
    </template>
  </div>
</template>

<script>
import Divider from '~/components/Divider.vue'
import VerticalDivider from '~/components/VerticalDivider.vue'

export default {
  components: { Divider, VerticalDivider },
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
.navbar-container {
  position: fixed;
  top: 0;
  width: calc(100vw - 40px);
  max-width: 1200px;
  padding-top: 10px;
  background-color: white;
  opacity: 1;
  z-index: 999;
  display: flex;
  flex-direction: column;
  &.responsive {
    height: 100vh;
    visibility: visible;
    transition: opacity 0.15s linear, visibility 0s linear;
  }

  .topnav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    border-bottom: 1px solid black;

    .menu {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .item {
        text-decoration: none;
        margin: 0 15px;
      }
    }
  }

  .responsive-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding: 50px;

    .responsive-item {
      text-decoration: none;
      margin: 25px;
    }
  }
}
</style>
