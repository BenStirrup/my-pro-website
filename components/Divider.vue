<template>
  <div class="divider div-transparent"></div>
</template>

<style lang="scss" scoped>
.divider {
  position: relative;
  margin: 30px 0;
  height: 1px;
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
