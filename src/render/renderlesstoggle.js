const renderlesstoggle = {
  name: "renderlesstoggle",
  props: {
    initialState: { type: Boolean, default: false }
  },
  data() {
    return {
      state: this.initialState
    };
  },
  methods: {
    set() {
      this.state = true;
    },
    unset() {
      this.state = false;
    },
    toggle() {
      this.state = !this.state;
    },
    getTogglerProps(props = {}) {
      return {
        "aria-expanded": this.state,
        tabIndex: 0,
        ...props
      };
    }
  },
  render() {
    return this.$scopedSlots.default({
      on: this.state,
      set: this.set,
      unset: this.unset,
      toggle: this.toggle,
      getTogglerProps: this.getTogglerProps
    });
  }
};

export default renderlesstoggle;
