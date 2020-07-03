<template>
  <div class="can">
    <h1>Cancellation using chimera in console</h1>
  </div>
</template>

<script>
export default {
  name: "can",
  chimera: {
    users: "https://jsonplaceholder.typicode.com/users",
    on: {
      cancel() {
        console.log("Canceled");
      }
    }
  },
  methods: {
    cancelUser() {
      this.users.cancel();
    }
  }
};
</script>
