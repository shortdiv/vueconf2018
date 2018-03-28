<template>
  <div id="cold" v-if='isIced'>
    <div class="flake"></div>
    <div class="flake"></div>
    <div class="flake"></div>
  </div>
</template>

<script>
export default {
  name: 'Cold',
  props: { isIced: { type: Boolean } },
};
</script>


<style lang="scss" scoped>
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
#cold {
  position: absolute;
  margin-left: 50px;
}

.flake {
  position: absolute;
  margin-top: -55px;
  opacity: 0;
  @include risingSteam(15px, 2.5s, 3.4s);
  &:before {
    content: "*";
    position: absolute;
    color: white;
    height: 80px;
    width: 80px;
    margin-top: 0px;
    font-size: 40px;
  }
  &:first-child {
    margin-left: 20px;
    margin-top: -70px;
    @include risingSteam(10px, 2.5s, 3.2s);
  }
  &:last-child {
    margin-left: 40px;
    margin-top: -45px;
    @include risingSteam(20px, 2.5s, 3s);
  }
}
</style>
