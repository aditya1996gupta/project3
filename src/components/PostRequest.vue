<template>
  <div class="card text-center m-3">
    <h5 class="card-header">Simple POST Request</h5>
    <div class="card-body">Returned Id: {{ postId }}</div>
  </div>
</template>

<script>
export default {
  name: "post-request",
  data() {
    return {
      postId: null
    };
  },
  created() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Vue POST Request Example" })
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then(response => response.json())
      .then(data => (this.postId = data.id));
  }
};
</script>
