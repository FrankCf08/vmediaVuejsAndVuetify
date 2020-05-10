<template>
 <div>
  <v-card
   color="blue"
   class="mx-auto alignment white--text"
   max-width="500">
   <h2>Class {{$route.path.split('/')[3]}} Component:</h2>
   <router-link
    class="white--text" 
    :to="{name: 'Contact40', params:{classID: `${$route.params.classID}`, isACustomer: this.isACustomer}}"
    >
    Contact 
   </router-link>
  </v-card>
  <router-view/>
 </div>
</template>
<script>
export default {
 data(){
  return{
   isACustomer: 'true'
  }
 }
}
</script>
<style scoped>
 .alignment{
  margin: 2rem 0 2rem 0;
  padding: 1rem 2rem 1rem 2rem;
 }
</style>>
