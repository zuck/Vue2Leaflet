<template>
  <div class="map-container">
    <div class="map-container">
      <div id="map">
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import L from 'leaflet';
import LeafletObject from '../mixins/LeafletObject.js';

const lfEvents = [
  'click',
  'dblclick',
  'mousedown',
  'mouseup',
  'mouseover',
  'mouseout',
  'mousemove',
  'contextmenu',
  'focus',
  'blur',
  'preclick',
  'load',
  'unload',
  'viewreset',
  'movestart',
  'move',
  'moveend',
  'dragstart',
  'drag',
  'dragend',
  'zoomstart',
  'zoomend',
  'zoomanim',
  'zoomlevelschange',
  'resize',
  'autopanstart',
  'layeradd',
  'layerremove',
  'baselayerchange',
  'overlayadd',
  'overlayremove',
  'locationfound',
  'locationerror',
  'popupopen',
  'popupclose'
]

const lfProps = {
  center: {
    custom: true,
    default: undefined,
  },
  bounds: {
    custom: true,
    default: undefined,
  },
  zoom: {
    type: Number,
    default: undefined,
  },
  minZoom: {
    type: Number,
    default: undefined,
  },
  maxZoom: {
    type: Number,
    default: undefined,
  },
  paddingBottomRight: {
    custom: true,
    default: null,
  },
  paddingTopLeft: {
    custom: true,
    default: null
  },
  padding: {
    custom: true,
    default: null
  },
  worldCopyJump: {
    type: Boolean,
    default: false
  }
}

export default {
  mixins: [LeafletObject],
  events: lfEvents,
  props: lfProps,
  mounted: function() {
    console.log("Starting deferred mount of map...");
    this.deferredMountedTo(this.$lfObj);
  },
  methods: {
    createLeafletObject() {
      console.log("Creating map...");
      return L.map(this.$el, {
        center: this.center,
        zoom: this.zoom,
        minZoom: this.minZoom,
        maxZoom: this.maxZoom,
        worldCopyJump: this.worldCopyJump
      });
    },
    afterDeferredMount(parent) {
      console.log("After deferred mount map...");
      this.setBounds(this.bounds);
      this.$lfObj.whenReady(function() {
        this.$emit('l-ready')
      }, this);
    },
    setCenter(newVal, oldVal) {
      this.$lfObj.setView(newVal, this.zoom);
    },
    setBounds(newVal, oldVal) {
      if (!(newVal && newVal.isValid())) {
        return;
      }
      var options = {};
      if (this.padding) {
        options.padding = this.padding;
      } else {
        if (this.paddingBottomRight) {
          options.paddingBottomRight = this.paddingBottomRight;
        }
        if (this.paddingTopLeft) {
          options.paddingTopLeft = this.paddingTopLeft;
        }
      }
      this.$lfObj.fitBounds(newVal, options);
    },
    setPaddingBottomRight(newVal, oldVal) {
      this.paddingBottomRight = newVal;
    },
    setPaddingTopLeft(newVal, oldVal) {
      this.paddingTopLeft = newVal;
    },
    setPadding(newVal, oldVal) {
      this.padding = newVal;
    },
  },
}
</script>

<style>
  #map {
    height: 100%;
    width: 100%;
  }
  .map-container {
    height: 100%;
    width: 100%;
  }
</style>
