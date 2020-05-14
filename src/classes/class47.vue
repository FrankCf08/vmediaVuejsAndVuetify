<template>
 <div>
  <v-container>
   <h2>Class {{$route.path.split('/')[3]}} Component:</h2>
   <h4>Search People by their initials:</h4>
  </v-container>
  <v-container
   class="pa-0">
   <v-row>
    <v-col
     cols="2"
     sm="1">
    <router-link
     :to="{name: 'User47', params:{ user:userSearch, initials:'Ar'}}"
     >
     Ar
    </router-link>
    </v-col>
    <v-col
     cols="2"
     sm="1">
     <router-link
      :to="{name: 'User47', params:{ user:userSearch, initials:'Be'}}"
      >
      Be
     </router-link>
    </v-col>
     <v-col
    cols="2"
    sm="1">
     <router-link
      :to="{name: 'User47', params:{ user:userSearch, initials:'Co'}}"
      >
      Co
     </router-link>
    </v-col>
    <v-col
     cols="2"
     sm="1">
     <router-link
      :to="{name: 'User47', params:{ user:userSearch, initials:'Da'}}"
      >
      Da
     </router-link>
    </v-col>
     <v-col
     cols="2"
     sm="1">
     <router-link
      :to="{name: 'User47', params:{ user:userSearch, initials:'El'}}"
      >
      El
     </router-link>
    </v-col>
     <v-col
     cols="2"
     sm="1">
     <router-link
      :to="{name: 'User47', params:{ user:userSearch, initials:'Fi'}}"
      >
      Fi
     </router-link>
    </v-col>
   </v-row>
  </v-container>
  <transition name="fade" mode="out-in">
   <router-view />
  </transition>
 </div>
</template>
<script>
export default {
 data(){
  return{
   userSearch: 'usersWith',
  }
 },
}
</script>
<style scoped>
 .fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
 }
 .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
   opacity: 0;
 }
</style>