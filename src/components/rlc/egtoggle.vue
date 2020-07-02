<template>
  <div>
    <h1>renderless component demo</h1>
    Toggle 1:
    <renderlesstoggle>
      <div slot-scope="{ on, toggle, getTogglerProps }">
        <ctoggle v-bind="getTogglerProps({ toggle })" />
        <div v-if="on">I'm on!</div>
        <div v-else>I'm off</div>
      </div>
    </renderlesstoggle>
  </div>
</template>

<script>
import renderlesstoggle from "@/render/renderlesstoggle.js";
import ctoggle from "@/components/rlc/ctoggle";

export default {
  name: "",
  components: {
    renderlesstoggle,
    ctoggle
  }
};
</script>
