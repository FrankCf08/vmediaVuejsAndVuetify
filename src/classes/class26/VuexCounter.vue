<template>
 <div>
  <h1>Vuex Component</h1>
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
     @click="decreaseCounter()" 
     >
     Decrease
    </v-btn>
   </v-card-actions>
  </v-card>
 </div>
</template>
<script>
export default {
 methods:{
  increaseCounter(){
   this.$store.state.counter ++
  },
  decreaseCounter(){
   if(this.$store.state.counter > 0){
    this.$store.state.counter --
   }
  }
 },
 computed:{
  counter(){
   return this.$store.state.counter
  }
 }
}
</script>