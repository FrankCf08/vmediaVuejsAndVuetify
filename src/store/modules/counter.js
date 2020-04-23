const counter = {
 state:{
  counter:0,
 },
 mutations:{
  increaseCounter: (state) =>{
   return state.counter++
  },
  decreaseCounter: (state) => state.counter--,
  counterIncreased: (state, value) => state.counter+=value,
  counterDecreased: (state, value) => state.counter -= value,
 },
 actions:{
  increaseAsync: (context) => context.commit('increaseCounter'),
  decreaseAsync: (context) => {
   setTimeout(()=> context.commit('decreaseCounter'), 2000)
  },
  increaseCounterAsync: (context, value) => context.commit('counterIncreased', value),
  // decreaseCounterAsync:  (context, Objectvalue)=> commit('counterDecreased', Objectvalue.counter )
  decreaseCounterAsync: ({commit}, {counter} ) => commit('counterDecreased', counter )
 }
}

export default counter