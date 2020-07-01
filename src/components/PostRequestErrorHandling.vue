<template>
  <div class="card text-center m-3">
    <h5 class="card-header">POST Request with Error Handling</h5>
    <div class="card-body">Error message: {{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  name: "post-request-error-handling",
  data() {
    return {
      postId: null,
      errorMessage: null
    };
  },
  created() {
    // POST request using fetch with error handling
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Vue POST Request Example" })
    };
    fetch("https://jsonplaceholder.typicode.com/invalid-url", requestOptions)
      .then(async response => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }

        this.postId = data.id;
      })
      .catch(error => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });
  }
};
</script>
