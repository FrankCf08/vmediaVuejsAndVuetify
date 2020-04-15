<template>
 <div>
  <Homework
   v-for="duty in duties"
   :key="duty.name + '-class19'"
   :name="duty.name"></Homework>
 </div>
</template>
<script>
import Homework from "./class19/homework"

export default {
 props:{
  duties: Array,
 },
 components:{
  Homework
 }
}
</script>