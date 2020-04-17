<template>
 <div>
  <v-container>
   <CompanyUsers
    :people="peopleUsers">
   </CompanyUsers>
  </v-container>
 </div>
</template>
<script>
import CompanyUsers from "./class22/CompanyUsers"
import axios from "axios"

export default {

 components:{
  CompanyUsers,
 },

 data(){
  return{
   peopleUsers:[],
   peopleRequestURL: 'https://randomuser.me/api/?results=50',
  }
 },
 mounted(){
  this.getPeopleUsers()
 },
 methods:{
  getPeopleUsers(){
   axios
    .request({
     method:'get',
     url: this.peopleRequestURL
    })
    .then(response => {     
     this.peopleUsers = response.data.results
    })
  }
 },
}
</script>