<template>
  <div class="mug">
    <Cold v-if="isIced"/>
    <Hot v-else />
    <div class="contents">
    <Milk />
    <Vanilla />
    <Tea></Tea>
    </div>
    <!-- <slot></slot> -->
  </div>
</template>

<script>
import Tea from "./Tea.vue";
import Milk from "./Milk.vue";
import Vanilla from "./Vanilla.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

export default {
  name: "Mug",
  components: {
    Tea,
    Milk,
    Vanilla,
    Hot,
    Cold
  },
  props: {
    isIced: { type: Boolean }
  }
};
</script>

<style lang="scss">
@mixin risingSteam($dist, $duration, $delay) {
  animation: move-and-fade $duration linear infinite;
  animation-delay: $delay;

  @keyframes move-and-fade {
    0% {
      opacity: 0;
      transform: translateY(0) rotate(90deg);
    }
    50% {
      opacity: 0.5;
    }
    75% {
      opacity: 0;
    }
    100% {
      transform: translateY(-$dist) rotate(90deg);
      opacity: 0;
    }
  }
}

@keyframes pour-tea {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
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
}
.contents {
  overflow: hidden;
  /*   // position: absolute; */
  // min-height: 96px;
  border-radius: 0.05em 0.05em 2.2em 2.2em;
  background: #c6c6c6;
  width: 100%;
  height: 100%;
  transition: all 1s;
}
</style>
