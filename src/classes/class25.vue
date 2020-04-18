<template>
 <div>
  <!-- Added styling using $style -->
  <h1 :class="[$style.red]">This is my text</h1>
  <!-- OBject class dynamico-->
  <h1 :class="{[$style.underline] : underline}">This is my text</h1>
 </div>
</template>
<script>
export default {
 data(){
  return{
   underline: true,
  }
 }
}
</script>
<style module>
 .underline{
  text-decoration: underline;
 }
 .red{
  color: red;
 }
</style>