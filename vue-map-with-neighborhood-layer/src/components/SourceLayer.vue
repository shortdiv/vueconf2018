<script>
export default {
  name: 'sourceLayer',
  props: {
    mapContext: {
      required: true,
    },
    sourceId: {
      type: String,
    },
    dataSrc: {
      type: [String, Object],
      required: true,
    },
    sourceType: {
      type: String,
      required: true,
    },
  },
  render() {
    return null;
  },
  mounted() {
    if (this.sourceType === 'geojson') {
      this.mapContext.addSource(this.sourceId, {
        type: 'geojson',
        data: this.dataSrc,
      });
    } else {
      this.mapContext.addSource(this.sourceId, {
        type: 'vector',
        url: this.dataSrc,
      });
    }
  },
};
</script>
