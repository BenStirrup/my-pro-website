<template>
  <div class="navbar-container" :class="{ responsive: showResponsiveMenu }">
    <template v-if="showResponsiveMenu">
      <div class="topnav responsive">
        <a href="/">
          <img src="/logo_white.svg" style="max-width: 40px" />
        </a>
        <div class="toggle-icon responsive" @click="toggleMenu()">
          <font-awesome-icon icon="times" />
        </div>
      </div>
      <div class="menu responsive">
        <a class="item text-md responsive " href="#news">News</a>
        <a class="item text-md responsive" href="#contact">Contact</a>
        <a class="item text-md responsive" href="#about">About</a>
      </div>
    </template>
    <div v-else class="topnav">
      <a href="/">
        <img
          src="/logo_black.svg"
          :style="isMobile ? 'max-width: 40px' : 'max-width: 75px'"
        />
      </a>
      <mq-layout mq="tablet+">
        <div class="menu">
          <a class="item text-md" href="#news">News</a>
          <a class="item text-md" href="#contact">Contact</a>
          <a class="item text-md" href="#about">About</a>
        </div>
      </mq-layout>
      <mq-layout mq="mobile">
        <div class="toggle-icon" @click="toggleMenu()">
          <font-awesome-icon icon="bars" />
        </div>
      </mq-layout>
    </div>
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
  methods: {
    toggleMenu() {
      this.showResponsiveMenu = !this.showResponsiveMenu
    }
  }
}
</script>

<style scoped lang="scss">
.navbar-container {
  display: flex;
  flex-direction: column;
  &.responsive {
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    padding: 15px;
    opacity: 1;
    visibility: visible;
    z-index: 999;
    transition: opacity 0.15s linear, visibility 0s linear;
  }
}

.topnav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  &.responsive {
    color: white;
  }
}

.menu {
  display: flex;
  &.responsive {
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding: 50px;
    color: white;
  }
}

.item {
  text-decoration: none;
  margin: 0 15px;
  &.responsive {
    color: white;
    margin: 25px;
  }
}

.toggle-icon {
  &.responsive {
    color: white;
  }
}
</style>
