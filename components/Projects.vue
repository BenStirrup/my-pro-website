<template>
  <div class="projects-container">
    <div class="subtitle text-lg">on the following projects</div>
    <div class="projects">
      <div class="project">
        <div class="card text-sm">
          <div class="card-title semi-bold">
            Roboadvisor for professional investors
          </div>
          <img
            class="card-illustration"
            src="/projects/investor_tools.svg"
            alt="Drawing of a smart phone with a dollar and a piechart"
          />
          <div class="card-description">
            Built a B2B platform advising professional investors on optimal
            portfolio allocations according to performances and own preferences
          </div>
        </div>
      </div>
      <div class="project">
        <div class="card text-sm">
          <div class="card-title semi-bold">
            Travel agents credit insurance platform
          </div>
          <img
            class="card-illustration"
            src="/projects/plane.svg"
            alt="Drawing of a flying plane"
          />
          <div class="card-description">
            Worked on a complex backend architecture with multiple interfaced
            APIs to reduce the lead time of demands from 2 weeks to 5 minutes
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
        -webkit-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.75);
        border: 1px solid black;
        border-radius: 15px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        > div {
          padding: 20px;
        }

        .card-title {
          text-align: center;
          width: 80%;
        }

        .card-illustration {
          max-height: 80px;
        }

        .card-description {
          text-align: left;
          padding-left: 40px;
        }
      }
    }
  }
}
</style>
