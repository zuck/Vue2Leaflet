<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import L from 'leaflet';
import LeafletObject from '../mixins/LeafletObject.js';
import Visibility from '../mixins/Visibility.js';

const lfEvents = [
  'click',
  'dblclick',
  'mousedown',
  'mouseover',
  'mouseout',
  'contextmenu',
  'add',
  'remove',
  'popupopen',
  'popupclose',
  'tooltipopen',
  'tooltipclose'
];

const lfProps = {
  latLngs: {
    type: Array,
    default: []
  },
  style: {
    type: Object,
  },
  color: {
    type: String,
    custom: true,
    default: 'red'
  }
};

export default {
  mixins: [LeafletObject, Visibility],
  events: lfEvents,
  props: lfProps,
  methods: {
    createLeafletObject() {
      return L.polyline(this.latLngs, { color: this.color });
    },
    setColor(newVal, oldVal) {
      if (newVal == oldVal) return;
      if (newVal) {
        this.$lfObj.setStyle({ color: newVal });
      }
    },
    addLatLng(value) {
      this.$lfObj.addLatLng(value);
    }
  }
};
</script>
