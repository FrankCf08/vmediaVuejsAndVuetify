<template>
 <div>
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
      class="mx-auto mt-8" 
      max-width="300">
      <blockquote
      class="font-weight-light	"
      :class="[$vuetify.breakpoint.mdAndUp ? 'headline' : 'title']"
      >
      This project is based on <br />
      Vue.js and Vuetify
      </blockquote>
     </v-card>
     <v-container
      class="mt-8">
      <v-row>
       <v-col>
        <v-btn
        class="mr-2 mt-4"
        color="primary" 
        to="/home">
        Home
        </v-btn>
        <v-btn
         class="mr-2 ml-2 mt-4"
         color="success" 
         to="/singin">
         Sign In
        </v-btn>
        <v-btn
         class="ml-2 mt-4"
         color="error" 
         to="/pageNotFound">
         Not Found <br> Page
        </v-btn>
       </v-col>
      </v-row>
     </v-container>
    </v-col>
   </v-row>
  </v-container>
 </div>
</template>
