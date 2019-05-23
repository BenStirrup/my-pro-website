<template>
  <div class="navbar-container" :class="{ responsive: showResponsiveMenu }">
    <template>
      <div class="topnav">
        <nuxt-link to="/" class="logo">
          <img src="/logos/logo_black.svg" alt="Logo of this website" />
        </nuxt-link>
        <mq-layout mq="mobile">
          <i
            v-if="showResponsiveMenu"
            class="icon-times text-lg"
            @click="hideMenu()"
          />
          <i v-else class="icon-bars text-lg" @click="showMenu()" />
        </mq-layout>
        <mq-layout mq="tablet+" class="menu">
          <drop-down class="item text-xs" heading="About me">
            <v-button class="text-xs" @click="goTo('/', '#my-job')">
              What I do
            </v-button>
            <v-button class="text-xs" @click="goTo('/', '#past-jobs')">
              Past work
            </v-button>
            <v-button class="text-xs" @click="goTo('/', '#benefits')">
              What makes me different
            </v-button>
          </drop-down>
          <v-button
            class="item text-xs"
            value="Go to Medium blog"
            onclick="window.location.href = 'https://medium.com/@benjamin.stirrup'"
            >Blog
          </v-button>
          <v-button class="item text-xs" @click="goTo('/contact')"
            >Contact
          </v-button>
        </mq-layout>
      </div>
      <div v-if="showResponsiveMenu" class="menu responsive">
        <drop-down class="item responsive text-sm" heading="About me">
          <v-button class="text-sm" @click="goTo('/', '#my-job'), hideMenu()">
            What I do
          </v-button>
          <v-button
            class="text-sm"
            @click="goTo('/', '#past-jobs'), hideMenu()"
          >
            Past work
          </v-button>
          <v-button class="text-sm" @click="goTo('/', '#benefits'), hideMenu()">
            What makes me different
          </v-button>
        </drop-down>
        <v-button
          class="item responsive text-sm"
          value="Go to Medium blog"
          onclick="window.location.href = 'https://medium.com/@benjamin.stirrup'"
          >Blog
        </v-button>
        <v-button
          class="item responsive text-sm"
          @click="goTo('/contact'), hideMenu()"
          >Contact
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
    goTo(path, hash) {
      const currentPath = this.$route.path
      const currentHash = this.$route.hash
      if (path === currentPath && hash === currentHash) {
        const element = document.querySelector(hash)
        window.scrollTo(0, element.offsetTop - 110)
      } else {
        this.$router.push({ path, hash })
      }
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
  padding: 15px 20px 0 20px;
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

    i {
      padding: 15px 0 15px 15px;
      cursor: pointer;
    }

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
    width: 175px;
    &.responsive {
      margin: 15px;
    }
  }
}
</style>
