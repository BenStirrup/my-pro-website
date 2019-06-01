<template>
  <div class="projects-container">
    <div class="subtitle text-lg">on the following projects</div>
    <div class="projects">
      <div class="project">
        <div class="card text-sm">
          <div class="card-title text-md bold">
            Investment advice platform
          </div>
          <img
            class="card-illustration"
            src="/projects/investor_tools.svg"
            alt="Drawing of a smart phone with a dollar and a piechart"
          />
          <div class="card-description">
            <u>Product:</u> automated investment advice platform (robo-advisor)
          </div>
          <div class="card-description">
            <u>Impact:</u> bank advisors offer investment choices consistent
            with the risk profile and the preferences of their clients
          </div>
        </div>
      </div>
      <div class="project">
        <div class="card text-sm">
          <div class="card-title text-md bold">
            Credit insurance platform
          </div>
          <img
            class="card-illustration"
            src="/projects/plane.svg"
            alt="Drawing of a flying plane"
          />
          <div class="card-description">
            <u>Product:</u> credit insurance platform for travel agents with
            real-time generation of offers
          </div>
          <div class="card-description">
            <u>Impact:</u> travel agents can obtain a trade credit insurance in
            3 minutes, which is essential for the IATA certification required to
            work as a travel agent
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/style/mixins.scss';

.projects-container {
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .subtitle {
    text-align: center;
  }

  .projects {
    padding: 20px 0;
    padding-bottom: 0;
    display: flex;
    flex-wrap: wrap;
    width: 90%;

    @include tablet-and-up {
      padding: 50px 0;
    }

    .project {
      padding: 30px;
      padding-bottom: 0;

      @include tablet-and-up {
        width: 50%;
      }

      .card {
        box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.75);
        border: 1px solid black;
        background: white;
        border-radius: 15px;

        display: flex;
        flex-direction: column;
        align-items: center;

        min-height: 300px;
        @include tablet-only {
          min-height: 400px;
        }
        @include desktop-and-up {
          min-height: 340px;
        }

        > div {
          padding: 15px;
        }

        .card-title {
          text-align: center;
          width: 80%;
        }

        .card-illustration {
          height: 80px;
        }

        .card-description {
          text-align: left;
          padding-left: 40px;
          u {
            text-decoration: none;
            font-weight: bold;
            border-bottom: solid 1.5px black;
          }
        }
      }
    }
  }
}
</style>
