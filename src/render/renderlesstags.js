const renderlesstags = {
  props: {
    value: { type: Array, required: true }
  },
  data() {
    return {
      text: ""
    };
  },
  computed: {
    normalizedText() {
      return this.text.trim();
    },
    inputEvents() {
      return {
        input: event => {
          this.text = event.target.value;
        }
      };
    },
    inputAttrs() {
      return {
        value: this.text
      };
    }
  },
  methods: {
    addTag() {
      // Avoid adding empty tags
      if (this.normalizedText.length === 0) {
        return;
      }

      this.$emit("input", [...this.value, this.normalizedText]);
      this.text = "";
    },
    removeTag(tag) {
      this.$emit(
        "input",
        this.value.filter(t => t !== tag)
      );
    }
  },
  render() {
    return this.$scopedSlots.default({
      tags: this.value,
      addTag: this.addTag,
      removeTag: this.removeTag,
      inputEvents: this.inputEvents,
      inputAttrs: this.inputAttrs
    });
  }
};

export default renderlesstags;
