<template>
  <div class="footer-container">
    <div class="footer-content">
      <div class="summary text-xs">
        I am a lead web engineer conceiving and implementing digital solutions
        for clients based in France and in Europe
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/style/mixins.scss';

.footer-container {
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 100%;
  background-color: black;

  @include tablet-and-up {
    height: 300px;
    margin-top: 100px;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    color: white;

    .summary {
      width: 60%;
    }
  }
}
</style>
