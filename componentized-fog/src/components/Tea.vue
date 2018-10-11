<template>
  <div class="tea"></div>
</template>

<script>
export default {
  name: "Tea"
};
</script>

<style scoped>
.tea {
  position: relative;
  background-color: #361713;
  width: 100%;
  height: 50%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
  border-radius: 0.05em 0.05em 2.2em 2.2em;
}
</style>