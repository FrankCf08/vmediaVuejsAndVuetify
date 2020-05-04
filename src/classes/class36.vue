<template>
 <div>
  <v-row>
   <v-col>
    <v-card
     class="mx-auto alignment">
    <h2>Class Component:</h2>
     <v-list>
      <v-list-item>
       <v-list-item-content>
        <v-list-item-title> Home Class: </v-list-item-title>
        <v-list-item-subtitle
         v-for="(id, i) in ids"
         :key="i">
         <router-link 
          :to="`${id.routerLink}`"
          v-text="id.text">
         </router-link>
        </v-list-item-subtitle>
        <!-- <v-list-item-subtitle>
         <router-link to="/classes/team"> Home </router-link>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
         <router-link to="/classes/team/profile"> Profile </router-link>
        </v-list-item-subtitle>
        <v-list-item-subtitle>
         <router-link to="/classes/team/bio"> Bio </router-link>
        </v-list-item-subtitle> -->
       </v-list-item-content>
      </v-list-item>
     </v-list>
    </v-card>
   </v-col>
  </v-row>
 </div>
</template>
<script>
export default {

 data(){
  return{
   tab: null,
   ids: [
    {
     routerLink: '/classes/team',
     text:'Home',
    },
    {
     routerLink: '/classes/team/profile',
     text:'Profile',
    },
    {
     routerLink: '/classes/team/bio',
     text:'Bio',
    },
   ],
  }
 }
}
</script>
<style scoped>
	.alignment{
		padding: 2rem 2rem 2rem 2rem;
	}
</style>