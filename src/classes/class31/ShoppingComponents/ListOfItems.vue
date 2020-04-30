<template>
 <div>
  <v-container>
   <h1 class="blue--text">List of Items</h1>
   <v-row>
    <v-col>
    <v-card
     class="mx-auto"
     >
     <v-list>
      <v-list-item-group 
       color="green">
       <template
         v-for="(item, index) in shopItems">
        <v-list-item
         :key="index"
         >
         <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
          <v-list-item-subtitle>
           Precio: <strong class="black--text"> S/.{{item.price.toFixed(2)}}</strong> c/u
          </v-list-item-subtitle>
         </v-list-item-content>
         <v-list-item-action>
          <v-btn
           color="success"
           class="mr-2 ml-4 mb-2 hidden-md-and-up"
           @click="addProduct(index)"
          >Add to <br> Basket
          </v-btn>
          <v-btn
           color="success"
           class="mr-2 ml-4 mb-2 hidden-sm-and-down"
           @click="addProduct(index)"
          >Add to Basket
          </v-btn>
          <!-- <v-btn
          class="mb-2"
           fab 
           dark 
           small 
           color="primary"
           @click="addItem"
           >
           <v-icon dark>mdi-plus</v-icon>
          </v-btn>
          <v-btn
           fab
           dark
           small
           color="error"
           @click="deleteItem"
           >
           <v-icon dark>mdi-minus</v-icon>
          </v-btn> -->
         </v-list-item-action>
        </v-list-item>
        <v-divider
         :key="item.id"
        ></v-divider>
       </template>
      </v-list-item-group>
     </v-list>
    </v-card>
    </v-col>
   </v-row>
  </v-container>
 </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
 computed:{
  ...mapState([
   'shopItems',
   'basket'
  ]),
 },
 methods:{
  ...mapMutations([
    'addProductToBasket',
    'increaseQuantity',
  ]),
  addProduct(index){
    const indexBasket =  this.basket.findIndex(item => item.name === this.shopItems[index].name)
    
    if(indexBasket >= 0) this.$store.commit('increaseQuantity', indexBasket)
    else this.$store.commit('addProductToBasket', index) 
  },
 }
}
</script>