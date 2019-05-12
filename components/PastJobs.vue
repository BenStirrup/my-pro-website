<template>
  <div class="past-jobs-container">
    <div class="title text-xs">I worked with</div>
    <div class="logos">
      <div class="euler-hermes">
        <img
          src="/logos/euler_hermes_logo_black.svg"
          style="max-width: 150px; max-height: 40px"
          alt="Logo of Euler Hermes"
        />
      </div>
      <div class="sensome">
        <img
          src="/logos/sensome_logo_black.svg"
          style="max-width: 150px; max-height: 40px"
          alt="Logo of Sensome"
        />
      </div>
      <div class="sipios">
        <img
          src="/logos/sipios_logo_black.svg"
          style="max-width: 150px; max-height: 40px"
          alt="Logo of Sipios"
        />
      </div>
      <div class="theodo">
        <img
          src="/logos/theodo_logo_black.svg"
          style="max-width: 150px; max-height: 25px"
          alt="Logo of Theodo"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/css/mixins.scss';

.past-jobs-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    padding-bottom: 20px;
  }

  .logos {
    display: flex;
    flex-wrap: wrap;
    width: 60%;

    .euler-hermes,
    .sensome,
    .sipios,
    .theodo {
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      @include tablet-only {
        width: 50%;
      }

      @include desktop-and-up {
        width: 25%;
      }
    }
  }
}
</style>
