<template>
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="contact" />
    <input name="bot-field" style="position: absolute; visibility: hidden;" />
    <div class="section short text-xs">
      <label>Your name:</label>
      <input type="text" name="name" required />
    </div>
    <div class="section short text-xs">
      <label>Your email:</label>
      <input type="email" name="email" required />
    </div>
    <div class="section long text-xs">
      <label>Your message:</label>
      <textarea name="message" required></textarea>
    </div>
    <v-button class="text-xs" type="submit">Go</v-button>
  </form>
</template>

<script>
import Button from '~/components/Button.vue'

export default {
  components: { 'v-button': Button }
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 10px;
  max-width: 700px;

  .section {
    display: flex;
    flex-direction: column;
    padding: 10px 0;

    &.short {
      width: 90%;
      @include tablet-and-up {
        width: 60%;
      }
    }

    &.long {
      width: 100%;
    }

    input,
    textarea {
      font-size: inherit;
      border: 1px solid black;
      border-radius: 5px;
      margin-top: 5px;
      padding: 5px;
    }

    textarea {
      height: 250px;
    }
  }

  button {
    max-width: 120px;
  }
}
</style>
