<template>
 <div>
  <v-container>
   <v-row>
    <v-col
     cols="12"
     sm="6">
     <ListOfItems/>
    </v-col>
    <v-col
     cols="12"
     sm="6">
     <Basket/>
    </v-col>
   </v-row>
  </v-container>
 </div>
</template>
<script>
import ListOfItems from "./ShoppingComponents/ListOfItems"
import Basket from "./ShoppingComponents/Basket"
export default {
 components:{
  ListOfItems,
  Basket,
 }
}
</script>