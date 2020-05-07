<template>
 <div>
  <v-container>
   <h1 class="blue--text">Team Component: Child of "Class Component"</h1>
   <h4> Router view on <span class="blue--text">Team component</span>  here, for the children components:</h4>
   <div
    class="mt-2">
    <h3>My "Team component" identifier is:<span class="blue--text"> {{$route.params.id}} </span> </h3>
    <v-list>
     <v-list-item>
      <v-list-item-content>
       <v-list-item-subtitle>
        <router-link 
         :to="{ name: 'Profile'}"> 
         Profile
        </router-link>
       </v-list-item-subtitle>
       <v-list-item-subtitle>
        <router-link
         :to="{name: 'Bio'}">
         Bio
        </router-link>
       </v-list-item-subtitle>
      </v-list-item-content>
     </v-list-item>
    </v-list>
    <router-view></router-view>
   </div>
  </v-container>
 </div>
</template>
<style scoped>
	.alignment{
		padding: 2rem 1rem 2rem 1rem;
	}
</style>