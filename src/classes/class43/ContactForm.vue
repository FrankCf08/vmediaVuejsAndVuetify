<template>
 <div>
  <v-container
   fluid >
   <v-form
    ref="contactForm"
    v-model="valid">
    <v-container>
     <v-row
      align="center"
      justify="center">
      <v-col
       cols="12"
       sm="8">
       <h2>Contact me</h2>
      </v-col>
     </v-row>
     <v-row
      align="center"
      justify="center">
      <v-col
       cols="12"
       sm="8">
       <v-text-field
        v-model="name"
        label="Name"
        :rules="nameRules"
        required>
       </v-text-field>
      </v-col>
      <v-col
       cols="12"
       sm="8">
       <v-text-field
        v-model="email"
        label="Email"
        :rules="emailRules"
        required>
       </v-text-field>
      </v-col>
      <v-col
       cols="12"
       sm="8">
       <v-textarea
        v-model="textContact"
        outlined
        counter="100"
        >
        <template v-slot:label>
         <div>
          Description <small>(optional)</small>
         </div>
        </template>
       </v-textarea>
      </v-col>
     </v-row>
     <v-row
      align="end"
      justify="end">
      <v-col
       cols="3">
       <v-btn
       :disabled="!valid"
       color="primary"
       class="ma-0 pa-0"
       @click="sendContent"
       >Send
       </v-btn>
      </v-col>
     </v-row>
    </v-container>
   </v-form>
  </v-container>
  <router-view/>
 </div>
</template>
<script>
export default {
 data(){
  return{
   name: null,
   email: null,
   textContact: null,
   valid: true,
   nameRules:[
    v => !!v || 'Name is requiered'
   ],
   emailRules: [
    v => !!v || 'E-mail is required',
    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
   ],
  }
 },
 methods:{
  sendContent(){
     this.$refs.contactForm.validate()
     this.$refs.contactForm.reset()
   },
 }
}
</script>