<template>
  <div id="app">
    <BaseMap
      :zoom="mapZoom"
    >
      <template slot-scope="{loaded, mapContext}" v-if="loaded">
        <SourceLayer
          :mapContext="mapContext"
          sourceId="nigerianstates"
          sourceType="geojson"
          :dataSrc="stateBoundaries"
        />
        <FeatureLayer 
          :mapContext="mapContext"
          mapId="nigerian-states-fill"
          sourceId="nigerianstates"
          layerType="fill"
          :paint="{ 'fill-color': '#3b8555','fill-opacity': 0.8 }"
        >
          <FeatureEvents
            :onMouseEnter="cursorHover(mapContext, 'pointer', 'nigerian-states-hover')"
            :onMouseLeave="cursorHover(mapContext, '', 'nigerian-states-hover')"
            :onMouseMove="fillHover(mapContext, 'nigerian-states-hover')"
            :onClick="fillClick(mapContext, 'nigerian-states-selected')"
          ></FeatureEvents>
        </FeatureLayer>
        <FeatureLayer
          :mapContext="mapContext"
          mapId="nigerian-states-selected"
          sourceId="nigerianstates"
          layerType="fill"
          :paint="{'fill-color': '#000','fill-opacity': 0.4}"
          :filter="selectedFilter"
        >
        </FeatureLayer>
        <FeatureLayer
          :mapContext="mapContext"
          mapId="nigerian-states-hover"
          sourceId="nigerianstates"
          layerType="fill"
          :paint="{'fill-color': '#fff','fill-opacity': 0.4}"
          :filter="hoverFilter"
        >
        </FeatureLayer>
        <FeatureLayer 
          :mapContext="mapContext"
          mapId="nigerian-states"
          sourceId="nigerianstates"
          layerType="line"
          :paint="{ 'line-color': '#fff','line-width': 1 }"
        >
        </FeatureLayer>
      </template>
    </BaseMap>
  </div>
</template>

<script>
import BaseMap from "./components/BaseMap.vue";
import FeatureLayer from "./components/FeatureLayer.vue";
import SourceLayer from "./components/SourceLayer.vue";
import FeatureEvents from "./components/FeatureEvents.vue";

export default {
  name: "app",
  components: {
    BaseMap,
    SourceLayer,
    FeatureLayer,
    FeatureEvents
  },
  data() {
    return {
      stateBoundaries: null,
      mapZoom: 5,
      mapCenter: [8.675277000000051, 9.081999],
      selectedFilter: ["==", "Name", ""],
      hoverFilter: ["==", "Name", ""]
    };
  },
  created() {
    fetch(
      "https://gist.githubusercontent.com/shortdiv/600c5c8f4998fb55e7dafb7c7835c752/raw/fbe3e7f134d4ca61fb68209bf62207f2f4a386bd/statesOfNigeria.geojson"
    )
      .then(res => res.json())
      .then(data => {
        this.stateBoundaries = data;
      });
  },
  methods: {
    cursorHover(context, cursor, mapId) {
      return function() {
        context.getCanvas().style.cursor = cursor;
        //capture mouse leave only//
        if (cursor === "") {
          context.setFilter(mapId, ["==", "admin1Name", ""]);
        }
      };
    },
    fillHover(context, mapId) {
      return function(e) {
        context.setFilter(mapId, [
          "==",
          "admin1Name",
          e.features[0].properties.admin1Name
        ]);
      };
    },
    fillClick(context, mapId) {
      return function(e) {
        context.setFilter(mapId, [
          "==",
          "admin1Name",
          e.features[0].properties.admin1Name
        ]);
      };
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
