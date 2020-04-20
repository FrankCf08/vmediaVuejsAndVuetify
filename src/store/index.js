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
  duties:[
   {name:'Do Cws', priority: 'high', done: true, timeTaken: 128},
   {name:'Go for a walk', priority: 'low', done: false, timeTaken: 21},
   {name:'Take my dog out', priority: 'high', done: true, timeTaken: 85},
   {name:'Clean my room', priority: 'low', done: true, timeTaken: 174},
   {name:'wash cothes', priority: 'high', done: false, timeTaken: 16},
   {name:'Do the wash-up', priority: 'high', done: false, timeTaken: 192},
  ],
 },
 getters:{
  completedDuties: (state) => {
   return state.duties.filter(duty => duty.done)
  }
 },
 mutations:{
  increaseCounter: (state) =>{
   return state.counter++
  },
  decreaseCounter: (state) => state.counter--
 }
})