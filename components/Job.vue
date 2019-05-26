<template>
  <div class="job-container">
    <div class="text-xxl semi-bold">
      Performance. Scalability. Design.
    </div>
    <div class="text-xxl semi-bold">
      Just for you.
    </div>
    <div class="subheading text-lg">
      Hello, I'm Benjamin Stirrup.
      <br />I am a professional
      <div class="tooltip">
        <em>lead web engineer</em>
        <span class="tooltiptext text-xs"
          >An engineer who has the technical knowhow to lead the
          <strong>UI development</strong> across all device types as well as the
          design of complex<strong> back-end architectures</strong>.</span
        >
      </div>
      based in France, available for work in Europe.
    </div>
    <div class="definition text-sm">
      A company's ability to innovate fast has become a matter of survival. To
      address this challenge, I conceive and develop
      <strong>tailor-made web applications</strong> in
      <strong>record time</strong>.
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
@import '~/assets/style/mixins.scss';

.job-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > div {
    padding: 10px;
  }

  .subheading {
    padding: 20px;
    max-width: 90%;

    @include tablet-and-up {
      max-width: 60%;
    }
  }

  .definition {
    text-align: left;
    padding-left: 40px;
    max-width: 90%;

    @include tablet-and-up {
      max-width: 70%;
    }
  }
}
</style>
