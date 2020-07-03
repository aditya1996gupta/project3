import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueChimera from "vue-chimera";
import axios from "axios";

Vue.use(axios);
Vue.use(VueChimera, {
  // Chimera default options
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
