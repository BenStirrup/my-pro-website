<template>
  <div class="projects-container">
    <div class="subtitle text-sm">on the following projects</div>
    <div class="projects">
      <div class="project">
        <div class="card">
          <div class="card-title text-xs semi-bold">
            Roboadvisor for professional investors
          </div>
          <font-awesome-icon class="icon text-xxxl" icon="comments-dollar" />
          <div class="card-description text-xs">
            Built a B2B platform advising professional investors on optimal
            portfolio allocations according to performances and own preferences
          </div>
        </div>
      </div>
      <div class="project">
        <div class="card">
          <div class="card-title text-xs semi-bold">
            Travel agents credit insurance platform
          </div>
          <font-awesome-icon class="icon text-xxxl" icon="plane-departure" />
          <div class="card-description text-xs">
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

        .card-description {
          text-align: left;
          padding-left: 40px;
        }
      }
    }
  }
}
</style>
