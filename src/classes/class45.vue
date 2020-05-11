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
      v-if="$store.state.authProfileclass45"
      color="error"
      @click="setAuthorizationViewProfileClass45">
      Disallow Profile View
     </v-btn>
     <v-btn
      v-else
      color="success"
      @click="setAuthorizationViewProfileClass45">
      Allow Profile View
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
       :to="{name: 'ContactProfile45'}"
       >
       Profile 
      </router-link>
      </v-col>
      <v-col
      cols="6"
      sm="2">
       <router-link
        :to="{name: 'ContactFormAndNewsletter45'}"
        >
        Form
       </router-link>
      </v-col>
     </v-row>
    </v-col>
   </v-row>
   <v-row
    v-if="!$store.state.authProfileclass45"
    align="center"
    justify="center">
    <v-col
     class="text-center"
     cols="12">
     <v-card
      class="mx-auto"
      max-width="500">
      <v-list
       class="white--text"
       color="error">
       <v-list-item-title>
        This text is shown because you can't access Profile link
       </v-list-item-title>
      </v-list>
     </v-card>
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

  }
 },
 methods:{
  ...mapMutations(['setAuthorizationViewProfileClass45']),
 }
}
</script>
