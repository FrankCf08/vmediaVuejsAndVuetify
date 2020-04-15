<template>
 <div>
  <v-container>
   <v-row 
    align="center"
    justify="center">
    <v-col
     cols="12"
     sm="6"
     md="8"
     align="center">
     <ListOfItems></ListOfItems>
    </v-col>
    <v-col
     cols="12"
     sm="6"
     md="4"
     >
     <Basket></Basket> 
    </v-col>
   </v-row>
  </v-container>
 </div>
</template>
<script>
import Basket from "./class18/basket"
import ListOfItems from "./class18/listOfItems"

export default {
 components:{
  Basket,
  ListOfItems,
 }
}
</script>