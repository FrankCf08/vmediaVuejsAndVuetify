import Vue from "vue"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import store from "./store"
import router from './router'

Vue.config.productionTip = false;

Vue.directive('outstand', {
 /**
  * 
  * el : Element of the DOM
  * binding : It is the value passed
  * vnode Virtual Node
  */
 bind(el, binding,vnode){  
  el.style.color= 'red'
  el.style.fontSize = binding.value + 'px'
  vnode
 }
})

Vue.directive('bringForward',{
 bind(el,binding){
  
  el.style.position = 'fixed'
  el.style.fontSize = `50px`

  if(binding.expression){
   el.style.top = `${binding.expression}px`
  }

  if(binding.arg){
   let color  = 'goldenrod'
   let text = 'blue'

   const modifiers = Object.keys(binding.modifiers)
   
   if(modifiers.length > 1){
    color = modifiers[0]
    text = modifiers[1]
   }

   el.style.backgroundColor = color
   el.style.color = text
  }
 }
})

Vue.directive('objectDirective', {
 bind(el,binding){
  console.log(binding.expression);
 }
})

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");

