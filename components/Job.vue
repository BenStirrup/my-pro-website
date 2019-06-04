<template>
  <div class="job-container">
    <div class="heading text-xxl semi-bold">
      Performance. Scalability. Design.
    </div>
    <div class="heading text-xxl semi-bold">
      At lightspeed.
    </div>
    <div class="subheading text-lg">
      <span> I am a </span>
      <span class="tooltip">
        <em>lead web engineer</em>
        <span class="tooltiptext text-xs"
          >An engineer who has the technical knowhow to lead the
          <strong>UI development</strong> across all device types as well as the
          design of complex<strong> back-end architectures</strong>.</span
        >
      </span>
      : I conceive and develop
      <strong>tailor-made web applications</strong> in
      <strong>record time</strong> for my French and European clients.
    </div>
    <mission-selector />
  </div>
</template>

<script>
import MissionSelector from '~/components/MissionSelector.vue'

export default {
  components: {
    MissionSelector
  }
}
</script>

<style scoped lang="scss">
.job-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .heading {
    padding: 10px;
  }

  .subheading {
    padding-top: 50px;
    max-width: 90%;
    @include tablet-and-up {
      padding-top: 80px;
      max-width: 60%;
    }
  }
}
</style>
