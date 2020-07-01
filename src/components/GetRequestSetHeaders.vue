<template>
  <div class="card text-center m-3">
    <h5 class="card-header">GET Request with Set Headers</h5>
    <div class="card-body">Total vue packages: {{ totalVuePackages }}</div>
  </div>
</template>

<script>
export default {
  name: "get-request-set-headers",
  data() {
    return {
      totalVuePackages: null
    };
  },
  created() {
    // GET request using fetch with set headers
    const headers = { "Content-Type": "application/json" };
    fetch("https://api.npms.io/v2/search?q=vue", { headers })
      .then(response => response.json())
      .then(data => (this.totalVuePackages = data.total));
  }
};
</script>
