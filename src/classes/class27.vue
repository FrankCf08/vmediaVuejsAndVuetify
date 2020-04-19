<template>
 <div>
  {{this.$store.state.person}}
  <!-- Second computed: Setting states as Objects -->
  <!-- <h2>Name: {{name}}</h2>
  <h2>Surname: {{surname}}</h2>
  <h2>Profession: {{profession}} </h2> -->

  <!-- Third computed: Using mapSate() -->
   <h2>Name: {{person.name}}</h2>
  <h2>Surname: {{person.surname}}</h2>
  <h2>Profession: {{person.profession}} </h2>
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
//  computed: mapState ({
//   name: (state) => state.person.name,
//   surname: (state) => state.person.surname,
//   profession: (state) => state.person.profession
//  })

  computed:mapState(['person'])
}
</script>