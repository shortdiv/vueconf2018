<template>
  <div id="app">
    <BaseMap>
      <template slot-scope="{loaded, mapContext}" v-if="loaded">
        <SourceLayer
          :mapContext="mapContext"
          sourceId="vue-conf"
          sourceType="geojson"
          :dataSrc="vueVenue"
        >
        </SourceLayer>
        <SourceLayer
          :mapContext="mapContext"
          sourceId="neighborhoods"
          sourceType="geojson"
          :dataSrc="neighborhoodsData"
        >
        </SourceLayer>
        <FeatureLayer
          :mapContext="mapContext"
          mapId="vue-conf-venue"
          sourceId="vue-conf"
          layerType="symbol"
          :img="img"
        >
          <feature-popup
            text="Hello Vue Conf!"
          >
            <span>Hello Vue Conf!</span>
          </feature-popup>
        </FeatureLayer>
        <FeatureLayer
          :mapContext="mapContext"
          mapId="NOLA-neighborhoods"
          sourceId="neighborhoods"
          layerType="line"
          :paint="{'line-color': '#877b59','line-width': 1}"
        ></FeatureLayer>
      </template>
    </BaseMap>
  </div>
</template>

<script>
import BaseMap from './components/BaseMap';
import SourceLayer from './components/SourceLayer';
import FeatureLayer from './components/FeatureLayer';
import FeaturePopup from './components/FeaturePopup';

export default {
  name: 'App',
  components: {
    BaseMap,
    FeatureLayer,
    SourceLayer,
    FeaturePopup,
  },
  data() {
    return {
      layout: { 'icon-image': 'star-15' },
      img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/100px-Vue.js_Logo.svg.png',
      vueVenue: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-90.067967, 29.951969],
            },
            properties: {
              name: 'Vue Conf',
            },
          },
        ],
      },
      neighborhoodsData: {},
    };
  },
  created() {
    fetch(
      'https://gist.githubusercontent.com/shortdiv/680d86fcdd40da8c64c0452b17d7fe58/raw/1718abab63fa5170a39eeb0df9676fe30f4125d7/NolaNeighborhoods.geojson',
    )
      .then(res => res.json())
      .then((geojson) => {
        this.neighborhoodsData = geojson;
      });
  },
};
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
</style>
