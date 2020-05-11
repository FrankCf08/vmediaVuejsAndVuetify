<template>
 <div>
  <v-container>
   <h2>Class {{$route.path.split('/')[3]}} Component:</h2>
  </v-container>
  <v-container
   class="pa-0">
   <v-row>
    <v-col
     cols="8">
     <v-row>
      <v-col
       cols="6"
       sm="2">
      <router-link
       :to="{name: 'ContactProfile44'}"
       >
       Profile 
      </router-link>
      </v-col>
      <v-col
      cols="6"
      sm="2">
       <router-link
        :to="{name: 'ContactFormAndNewsletter44'}"
        >
        Form
       </router-link>
      </v-col>
     </v-row>
    </v-col>
   </v-row>
  </v-container>
  <router-view/>
 </div>
</template>
