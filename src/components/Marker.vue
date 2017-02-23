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
  'dragstart',
  'drag',
  'dragend',
  'move',
  'add',
  'remove',
  'popupopen',
  'popupclose',
  'tooltipopen',
  'tooltipclose'
];

const lfProps = {
  draggable: {
    type: Boolean,
    custom: true,
    default: false,
  },
  latLng: {
    type: Object,
  },
  icon: {
    custom: false,
    default: function() { return new L.Icon.Default(); }
  },
};

export default {
  mixins: [LeafletObject, Visibility],
  events: lfEvents,
  props: lfProps,
  methods: {
    createLeafletObject() {
      console.log("Creating marker...");
      const options = {
        draggable: this.draggable
      };
      if (this.icon) {
        options.icon = this.icon;
      }
      return L.marker(this.latLng, options);
    },
    setDraggable(newVal, oldVal) {
      if (this.$lfObj.dragging) {
        newVal ? this.$lfObj.dragging.enable() : this.$lfObj.dragging.disable();
      }
    },
  }
};
</script>
