<template>
  <div class="water" :style="{height: height}"></div>
</template>

<script>
export default {
  name: 'water',
  props: {
    height: { type: String },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.water {
  transform: translateY(1000%);
  position: relative;
  z-index: 1;
  width: 100%;
  background-color: #c7e2f2;
  animation: pour-coffee 2s 2s forwards;
}
</style>
