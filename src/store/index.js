import Vue from 'vue'
import Vuex from 'vuex'
import {shopItemsState, shopItemsMutations} from './modules/shopItems'
import {basketMutations} from "./modules/basket"
import counter from "./modules/counter"
import randomPeople from "./modules/randomPeople"

Vue.use(Vuex)

export default new Vuex.Store({
 state:{
  ...shopItemsState,
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
  /*shopItems was sent to shopItems.js */ 
  basket:[],
  auth: true,
 },
 getters:{
  completedDuties: (state) => {
   return state.duties.filter(duty => duty.done)
  },
  totalCost: (state) => state.basket.reduce((total,product)=> total + (product.price*product.quantity), 0)
 },
 // Mutations are setters
 mutations:{
  ...shopItemsMutations,
  ...basketMutations,
  setAuthorizationView: (state) => state.auth = !state.auth
 },
 actions:{
 },
 modules:{
  counter,
  randomPeople,
 }
})