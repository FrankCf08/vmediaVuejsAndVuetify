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
      cols="8"
      sm="4"
      lg="5">
      <h2>Newsletter</h2>
      <v-text-field
       v-model="newsletter"
       label="Email"
       :rules="emailRules"
       required>
      </v-text-field>
     </v-col>
     <v-col
      cols="3"
      lg="1">
      <v-row>
       <v-col
        class="text-end">
        <v-btn
         :disabled="!valid"
         color="primary"
         class="ma-0 pa-0"
         @click="sendContent"
         >Send
        </v-btn>
       </v-col>
      </v-row>
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