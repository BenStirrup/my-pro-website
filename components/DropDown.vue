<template>
  <ul id="main">
    <span>{{ heading }}</span>
    <ul class="drop">
      <div>
        <slot />
      </div>
    </ul>
    <div id="icon">➜</div>
  </ul>
</template>

<script>
export default {
  props: {
    heading: { default: '', type: String }
  }
}
</script>

<style scoped lang="scss">
$color: black;
$secondary-color: white;
$background-color: gainsboro;
$secondary-background-color: black;

#main {
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
  cursor: default;

  &:hover {
    background-color: $secondary-background-color;
    color: $secondary-color;
  }
}

.drop {
  overflow: hidden;
  position: absolute;
  width: 100%;
  padding: 0;
  top: calc(100% + 4px);

  div {
    transform: translate(0, -100%);
    transition: all 0.4s 0.05s;

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

#icon {
  transition: all 0.6s ease;
}

@for $i from 1 through 4 {
  #main {
    &:hover ul div {
      transform: translate(0, 0);
    }
    &:hover #icon {
      transform: rotateZ(+90deg);
    }
  }
}
</style>
