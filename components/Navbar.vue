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
        <mq-layout mq="tablet+">
          <a class="item text-sm" @click="scrollTo('my-job')">What I do</a>
          <a class="item text-sm" @click="scrollTo('past-jobs')">Past work</a>
        </mq-layout>
      </div>
      <div v-if="showResponsiveMenu" class="responsive-menu">
        <a
          class="responsive-item text-md"
          @click="
            hideMenu()
            scrollTo('my-job')
          "
          >What I do
        </a>
        <a
          class="responsive-item text-md"
          @click="
            hideMenu()
            scrollTo('past-jobs')
          "
          >Past work
        </a>
      </div>
    </template>
  </div>
</template>

<script>
export default {
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
        inline: 'center'
      }
      if (this.$mq === 'desktop') {
        element.scrollIntoView({ ...scrollOptions, behavior: 'smooth' })
      } else {
        element.scrollIntoView(scrollOptions)
      }
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

    .item {
      text-decoration: none;
      margin: 0 15px;
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
