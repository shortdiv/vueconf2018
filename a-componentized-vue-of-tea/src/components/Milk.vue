<template>
  <div class="milk" :style="{height: height}"></div>
</template>

<script>
export default {
  name: 'milk',
  props: {
    height: { type: String },
  },
};
</script>

<style lang="scss">
.milk {
  transform: translateY(1000%);
  position: relative;
  background: repeating-linear-gradient(
    45deg,
    white,
    white 10px,
    rgba(225, 207, 149, 1) 10px,
    rgba(225, 207, 149, 1) 20px
  );
  width: 100%;
  animation: pour-coffee 2s 1s forwards;
  z-index: 2;
}
</style>
