import Vue from "vue"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import store from "./store"
import router from './router'

Vue.config.productionTip = false;

Vue.directive('outstand', {
 /**
  * 
  * el : DOM
  * binding : It is the value passed
  * vnode Virtual Node
  */
 bind(el, binding,vnode){  
  el.style.color= 'red'
  el.style.fontSize = binding.value + 'px'
  vnode
 }
})

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");

