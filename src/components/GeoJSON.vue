<template>
</template>

<script>
import L from 'leaflet';
import LeafletObject from '../mixins/LeafletObject.js';
import AddToParent from '../mixins/AddToParent.js';

export default {
  mixins: [LeafletObject, AddToParent],
  props: [
    'geojson',
    'options'
  ],
  methods: {
    createLeafletObject() {
      console.log("Creating GeoJSON...");
      return L.geoJSON(null, this.options);
    },
    afterDeferredMount(parent) {
      this.addGeoJSONData(this.geojson);
    },
    addGeoJSONData(geojsonData) {
      if (this.$lfObj) {
        this.$lfObj.addData(geojsonData);
      }
    },
    getGeoJSONData() {
      if (this.$lfObj) {
        return this.$lfObj.toGeoJSON();
      }
      return null;
    },
    getBounds() {
      if (this.$lfObj) {
        return this.$lfObj.getBounds();
      }
      return null;
    }
  }
};
</script>
