<template>
  <div class="navbar-container" :class="{ responsive: showResponsiveMenu }">
    <template>
      <div class="topnav">
        <a href="/" class="logo">
          <img src="/logos/logo_black.svg" alt="Logo of this website" />
        </a>
        <mq-layout mq="mobile">
          <font-awesome-icon
            v-if="showResponsiveMenu"
            icon="times"
            @click="hideMenu()"
          />
          <font-awesome-icon v-else icon="bars" @click="showMenu()" />
        </mq-layout>
        <mq-layout mq="tablet+" class="menu">
          <drop-down class="item text-xs" heading="About me">
            <v-button class="text-xs" @click="scrollTo('my-job')">
              What I do
            </v-button>
            <v-button class="text-xs" @click="scrollTo('past-jobs')">
              Previous work
            </v-button>
            <v-button class="text-xs" @click="scrollTo('benefits')">
              Benefits
            </v-button>
          </drop-down>
          <v-button
            class="item responsive text-sm"
            value="Go to Medium blog"
            onclick="window.location.href = 'https://medium.com/@benjamin.stirrup'"
            >Blog
          </v-button>
        </mq-layout>
      </div>
      <div v-if="showResponsiveMenu" class="menu responsive">
        <drop-down
          class="item responsive text-sm"
          heading="About me"
          is-responsive
        >
          <v-button class="text-xs" @click="scrollTo('my-job'), hideMenu()">
            What I do
          </v-button>
          <v-button class="text-xs" @click="scrollTo('past-jobs'), hideMenu()">
            Previous work
          </v-button>
          <v-button class="text-xs" @click="scrollTo('benefits'), hideMenu()">
            Benefits
          </v-button>
        </drop-down>
        <v-button
          class="item responsive text-sm"
          value="Go to Medium blog"
          onclick="window.location.href = 'https://medium.com/@benjamin.stirrup'"
          >Blog
        </v-button>
      </div>
    </template>
  </div>
</template>

<script>
import Button from '~/components/Button.vue'
import DropDown from '~/components/DropDown.vue'

export default {
  components: { 'v-button': Button, DropDown },
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

    .logo {
      width: 100%;
      max-width: 40px;
      @include tablet-and-up {
        max-width: 75px;
      }
    }
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
    width: 180px;
    &.responsive {
      margin: 15px;
    }
  }
}
</style>
