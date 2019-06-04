<template>
  <div id="contact-page" class="text-sm">
    <p class="heading text-xl semi-bold">
      Two options to contact me
    </p>
    <p>
      1. You can directly schedule a project meeting with your chosen time and
      location by clicking on the button below:
    </p>
    <v-button @click="openCalendlyPopup()">Choose your meeting time</v-button>
    <p>
      2. Or, if you prefer sending me a message, you can use the following
      contact form. I respond within 2 hours.
    </p>
    <contact-form />
  </div>
</template>

<script>
import ContactForm from '~/components/ContactForm.vue'
import Button from '~/components/Button.vue'

export default {
  components: {
    ContactForm,
    'v-button': Button
  },
  methods: {
    openCalendlyPopup() {
      window.Calendly.initPopupWidget({
        url:
          'https://calendly.com/benjamin-stirrup-web-development/project-meeting'
      })
      return false
    }
  }
}
</script>

<style scoped lang="scss">
#contact-page {
  display: flex;
  flex-direction: column;
  align-items: center;

  .heading {
    text-align: center;
  }

  > * {
    margin: 10px 0;
    padding: 10px 20px;
  }

  p {
    max-width: 80%;
    text-align: left;
    @include desktop-and-up {
      max-width: 60%;
    }
  }

  form {
    width: 80%;
  }
}
</style>
