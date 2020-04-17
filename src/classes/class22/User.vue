<template>
 <div>
  <v-card
    class="mx-auto"
    max-width="300"
    >
    <v-img
    class="white--text align-end"
    height="300px" 
    :src="person.picture.large" 
    :alt="`${person.name.first} ${person.name.last}`">
    <v-card-title>{{person.name.first}} {{person.name.last}} </v-card-title>
    </v-img>
    <v-card-subtitle class="pb-0 caption">{{person.email}}</v-card-subtitle>
    <v-card-text class="text--primary">
      <div>{{person.location.city}}, {{person.location.country}}</div>
      <div>{{person.location.street.name}}, {{person.location.street.number}}</div>
    </v-card-text>
  </v-card>
 </div>
</template>
<script>
export default {
 props:{
  person: Object,
 }
}
</script>