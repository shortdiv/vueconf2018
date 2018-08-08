<template>
  <div class="map" ref="basemap">
    <slot :mapContext="mapContext" :loaded="loaded"></slot>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
export default {
  name: "BaseMap",
  props: {
    mapStyle: {
      type: String,
      required: false,
      default: "mapbox://styles/mapbox/light-v8"
    },
    center: {
      type: Array,
      required: false,
      default: () => [8.675277000000051, 9.081999]
    },
    zoom: {
      type: Number,
      required: false,
      default: 12
    }
  },
  data() {
    return {
      mapContext: null,
      loaded: false
    };
  },
  methods: {},
  mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2hvcnRkaXYiLCJhIjoiY2l3OGc5YmE5MDJzZjJ5bWhkdDZieGdzcSJ9.1z-swTWtcCHYI_RawDJCEw";

    const map = new mapboxgl.Map({
      container: this.$refs.basemap, // container id
      style: this.mapStyle, // stylesheet location
      center: this.center,
      zoom: this.zoom // starting zoom
    });

    this.mapContext = map;

    map.on("load", () => {
      this.loaded = true;
    });
  }
};
</script>

<style lang="scss">
@import url("https://api.tiles.mapbox.com/mapbox-gl-js/v0.47.0/mapbox-gl.css");
.map {
  width: 1000px;
  height: 800px;

  & canvas {
    position: relative !important;
  }
}
</style>
