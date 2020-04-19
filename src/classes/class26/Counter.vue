<template>
 <div>
  <h1>Simple Component</h1>
  <v-card
   class="mx-auto"
   max-width="400">
   <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
    <v-card-title>Simple counter</v-card-title>
   </v-img>
   <v-card-subtitle class="pb-0">This is a child Component</v-card-subtitle>

   <v-card-text class="text--primary">
    <div>Counter: {{counter}} </div>
   </v-card-text>
   <v-card-actions>
    <v-btn
     color="green"
     text
     @click="increaseCounter" 
     >
     Increase
    </v-btn>
    <v-btn
     color="red"
     text
     @click="decreaseCounter(counter)" 
     >
     Decrease
    </v-btn>
   </v-card-actions>
  </v-card>
 </div>
</template>
<script>
export default {
 props:{
  counter:Number,
 },
 data(){
  return{

  }
 },
 methods:{
  increaseCounter(){
   this.$emit('increase')
  },
  decreaseCounter(counter){
   if(counter>0){
    this.$emit('decrease')
   }
  }
 }
}
</script>