<template>
 <div>
  <h1>Total number of duties: <strong>{{this.$store.state.duties.length}}</strong> </h1>
  <h2>Completed: {{completedDuties.length}}</h2>
  <ul>
   <li v-for="(duty, index) in completedDuties"
    :key="index">{{duty.name}}</li>
  </ul>
 </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
 // /* First way of using getters from store/index.js */
 // computed:{
 //  completedDuties(){
 //   // /* Normal filtering */
 //   // return this.$store.state.duties.filter( (duty) =>{
 //   //  return duty.done
 //   // })
   
 //   /* Using getter from store index */
 //   return this.$store.getters.completedDuties
 //  }
 // }

 computed: mapGetters(['completedDuties'])
}
</script>