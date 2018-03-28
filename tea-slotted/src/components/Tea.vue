<template>
  <div class="tea"></div>
</template>

<script>
export default {
  name: 'tea',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tea {
  position: relative;
  background-color: #111;
  width: 100%;
  height: 50%;
  bottom: 0;
  animation: pour-coffee 2s;
  z-index: 300;
  border-radius: 0.05em 0.05em 2.2em 2.2em;
}
</style>
