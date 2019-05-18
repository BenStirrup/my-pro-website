<template>
  <button @click="$emit('click')">
    <slot />
  </button>
</template>

<style scoped lang="scss">
button {
  position: relative;
  overflow: hidden;
  text-transform: normal;
  border-radius: 5px;
  border: 1.5px solid black;
  padding: 10px 5px;
}

button:after {
  content: '';
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 220px;
  height: 220px;
  margin-left: -110px;
  margin-top: -110px;
  background: white;
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
  background: black;
  color: white;
  opacity: 1;
}
</style>
