<template>
  <renderlesstags v-model="tags">
    <div slot-scope="{ tags, addTag, removeTag, inputAttrs, inputEvents }">
      <span v-for="tag in tags" :key="tag">
        <span>{{ tag }}</span>
        <button type="button" @click="removeTag(tag)">x</button>
      </span>
      <br />

      <input v-on="inputEvents" v-bind="inputAttrs" />
      <button @click="addTag">Add</button>
    </div>
  </renderlesstags>
</template>

<script>
import renderlesstags from "@/render/renderlesstags";

export default {
  components: {
    renderlesstags
  },
  data() {
    return {
      tags: ["vue", "api"]
    };
  }
};
</script>
