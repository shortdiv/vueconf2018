<template>
  <div>
    <div class="mug">
      <Hot :isHot=isHot />
      <Cold :isIced=isIced />
      <Sugar :spoons=spoons />
      <div class="carafe">
        <water height="10%"></water>
        <milk height="20%"/>
        <tea height="90%"/>
      </div>
    </div>
  </div>
</template>

<script>
import Milk from './components/Milk';
import Tea from './components/Tea';
import Water from './components/Water';
import Sugar from './components/Sugar';
import Cold from './components/Cold';
import Hot from './components/Hot';

export default {
  name: 'App',
  components: {
    Milk,
    Tea,
    Water,
    Sugar,
    Cold,
    Hot,
  },
  data() {
    return {
      spoons: 2,
      isIced: false,
      isHot: true,
    };
  },
};
</script>

<style lang="scss">
body,
html {
  padding-top: 3em;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  /* background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%); */
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

.carafe {
  /*   // position: absolute; */
  min-height: 96px;
  overflow: hidden;
  border-radius: 0.05em 0.05em 2.2em 2.2em;
  background: #fff;
  width: 100%;
  height: 100%;
  transition: all 1s;
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
