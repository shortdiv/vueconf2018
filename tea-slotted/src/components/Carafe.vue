<template>
  <div class="carafe">
    <slot name="water"></slot>
    <slot name="milk"></slot>
    <slot name="tea"></slot>
  </div>
</template>

<script>
export default {
  name: 'carafe',
  render(renderChildren) {
    return renderChildren(
      'div',
      {
        class: ['carafe'],
      },
      this.$slots.default,
    );
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
