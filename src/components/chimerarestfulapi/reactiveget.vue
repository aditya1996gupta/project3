<template>
  <div class="example-box">
    <h1>Reactive GET</h1>
    User ID: <input v-model="id" type="number" />
    <br />
    <span v-if="reactiveGet.loading" class="spinner" />
    <span v-else-if="reactiveGet.data">
      {{ reactiveGet.data.name }}
    </span>
    <br />
  </div>
</template>

<script>
export default {
  name: "example-box",
  data() {
    return {
      id: 1
    };
  },
  chimera: {
    reactiveGet() {
      return "https://jsonplaceholder.typicode.com/users/" + this.id;
    }
  }
};
</script>
