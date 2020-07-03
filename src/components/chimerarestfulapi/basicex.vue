<template>
  <div>
    <h1>Basic example</h1>
    <!-- We can access our through posts as we named it -->
    <!-- `posts.loading` is a loading flag that indicates endpoint is loading -->
    <span v-if="posts.loading">Loading...</span>

    <!-- Final json response can be accessed through `posts.data` -->
    <ul v-if="posts.data">
      <li v-for="post in posts.data" :key="post.data">{{ post.title }}</li>
    </ul>

    <!-- If an error occess during API call, json response stored in `posts.error`  -->
    <span v-if="posts.error">{{ posts.error.message }}</span>
  </div>
</template>

<script>
// sample-component.vue
export default {
  chimera: {
    // For simple GET requests we can easily just put the url in here
    posts: "https://jsonplaceholder.typicode.com/posts"
  }
};
</script>
