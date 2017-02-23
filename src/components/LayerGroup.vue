<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import L from 'leaflet';
import LeafletObject from '../mixins/LeafletObject.js';
import Visibility from '../mixins/Visibility.js';

export default {
  mixins: [LeafletObject, Visibility],
  methods: {
    createLeafletObject() {
      console.log("Creating layer group...");
      return L.layerGroup();
    }
  }
};
</script>
