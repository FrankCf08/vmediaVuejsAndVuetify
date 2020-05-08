<template>
 <div>
   <v-row justify="center">
    <v-col class="text-center mt-12">
     <h1
      class="font-weight-medium display-1"
      >
      Welcome to this <br>Awesome App
     </h1>
     <v-card
      elevation="12" 
      class="mx-auto mt-8" 
      >
      <blockquote
      class="font-weight-light pt-4 pb-4 title"
      >
      This project is based on <br />
      Vue.js and Vuetify
      </blockquote>
     </v-card>
      <v-row
       class="mt-4">
       <v-col
        cols="12"
        sm="6">
        <v-btn
        width="150"
        color="error"
        @click="routerWithPath(items.homeCompName)">
        Store
        </v-btn>
       </v-col>
       <v-col
        cols="12"
        sm="6">
        <v-btn
        width="150"
        color="success"
        @click="routerWithPath(items.searchPeopleCompName)">
        Filter People
        </v-btn>
       </v-col>
       <v-col
        cols="12"
        sm="6">
        <v-btn
         width="150"
         color="primary"
         @click="routerWithPath(items.signinCompName)">
         Sign In
        </v-btn>
       </v-col>
       <v-col
        cols="12"
        sm="6">
        <v-btn
         width="150"
         color="yellow"
         class="white--text"
         @click="routerWithPath(items.singupCompName)">
         Sign Up
        </v-btn>
       </v-col>
      </v-row>
    </v-col>
   </v-row>
 </div>
</template>
<script>

export default {
 data(){
  return{
   items:{
    homeCompName:'Store',
    searchPeopleCompName:'SearchPeople',
    signinCompName:'SignIn',
    singupCompName:'SignUp',
   }
  }
 },
 methods:{
  routerWithPath(path){
   this.$router.push({
    name:path
   })
  }
 }
}
</script>