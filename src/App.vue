<template>
  <div>
    <div class="t1 p-9">
      <h3 class="p-3 text-center">Vue HTTP GET Requests with Fetch</h3>
    </div>
    <get-request />
    <get-request-async-await />
    <get-request-error-handling />
    <get-request-set-headers />
    <div class="t2">
      <h3 class="p-3 text-center">Vue HTTP POST Requests with Fetch</h3>
    </div>
    <post-request />
    <post-request-async-await />
    <post-request-error-handling />
    <post-request-set-headers />
  </div>
</template>

<script>
import GetRequest from "./components/GetRequest";
import GetRequestAsyncAwait from "./components/GetRequestAsyncAwait";
import GetRequestErrorHandling from "./components/GetRequestErrorHandling";
import GetRequestSetHeaders from "./components/GetRequestSetHeaders";
import PostRequest from "./components/PostRequest";
import PostRequestAsyncAwait from "./components/PostRequestAsyncAwait";
import PostRequestErrorHandling from "./components/PostRequestErrorHandling";
import PostRequestSetHeaders from "./components/PostRequestSetHeaders";

export default {
  name: "app",
  components: {
    GetRequest,
    GetRequestAsyncAwait,
    GetRequestErrorHandling,
    GetRequestSetHeaders,
    PostRequest,
    PostRequestAsyncAwait,
    PostRequestErrorHandling,
    PostRequestSetHeaders
  }
};
</script>

<style>
.t1 {
  color: silver;
  background-color: black;
}
.t2 {
  color: grey;
  background-color: black;
}
</style>
