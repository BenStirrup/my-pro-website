<template>
  <div class="navbar-container" :class="{ responsive: showResponsiveMenu }">
    <template>
      <div class="topnav">
        <img
          src="/logo_black.svg"
          :style="isMobile ? 'max-width: 40px' : 'max-width: 75px'"
        />
        <mq-layout mq="mobile">
          <font-awesome-icon
            v-if="showResponsiveMenu"
            icon="times"
            @click="toggleMenu()"
          />
          <font-awesome-icon v-else icon="bars" @click="toggleMenu()" />
        </mq-layout>
        <mq-layout mq="tablet+">
          <a class="item text-sm" href="#news">News</a>
          <a class="item text-sm" href="#contact">Contact</a>
          <a class="item text-sm" href="#about">About</a>
        </mq-layout>
      </div>
      <div v-if="showResponsiveMenu" class="responsive-menu">
        <a class="responsive-item text-md" href="#news">News</a>
        <a class="responsive-item text-md" href="#contact">Contact</a>
        <a class="responsive-item text-md" href="#about">About</a>
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
        this.showResponsiveMenu = false
      }
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
  position: fixed;
  top: 0;
  width: calc(100vw - 50px);
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
