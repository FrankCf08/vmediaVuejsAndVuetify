<template>
 <div>
  <v-row>
   <v-col>
    <v-card
     class="mx-auto alignment">
    <h2>Class 36 Component:</h2>
     <v-list>
      <v-list-item>
       <v-list-item-content>
        <v-list-item-subtitle>
         <router-link :to="`/classes/${$route.params.classID}/class36/team/${id}`"> Home </router-link>
        </v-list-item-subtitle>
       </v-list-item-content>
      </v-list-item>
     </v-list>
    </v-card>
    <router-view/>
   </v-col>
  </v-row>
 </div>
</template>
<script>
export default {

 data(){
  return{
   tab: null,
   id:'frank',
   // routes: [
   //  {
   //   routerLink: '/classes/team',
   //   text:'Home',
   //  },
   //  {
   //   routerLink: '/classes/team/profile',
   //   text:'Profile',
   //  },
   //  {
   //   routerLink: '/classes/team/bio',
   //   text:'Bio',
   //  },
   // ],
  }
 }
}
</script>
<style scoped>
	.alignment{
		padding: 2rem 2rem 2rem 2rem;
	}
</style>