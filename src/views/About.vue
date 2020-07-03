<template>
  <div class="about">
    <hr />
    <h1>Endpoint demo</h1>
    <endpoint></endpoint>
    <hr />
    <event></event>
    <hr />
    <Cancle></Cancle>
    <hr />
    <postreq></postreq>
    <hr />
    <autorefreshingpolling></autorefreshingpolling>
    <hr />
    <reactiveget></reactiveget>
  </div>
</template>

<script>
import endpoint from "@/components/chimerarestfulapi/endpoint.vue";
import event from "@/components/chimerarestfulapi/event.vue";
import Cancle from "@/components/chimerarestfulapi/Cancle.vue";
import postreq from "@/components/chimerarestfulapi/postreq.vue";
import autorefreshingpolling from "@/components/chimerarestfulapi/autorefreshingpolling.vue";
import reactiveget from "@/components/chimerarestfulapi/reactiveget.vue";
export default {
  name: "about",
  components: {
    endpoint,
    event,
    Cancle,
    postreq,
    autorefreshingpolling,
    reactiveget
  }
};
</script>
