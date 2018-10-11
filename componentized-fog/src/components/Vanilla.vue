<template>
  <div class="vanilla"></div>
</template>

<script>
export default {
  name: "Vanilla"
};
</script>


<style lang="scss" scoped>
.vanilla {
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
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
}
</style>