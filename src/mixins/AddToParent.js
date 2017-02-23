module.exports = {
  beforeDestroy() {
    this.removeFromParent();
  },
  methods: {
    afterDeferredMount(parent) {
      this.addToParent(parent);
    },
    addToParent(parent) {
      console.log("Adding to parent...");
      if (this.$lfObj && parent) {
        this.$lfParent = parent;
        if (!this.$lfParent.hasLayer(this.$lfObj)) {
          this.$lfObj.addTo(this.$lfParent);
        }
      }
    },
    removeFromParent() {
      console.log("Removing from parent...");
      var parentObj = null;
      if (this.$lfObj && this.$lfParent) {
        parentObj = this.$lfParent;
        if (this.$lfParent.hasLayer(this.$lfObj)) {
          this.$lfParent.removeLayer(this.$lfObj);
        }
        this.$lfParent = null;
      }
      return parentObj;
    },
  }
}
