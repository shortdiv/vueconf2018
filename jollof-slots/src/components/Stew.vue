<template>
  <div class="stew">
  </div>
</template>

<script>
  export default {
    name: 'Stew'
  }
</script>

<style scoped>
.stew {
  z-index: 2000;
  background: tomato;
  background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0, 0, 0, 0.1) 10px, rgba(0, 0, 0, 0.1) 20px);
  height: 7em;
  bottom: 0;
  width: 100%;
  position: absolute;
}
</style>