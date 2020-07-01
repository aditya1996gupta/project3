<template>
  <div class="card text-center m-3">
    <h5 class="card-header">POST Request with Set Headers</h5>
    <div class="card-body">Returned Id: {{ postId }}</div>
  </div>
</template>

<script>
export default {
  name: "post-request-set-headers",
  data() {
    return {
      postId: null
    };
  },
  created() {
    // POST request using fetch with set headers
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer-my-token",
        "My-Custom-Header": "foobar"
      },
      body: JSON.stringify({ title: "Vue POST Request Example" })
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then(response => response.json())
      .then(data => (this.postId = data.id));
  }
};
</script>
