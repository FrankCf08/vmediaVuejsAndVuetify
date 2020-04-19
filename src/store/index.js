import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
 state:{
  counter:0,
  person:{
   name:'Frank',
   surname: 'Cruz',
   profession: 'Software Developer',
   city: 'Lima-Peru'
  },
 }
})