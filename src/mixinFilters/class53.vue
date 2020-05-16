<template>
 <div>
  <v-container>
   <v-row
    align="center"
    justify="center">
    <v-col
     class="text-center">
     <h1>Learning Stuff: 2020-2021</h1>
     <v-form
      ref="form"
      v-model="valid"
      @submit.prevent="addNewSubject">
      <v-text-field
        v-model="newSubject"
        :counter="20"
        label="Add a new Subject"
      ></v-text-field>
     </v-form>
    </v-col>
   </v-row>
   <v-card
    class="mx-auto"
    max-width="400">
    <v-list>
     <v-list-item-group
      color="green"
      mandatory>
      <template
       v-for="(subject, index) in listOfSubject">
       <v-list-item
        :key="index"
        class="text-center">
        <v-list-item-content>
         <v-list-item-title> {{subject.subject}}</v-list-item-title>
        </v-list-item-content>
       </v-list-item>
      </template>
     </v-list-item-group>
    </v-list>
   </v-card>
  </v-container>
 </div>
</template>
<script>
import formHelper from "../mixins/formHelper"

export default {
 /** Importing this mixin(formHelper), it can be used all data, methods, etc. from it.*/
  mixins:[formHelper]

 /*All this data below was taken to mixins/formHelper */
 // data(){
 //  return{
 //   valid: true,
 //   newSubject: null,
 //   listOfSubject:[
 //    {subject: 'Android'},
 //    {subject: 'IOS'},
 //    {subject: 'SQL'},
 //    {subject: 'AngularJS'}
 //   ]
 //  }
 // },
 // methods:{
 //  addNewSubject(){  
 //   this.listOfSubject.push({
 //    subject: this.newSubject
 //   })
 //   this.newSubject = ''
 //  }
 // }
}
</script>