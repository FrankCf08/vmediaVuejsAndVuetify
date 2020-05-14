<template>
 <v-card
  class="mx-auto mt-2"
  max-width="300">
   <v-img
    class="white--text align-end"
    height="200px"
    :src="person.picture.large"
    >
    <v-card-title v-text="`${person.name.first} ${person.name.last}`"></v-card-title>
   </v-img>
   <v-card-subtitle class="pb-0">{{person.email}} </v-card-subtitle>

   <v-card-text class="text--primary">
    <div>{{person.location.city}} - {{person.location.country}}</div>
    <div>{{person.location.street.name}}, {{person.location.street.number}}</div>
   </v-card-text>
 </v-card>
</template>
<script>
export default {
 props:{
  person:{
   type: Object
  }
 }
}
</script>