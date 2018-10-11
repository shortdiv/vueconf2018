<template>
  <div id="condensation">
    <div class="flake" v-for="flake in 3"></div>
  </div>
</template>

<script>
export default {
  name: "Cold"
};
</script>

<style lang="scss" scoped>
@import "../styles/animations.scss";
.flake {
  position: absolute;
  margin-top: -55px;
  margin-left: 105px;
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
    margin-left: 80px;
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
