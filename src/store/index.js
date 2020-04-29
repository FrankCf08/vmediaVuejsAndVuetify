import Vue from 'vue'
import Vuex from 'vuex'
import {shopItemsState, shopItemsMutations} from './modules/shopItems'
import {basketMutations} from "./modules/basket"
import counter from "./modules/counter"
import randomPeople from "./modules/randomPeople"

Vue.use(Vuex)

export const store = new Vuex.Store({
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
 },
 getters:{
  completedDuties: (state) => {
   return state.duties.filter(duty => duty.done)
  },
  totalCost: (state) => state.basket.reduce((total,product)=> total + product.price, 0)
 },
 // Mutations are setters
 mutations:{
  ...shopItemsMutations,
  ...basketMutations,

  /*MUtations functions sent to counter.js */
  // increaseCounter: (state) =>{
  //  return state.counter++
  // },
  // decreaseCounter: (state) => state.counter--,
  // counterIncreased: (state, value) => state.counter+=value,
  // counterDecreased: (state, value) => state.counter -= value,

  /*Send to shopItems.js */
  // addProductToList: (state, product) => state.shopItems.push(product),
  /*Send to basket.js */
  // addProductToBasket: (state, indexItem) => state.basket.push(state.shopItems[indexItem]),
  // deleteProductFromBasket: (state, indexItem) => state.basket.splice(indexItem, 1)
 },
 actions:{
  /*Actions functions sent to counter.js */
  // increaseAsync: (context) => context.commit('increaseCounter'),
  // decreaseAsync: (context) => {
  //  setTimeout(()=> context.commit('decreaseCounter'), 2000)
  // },
  // increaseCounterAsync: (context, value) => context.commit('counterIncreased', value),
  // // decreaseCounterAsync:  (context, Objectvalue)=> commit('counterDecreased', Objectvalue.counter )
  // decreaseCounterAsync: ({commit}, {counter} ) => commit('counterDecreased', counter )

 },
 modules:{
  counter,
  randomPeople,
 }
})