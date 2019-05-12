<template>
  <div class="benefits-container">
    <div class="title text-md">What I offer you</div>
    <div class="benefit">
      <img
        class="benefit-illustration"
        src="/benefits/undraw_business_deal.svg"
        alt="Drawing of two people shaking their hands in agreement"
      />
      <div class="benefit-title text-sm">
        A team member who challenges your business
      </div>
      <div class="benefit-description text-xs">
        I will challenge with you the definition and the prioritization of high
        valued-added features for your business and which your users need.
      </div>
    </div>
    <div class="benefit">
      <img
        class="benefit-illustration"
        src="/benefits/undraw_finish_line.svg"
        alt="Drawing of a woman who just finished a running race"
      />
      <div class="benefit-title text-sm">
        Build at lightspeed with Agile and DevOps mindsets
      </div>
      <div class="benefit-description text-xs">
        To build a product in weeks, not months, I ship code as early and as
        regularly as possible, getting user feedback early on and constantly
        measuring the impact of what I am building.
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/css/mixins.scss';

.benefits-container {
  display: flex;
  flex-wrap: wrap;
  margin: auto;

  .title {
    font-weight: 600;
    width: 100%;
    text-align: center;
  }

  .benefit {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: 20px;
    width: 90%;

    @include desktop-and-up {
      width: 50%;
      height: 520px; // Absolute value so that benefit titles are aligned in the flex line
    }

    .benefit-illustration {
      padding-bottom: 20px;
      max-width: 300px;
      max-height: 300px;

      @include mobile-only {
        max-width: 225px;
        max-height: 225px;
      }

      @include tablet-only {
        max-width: 250px;
        max-height: 250px;
      }

      @include desktop-and-up {
        width: 300px; // Absolute value so that benefit titles are aligned in the flex line
        height: 300px;
      }
    }

    .benefit-title {
      text-align: center;
      font-weight: 600;
      padding-bottom: 20px;
    }

    .benefit-description {
      text-align: justify;
      width: 90%;
    }
  }
}
</style>
