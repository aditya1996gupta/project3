<template>
  <div class="app">
    <h1>Functional Component demo</h1>
    <form @submit.prevent="onSubmit">
      <label>
        Component type:
        <select v-model="component">
          <option value="FunctionalComponents">Functional</option>
        </select>
      </label>

      <br />
      <br />
      <button type="submit">Add Items</button>
    </form>

    <ul>
      <component
        :is="component"
        v-for="item in items"
        :key="item"
        :index="item"
        >{{ item }}</component
      >
    </ul>
    <h1>Dynamic Component demo</h1>
    <div class="d-flex justify-content-center">
      <br />
      <div @click="selectedComponent = 'onec'" class="p-2 m-2 btn btn-primary">
        One
      </div>
      <div @click="selectedComponent = 'twoc'" class="p-2 m-2 btn btn-primary">
        Two
      </div>
      <div
        @click="selectedComponent = 'threec'"
        class="p-2 m-2 btn btn-primary"
      >
        Three
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive>
    </div>
    <h1>Async Component Demo</h1>
    <async-component></async-component><br />
    <egtoggle />
    <br /><egtags />
  </div>
</template>

<script>
import egtoggle from "./components/rlc/egtoggle.vue";
import egtags from "./components/rlc/egtags.vue";
import AsyncError from "./components/Asyncc/AsyncError.vue";
import AsyncLoading from "./components/Asyncc/AsyncLoading.vue";
import AsyncComponent from "./components/Asyncc/AsyncComponent.vue";
import onec from "./components/DynamicComponent/onec.vue";
import twoc from "./components/DynamicComponent/twoc.vue";
import threec from "./components/DynamicComponent/threec.vue";
import FunctionalComponents from "./components/FunctionalComponents.vue";

export default {
  name: "app",
  components: {
    egtoggle,
    egtags,
    FunctionalComponents,
    onec,
    twoc,
    threec,
    AsyncComponent,
    AsyncLoading,
    AsyncError,
    delay: 100,
    timeout: 1000
  },
  // AsyncComponent: () => ({
  //   component: AsyncComponent,
  //   loading: AsyncLoading,
  //   error: AsyncError,
  //   delay: 100,
  //   timeout: 3000
  // }),
  data: () => ({
    component: "FunctionalComponents",
    items: [],
    selectedComponent: "onec"
  }),

  beforeUpdate() {
    console.time();
  },

  updated() {
    console.log("Time for render:");
    console.timeEnd();
  },

  methods: {
    onSubmit() {
      this.items = Array.from({ length: 5 }, () => {
        return Math.random();
      });
    }
  }
};
</script>

<style>
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
