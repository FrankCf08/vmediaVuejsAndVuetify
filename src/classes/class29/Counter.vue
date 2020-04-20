<template>
 <div>
  <v-container>
   <h1>Counter <span class="blue--text">{{counter}}</span> </h1>
   <v-divider></v-divider>
   <v-row>
    <v-col>
     <v-btn
      color="green"
      @click="increaseCounter"
      >
      Increase
     </v-btn>
     <v-btn
      color="red"
      @click="decreaseCounter">
      Decrease
     </v-btn>
    </v-col>
   </v-row>
  </v-container>
 </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'

export default {
 methods: mapMutations(['increaseCounter','decreaseCounter']),
 computed:mapState(['counter']) 
 // methods:{
 //  counterIncreased(){
 //   this.$store.commit('increaseCounter')
 //  },
 //  counterDecreased(){
 //   this.$store.commit('decreaseCounter')
 //  }
 // },

}
</script>