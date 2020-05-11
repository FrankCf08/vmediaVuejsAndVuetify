<template>
 <div>
  <v-container 
   fluid>
   <v-form
    ref="newsletterForm"
    v-model="valid">
    <v-row
     align="center"
     justify="center">
     <v-col
      cols="12"
      sm="4">
      <h2>Newsletter</h2>
      <v-text-field
       v-model="newsletter"
       label="Email"
       :rules="emailRules"
       required>
      </v-text-field>
     </v-col>
     <v-col
     class="text-end"
      cols="8"
      sm="1">
      <v-btn
       :disabled="!valid"
       color="primary"
       class="ma-0 pa-0"
       @click="sendContent"
       >Send
      </v-btn>
     </v-col>
    </v-row>
   </v-form>
  </v-container>
 </div>
</template>
<script>
export default {
 data(){
  return{
   valid: true,
   newsletter: null,
   emailRules: [
    v => !!v || 'E-mail is required',
    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
   ],
  }
 },
 methods:{
   sendContent(){
    this.$refs.newsletterForm.validate()
    this.$refs.newsletterForm.reset()
  },
 }
}
</script>