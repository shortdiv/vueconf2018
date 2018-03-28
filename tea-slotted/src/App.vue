<template>
  <div class="mug">
    <carafe>
      <water slot="water"></water>
      <milk slot="milk"></milk>
      <tea slot="tea"></tea>
    </carafe>
  </div>
</template>

<script>
import Carafe from './components/Carafe';
import Milk from './components/Milk';
import Tea from './components/Tea';
import Water from './components/Water';

export default {
  name: 'App',
  components: {
    Carafe,
    Milk,
    Tea,
    Water,
  },
};
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
.mug {
  width: 8em;
  height: 6em;
  border-radius: 0.05em 0.05em 3em 3em;
  border: 10px solid #c6c6c6;
  position: relative;
  margin: 0 auto;
  margin-bottom: 5em;

  &:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 2em;
    right: 0;
    margin-right: -2.5em;
    top: 1em;
    border-radius: 0.05em 3em 3em 0.5em;
    border: 10px solid #c6c6c6;
  }

  &.tallmug {
    width: 8em;
    height: 10em;
    border-radius: 0.05em 0.05em 3em 3em;
    border: 10px solid #c6c6c6;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 20px;
      height: 4em;
      right: 0;
      margin-right: -2.5em;
      top: 2em;
      border-radius: 0.05em 3em 3em 0.5em;
      border: 10px solid #c6c6c6;
    }
  }
}
.milk {
  transform: translateY(400%);
  position: relative;
  background: repeating-linear-gradient(
    45deg,
    white,
    white 10px,
    rgba(225, 207, 149, 1) 10px,
    rgba(225, 207, 149, 1) 20px
  );
  width: 100%;
  height: 20%;
  animation: pour-coffee 2s 1s forwards;
  z-index: 2;
}
@keyframes pour-coffee {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
