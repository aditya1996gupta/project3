<template>
  <div class="card text-center m-3">
    <h5 class="card-header">GET Request with Error Handling</h5>
    <div class="card-body">Error message: {{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  name: "get-request-error-handling",
  data() {
    return {
      totalVuePackages: null,
      errorMessage: null
    };
  },
  created() {
    // GET request using fetch with error handling
    fetch("https://api.npms.io/v2/invalid-url")
      .then(async response => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        this.totalVuePackages = data.total;
      })
      .catch(error => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });
  }
};
</script>
