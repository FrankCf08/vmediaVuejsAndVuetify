<template>
 <div>
  {{this.$store.state.person}}
  <h2>Name: {{name}}</h2>
  <h2>Surname: {{surname}}</h2>
  <h2>Profession: {{profession}} </h2>
 </div>
</template>
<script>
import {mapState} from 'vuex'

export default {
 
 // /* One Single value returned in a computed function */
 // computed: mapState({
 //  name(){
 //   return this.$store.state.person.name
 //  }
 // })
 
 /* Setting states as Object */
 computed: mapState ({
  name: (state) => state.person.name,
  surname: (state) => state.person.surname,
  profession: (state) => state.person.profession
 })

  // computed:mapState(['person.name','person.surname', 'person.profession'])
}
</script>