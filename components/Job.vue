<template>
  <div class="job-container">
    <div class="heading text-xxl semi-bold">Hello, I'm Benjamin Stirrup.</div>
    <div class="subheading text-lg">
      I am a professional <em>lead web engineer*</em>
    </div>
    <div class="definition text-sm">
      A company's ability to innovate fast has become a matter of survival. To
      address this challenge, I conceive and develop
      <strong>tailor-made web applications</strong> in
      <strong>record time</strong>.
    </div>
    <div class="definition text-xs">
      *An engineer who has the technical knowhow to lead the
      <strong>UI development</strong> across all device types as well as the
      design of complex<strong> back-end architectures</strong>.
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
    max-width: 90%;

    @include tablet-and-up {
      max-width: 70%;
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
