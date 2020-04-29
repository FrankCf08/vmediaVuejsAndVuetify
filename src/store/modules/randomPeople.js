const randomPeople = {
 state:{
  people:[]
 },
 mutations:{
  setRandomPeople: (state, requestedPeople) => state.people = requestedPeople
 },
 actions:{
  setRandomPeople: ({commit}, value) => commit('setRandomPeople', value )
 }
}

export default randomPeople