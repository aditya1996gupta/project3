<template>
  <div>
    <!-- `users` is Endpoint object (same as: `$chimera.users`) -->
    <ul v-if="users.data && !users.loading">
      <li v-for="user in users.data" v-bind:key="user">
        {{ user.name }}
      </li>
    </ul>
    <small v-else>Loading...</small>
  </div>
</template>

<script>
export default {
  chimera: {
    users: "/users",
    url: "https://jsonplaceholder.typicode.com/users",
    interval: 10 * 1000 // 10 seconds,
  },
  computed: {
    users() {
      const users = this.$chimera.users.data;
      if (!Array.isArray(users)) return [];
      return users;
    }
  },
  mounted() {
    setTimeout(() => {
      this.$chimera.users.reload(); // or users.reload()
    }, 15000);
  },
  methods: {
    // Manual start and stop
    stopInterval() {
      this.users.startInterval(10000);
      console.log(this.users.looping); // true
      setTimeout(() => {
        this.users.stopInterval();
        console.log(this.users.looping); // false
      }, 500000);
    }
  }
};
</script>
