<template>
  <div class="meat">
    <div class="chicken">
      <div class="drumstick-meat"></div>
      <div class="drumstick-leg"></div>
      <div class="drumstick-left"></div>
      <div class="drumstick-right"></div>
    </div>
    <div class="chicken">
      <div class="drumstick-meat"></div>
      <div class="drumstick-leg"></div>
      <div class="drumstick-left"></div>
      <div class="drumstick-right"></div>
    </div>
    <div class="chicken">
      <div class="drumstick-meat"></div>
      <div class="drumstick-leg"></div>
      <div class="drumstick-left"></div>
      <div class="drumstick-right"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Meat'
  }
</script>

<style lang="scss">
.meat {
  position: absolute;
  bottom: 2.8em;
  z-index: 4000;
  width: 100%;
  height: 10px;
  & .chicken {
    position: absolute;
    &:nth-child(1) {
      transform: rotate(210deg);
      right: 2em;
      bottom: 0em;
    }
    &:nth-child(2) {
      transform: rotate(20deg);
      bottom: 2em;
      left: 1em;
    }
    &:nth-child(3) {
      transform: rotate(-25deg);
      right: 11em;
      bottom: 0em;
    }
    .drumstick-leg {
    background-color: white;
    width: 3em;
    height: 0.7em;
    border-radius: 30%;
    position: absolute;
  }
    .drumstick-left {
      background-color: white;
      width: 1em;
      height: 1em;
      border-radius: 50%;
      position: absolute;
      top: 5px;
      left: -0.5em;
    }
    .drumstick-right {
      background-color: white;
      width: 1em;
      height: 1em;
      border-radius: 50%;
      position: absolute;
      top: -0.5em;
      left: -0.5em;
    }
    .drumstick-meat {
      background-color: #8A2E00;
      width: 4em;
      height: 2.5em;
      border-radius: 50%;
      position: absolute;
      top: -1em;
      left: 25px;
      z-index: 1;
    }
  }
}
</style>