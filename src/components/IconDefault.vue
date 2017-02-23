<template>
</template>

<script>
import L from 'leaflet';
import LeafletObject from '../mixins/LeafletObject.js';

const lfProps = {
  imagePath: {
    type: String,
    custom: true,
    default: "",
  }
};

export default {
  mixins: [LeafletObject],
  props: lfProps,
  methods: {
    createLeafletObject() {
      this.setImagePath(this.imagePath, null);
      return null;
    },
    setImagePath(newVal, oldVal) {
      L.Icon.Default.imagePath = newVal;
    },
  }
};
</script>
