<template>
 <div>
  <v-container>
   <v-row>
    <v-col>
     <Counter
      :counter="counter"
      @increase="counter++"
      @decrease="counter--"></Counter>
      <v-divider></v-divider>
    </v-col>
    <v-col>
     <VuexCounter></VuexCounter> 
    </v-col>
   </v-row>
  </v-container>
 </div>
</template>
<script>
import Counter from "./class26/Counter"
import VuexCounter from "./class26/VuexCounter"

export default {
 components:{
  Counter,
  VuexCounter,
 },
 data(){
  return{
   counter:0,
  }
 }
}
</script>