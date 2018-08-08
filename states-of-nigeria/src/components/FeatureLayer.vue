<script>
export default {
  name: "feature-layer",
  props: {
    mapContext: { type: Object },
    mapId: { type: String, required: true },
    sourceId: { type: String, required: true },
    layout: { type: Object, required: false, default: () => ({}) },
    paint: { type: Object, required: false, default: () => ({}) },
    layerType: { type: String },
    filter: { type: Array, required: false, default: () => [] }
  },
  provide() {
    return {
      mapContext: this.mapContext,
      mapId: this.mapId
    };
  },
  mounted() {
    this.mapContext.addLayer({
      id: this.mapId,
      source: this.sourceId,
      type: this.layerType,
      layout: this.layout,
      paint: this.paint
    });
    if (this.filter.length !== 0) {
      this.mapContext.setFilter(this.mapId, this.filter);
    }
  },
  render() {
    return <template>{this.$slots.default}</template>;
  }
};
</script>

<style scoped>
</style>
