<template>
  <div :class="{ responsive: showResponsiveMenu }" class="navbar-container">
    <template>
      <div class="topnav">
        <img
          @click="goTo('/')"
          class="logo"
          src="/logos/logo.svg"
          alt="Logo of this website"
        />
        <mq-layout mq="mobile">
          <i
            v-if="showResponsiveMenu"
            @click="hideMenu()"
            class="icon-times text-lg"
          />
          <i v-else @click="showMenu()" class="icon-bars text-lg" />
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
            <v-button @click="goTo('/technology', '#express'), hideMenu()">
              Express.js
            </v-button>
            <v-button @click="goTo('/technology', '#serverless'), hideMenu()">
              Serverless
            </v-button>
            <v-button @click="goTo('/technology', '#cicd'), hideMenu()">
              CI/CD
            </v-button>
            <v-button @click="goTo('/technology', '#databases'), hideMenu()">
              Databases
            </v-button>
          </drop-down>
          <v-button
            @click="goToExternal('medium.com/@benjamin.stirrup')"
            class="item small"
            value="Go to Medium blog"
            >Blog
          </v-button>
          <v-button @click="goTo('/contact')" class="item small"
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
          <v-button @click="goTo('/technology', '#express'), hideMenu()">
            Express.js
          </v-button>
          <v-button @click="goTo('/technology', '#serverless'), hideMenu()">
            Serverless
          </v-button>
          <v-button @click="goTo('/technology', '#cicd'), hideMenu()">
            CI/CD
          </v-button>
          <v-button @click="goTo('/technology', '#databases'), hideMenu()">
            Databases
          </v-button>
        </drop-down>
        <v-button
          @click="goToExternal('medium.com/@benjamin.stirrup')"
          class="item responsive"
          value="Go to Medium blog"
          >Blog
        </v-button>
        <v-button
          @click="goTo('/contact'), hideMenu()"
          class="item responsive text-sm"
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
