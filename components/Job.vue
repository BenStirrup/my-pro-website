<template>
  <div class="job-container">
    <div class="title text-lg">Hello, I'm Benjamin Stirrup.</div>
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

  @include mobile-only {
    padding-top: 50px;
  }

  .title {
    font-weight: 600;
    padding-bottom: 20px;
  }

  .subtitle {
    padding-bottom: 30px;
  }

  .definition {
    padding-bottom: 10px;
    max-width: 70%;
    text-align: justify;
  }
}
</style>
