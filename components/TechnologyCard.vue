<template>
  <div>
    <a v-if="id" :id="id" :name="id" />
    <card>
      <div class="card-title">
        <img :src="logoSrc" :alt="logoAlt" class="card-logo" />
        <span class="text-md semi-bold">{{ title }}</span>
      </div>
      <div class="card-description text-sm">
        {{ description }}
      </div>
    </card>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  components: { card: Card },
  props: {
    id: { type: String, default: '' },
    logoSrc: { type: String, default: '' },
    logoAlt: { type: String, default: '' },
    title: { type: String, default: '' },
    description: { type: String, default: '' }
  }
}
</script>

<style scoped lang="scss">
.card {
  height: 100%;
  padding: 20px;

  .card-title {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 40px;
      padding-right: 10px;
    }
  }

  .card-description {
    padding-top: 15px;
    padding-left: 10px;
  }
}
</style>
