<template>
 <div>
  <v-container>
   <v-row>
    <v-col
     v-for="(person,index) in filterPeopleByInitials"
    :key="index"
    :person="person">
    <UserCard
     :person="person">
    </UserCard>
    </v-col>
   </v-row>
  </v-container>
 </div>
</template>
<script>
import axios from 'axios'
import UserCard from './UserCard'

export default {
 components:{
  UserCard,
 },

 data(){
  return{
   people: [],
   peopleURL: 'https://randomuser.me/api/?results=500'
  }
 },
 created(){
  this.getUsersByInitials()
 },

 watch:{
  '$route': 'getUsersByInitials'
 },

 methods:{
  getUsersByInitials(){
   axios
    .request({
     method: 'get',
     url: this.peopleURL,
    })
    .then(response => {
      this.people = response.data.results      
    })
  }
 },
 computed:{
  filterPeopleByInitials(){
   return this.people.filter( user =>{
     const person = `${user.name.first} ${user.name.last}`
     return person.includes(this.$route.params.initials)
   })
  }
 }
}
</script>