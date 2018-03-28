<template>
  <div class="container">
    <div class="togo"></div>
    <div class="top"></div>
    <div class="sleeve">
      <transition name="fade">
        <span v-if="temperature >= 80">{{ cautionLabel }}</span>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ToGo',
  props: {
    temperature: {},
  },
  data() {
    return {
      cautionLabel: 'Caution contents may be hot',
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
.togo {
  width: 100px;
  border-top: 250px solid #f5f5f5;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
}

.top {
  width: 170px;
  height: 30px;
  top: -32px;
  right: -10px;
  position: absolute;
  background: #f5f5f5;
  &:before {
    content: "";
    width: 120px;
    height: 20px;
    top: -11px;
    right: 23px;
    position: absolute;
    background: #f5f5f5;
    border-radius: 5px;
  }
}

.sleeve {
  border-top: 80px solid #b28d67;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  position: absolute;
  width: 130px;
  top: 25px;

  & span {
    position: absolute;
    top: -60px;
    text-align: center;
  }
}
.order {
  position: absolute;
  top: 30px;
  right: -100px;
  & span {
    display: block;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
