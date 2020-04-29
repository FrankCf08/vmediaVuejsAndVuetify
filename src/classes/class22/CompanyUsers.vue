<template>
 <div>
  <v-container>
   <v-row>
    <v-col
     cols="12"
     sm="4">
     <h2>List of employees</h2>
    </v-col>
    <v-col>
     <v-text-field
      label="Search employee"
      counter
      v-model="searchUser"
      >
     </v-text-field>
    </v-col>
   </v-row>
  </v-container>
  <v-divider></v-divider> 
  <v-container 
    v-if="searchUser"
    fluid>
   <v-row>
    <v-col
      v-for="(person, index) in searchUsersFunction"
      :key="index"
      cols="12"
      sm="4"
      lg="3">
      <User :person="person"></User>
    </v-col>
   </v-row>
  </v-container>
   <v-container 
    v-else
    fluid>
   <v-row>
    <v-col
      v-for="(person, index) in people"
      :key="index"
      cols="12"
      sm="4"
      lg="3">
      <User :person="person"></User>
    </v-col>
   </v-row>
  </v-container>
 </div>
</template>
<script>
import User from "../class22/User"

export default {
 components:{
   User,
 },
 props:{
  people:Array
 },
 data(){
  return{
   newUserPeople: [],
   searchUser: null,
  }
 },
 computed:{
   searchUsersFunction(){     
     return this.people.filter( user =>{       
       const person = `${user.name.first} ${user.name.last}`          
       return person.includes(this.searchUser)
     })
   }
 }
}
</script>