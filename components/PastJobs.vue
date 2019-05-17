<template>
  <div class="past-jobs-container">
    <div class="heading text-lg semi-bold">What I did</div>
    <div class="paragraph text-sm">I worked with these companies</div>
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
@import '~/assets/style/mixins.scss';

.past-jobs-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .heading {
    padding-bottom: 50px;
  }

  .paragraph {
    text-align: center;
  }

  .logos {
    padding: 30px 0;
    display: flex;
    flex-wrap: wrap;
    width: 70%;

    @include tablet-only {
      width: 80%;
    }

    @include desktop-and-up {
      width: 90%;
      padding: 60px 0;
    }

    .euler-hermes,
    .candriam,
    .sipios,
    .theodo {
      padding: 15px 0;
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

      img {
        max-width: 175px;
        @include tablet-and-up {
          max-width: 225px;
        }
      }
    }

    .theodo {
      img {
        max-height: 40px;
      }
    }
  }
}
</style>
