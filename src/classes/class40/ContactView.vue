<template>
 <div>
  <v-container>
   <v-row class="alignment">
    <v-col>
     <h2>Contact View</h2>
     <router-view/>
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