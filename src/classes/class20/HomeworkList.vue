<template>
 <div>
  <h1>Homework List</h1>
  <Homework
   v-for="duty in duties"
   :key="duty.name"
   :duty="duty"></Homework>
 </div>
</template>
<script>
import Homework from "./Homework"

export default {

 components:{
  Homework,
 },

 data(){
  return{
   duties:[
        {name:'Do Cws', priority: 'high', done: true, timeTaken: 128},
        {name:'Go for a walk', priority: 'low', done: false, timeTaken: 21},
        {name:'Take my dog out', priority: 'high', done: true, timeTaken: 85},
        {name:'Clean my room', priority: 'low', done: true, timeTaken: 174},
        {name:'wash cothes', priority: 'high', done: false, timeTaken: 16},
        {name:'Do the wash-up', priority: 'high', done: false, timeTaken: 192},
      ],
  }
 }
}
</script>