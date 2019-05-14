<template>
  <div class="job-container">
    <div class="title text-lg semi-bold">Hello, I'm Benjamin Stirrup.</div>
    <div class="subtitle text-md">I am a <em>lead web engineer*</em></div>
    <div class="definition text-xs">
      *An engineer who has the technical knowhow to lead the
      <strong>UI development</strong> across all device types as well as the
      design of complex<strong> back-end architectures</strong>.
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/css/mixins.scss';

.job-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > div {
    padding: 10px;
  }

  .definition {
    text-align: justify;
    max-width: 90%;

    @include tablet-and-up {
      max-width: 70%;
    }
  }
}
</style>
