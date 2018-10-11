<!-- <template>
  <div>
  <slot :currentTemp="currentTemp" />
  </div>
</template> -->

<script>
export default {
  name: "OrderWithScopedSlots",
  props: {
    renderChild: { type: Function }
  },
  data() {
    return {
      currentTemp: "hot"
    };
  },
  render(h) {
    const { currentTemp } = this;
    return <div>{this.$scopedSlots.default({ currentTemp })}</div>;
  }
};
</script>

<style scoped>
</style>