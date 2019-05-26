<template>
  <div class="footer-container">
    <div class="footer-content">
      <div class="left-pane">
        <div class="summary text-xs">
          I am a lead web engineer based in France. I conceive and implement
          digital solutions for clients based everywhere in France and Europe.
        </div>
      </div>
      <div class="right-pane">
        <div class="navigation-heading semi-bold text-lg">
          Navigation
        </div>
        <div class="navigation-content text-xs">
          <div class="navigation-column">
            <a @click="goTo('/', '#my-job')">What I do</a>
            <a @click="goTo('/', '#past-jobs')">They trust me</a>
            <a @click="goTo('/', '#assets')">My assets</a>
          </div>
          <div class="navigation-column">
            <a @click="goToExternal('medium.com/@benjamin.stirrup')">Blog</a>
            <a @click="goTo('/contact')">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LinkMixin from '~/mixins/link.vue'

export default {
  mixins: [LinkMixin]
}
</script>

<style scoped lang="scss">
@import '~/assets/style/mixins.scss';

.footer-container {
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: black;

  @include tablet-and-up {
    height: 250px;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    color: white;
    @include tablet-and-up {
      flex-direction: row;
    }

    .left-pane,
    .right-pane {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 175px;
      @include tablet-and-up {
        width: 50%;
        height: 200px;
      }
    }

    .left-pane {
      order: 2;
      @include tablet-and-up {
        order: 1;
        border-right: 1px solid white;
      }
      .summary {
        width: 60%;
      }
    }

    .right-pane {
      flex-direction: column;
      border-bottom: 1px solid white;
      order: 1;
      @include tablet-and-up {
        order: 2;
        border-bottom: none;
      }

      .navigation-heading {
        padding-bottom: 20px;
      }

      .navigation-content {
        display: flex;

        .navigation-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0 20px;

          a {
            padding: 5px;
          }
        }
      }
    }
  }
}
</style>
