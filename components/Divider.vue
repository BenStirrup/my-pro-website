<template>
  <div class="divider div-transparent" :class="{ nomargin: noMargin }" />
</template>

<script>
export default {
  props: {
    noMargin: Boolean
  }
}
</script>

<style lang="scss" scoped>
.divider {
  position: relative;
  margin: 30px 0;
  height: 1px;
  width: 100%;
}

.nomargin {
  margin: 0;
}

.div-transparent:before {
  content: '';
  position: absolute;
  top: 0;
  left: 5%;
  right: 5%;
  width: 90%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(48, 49, 51),
    transparent
  );
}
</style>
