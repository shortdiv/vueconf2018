<template>
  <div id="steam">
    <div class="stream" v-for="(steam, index) in 4" key="`steam ${index}`"></div>
  </div>
</template>

<script>
export default {
  name: "Hot"
};
</script>

<style lang="scss">
@import "../styles/animations.scss";

.stream {
  position: absolute;
  transform: rotate(90deg);
  height: 80px;
  width: 80px;
  margin-top: -55px;
  opacity: 0;
  @include risingSteam(15px, 2.5s, 3.4s);

  &:before {
    position: absolute;
    content: "~";
    font-size: 70px;
  }

  &:first-child {
    margin-left: 20px;
    margin-top: -70px;
    @include risingSteam(10px, 2.5s, 3.2s);
  }
  &:last-child {
    margin-left: 40px;
    @include risingSteam(20px, 2.5s, 3s);
  }
}
</style>
