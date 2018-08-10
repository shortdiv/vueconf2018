<template>
  <div class="rice blob">
    <div class="blobby-1"></div>
    <div class="blobby-2"></div>
    <div class="blobby-3"></div>
    <div class="blobby-4"></div>
    <div class="blobby-5"></div>
    <div class="blobby-6"></div>
    <div class="blobby-7"></div>
  </div>
</template>

<script>
  export default {
    name: 'Rice'
  }
</script>

<style lang="scss">
.rice {
  width: 100%;
  height: 4em;
  bottom: 0;
  position: absolute;
  z-index: 3000;
  &.blob {
    background: #f4f4f4;
    border-radius: 50% 50% 0 0;
  }
}
div[class^="blobby-"] {
  position: absolute;
  border-radius: 200px;
  background: #f4f4f4;
  width: 3em;
  height: 3em;
  bottom: 1.5em;
}

.blobby {
  &-1 {
    left: 1em;
  }
  &-2 {
    left: 2.5em;
  }
  &-3 {
    left: 4.5em;
  }
  &-4 {
    left: 5.5em;
  }
  &-5 {
    left: 8.5em;
  }
  &-6 {
    left: 10.5em;
  }
  &-7 {
    left: 12em;
  }
}
</style>