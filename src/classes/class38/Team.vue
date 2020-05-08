<template>
 <div>
  <v-container>
   <v-row class="alignment">
    <v-col>
     <h2>Home View</h2>
     <router-view></router-view>
    </v-col>
   </v-row>
   <v-row class="alignment">
    <v-col>
     <h2> Profile picture View</h2>
     <router-view name="profile38"></router-view>
    </v-col>
   </v-row>
   <v-row class="alignment">
    <v-col>
    <h2>Bio View</h2>
    <router-view name="bio38"></router-view>
    </v-col>
   </v-row>
  </v-container>

 </div>
</template>

<style scoped>
	.alignment{
		padding: 1rem 0 1rem 0;
	}
</style>