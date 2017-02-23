import AddToParent from './AddToParent.js';

module.exports = {
  mixins: [AddToParent],
  props: {
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    }
  },
  methods: {
    afterDeferredMount(parent) {
      this.$lfParent = parent;
      this.setVisible(this.visible, !this.visible)
    },
    setVisible(newVal, oldVal) {
      if (newVal == oldVal) return;
      if (newVal) {
        this.addToParent(this.$lfParent);
      } else {
        this.$lfParent = this.removeFromParent();
      }
    }
  }
}
