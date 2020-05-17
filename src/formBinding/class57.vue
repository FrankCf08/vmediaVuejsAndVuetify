<template>
 <div>
  <v-container fluid>
   <v-snackbar
    multi-line
    color="success"
    right
    top
    v-model="snackbar"
    :timeout="timeout"
    >
    Form was sent successfully
    <v-btn
      fab
      @click="snackbar = false"
    >
     <span class="green--text">X</span>
    </v-btn>
   </v-snackbar>
   <v-form
    @submit.prevent="sendForm"
    ref="friendshipForm"
    v-model="valid">
    <v-container>
     <v-row
      align="center"
      justify="center">
      <v-col
       cols="12"
       sm="8">
       <h1 
        :class="[$vuetify.breakpoint.mdAndUp ? 'display-2' : 'display-1']">Friendship Form</h1>
      </v-col>
     </v-row>
     <v-divider dark></v-divider>
     <v-row
      align="center"
      justify="center">
      <v-col
       cols="12"
       sm="6">
       <v-text-field
        v-model="formValues.name"
        :rules="nameRules"
        label="Name">
       </v-text-field>
       <v-text-field
        v-model="formValues.surname"
        :rules="surnameRules"
        label="Surname">
       </v-text-field>
      </v-col>
      <v-col
       cols="12"
       sm="8">
       <v-textarea
        v-model="formValues.description"
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
      <v-col
       class="pa-0 ma-0"
       cols="12"
       sm="6">
       <v-radio-group
        v-model="formValues.isClient">
        <v-radio
         v-for="(radio, index) in radios"
         :key="index"
         :label="`${radio.option}`"
         :value="radio.value"
         :id="radio.value"
         :rules="generalRules">
         {{radio.value}}
        </v-radio>
       </v-radio-group>
      </v-col>
      <v-col
       cols="12"
       sm="8">
       <h2
        :class="[$vuetify.breakpoint.mdAndUp ? 'header-2' : 'title-1']">
        Where did we meet?
       </h2>
       <v-select
        v-model="formValues.place" 
        :items="places" 
        label="Select one"
        :rules="generalRules"
        >
       </v-select>
       <v-checkbox
        v-model="formValues.checkbox"
        :rules="checkboxRules"
        label="I agree to the Terms of Services and Privacy Policy?"
        required>
       </v-checkbox>
      </v-col>
      <v-col
       class="text-center" 
       cols="12"
       sm="8">
       <v-btn
        :disabled="!valid"
        width="200"
        color="success"
        @click="sendForm">
        Send
       </v-btn>
      </v-col>
     </v-row>
    </v-container>
   </v-form>
  </v-container>
 </div>
</template>
<script>
export default {
 data(){
  return{
   valid: true,
   snackbar: false,
   formValues:{
    name: null,
    surname: null,
    description: null,
    isClient: null,
    place: null,
    checkbox: null,
   },
   timeout: 5000,
   nameRules:[
    v => !!v || 'Name is requiered'
   ],
   surnameRules:[
    v => !!v || 'Surname is requiered'
   ],
   checkboxRules:[
    v => !!v || 'You must agree to continue'
   ],
   generalRules:[
    v => !!v || 'You must select one'
   ],
   radios:[
    {
     option: 'I am a client',
     value: 'yes'
    },
    {
     option: 'I am NOT a client',
     value:'no'
    },
   ],
   places:[
    'School',
    'University',
    'Room mates',
    'Flat mates',
    'None of the above'
   ],
  }
 },
 methods:{
  sendForm(){
   this.$refs.friendshipForm.validate()
   this.snackbar = true

   let form = {
    name: this.formValues.name,
    surname: this.formValues.surname,
    description: this.formValues.description,
    isClient: this.formValues.isClient,
    place: this.formValues.place,
    checkbox: this.formValues.checkbox,
   }

   console.log(form);

   // for(let key in this.formValues){
   //  console.log(`${key}: ${this.formValues[key]}`)
   // }

   this.resetForm()   
  },
  resetForm(){
   this.$refs.friendshipForm.reset()
  }
 }
}
</script>