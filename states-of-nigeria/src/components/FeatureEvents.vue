<script>
export default {
  name: "FeatureEvents",
  props: {
    onMouseEnter: { type: Function },
    onMouseLeave: { type: Function },
    onMouseMove: { type: Function },
    onClick: { type: Function }
  },
  inject: ["mapContext", "mapId"],
  mounted() {
    this.mapContext.on("mouseenter", this.mapId, () => {
      this.onMouseEnter();
    });
    this.mapContext.on("mouseleave", this.mapId, () => {
      this.onMouseLeave();
    });
    this.mapContext.on("mousemove", this.mapId, e => {
      this.onMouseMove(e);
    });
    this.mapContext.on("click", this.mapId, e => {
      this.onClick(e);
    });
  },
  render() {
    return null;
  }
};
</script>

<style scoped>
</style>
