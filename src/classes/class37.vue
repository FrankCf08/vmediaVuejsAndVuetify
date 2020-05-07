<template>
 <div>
  <v-row>
   <v-col>
    <v-card
     class="mx-auto alignment">
    <h2>Class {{$route.path.split('/')[3]}} Component:</h2>
     <v-list>
      <v-list-item>
       <v-list-item-content>
        <v-list-item-subtitle>
         <router-link 
          :to="{name: 'HomeClass37', params:{classID: `${$route.params.classID}`, id: this.id}}"
          >
          Home 
         </router-link>
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
   id:'frankcruz',
  }
 },

}
</script>
<style scoped>
	.alignment{
		padding: 2rem 2rem 2rem 2rem;
	}
</style>