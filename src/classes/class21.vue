<template>
 <div>
  <!-- <input type="text" :myPasswordvalue="password" @input=" password = $event.target.myPasswordvalue"> -->
  <Password
   v-model="password">
  </Password>
<!-- 
  <input type="text" v-model="password">
  <p>Message is: {{ password }}</p> -->
 </div>
</template>

<script>
import Password from "./class21/password"

export default {
 components:{
  Password
 },
 data(){
  return{
   password:'cacaguate'
  }
 },
}
</script>