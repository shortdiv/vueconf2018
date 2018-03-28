<template>
  <div class="milk"></div>
</template>

<script>
export default {
  name: 'milk',
};
</script>

<style lang="scss" scoped>
.milk {
  transform: translateY(400%);
  position: relative;
  background: repeating-linear-gradient(
    45deg,
    white,
    white 10px,
    rgba(225, 207, 149, 1) 10px,
    rgba(225, 207, 149, 1) 20px
  );
  width: 100%;
  height: 20%;
  animation: pour-coffee 2s 1s forwards;
  z-index: 2;
}
</style>
