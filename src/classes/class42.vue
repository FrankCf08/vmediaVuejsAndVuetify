<template>
 <div>
  <v-container>
   <h2>Class {{$route.path.split('/')[3]}} Component:</h2>
  </v-container>
  <v-container
   class="pa-0">
   <v-row
    align="center"
    justify="center">
    <v-col
     class="text-center"
     cols="12">
     <v-btn
      v-if="$store.state.auth"
      color="error"
      @click="setAuthorizationView">
      Disallow Views
     </v-btn>
     <v-btn
      v-else
      color="success"
      @click="setAuthorizationView">
      Allow Views
     </v-btn>
    </v-col>
   </v-row>
   <v-row>
    <v-col
     cols="8">
     <v-row>
      <v-col
       cols="6"
       sm="2">
      <router-link
       :to="{name: 'ContactProfile42'}"
       >
       Profile 
      </router-link>
      </v-col>
      <v-col
      cols="6"
      sm="2">
       <router-link
        :to="{name: 'ContactFormAndNewsletter42'}"
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
<script>
import { mapMutations } from 'vuex'
export default {
 
 data(){
  return{
   auth: null,
  }
 },
 methods:{
  ...mapMutations(['setAuthorizationView']),
 }
}
</script>
<style scoped>
 .alignment{
  margin: 2rem 0 2rem 0;
  padding: 1rem 2rem 1rem 2rem;
 }
</style>>
