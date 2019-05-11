<template>
  <div class="past-jobs-container">
    <div class="title text-xs">I worked with</div>
    <div class="logos">
      <div class="logo-1">
        <img src="/euler_hermes_logo_black.png" alt="Logo of Euler Hermes" />
      </div>
      <div class="logo-2">
        <img src="/sensome_logo_black.png" alt="Logo of Sensome" />
      </div>
      <div class="logo-3">
        <img src="/sipios_logo_black.png" alt="Logo of Sipios" />
      </div>
      <div class="logo-4">
        <img src="/theodo_logo_black.png" alt="Logo of Theodo" />
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
    align-items: center;

    .logo-1,
    .logo-2,
    .logo-3,
    .logo-4 {
      width: 100%;
      padding: 10px;
      display: flex;
      justify-content: center;

      @include tablet-only {
        width: 50%;
      }

      @include desktop-and-up {
        width: 25%;
      }

      img {
        max-width: 150px;
        max-height: 40px;
      }
    }

    .logo-4 {
      img {
        max-height: 30px;
      }
    }
  }
}
</style>
