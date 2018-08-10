<template>
  <div class="veggie">
    <div class="carrot">
      <div class="carrot-top"></div>
      <div class="carrot-bottom"></div>
    </div>
    <div class="carrot">
      <div class="carrot-top"></div>
      <div class="carrot-bottom"></div>
    </div>
    <div class="broccoli">
      <div class="broccoli-stem"></div>
      <div class="broccoli-leaf-left"></div>
      <div class="broccoli-leaf-middle"></div>
      <div class="broccoli-leaf-right"></div>
    </div>
    <div class="broccoli">
      <div class="broccoli-stem"></div>
      <div class="broccoli-leaf-left"></div>
      <div class="broccoli-leaf-middle"></div>
      <div class="broccoli-leaf-right"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Veggies'
  }
</script>

<style lang="scss">
.veggie {
  position: absolute;
  bottom: 2.8em;
  z-index: 4000;
  width: 100%;
  height: 10px;
  & .carrot {
    z-index: 2;
    position: absolute;
    &:nth-child(1) {
      transform: rotate(-30deg);
    }
    &:nth-child(2) {
      transform: rotate(180deg);
      right: 2em;
      bottom: 0em;
    }
    &-top {
      width: 3em;
      height: 1em;
      margin: 0 auto;
      position: absolute;
      border-bottom: none;
      border-radius: 100% 20% 0 0;
      background-color: orange;
      &:before {
        content: '';
        display: block;
        width: 1.8em;
        height: 0.4em;
        position: absolute;
        right: -30px;
        border-radius: 50%;
        background-color: green;
        transform: rotate(-5deg);
        top: 0.1em;
      }
      &:after {
        content: '';
        display: block;
        width: 2.5em;
        height: 0.5em;
        position: absolute;
        top: 12px;
        right: -40px;
        border-radius: 50%;
        background-color: green;
        transform: rotate(10deg);
      }
    }
    &-bottom {
      width: 3em;
      height: 1em;
      margin: 0 auto;
      position: absolute;
      border-bottom: none;
      border-radius: 100% 20% 20% 100%;
      background-color: orange;
      top: 0.5em;
      &:before {
        content: '';
        position: absolute;
        top: -8px;
        right: -5px;
        width: 0.6em;
        height: 1.5em;
        background-color: orange;
        overflow: hidden;
        border-radius: 0 100% 100% 0;
      }
    }
  }
  & .broccoli {
    position: absolute;
    &:nth-child(3) {
      right: 8em;
      bottom: 6.5em;
      transform: translate(0, 4.3em) rotate(28deg);
    }
    &:nth-child(4) {
      z-index: 1;
      right: 2em;
      bottom: 6em;
      transform: translate(0, 4.3em) rotate(140deg);
    }
    &-stem {
      position: absolute;
      height: 0.8em;
      width: 1.6em;
      background: #8CFF98;
      transform-origin: 0% 50%;
    }
    &-leaf-left {
      position: absolute;
      height: 1.5em;
      width: 1.5em;
      border-radius: 50%;
      background: #4B7F52;
      transform: translate(-1em, 0.5em);
    }
    &-leaf-middle {
      position: absolute;
      height: 2em;
      width: 2em;
      border-radius: 50%;
      background: #4B7F52;
      transform: translate(-1.5em, -0.5em);
    }
    &-leaf-right {
      position: absolute;
      height: 1.5em;
      width: 1.5em;
      border-radius: 50%;
      background: #4B7F52;
      transform: translate(-1em, -1em);
    }
  }
}
</style>