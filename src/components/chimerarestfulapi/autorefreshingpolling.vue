<template>
  <div class="example-box">
    <h1>Autorefreshing polling</h1>
    <span v-if="endpoint.loading" class="spinner" />
    <span v-else-if="endpoint.data">
      {{ endpoint.data.name }}
    </span>
    <br />
    <span v-if="endpoint.lastLoaded"
      >Last time loaded: {{ endpoint.lastLoaded.toTimeString() }}</span
    >
  </div>
</template>

<script>
export default {
  chimera: {
    endpoint: {
      url: "https://jsonplaceholder.typicode.com/users/2",
      interval: 4000 // 4 seconds poll interval
    }
  }
};
</script>
