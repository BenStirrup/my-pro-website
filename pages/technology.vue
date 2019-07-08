<template>
  <div id="tech-page">
    <div class="tech-section">
      <div class="tech-section-title text-xl semi-bold">Frontend</div>
      <div class="tech-section-content">
        <card
          id="react"
          class="two"
          logo-src="/technologies/react.svg"
          logo-alt="Logo of React"
          title="React.js"
          description="React is a JavaScript library for building user interfaces. Its
              main contributor is Facebook. React can be used as a base in the
              development of single-page or mobile applications."
        />
        <card
          id="vue"
          class="two"
          logo-src="/technologies/vue.svg"
          logo-alt="Logo of Vue"
          title="Vue.js"
          description="Vue is a progressive framework for building user interfaces. The
              core library is focused on the view layer only. However, Vue is
              also perfectly capable of powering sophisticated single-page
              applications."
        />
      </div>
    </div>
    <div class="tech-section">
      <div class="tech-section-title text-xl semi-bold">Backend</div>
      <div class="tech-section-content">
        <card
          id="django"
          class="two"
          logo-src="/technologies/django.svg"
          logo-alt="Logo of Django"
          title="Django"
          description="Django is a high-level Python web framework that emphasizes
              reusability and 'pluggability' of components, less code, low
              coupling, rapid development, and the principle of don't repeat
              yourself."
        />
        <card
          id="express"
          class="two"
          logo-src="/technologies/nodejs.svg"
          logo-alt="Logo of Node.js"
          title="Express.js"
          description="Express is fast, unopinionated and flexible Node.js web application framework
          that provides a robust set of features for web and mobile applications"
        />
      </div>
    </div>
    <div class="tech-section">
      <a id="serverless" name="serverless" />
      <div class="tech-section-title text-xl semi-bold">
        Serverless
      </div>
      <div class="tech-section-content">
        <card
          class="three"
          logo-src="/technologies/google_app_engine.svg"
          logo-alt="Logo of Google App Engine"
          title="Google App Engine"
          description="Google App Engine is a Platform as a Service and cloud computing platform
            for developing and hosting web applications in Google-managed data centers."
        />
        <card
          class="three"
          logo-src="/technologies/firebase.svg"
          logo-alt="Logo of Firebase"
          title="Firebase"
          description="Firebase is Google's mobile platform that helps you quickly develop
            high-quality apps with services such as Authentication, Cloud Functions and Firestore
            (NoSQL database)."
        />
        <card
          class="three"
          logo-src="/technologies/netlify.svg"
          logo-alt="Logo of Netlify"
          title="Netlify"
          description="Netlify offers hosting and serverless backend services for static websites.
             It features continuous deployment across a global CDN, serverless form handling,
             and support for AWS Lambda functions."
        />
      </div>
    </div>
    <div class="tech-section">
      <a id="cicd" name="cicd" />
      <div class="tech-section-title text-xl semi-bold">
        CI/CD (Continuous Integration/Deployment)
      </div>
      <div class="tech-section-content">
        <card
          class="two"
          logo-src="/technologies/gitlab.svg"
          logo-alt="Logo of Gitlab"
          title="Gitlab"
          description="GitLab’s industry leading CI capabilities helps delivery teams
              fully embrace continuous integration to automate the builds,
              integration and verification of their code."
        />
        <card
          class="two"
          logo-src="/technologies/google_cloud_build.svg"
          logo-alt="Logo of Google Cloud Build"
          title="Google Cloud Build"
          description="A fully managed continuous integration, delivery, & deployment platform
             that lets you build, test, and deploy on Google Cloud Platform infrastructure."
        />
      </div>
    </div>
    <div class="tech-section">
      <a id="databases" name="databases" />
      <div class="tech-section-title text-xl semi-bold">
        Databases
      </div>
      <div class="tech-section-content">
        <card
          class="two"
          logo-src="/technologies/postgresql.svg"
          logo-alt="Logo of PostgreSQL"
          title="PostgreSQL"
          description="PostgreSQL is a powerful, open source object-relational database system with over 30 years of
             active development that has earned it a strong reputation for reliability, feature robustness, and performance"
        />
        <card
          class="two"
          logo-src="/technologies/firestore.svg"
          logo-alt="Logo of Firestore"
          title="Firestore (NoSQL)"
          description="Firebase's (and Google's) Cloud Firestore is a NoSQL document database that lets you easily store, sync,
             and query data for your mobile and web apps - at global scale."
        />
      </div>
    </div>
  </div>
</template>

<script>
import TechnologyCard from '~/components/TechnologyCard.vue'

export default {
  components: { card: TechnologyCard }
}
</script>

<style scoped lang="scss">
#tech-page {
  display: flex;
  flex-direction: column;
  align-items: center;

  .tech-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    padding-bottom: 20px;
    @include tablet-and-up {
      padding-bottom: 50px;
    }

    .tech-section-title {
      text-align: center;
      padding-bottom: 20px;
    }

    .tech-section-content {
      display: flex;
      flex-wrap: wrap;

      .two,
      .three {
        min-height: 200px;
        padding: 15px 0px;
        width: 100%;
      }

      .two {
        @include tablet-and-up {
          width: 50%;
          min-height: 240px;
          padding: 15px 20px;
        }
      }

      .three {
        @include tablet-and-up {
          width: 33%;
          min-height: 280px;
          padding: 15px 10px;
        }
      }
    }
  }
}
</style>
