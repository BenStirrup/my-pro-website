<template>
  <div class="navbar-container" :class="{ responsive: showResponsiveMenu }">
    <template>
      <div class="topnav">
        <img
          class="logo"
          src="/logos/logo.svg"
          alt="Logo of this website"
          @click="goTo('/')"
        />
        <mq-layout mq="mobile">
          <i
            v-if="showResponsiveMenu"
            class="icon-times text-lg"
            @click="hideMenu()"
          />
          <i v-else class="icon-bars text-lg" @click="showMenu()" />
        </mq-layout>
        <mq-layout mq="tablet+" class="menu text-xs">
          <drop-down class="item" heading="About me">
            <v-button @click="goTo('/', '#my-job')">
              What I do
            </v-button>
            <v-button @click="goTo('/', '#past-jobs')">
              They trust me
            </v-button>
            <v-button @click="goTo('/', '#assets')">
              My assets
            </v-button>
          </drop-down>
          <drop-down class="item" heading="Technology">
            <v-button @click="goTo('/technology', '#react'), hideMenu()">
              React.js
            </v-button>
            <v-button @click="goTo('/technology', '#vue'), hideMenu()">
              Vue.js
            </v-button>
            <v-button @click="goTo('/technology', '#django'), hideMenu()">
              Django
            </v-button>
            <v-button @click="goTo('/technology', '#serverless'), hideMenu()">
              Serverless
            </v-button>
          </drop-down>
          <v-button
            class="item small"
            value="Go to Medium blog"
            @click="goToExternal('medium.com/@benjamin.stirrup')"
            >Blog
          </v-button>
          <v-button class="item small" @click="goTo('/contact')"
            >Contact
          </v-button>
        </mq-layout>
      </div>
      <div v-if="showResponsiveMenu" class="menu responsive text-sm">
        <drop-down class="item responsive" heading="About me">
          <v-button @click="goTo('/', '#my-job'), hideMenu()">
            What I do
          </v-button>
          <v-button @click="goTo('/', '#past-jobs'), hideMenu()">
            They trust me
          </v-button>
          <v-button @click="goTo('/', '#assets'), hideMenu()">
            My assets
          </v-button>
        </drop-down>
        <drop-down class="item responsive" heading="Technology">
          <v-button @click="goTo('/technology', '#react'), hideMenu()">
            React.js
          </v-button>
          <v-button @click="goTo('/technology', '#vue'), hideMenu()">
            Vue.js
          </v-button>
          <v-button @click="goTo('/technology', '#django'), hideMenu()">
            Django
          </v-button>
          <v-button @click="goTo('/technology', '#serverless'), hideMenu()">
            Serverless
          </v-button>
        </drop-down>
        <v-button
          class="item responsive"
          value="Go to Medium blog"
          @click="goToExternal('medium.com/@benjamin.stirrup')"
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
import LinkMixin from '~/mixins/link.vue'

export default {
  components: { 'v-button': Button, DropDown },
  mixins: [LinkMixin],
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
    }
  }
}
</script>

<style scoped lang="scss">
.navbar-container {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 1200px;
  padding: 15px 20px 0 20px;
  background-color: $black;
  z-index: 1;
  &.responsive {
    height: 100vh;
  }

  .topnav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    border-bottom: 2px solid white;

    i {
      padding: 15px 0 15px 15px;
      cursor: pointer;
    }

    .logo {
      cursor: pointer;
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
    margin: 0 5px;
    width: 130px;
    &.responsive {
      margin: 15px;
    }
    &.small {
      width: 90px;
    }
  }
}
</style>
