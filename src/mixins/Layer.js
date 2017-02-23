module.exports = {
  props: {
    zIndex: {
      type: Number,
      default: 1,
    },
    pane: {
      type: String,
      default: null
    }
  },
  methods: {
    setZIndex(zIndex) {
      if (this.$lfObj) {
        this.$lfObj.setZIndex(zIndex);
      }
    }
  }
}
