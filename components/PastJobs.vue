<template>
  <div class="past-jobs-container">
    <div class="title text-lg semi-bold">What I did</div>
    <div class="subtitle text-sm">I worked with the following companies</div>
    <div class="logos">
      <div class="euler-hermes">
        <img
          src="/logos/euler_hermes_logo_black.svg"
          alt="Logo of Euler Hermes"
        />
      </div>
      <div class="candriam">
        <img src="/logos/candriam_logo_black.svg" alt="Logo of Candriam" />
      </div>
      <div class="sensome">
        <img src="/logos/sensome_logo_black.svg" alt="Logo of Sensome" />
      </div>
      <div class="sipios">
        <img src="/logos/sipios_logo_black.svg" alt="Logo of Sipios" />
      </div>
      <div class="theodo">
        <img src="/logos/theodo_logo_black.svg" alt="Logo of Theodo" />
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
    padding-bottom: 50px;
  }

  .subtitle {
    text-align: center;
  }

  .logos {
    padding: 20px 0;
    display: flex;
    flex-wrap: wrap;
    width: 70%;

    .euler-hermes,
    .candriam,
    .sensome,
    .sipios,
    .theodo {
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      @include desktop-and-up {
        width: 20%;
      }

      img {
        max-width: 150px;
        max-height: 40px;
      }
    }

    .theodo {
      img {
        max-height: 25px;
      }
    }

    .euler-hermes,
    .candriam,
    .sensome {
      @include tablet-only {
        width: calc(100% / 3);
      }
    }

    .sipios,
    .theodo {
      @include tablet-only {
        width: 50%;
      }
    }
  }
}
</style>
