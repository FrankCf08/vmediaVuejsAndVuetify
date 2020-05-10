<template>
 <div>
  <ContactProfile/>
  <v-container fluid>
   <v-row align="center" justify="center">
    <v-col class="text-center mt-12">
     <h1
      class="font-weight-medium"
      :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-1']"
      >
      Welcome to this <br>Awesome App
     </h1>
     <v-card
      elevation="12" 
      class="mx-auto mt-8" 
      max-width="300"
      >
      <blockquote
      class="font-weight-light pt-4 pb-4"
      :class="[$vuetify.breakpoint.mdAndUp ? 'headline' : 'title']"
      >
      This project is based on <br />
      Vue.js and Vuetify
      </blockquote>
     </v-card>
     <v-container
      class="mt-8">
      <v-row>
       <v-col
        cols="12"
        sm="4">
        <v-btn
        width="180"
        color="error"
        @click="sendMeTo(items.homePath)">
        Store
        </v-btn>
       </v-col>
       <v-col
        cols="12"
        sm="4">
        <v-btn
        width="180"
        color="success"
        @click="sendMeTo(items.searchPeople)">
        Filter People
        </v-btn>
       </v-col>
       <v-col
        cols="12"
        sm="4">
        <v-btn
         width="180"
         color="primary"
         @click="sendMeTo(items.contactPath)">
         Contact
        </v-btn>
       </v-col>
      </v-row>
     </v-container>
    </v-col>
   </v-row>
  </v-container>
 </div>
</template>
<script>
import ContactProfile from "../classes/class40/ContactProfile"

export default {
 components:{
  ContactProfile
 },

 data(){
  return{
   items:{
    homePath:'/store',
    searchPeople:'/searchPeople',
    contactPath: '/contact',
   }
  }
 },
 methods:{
  sendMeTo(path){
   this.$router.push(path)
  }
 }
}
</script>
