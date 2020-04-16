<template>
 <div>
  <!-- <input type="text"
   :value="password"
   @input="checkPassword($event.target.value)"> -->
  <v-form>
   <v-container fluid>
    <v-row>
     <v-col cols="12" sm="6">
       <v-text-field
        ref="mypasswordName"
        v-model="password"
        :append-icon="showText ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="showText ? 'text' : 'password'"
        name="input-10-1"
        label="Enter Password"
        hint="At least 8 characters"
        counter
        :value="value"
        @input="checkPassword"
        @click:append="showText = !showText"
       ></v-text-field>
     </v-col>
    </v-row>
   </v-container>
  </v-form>
 </div> 
</template>
<script>
export default {
 props:[
   'value'
 ],
 data(){
  return{
   custom: true,
   showText: false,
   password: this.value,
   rules: {
    required: value => !!value || 'Required.',
    min: v => v.length >= 8 || 'Min 8 characters',
    emailMatch: () => ('The email and password you entered don\'t match'),
   },
   noValidPassword:[
     '123456','admin','root','abc'
   ],
  }
 },
 methods:{
  checkPassword(){
    if(this.noValidPassword.includes(this.password)){
      this.password = ''
    }
    this.$emit('input', this.password)
  }
 },
 computed: {
   progress () {
     return Math.min(100, this.value.length * 10)
   },
   color () {
     return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
   },
 },
}
</script>