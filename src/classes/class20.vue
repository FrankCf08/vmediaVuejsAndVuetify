<template>
 <div>
  <v-container>
   <v-row
    justify="center"
    align="center">
    <v-col
     class="text-center" cols="12" sm="4">
     <div class="my-2">
      <v-btn depressed color="green"
       @click="setHomeworkList">HomeworkList</v-btn>
     </div>
     <div class="my-2">
      <v-btn depressed color="yellow"
       @click="setContact">Contact</v-btn>
     </div>
     <div class="my-2">
      <v-btn depressed small color="blue"
       @click="setBio">Bio</v-btn>
     </div>
    </v-col>
   </v-row>
  </v-container>
  <component
   :is="selected"></component>
 </div>
</template>
<script>
import HomeworkList from "../classes/class20/HomeworkList"
import Contact from "../classes/class20/Contact"
import Bio from "../classes/class20/Bio"

export default {
 components:{
  HomeworkList,
  Contact,
  Bio
 },
 data(){
  return{
   selected:null,
  }
 },
 methods:{
  setHomeworkList(){
   this.selected = 'HomeworkList'
  },
  setContact(){
   this.selected = "Contact"
  },
  setBio(){
   this.selected = "Bio"
  }
 },
}
</script>