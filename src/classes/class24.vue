<template>
 <div>
  <v-container>
   <h1>List of duties</h1>
   <v-card-title>List of duties finished:</v-card-title>
   <v-card
    class="mx-auto"
    max-width="400">
    <v-list>
     <v-list-item-group
      color="green"
      mandatory>
      <template
       v-for="(duty, index) in dutyFinished">
       <v-list-item
        :key="index"
        class="text-center"
        @click="changeDutyState(duty)">
        <v-list-item-content>
         <v-list-item-title> {{duty.name}}</v-list-item-title>
        </v-list-item-content>
       </v-list-item>
      </template>
     </v-list-item-group>
    </v-list>
   </v-card>
  </v-container>
  <v-divider></v-divider>
  <v-container>
   <v-card-title>List of duties unfinished:</v-card-title>
   <v-card
    class="mx-auto"
    max-width="400">
    <v-list>
     <v-list-item-group
      color="red"
      mandatory>
      <template
       v-for="(duty, index) in dutyUnfinished">
       <v-list-item
        :key="index"
        class="text-center"
        @click="changeDutyState(duty)">
        <v-list-item-content>
         <v-list-item-title> {{duty.name}}</v-list-item-title>
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
export default {
 data(){
  return{
   duties:[
     {name:'Do Cws', priority: 'high', completed: true, timeTaken: 128},
     {name:'Go for a walk', priority: 'low', completed: false, timeTaken: 21},
     {name:'Take my dog out', priority: 'high', completed: true, timeTaken: 85},
     {name:'Clean my room', priority: 'low', completed: true, timeTaken: 174},
     {name:'wash cothes', priority: 'high', completed: false, timeTaken: 16},
     {name:'Do the wash-up', priority: 'high', completed: false, timeTaken: 192},
     {name:'Clean Chases bed', priority: 'high', completed: false, timeTaken: 32},
   ],
  }
 },
 methods:{
  changeDutyState(duty){
   duty.completed = !duty.completed
  }
 },
 computed:{
  dutyFinished(){
   return this.duties.filter(duty => {
    return duty.completed
   })
  },
  dutyUnfinished(){
   return this.duties.filter(duty => !duty.completed)
  }
 }
}
</script>
<style scoped>
 .v-card__title {
  color: blue;
 }
</style>