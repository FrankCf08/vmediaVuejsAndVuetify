<template>
 <div>
  <v-row>
   <v-col>
    <v-card
     class="mx-auto alignment">
    <h2>Class {{$route.path.split('/')[3]}} Component:</h2>
    <router-link 
     :to="{name: 'HomeClass39', params:{classID: `${$route.params.classID}`, id: this.id}}"
     >
     Home 
    </router-link>
    <p class="red--text">Clicking on Home - it will redirected us to '/', omitting the default Home route</p>
    </v-card>
   </v-col>
  </v-row>
  <router-view/>
 </div>
</template>
<script>
export default {

 data(){
  return{
   tab: null,
   id:'frankfelix',
  }
 },

}
</script>
<style scoped>
	.alignment{
		padding: 2rem 2rem 2rem 2rem;
	}
</style>