<template>
  <div class="card text-center m-3">
    <h5 class="card-header">POST Request with Async/Await</h5>
    <div class="card-body">Returned Id: {{ postId }}</div>
  </div>
</template>

<script>
export default {
  name: "post-request-async-await",
  data() {
    return {
      postId: null
    };
  },
  async created() {
    // POST request using fetch with async/await
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Vue POST Request Example" })
    };
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      requestOptions
    );
    const data = await response.json();
    this.postId = data.id;
  }
};
</script>
