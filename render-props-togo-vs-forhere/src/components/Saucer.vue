<template>
  <div class="saucer"></div>
</template>

<script>
export default {
  name: 'saucer',
};
</script>

<style lang="scss" scoped>
.saucer {
  position: absolute;
  background: #c6c6c6;
  width: 180px;
  height: 10px;
  border-radius: 35%/100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-top: 15px;
  right: -30px;
}
</style>
