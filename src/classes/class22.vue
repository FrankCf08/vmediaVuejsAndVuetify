<template>
 <div>
  <v-container>
   <CompanyUsers
    :people="randomPeople.people">
   </CompanyUsers>
  </v-container>
 </div>
</template>
<script>
import CompanyUsers from "./class22/CompanyUsers"
import { mapState } from 'vuex'

export default {

 components:{
  CompanyUsers,
 },
 computed:{
   ...mapState(['randomPeople'])
 },
}
</script>