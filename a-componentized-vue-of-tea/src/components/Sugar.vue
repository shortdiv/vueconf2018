<template>
  <div class="sweetness">
    <div class="spoon" v-for="(spoon,index) in spoons" :key="`spoon--${index}`">
      <div class="sugar"></div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'sugar',
  props: { spoons: { type: Number } },
};
</script>


<style lang="scss" scoped>
.sweetness {
  position: absolute;
  right: 10px;
}

.sugar {
  top: 68px;
  left: -6px;
  position: relative;
  width: 8px;
  height: 40px;
  border-radius: 10px;
  background: #fff;
  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 10px;
    background: #fff;
  }
  &:before {
    top: 8px;
    left: -8px;
  }
  &:after {
    top: 19px;
    left: -10px;
    height: 15px;
    width: 15px;
  }
}
.spoon {
  position: relative;
  right: -65px;
  top: 0;
  margin-top: -100px;
  transform: rotate(70deg);
  width: 8px;
  height: 60px;
  background: #c6c6c6;
  border-radius: 30px;
  border-bottom-left-radius: 35px 150px;
  border-bottom-right-radius: 35px 150px;
  &:after {
    content: "";
    position: absolute;
    transform: rotate(90deg);
    background-color: #c6c6c6;
    width: 50px;
    height: 12px;
    border-radius: 50% / 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    bottom: -33px;
    left: -15px;
  }
}
</style>
