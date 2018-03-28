<script>
export default {
  name: 'feature-layer',
  props: {
    mapContext: { type: [Object, null], required: true },
    mapId: { type: String, required: true },
    sourceId: { type: String, required: true },
    layout: { type: Object, required: false, default: () => ({}) },
    paint: { type: Object, required: false, default: () => ({}) },
    img: { type: String, required: false },
    layerType: { type: String, required: true },
  },
  provide() {
    return {
      mapContext: this.mapContext,
    };
  },
  data() {
    return {
      map: null,
    };
  },
  render() {
    return <template>{this.$slots.default}</template>;
  },
  methods: {
    addIcon(name, img) {
      this.mapContext.addImage(name, img);
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (this.img) {
        const image = this.img;
        this.mapContext.loadImage(image, (err, img) => {
          this.mapContext.addImage('vue', img);
          this.mapContext.addLayer({
            id: this.mapId,
            source: this.sourceId,
            type: this.layerType,
            layout: {
              'icon-size': 0.5,
              'icon-image': 'vue',
            },
          });
        });
      } else {
        this.mapContext.addLayer({
          id: this.mapId,
          source: this.sourceId,
          type: this.layerType,
          layout: this.layout,
          paint: this.paint,
        });
      }
      this.mapContext.on('mouseenter', 'vue-conf-venue', () => {
        this.mapContext.getCanvas().style.cursor = 'pointer';
      });
      this.mapContext.on('mouseleave', 'vue-conf-venue', () => {
        this.mapContext.getCanvas().style.cursor = '';
      });
      this.mapContext.on('click', 'vue-conf-venue', (event) => {
        this.$emit('layer-clicked', event);
      });
    });
  },
};
</script>
