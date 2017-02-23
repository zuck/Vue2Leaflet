import eventsBinder from '../utils/eventsBinder.js';
import propsBinder from '../utils/propsBinder.js';

module.exports = {
  events: [],
  props: [],
  mounted: function() {
    console.log("Creating leaflet object...");
    this.$lfObj = this.createLeafletObject();
    if (this.$lfObj) {
      console.log("Binding props and events...");
      eventsBinder(this, this.$lfObj, this.events);
      propsBinder(this, this.$lfObj, this.props);
    }
    console.log("Created leaflet object...");
  },
  methods: {
    deferredMountedTo: function(parent) {
      console.log("Before deferred mount of object...");
      this.beforeDeferredMount(parent);
      if (parent) {
        console.log("Starting deferred mount of object children...");
        this.$children.forEach(function(child) {
          if (child.deferredMountedTo) {
            child.deferredMountedTo(parent);
          }
        });
      }
      console.log("After deferred mount of object...");
      this.afterDeferredMount(parent);
    },
    beforeDeferredMount: function(parent) {
      // Do nothing.
    },
    afterDeferredMount: function(parent) {
      // Do nothing.
    }
  }
}
