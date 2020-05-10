<template>
 <div>
  <v-container>
   <v-row
    align="center"
    justify="center">
    <v-col
     cols="12"
     sm="8">
     <h2>Newsletter</h2>
     <v-text-field
      v-model="newsletter"
      label="Email"
      :rules="emailRules"
      required>
     </v-text-field>
    </v-col>
   </v-row>
  </v-container>
 </div>
</template>
<script>
export default {
 data(){
  return{
   newsletter: null,
   isACustomer: this.$route.params.isACustomer,
   emailRules: [
    v => !!v || 'E-mail is required',
    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
   ],
  }
 }
}
</script>