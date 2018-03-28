<template>
  <div>
  <div id="map" ref="map">
    <slot :mapContext="mapContext" :loaded="loaded"></slot>
  </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl';

export default {
  name: 'base-map',
  props: {
    mapStyle: {
      type: String,
      required: false,
      default: 'mapbox://styles/mapbox/light-v8',
    },
    center: {
      type: Array,
      required: false,
      default: () => [-90.071532, 29.951066],
    },
    zoom: {
      type: Number,
      required: false,
      default: 12,
    },
  },
  data() {
    return {
      mapContext: null,
      loaded: false,
    };
  },
  mounted() {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoic2hvcnRkaXYiLCJhIjoiY2l3OGc5YmE5MDJzZjJ5bWhkdDZieGdzcSJ9.1z-swTWtcCHYI_RawDJCEw';

    const map = new mapboxgl.Map({
      container: this.$refs.map, // container id
      style: this.mapStyle, // stylesheet location
      center: this.center,
      zoom: this.zoom, // starting zoom
    });
    this.mapContext = map;

    map.on('load', () => {
      this.loaded = true;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#map {
  width: 1000px;
  height: 800px;
}
</style>
