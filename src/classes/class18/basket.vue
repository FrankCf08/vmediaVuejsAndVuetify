<template>
 <div>
  <v-container>
   <v-card
    >
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
     <div>{{totalItems}} products</div>
    </v-card-text>
   </v-card>
  </v-container>
 </div>
</template>
<script>
export default {
 data(){
  return{
   totalCost: 0,
   totalItems: 0,
  }
 },
 created(){
  const _this = this

  this.$root.$on('addedItem', function(price){
   if(_this.totalCost >= 0){
    _this.totalCost = _this.totalCost + price
    _this.totalItems += 1
   }
  })

  this.$root.$on('deletedItem', function(price){
   if(_this.totalCost > 0 && _this.totalCost > price){
    _this.totalCost = _this.totalCost - price
    _this.totalItems -= 1
   }
  })
 },
}
</script>