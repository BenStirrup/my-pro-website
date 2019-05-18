<template>
  <div class="benefits-container">
    <div class="heading text-lg semi-bold">What makes me different</div>
    <div class="benefits">
      <div class="benefit">
        <img
          src="/benefits/undraw_business_deal.svg"
          alt="Drawing of two people shaking their hands in agreement"
        />
        <div class="benefit-title text-sm semi-bold">
          A team member who challenges your business
        </div>
        <div class="benefit-description text-xs">
          I will challenge with you the definition and the prioritization of
          high valued-added features for your business and which your users
          need.
        </div>
      </div>
      <div class="benefit">
        <img
          src="/benefits/undraw_finish_line.svg"
          alt="Drawing of a woman who just finished a running race"
        />
        <div class="benefit-title text-sm semi-bold">
          Build at lightspeed with Agile and DevOps mindsets
        </div>
        <div class="benefit-description text-xs">
          To build a product in weeks, not months, I ship code as early and as
          regularly as possible, getting user feedback early on and constantly
          measuring the impact of what I am building.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/style/mixins.scss';

.benefits-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .heading {
    padding-bottom: 40px;
    text-align: center;
  }

  .benefits {
    display: flex;
    flex-wrap: wrap;

    .benefit {
      display: flex;
      flex-direction: column;
      align-items: center;

      > * {
        padding: 15px 0;
      }

      @include desktop-and-up {
        width: 50%;
        height: 550px; // Absolute value so that benefit titles are aligned in the flex line
      }

      img {
        height: 200px;

        @include tablet-and-up {
          height: 275px;
        }
      }

      .benefit-title {
        text-align: center;
        width: 80%;
        @include tablet-only {
          width: 60%;
        }
      }

      .benefit-description {
        text-align: justify;
        width: 80%;
        @include tablet-only {
          width: 60%;
        }
      }
    }
  }
}
</style>
