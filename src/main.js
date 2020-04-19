import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import {store} from "./store/index"

Vue.config.productionTip = false;

export const vm =new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");

export default vm
