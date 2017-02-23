import AddToParent from './AddToParent.js';

module.exports = {
  mixins: [AddToParent],
  props: {
    content: {
      custom: true,
      default: '',
    }
  },
  methods: {
    afterDeferredMount(parent) {
      this.setContent(this.content, null);
    },
    setContent(newVal, oldVal) {
      if (newVal === oldVal) return;
      if (this.$lfObj) {
        this.content = newVal;
        this.$lfObj.setContent(newVal);
      }
    }
  }
}
