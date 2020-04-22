<template>
 <div>
  <v-container>
   <h2 class="blue--text">Add a Product to "List  of Items"</h2>
   <v-form
    ref="form"
    v-model="valid"
    >
    <v-row
     align="center"
     justify="center">
     <v-col
      cols="12"
      sm="4">
      <v-text-field
       v-model="name"
       label="Product Name"
       :rules="nameRules"
       required
      ></v-text-field>
     </v-col>
     <v-col
      cols="12"
      sm="2">
      <v-text-field
       v-model="price"
       label="Product Price (S/. )"
       :rules="priceRules"
       type="number"
       required
      ></v-text-field>
     </v-col>
     <v-col
      cols="12"
      sm="4"
      class="text-center">
      <v-btn
       :disabled="!valid"
       color="success"
       class="mr-2 ml-4 mb-2"
       @click="addProduct"
      >Add Item
      </v-btn>
      <v-btn
        color="error"
        @click="reset"
        class="ml-2 mb-2"
      >
        Reset Form
      </v-btn>
     </v-col>
    </v-row>
   </v-form>
  </v-container>
 </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
 data(){
  return{
    name: null,
    price: null,
    valid: true,
    nameRules: [
        v => !!v || 'Name is required',
    ],
    priceRules: [
        v => !!v || 'Price is required',
    ],
  }
 },
 methods:{
   ...mapMutations(['addProductToList']),
   addProduct(){
     this.$refs.form.validate()
     this.$store.commit('addProductToList',{
       name: this.name,
       price: Number(this.price)
     })
     this.reset()
   },
  reset(){
    this.$refs.form.reset()
  }
 },
 computed:{

 }
}
</script>