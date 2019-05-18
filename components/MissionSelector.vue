<template>
  <div class="mission-selector-container">
    <div class="text-sm">
      You are
    </div>
    <div class="selector">
      <v-button
        v-for="option in options"
        :key="option.id"
        class="option text-xs"
        :class="{ selected: selectedOption.id === option.id }"
        @click="select(option.id)"
      >
        {{ option.buttonText }}
      </v-button>
    </div>
    <div class="mission text-sm">
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
    mission: 'Together, we can can build your digital product at startup speed'
  },
  entrepreneur: {
    id: 'entrepreneur',
    buttonText: 'Entrepreneur',
    mission: 'Together, we can launch your MVP'
  },
  agency: {
    id: 'agency',
    buttonText: 'Agency',
    mission: 'Together, we can accelerate your delivery'
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
@import '~/assets/style/mixins.scss';

.mission-selector-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > div {
    padding-top: 15px;
  }

  .selector {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;

    @include tablet-and-up {
      flex-direction: row;
    }

    .option {
      margin: 10px;
      opacity: 0.4;
      width: 200px;

      @include tablet-and-up {
        width: 250px;
      }

      &.selected {
        opacity: 1;
        background-color: black;
        color: white;
      }
    }
  }

  .mission {
    width: 100%;
    @include tablet-and-up {
      width: 50%;
    }
  }
}
</style>
