<template>
 <div>
  <!-- Modifiers -->
  <v-form
   ref="form"
   v-model="valid"
   @submit.prevent="sendData">
    <!-- .lazy: updates changes after typing -->
    <h1>.lazy: updates changes after typing</h1>
    <v-row
     align="center"
     justify="center"
     >
     <!-- Doesn't work on custome components -->
     <v-col
      class="text-center"
      cols="12">
      <v-text-field
       type="text"
       v-model="input1"
       label="Input 1">
      </v-text-field>
     </v-col>
     <v-col
      cols="12">
      Input 2: 
      <input 
       v-model.lazy="input2">
     </v-col>
    </v-row>
    <!-- .number: transform string v-model inputs to number -->
    <h1>.number: transform string v-model inputs to number</h1>
    <v-row
     align="center"
     justify="center"
     >
     <v-col
      class="text-center"
      cols="12">
      <v-text-field
       type="number"
       v-model.number="input3"
       label="Input 3">
      </v-text-field>
     </v-col>
     <v-col 
      cols="12">
      Input 4:
      <input
       type="number" 
       v-model.number="input4">
     </v-col>
    </v-row>
    <!-- .trim : Deletes white spaces-->
    <h1>.trim: Deletes white spaces</h1>
    <v-row
     align="center"
     justify="center"
     >
     <v-col
      class="text-center"
      cols="12">
      <v-text-field
       type="text"
       v-model.trim.lazy="input5"
       label="Input 5">
      </v-text-field>
     </v-col>
     <v-col 
      cols="12">
      Input 6:
      <input
       type="text" 
       v-model.lazy.trim="input6">
     </v-col>
    </v-row>
    <v-row
     align="center"
     justify="center">
     <v-col
      class="text-center">
      <v-btn
      color="success"
       @click="sendData">
       Send
      </v-btn>
     </v-col>
    </v-row>
  </v-form>
  <pre> {{ $data }} </pre>
 </div>
</template>
<script>
export default {
 data(){
  return{
   valid: false,
   input1:null,
   input2:null,
   input3:null,
   input4:null,
   input5:null,
   input6:null,
  }
 },
 methods: {
  sendData(){
   console.log('input3: ', typeof this.input3)
   console.log('input4: ', typeof this.input4)
  }
 }
}
</script>