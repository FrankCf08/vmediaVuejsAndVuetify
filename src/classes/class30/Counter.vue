<template>
 <div>
  <v-container class="UsingMethods">
   <h1>UsingMethods and dispatch</h1>
   <h3>Counter <span class="blue--text small">{{counter.counter}}</span> </h3>
  </v-container>
  <v-container fluid>
   <v-row>
    <v-col>
     <v-btn
      class="ma-2"
      color="success"
      outlined
      @click="increaseCounter">
      Increase
     </v-btn>
     <v-btn
      class="ma-2"
      color="error"
      outlined
      @click="decreaseCounter">
      Decrease
     </v-btn>
    </v-col>
   </v-row>
  </v-container>
  <v-container class="UsingMapActions">
   <h1>UsingMapActions</h1>
   <h3>Counter <span class="blue--text small">{{counter.counter}}</span> </h3>
  </v-container>
  <v-container fluid>
   <v-row>
    <v-col>
     <v-btn
      class="ma-2"
      color="success"
      @click="increaseAsync">
      Increase
     </v-btn>
     <v-btn
      class="ma-2"
      color="error"
      @click="decreaseAsync">
      Decrease
     </v-btn>
    </v-col>
   </v-row>
  </v-container>
   <v-container class="UsingMethods">
   <h1>Using mapActions and Passing values(values or Objects)</h1>
   <h3>Counter <span class="blue--text small">{{counter.counter}}</span> </h3>
  </v-container>
  <v-container fluid>
   <v-row>
    <v-col>
     <v-btn
      class="ma-2"
      color="success"
      fab
      @click="increaseCounterAsync(18)">
      <v-icon dark>mdi-plus</v-icon>
     </v-btn>
     <v-btn
      class="ma-2"
      color="error"
      fab
      @click="decreaseCounterAsync({counter: 12})">
      <v-icon dark>mdi-minus</v-icon>
     </v-btn>
    </v-col>
   </v-row>
  </v-container>
  
 </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
 methods:{
  ...mapActions([
   'increaseAsync',
   'decreaseAsync',
   'increaseCounterAsync',
   'decreaseCounterAsync'
  ]),
  increaseCounter(){
   this.$store.dispatch('increaseAsync')
  },
  decreaseCounter(){
   this.$store.dispatch('decreaseAsync')
  },
 },
 computed:{
  ...mapState(['counter'])
 }
}
</script>