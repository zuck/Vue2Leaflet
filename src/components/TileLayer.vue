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
      'options'
    ],
    methods: {
      createLeafletObject() {
        console.log("Creating tile layer...");
        return L.tileLayer(this.url, this.options);
      }
    }
};
</script>
