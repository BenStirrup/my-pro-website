<template>
  <div id="landing-page">
    <a id="my-job" name="my-job" />
    <job />
    <divider />
    <a id="past-jobs" name="past-jobs" />
    <past-jobs />
    <projects />
    <divider />
    <a id="benefits" name="benefits" />
    <benefits />
  </div>
</template>

<script>
import Job from '~/components/Job.vue'
import PastJobs from '~/components/PastJobs.vue'
import Projects from '~/components/Projects.vue'
import Benefits from '~/components/Benefits.vue'
import Divider from '~/components/Divider.vue'

export default {
  components: {
    Job,
    PastJobs,
    Projects,
    Divider,
    Benefits
  }
}
</script>

<style scoped lang="scss">
#landing-page {
  display: flex;
  flex-direction: column;
}
</style>
