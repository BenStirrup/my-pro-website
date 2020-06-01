<template>
  <div class="mission-selector-container text-lg">
    <div>
      You are
    </div>
    <div class="selector">
      <v-button
        v-for="option in options"
        :key="option.id"
        :class="{ selected: selectedOption.id === option.id }"
        @click="select(option.id)"
        class="option"
      >
        {{ option.buttonText }}
      </v-button>
    </div>
    <div class="text">
      {{ selectedOption.mission }}
    </div>
  </div>
</template>

<script>
import Button from '~/components/Button.vue'

const options = {
  corporate: {
    id: 'corporate',
    buttonText: 'Corporate innovator',
    mission: 'Together, we can build your digital product at startup speed.'
  },
  entrepreneur: {
    id: 'entrepreneur',
    buttonText: 'Entrepreneur',
    mission: 'Together, we can launch your MVP.'
  },
  agency: {
    id: 'agency',
    buttonText: 'Agency',
    mission: 'Together, we can accelerate your delivery.'
  }
}

export default {
  components: { 'v-button': Button },
  data() {
    return {
      options,
      selectedOption: options.entrepreneur
    }
  },
  methods: {
    select(id) {
      this.selectedOption = options[id] ? options[id] : options.entrepreneur
    }
  }
}
</script>

<style scoped lang="scss">
.mission-selector-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding-top: 20px;

  > div {
    padding-top: 30px;
  }

  .selector {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;

    @include tablet-and-up {
      flex-direction: row;
      flex-wrap: wrap;
    }

    .option {
      margin: 10px;
      opacity: 0.4;
      width: 200px;

      @include tablet-and-up {
        width: 30%;
      }

      &.selected {
        opacity: 1;
        background-color: $white;
        color: $black;
      }
    }
  }

  .text {
    width: 80%;
    @include tablet-and-up {
      width: 70%;
    }
  }
}
</style>
