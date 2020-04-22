import Vue from 'vue'
import Vuex from 'vuex'
import {shopItemsState, shopItemsMutations} from './modules/shopItems'
import {basketMutations} from "./modules/basket"

Vue.use(Vuex)

export const store = new Vuex.Store({
 state:{
  ...shopItemsState,
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
  /*Send to shopItems.js */ 
  // shopItems:[
  //  {name:'Coca-Cola', price: 12},
  //  {name:'Inka-Cola', price: 8.5 },
  //  {name:'Concordia', price: 3.9},
  //  {name:'Yogurt', price: 4.9},
  //  {name:'Chesse', price: 5.4},
  // ],
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
  increaseCounter: (state) =>{
   return state.counter++
  },
  decreaseCounter: (state) => state.counter--,
  counterIncreased: (state, value) => state.counter+=value,
  counterDecreased: (state, value) => state.counter -= value,
  /*Send to shopItems.js */
  // addProductToList: (state, product) => state.shopItems.push(product),
  /*Send to basket.js */
  // addProductToBasket: (state, indexItem) => state.basket.push(state.shopItems[indexItem]),
  // deleteProductFromBasket: (state, indexItem) => state.basket.splice(indexItem, 1)
 },
 actions:{
  increaseAsync: (context) => context.commit('increaseCounter'),
  decreaseAsync: (context) => {
   setTimeout(()=> context.commit('decreaseCounter'), 2000)
  },
  increaseCounterAsync: (context, value) => context.commit('counterIncreased', value),
  // decreaseCounterAsync:  (context, Objectvalue)=> commit('counterDecreased', Objectvalue.counter )
  decreaseCounterAsync: ({commit}, {counter} ) => commit('counterDecreased', counter )
 },
})