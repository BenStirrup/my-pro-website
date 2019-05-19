<template>
  <div class="benefits-container">
    <div class="heading text-lg semi-bold">What makes me different</div>
    <div class="benefits">
      <div class="benefit">
        <img
          src="/benefits/business_deal.svg"
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
          src="/benefits/finish_line.svg"
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
      <div class="benefit">
        <img
          src="/benefits/programming.svg"
          alt="Drawing of a man in front of multiple computer monitors"
        />
        <div class="benefit-title text-sm semi-bold">
          Technical expertise at your service
        </div>
        <div class="benefit-description text-xs">
          I am adept at developing with frontend JavaScript frameworks
          (React.js, Vue.js) as well as backend frameworks (Django, Spring
          Boot). In addition to my applicative knowledge, I am also experienced
          with analytics, infrastructure and CI/CD.
        </div>
      </div>
      <div class="benefit">
        <img
          src="/benefits/scrum_board.svg"
          alt="Drawing of a woman and a man in front of a Scrum board"
        />
        <div class="benefit-title text-sm semi-bold">
          Gain full transparency into your project
        </div>
        <div class="benefit-description text-xs">
          No hiding behind technical language, no surprise delays at the end of
          projects, no ambiguous expectation setting. I make sure everyone is on
          the same page, working towards the success we defined together.
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
        width: 250px;

        @include tablet-and-up {
          height: 275px;
          width: 375px;
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
        text-align: left;
        padding-left: 20px;
        width: 80%;
        @include tablet-only {
          width: 60%;
        }
      }
    }
  }
}
</style>
