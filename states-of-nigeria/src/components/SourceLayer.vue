<script>
export default {
  name: "SourceLayer",
  props: {
    mapContext: { type: Object, required: true },
    sourceId: { type: String },
    sourceType: { type: String },
    dataSrc: { type: Object, required: true }
  },
  mounted() {
    this.mapContext.addSource(this.sourceId, {
      type: "geojson",
      data: this.dataSrc
    });
  },
  render() {
    return null;
  }
};
</script>

<style scoped>
</style>
