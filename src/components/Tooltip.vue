<template>
</template>

<script>
import L from 'leaflet';
import LeafletObject from '../mixins/LeafletObject.js';
import AddToParent from '../mixins/AddToParent.js';
import ContentEditable from '../mixins/ContentEditable.js';

const lfEvents = [
  'add',
  'remove',
  'popupopen',
  'popupclose',
  'tooltipopen',
  'tooltipclose'
];

export default {
  mixins: [LeafletObject, AddToParent, ContentEditable],
  events: lfEvents,
  methods: {
    createLeafletObject() {
      return L.tooltip();
    },
    addToParent(parent) {
      if (this.$lfObj && parent && parent.$lfObj) {
        this.$lfParent = parent.$lfObj;
        this.$lfParent.bindTooltip(this.$lfObj);
      }
    },
    removeFromParent() {
      var parentObj = null;
      if (this.$lfObj && this.$lfParent && this.$lfParent.getTooltip() === this.$lfObj) {
        parentObj = this.$lfParent;
        this.$lfParent.unbindTooltip();
      }
      this.$lfParent = null;
      return parentObj;
    }
  }
};
</script>
