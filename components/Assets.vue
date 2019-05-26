<template>
  <div class="assets-container">
    <div class="heading text-xxl semi-bold">What makes me different</div>
    <div class="assets">
      <div class="asset">
        <img
          src="/assets/business_deal.svg"
          alt="Drawing of two people shaking their hands in agreement"
        />
        <div class="asset-title text-lg semi-bold">
          A team member who challenges your business
        </div>
        <div class="asset-description text-md">
          I will challenge with you the definition and the prioritization of
          high valued-added features for your business and which your users
          need.
        </div>
      </div>
      <div class="asset">
        <img
          src="/assets/finish_line.svg"
          alt="Drawing of a woman who just finished a running race"
        />
        <div class="asset-title text-lg semi-bold">
          Build at lightspeed with Agile and DevOps mindsets
        </div>
        <div class="asset-description text-md">
          To build a product in weeks, not months, I ship value added features
          every day, getting user feedback early on and constantly measuring the
          impact of what I am building.
        </div>
      </div>
      <div class="asset">
        <img
          src="/assets/programming.svg"
          alt="Drawing of a man in front of multiple computer monitors"
        />
        <div class="asset-title text-lg semi-bold">
          Technical expertise at your service
        </div>
        <div class="asset-description text-md">
          I am adept at developing with frontend JavaScript frameworks
          (React.js, Vue.js) as well as backend frameworks (Django, Spring
          Boot). In addition to my applicative knowledge, I am also experienced
          with analytics, infrastructure and CI/CD.
        </div>
      </div>
      <div class="asset">
        <img
          src="/assets/scrum_board.svg"
          alt="Drawing of a woman and a man in front of a Scrum board"
        />
        <div class="asset-title text-lg semi-bold">
          Gain full transparency into your project
        </div>
        <div class="asset-description text-md">
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

.assets-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .heading {
    padding-bottom: 40px;
    text-align: center;
  }

  .assets {
    display: flex;
    flex-wrap: wrap;

    .asset {
      display: flex;
      flex-direction: column;
      align-items: center;

      > * {
        padding: 15px 0;
      }

      @include desktop-and-up {
        width: 50%;
        height: 550px; // Absolute value so that asset titles are aligned in the flex line
      }

      img {
        height: 200px;
        width: 250px;

        @include tablet-and-up {
          height: 275px;
          width: 375px;
        }
      }

      .asset-title {
        text-align: center;
        width: 80%;
        @include tablet-only {
          width: 60%;
        }
      }

      .asset-description {
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
