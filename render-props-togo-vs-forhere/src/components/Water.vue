<template>
  <div class="water"></div>
</template>

<script>
export default {
  name: 'water',
};
</script>

<style scoped>
.water {
  transform: translateY(400%);
  position: relative;
  z-index: 1;
  height: 30.000000000000004%;
  width: 100%;
  background-color: #c7e2f2;
  animation: pour-coffee 2s 2s forwards;
}
</style>
