<template>
  <div id="tech-page">
    <div class="tech-section">
      <div class="tech-section-title text-xl semi-bold">Frontend</div>
      <div class="tech-section-content">
        <div class="technology">
          <a id="react" name="react" />
          <card>
            <div class="card-title">
              <img
                class="card-logo"
                src="/technologies/react.svg"
                alt="Logo of React"
              />
              <span class="text-md semi-bold">React.js</span>
            </div>
            <div class="card-description text-sm">
              React is a JavaScript library for building user interfaces. Its
              main contributor is Facebook. React can be used as a base in the
              development of single-page or mobile applications.
            </div>
          </card>
        </div>
        <div class="technology">
          <a id="vue" name="vue" />
          <card>
            <div class="card-title">
              <img
                class="card-logo"
                src="/technologies/vue.svg"
                alt="Logo of Vue"
              />
              <span class="text-md semi-bold">Vue.js</span>
            </div>
            <div class="card-description text-sm">
              Vue is a progressive framework for building user interfaces. The
              core library is focused on the view layer only. However, Vue is
              also perfectly capable of powering sophisticated single-page
              applications.
            </div>
          </card>
        </div>
      </div>
    </div>
    <div class="tech-section">
      <div class="tech-section-title text-xl semi-bold">Backend</div>
      <div class="tech-section-content">
        <div class="technology">
          <a id="django" name="django" />
          <card>
            <div class="card-title">
              <img
                class="card-logo"
                src="/technologies/django.svg"
                alt="Logo of Django"
              />
              <span class="text-md semi-bold">Django</span>
            </div>
            <div class="card-description text-sm">
              Django is a high-level Python web framework that emphasizes
              reusability and "pluggability" of components, less code, low
              coupling, rapid development, and the principle of don't repeat
              yourself.
            </div>
          </card>
        </div>
        <div class="technology">
          <a id="serverless" name="serverless" />
          <card>
            <div class="card-title">
              <img
                class="card-logo"
                src="/technologies/aws_lambda.svg"
                alt="Logo of AWS Lambda"
              />
              <img
                class="card-logo"
                src="/technologies/google_cloud_functions.svg"
                alt="Logo of Google Cloud Functions"
              />
              <img
                class="card-logo"
                src="/technologies/netlify.svg"
                alt="Logo of Netlify"
              />
              <span class="text-md semi-bold">Serverless</span>
            </div>
            <div class="card-description text-sm">
              Serverless computing is an execution model where the cloud
              provider (AWS, Google Cloud or Netlify) is responsible for
              executing a piece of code by dynamically allocating the resources.
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  components: { card: Card }
}
</script>

<style scoped lang="scss">
@import '~/assets/style/mixins.scss';

#tech-page {
  display: flex;
  flex-direction: column;
  align-items: center;

  .tech-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;

    .tech-section-title {
      text-align: center;
      padding: 20px 0;
    }

    .tech-section-content {
      display: flex;
      flex-wrap: wrap;

      .technology {
        padding: 15px 0px;
        width: 100%;
        @include tablet-and-up {
          padding: 15px 20px;
          width: 50%;
        }

        .card {
          padding: 20px;
          min-height: 200px;

          @include tablet-and-up {
            min-height: 240px;
          }

          .card-title {
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              height: 40px;
              padding-right: 10px;
            }
          }

          .card-description {
            padding-top: 15px;
            padding-left: 10px;
          }
        }
      }
    }
  }
}
</style>
