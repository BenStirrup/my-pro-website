<template>
  <button @click="$emit('click')">
    <slot />
  </button>
</template>

<style scoped lang="scss">
button {
  font-size: inherit;
  position: relative;
  overflow: hidden;
  text-transform: normal;
  border-radius: 5px;
  color: $white;
  background-color: $black;
  border: 1.5px solid $white;
  padding: 10px 5px;
  cursor: pointer;
}

button:after {
  content: '';
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 280px;
  height: 280px;
  margin-left: -140px;
  margin-top: -140px;
  background: $black;
  border-radius: 100%;
  opacity: 0.7;

  transform: scale(0);
}

@keyframes ripple {
  0% {
    transform: scale(0);
  }
  20% {
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
}

button:not(:active):after {
  animation: ripple 1.5s ease-out;
}

/* fixes initial animation run, without user input, on page load. */
button:after {
  visibility: hidden;
}

button:focus:after {
  visibility: visible;
}

button:focus {
  outline: 0;
}

button:hover {
  background: $white;
  color: $black;
  opacity: 1;
  transition: all 0.5s ease;
}

button::-moz-focus-inner {
  border: 0; // Mozilla: remove dotted border on focused buttons
}
</style>
