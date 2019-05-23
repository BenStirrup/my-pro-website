<template>
  <ul
    id="dropdown"
    :class="{
      open: shouldMenuBeOpen,
      close: !shouldMenuBeOpen
    }"
    @mouseover="isHovering = true"
    @mouseout="isHovering = false"
    @click="toggleMenu()"
  >
    <span>{{ heading }}</span>
    <ul id="drop">
      <div>
        <slot />
      </div>
    </ul>
    <i id="icon" class="icon-arrow-right" />
  </ul>
</template>

<script>
export default {
  props: {
    heading: { default: '', type: String }
  },
  data() {
    return {
      toggleOpen: false,
      isHovering: false
    }
  },
  computed: {
    isDesktop() {
      return this.$mq === 'desktop'
    },
    isMobile() {
      return this.$mq === 'mobile'
    },
    shouldMenuBeOpen() {
      if (this.isDesktop) {
        return this.isHovering
      } else {
        return this.toggleOpen
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.closeMenuWhenClickingOutside)
  },
  destroyed() {
    document.removeEventListener('click', this.closeMenuWhenClickingOutside)
  },
  methods: {
    closeMenu() {
      const dropdown = document.getElementById('dropdown')
      if (dropdown) {
        if (this.isMobile) {
          dropdown.style.marginBottom = ''
        }
        this.toggleOpen = false
      }
    },
    openMenu() {
      const dropdown = document.getElementById('dropdown')
      if (dropdown) {
        if (this.isMobile) {
          const menuHeight = document.getElementById('drop').clientHeight
          dropdown.style.marginBottom = `${menuHeight + 10}px`
        }
        this.toggleOpen = true
      }
    },
    closeMenuWhenClickingOutside(event) {
      const dropdown = document.getElementById('dropdown')
      const menu = document.getElementById('drop')
      const isClickInside =
        dropdown.contains(event.target) || menu.contains(event.target)
      if (!isClickInside && this.toggleOpen) {
        this.closeMenu()
      }
    },
    toggleMenu() {
      if (!this.toggleOpen) {
        this.openMenu()
      } else {
        this.closeMenu()
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/style/mixins.scss';

$color: black;
$secondary-color: white;
$background-color: gainsboro;
$secondary-background-color: black;

#dropdown {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  position: relative;
  padding: 10px 5px;
  z-index: 0;
  border: 1.5px solid black;
  border-radius: 5px;
  background: $background-color;
  cursor: pointer;
  @include desktop-and-up {
    cursor: default;
  }

  #icon {
    transition: all 0.4s ease;
  }

  #drop {
    overflow: hidden;
    visibility: hidden;
    position: absolute;
    width: 100%;
    padding: 0;
    top: calc(100% + 4px);

    div {
      transition: all 0.4s 0.05s;
      transform: translate(0, -100%);

      > * {
        text-align: center;
        border: 1.5px solid black;
        border-radius: 0px;
        width: 100%;
        background-color: $background-color;
        color: $color;

        &:hover {
          background-color: $secondary-background-color;
          color: $secondary-color;
        }
        &:first-child {
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          border-top: 1.5px solid black;
          border-bottom: none;
        }
        &:last-child {
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          border-bottom: 1.5px solid black;
          border-top: none;
        }
      }
    }
  }
}

#dropdown {
  &:hover {
    background-color: $secondary-background-color;
    color: $secondary-color;
  }

  &:hover,
  &.open {
    transition: margin 0.4s;
    #drop {
      visibility: visible;
      div {
        transform: translate(0, 0);
      }
    }
    #icon {
      transform: rotateZ(+90deg);
    }
  }

  &.close {
    transition: margin 0.8s;
    #drop {
      visibility: hidden;
      div {
        transform: translate(0, -100%);
      }
    }
    #icon {
      transform: rotateZ(0);
    }
  }
}
</style>