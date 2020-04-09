<template>
 <div>
    <v-card
     class="mx-auto mt-2"
     max-width="300">
      <v-img
       class="white--text align-end"
       height="200px"
       :src="picture"
       >
       <v-card-title>{{name.first}} {{name.last}}</v-card-title>
      </v-img>
      <v-card-subtitle class="pb-0">{{email}} </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{location.city}} - {{location.country}}</div>
        <div>{{location.street.name}}, {{location.street.number}}</div>
        <div>{{likes.like}}</div>
      </v-card-text>
    </v-card>
 </div>
</template>
<script>
export default {
  name:'Class14',
  props:{
   name:{
    type:Object,
    requiered:true
   },
   email: {
    type:String,
    default:'example@exam.com'
   },
   picture:String,
   location: {
    type:Object,
    requiered:true
   },
   likes: {
    type:Object,
    default(){
     return{
      like:'Banana and manzanas'
     }
    }
   }
  },
  data(){
   // Optional, not calling from here
   return{
     peopleRequestURL: 'https://randomuser.me/api/?results=100',
     people: [],
   }
  },
}
</script>