<template>
 <div>
  <h1 class="blue--text">Basket:</h1>
  <v-container>
   <v-row>
    <v-col>
     <v-card>
      <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn7.dissolve.com/p/D1478_33_015/D1478_33_015_0004_600.jpg">
      <v-card-title>Cost of Total Items</v-card-title>
     </v-img>
     <v-card-subtitle class="pb-0 black--text">Total Cost</v-card-subtitle>
     <v-card-text>
      <div>S/. {{totalCost.toFixed(2)}}</div>
     </v-card-text>
      <v-card-subtitle class="pb-0 black--text">Total Items</v-card-subtitle>
     <v-card-text>
      <div v-if="basket.length">
       <v-container>
        <v-row>
         <v-col>
          <v-card
          class="mx-auto">
           <v-list
            dense>
            <v-list-item-group
             color="blue">
             <template
              v-for="(item, index) in basket">
              <v-list-item
              :key="index">
               <v-list-item-content>
                <v-list-item-title>
                 <strong>{{item.name}}</strong>
                </v-list-item-title>
                <v-list-item-subtitle>
                 Price: S/. {{item.price.toFixed(2)}} 
                </v-list-item-subtitle>
               </v-list-item-content>
               <v-list-item-content
                align="center">
                <v-list-item-title>
                 <strong> Quantity: </strong>
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{item.quantity}}
                </v-list-item-subtitle>
               </v-list-item-content>
               <v-list-item-action>
                <v-btn
                fab
                small
                color="error"
                @click="deleteProductFromBasket(index)">
                 X
                </v-btn>
               </v-list-item-action>
              </v-list-item>
              <v-divider 
               :key="`${index}-${index}`"
               >
              </v-divider>
              <!-- <v-list-item-content
               class="black--text"
               :key="index+''+index"
               align="center"
               justify="center">
               <v-list-item-title>
                <strong> Total: </strong>
               </v-list-item-title>
               <v-list-item-subtitle>
                 {{item.quantity}}
               </v-list-item-subtitle>
              </v-list-item-content> -->
             </template>
            </v-list-item-group>
           </v-list>
          </v-card>
         </v-col>
        </v-row>
       </v-container>
      </div>
      <div v-else>0 products</div>
     </v-card-text>
     </v-card>
    </v-col>
   </v-row>
  </v-container>
 </div>
</template>
<script>
import { mapGetters, mapState, mapMutations } from 'vuex'

export default {
 methods:{
  ...mapMutations(['deleteProductFromBasket'])
 },
 computed:{
  ...mapState(['basket']),
  ...mapGetters(['totalCost']),
 },
}
</script>