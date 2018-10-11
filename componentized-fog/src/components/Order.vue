<script>
export default {
  name: "Order",
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
    return (
      <div>
        {this.renderChild({
          currentTemp
        })}
      </div>
    );
  }
};
</script>

<style scoped>
</style>