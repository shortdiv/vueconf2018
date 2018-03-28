<template>
  <div class="tea" :style="{height: height}"></div>
</template>

<script>
export default {
  name: 'tea',
  props: {
    height: { type: String },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tea {
  position: relative;
  background-color: #111;
  width: 100%;
  bottom: 0;
  animation: pour-coffee 2s;
  z-index: 300;
  border-radius: 0.05em 0.05em 2.2em 2.2em;
}
</style>
