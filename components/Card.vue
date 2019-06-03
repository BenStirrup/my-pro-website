<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 15px;
  background: white;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.75);
}
</style>
