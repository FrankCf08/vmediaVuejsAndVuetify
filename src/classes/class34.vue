<template>
 <div>
  <v-container
   class="mt-12 pt-4">
   <v-row
    align="center"
    justify="center">
    <v-col
     cols="4"
     v-for="(person, i) in people"
     :key="i">
     <router-link
      tag="button"
      :to="`/user/${person.name.first}-${person.name.last}`"
      >
      <v-btn
       color="primary"
       large
       v-text="`${person.name.first} ${person.name.last}`">
      </v-btn>
     </router-link>
    </v-col>
   </v-row>
  </v-container>
 </div>
</template>
<script>
import axios from 'axios'

export default {
 data(){
  return{
   people: [],
   peopleURL: 'https://randomuser.me/api/?results=10'
  }
 },
 mounted(){
  this.getPeople()
 },
 methods:{
  getPeople(){
   axios
    .request({
     method:'get',
     url: this.peopleURL
    })
    .then(response =>{
     this.people = response.data.results    
    })
    .catch(error => {
     console.error('errorGetPeople', error)
    })
  }
 },
}
</script>