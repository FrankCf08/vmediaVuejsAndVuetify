<template>
 <div>
  <v-container>
   <v-row>
    <v-col>
     <h1>List of Items</h1>
     <v-card
      align="start"
      max-width="500">
      <v-list>
       <v-list-item-group
        color="blue">
        <template
         v-for="item in items">
         <v-list-item
          :key="item.id"
          >
          <v-list-item-content>
           <v-list-item-title>
            {{item.name}}
           </v-list-item-title>
           <v-list-item-subtitle>
            Precio: <strong class="black--text">S/.{{item.price.toFixed(2)}}</strong> c/u
           </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
           <v-btn 
            class="mx-2 mb-2" 
            fab 
            dark 
            small 
            color="primary"
            @click="addItems(item)">
            <v-icon dark>mdi-plus</v-icon>
           </v-btn>
           <v-btn 
            class="mx-2" 
            fab 
            dark 
            small
            color="red"
            @click="deleteItems(item)">
            <v-icon dark>mdi-minus</v-icon> 
           </v-btn>
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
export default {
 data(){
  return{
   items:[
    {name:'Coca-Cola', price: 12},
    {name:'Pepsi', price: 8.5},
    {name:'Inka Kola', price: 11.5},
    {name:'Guarana', price: 9},
    {name:'Kola Real', price: 6.5},
    {name:'Concordia', price: 3.9},
   ],
  }
 },
 methods:{
  addItems(item){
   this.$root.$emit('addedItem', item.price)   
  },
  deleteItems(item){
   this.$root.$emit('deletedItem', item.price)
  }
 }
}
</script>