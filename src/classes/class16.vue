<template>
 <div>
  <!-- <v-card
   class="mx-auto" 
   max-width="400">
   <v-list>
    <v-list-item-group
     color="indigo">
     <v-list-item
      v-for="duty in duties"
      :key="duty.id">
      <v-list-item-content>
       <v-list-item-title
       :title="duty.name"
       class="text-center">
       </v-list-item-title>
      </v-list-item-content>
     </v-list-item>
    </v-list-item-group>
   </v-list>
  </v-card> -->
  <slot 
   v-for="duty in duties"
   :titleName="duty.name"></slot>
 </div>
</template>
<script>
export default {
 name: "Class16",
 props:{
  duties:Array,
 },
 data(){
  return{

  }
 }
}
</script>