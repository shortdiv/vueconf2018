<template>
  <div class="chili">
    <div class="chili-top"></div>
  </div>
</template>

<script>
  export default {
    name: 'Chili'
  }
</script>

<style lang="scss">
.chili {
  z-index: 2;
  transform: rotate(33deg);
  top: -61px;
  right: 0;

  &-top {
    background: transparent;
    height: 2em;
    width: 4em;
    border-radius: 50% 0;
    box-shadow: 8px 0 0 -1px crimson;
    position: relative;
      &:before {
        content: '';
        display: block;
        width: 0.8em;
        height: 0.2em;
        position: absolute;
        right: -11px;
        border-radius: 0 50% 50% 0;
        background-color: green;
        -webkit-transform: rotate(-5deg);
        transform: rotate(-89deg);
        top: -0.4em;
        z-index: 1;
      }
    }
}
</style>