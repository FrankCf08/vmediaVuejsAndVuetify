<template>
 <div>
  <v-card
   class="mx-auto alignment"
   max-width="1300">
   <v-row
    align="center"
    justify="center">
    <v-col>
    <h2> Class 35</h2>
     <v-card
      color="blue darken-1"
      class="mx-auto"
      max-width="500">
      <v-card-title> <span class="white--text"> Company Name </span> </v-card-title>
     </v-card>
    </v-col>
   </v-row>
  <router-view/>
  </v-card>
 </div>
</template>
<style scoped>
	.alignment{
		padding: 2rem 2rem 2rem 2rem;
	}
</style>