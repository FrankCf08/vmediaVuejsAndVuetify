<template>
 <div>
  <v-card
   class="mx-auto alignment"
   max-width="1200">
   <h1>Child User Component:</h1>
   <v-row
    align="center"
    justify="center">
    <v-col>
     <v-card
      elevation="8"
      color="blue lighten-5"
      class="mx-auto"
      max-width="500">
      <v-card-title
       class="cardTitle">Name:</v-card-title>
      <v-card-subtitle><span class="black--text"> Frank Cruz </span> </v-card-subtitle>
      <v-card-title
       class="cardTitle">Email:</v-card-title>
      <v-card-subtitle><span class="black--text"> frankcruz0806@gmail.com </span> </v-card-subtitle>
     </v-card>
    </v-col>
   </v-row>
  </v-card>
 </div>
</template>
<style scoped>
 .cardTitle{
  color:blue;
 }
 .alignment{
		padding: 2rem 2rem 2rem 2rem;
	}
</style>