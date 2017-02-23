<template>
</template>

<script>
import L from 'leaflet';
import LeafletObject from '../mixins/LeafletObject.js';
import AddToParent from '../mixins/AddToParent.js';
import Layer from '../mixins/Layer.js';

export default {
    mixins: [LeafletObject, AddToParent, Layer],
    props: [
      'url',
      'attribution',
      'token'
    ],
    methods: {
      createLeafletObject() {
        console.log("Creating tile layer...");
        return L.tileLayer(this.url, {
          attribution: this.attribution,
          token: this.token
        });
      },
      beforeDeferredMount(parent) {
        console.log("Before deferred mount tile layer...");
      },
    }
};
</script>
