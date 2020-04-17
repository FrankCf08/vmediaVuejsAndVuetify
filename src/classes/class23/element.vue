<!--
 <template>
  <div>
   <header v-if=" tipo === 'header'">
    <slot></slot>
   </header>
   <footer v-if=" tipo === 'footer'">
    <slot></slot>
   </footer>
  </div>
 </template>-->
<script>
export default {
 props:{
  tipo:String,
 },
 // New functions to create the Tag Type
 render(createElement){
  return createElement(
   this.tipo, //Tag type
   this.$slots.default, //Get the slot value and set the value ' HOla .......'
  )
 }
}
</script>