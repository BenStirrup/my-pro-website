<template>
  <div id="contact-page">
    <contact-form />
  </div>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue'

export default {
  components: {
    ContactForm
  }
}
</script>

<style scoped lang="scss">
#contact-page {
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 80%;
  }
}
</style>
