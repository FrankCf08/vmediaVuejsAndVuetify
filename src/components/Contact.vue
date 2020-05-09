<template>
 <div>
  <v-card
   height="850">
   <v-img
    height="300"
    position="50% 45%"
    src="https://coverfiles.alphacoders.com/523/52310.jpg"
    ></v-img>
   <v-container>
    <v-row>
     <v-col
      class="text-center"
      cols="12">
      <v-avatar
       class="profile-photo"
       color="blue darken-3"
       size="200"
       >
       <v-img
        position="0 30%" 
        src="../assets/Frank_Cruz.jpg">
       </v-img>
      </v-avatar>
     </v-col>
    </v-row>
    <v-row>
     <v-col class="profile-details text-center">
      <v-list-item class="">
       <v-list-item-content>
        <v-list-item-title class="display-1">Frank Cruz</v-list-item-title>
        <v-list-item-subtitle class="subtitle-1">Software Developer</v-list-item-subtitle>
       </v-list-item-content>
      </v-list-item>
      <v-list-item>
       <v-list-item-content>
        <v-list-item-title class="title">Contact Details</v-list-item-title>
        <v-list-item-subtitle class="subtitle-1"><span class="black--text">email1:</span> frankcruz_08@hotmail.com</v-list-item-subtitle>
        <v-list-item-subtitle class="subtitle-1"><span class="black--text">email2:</span> frankcruz0806@gmail.com</v-list-item-subtitle>
        <v-list-item-subtitle class="subtitle-1"><span class="black--text">mobile:</span> +51 991815748</v-list-item-subtitle>
       </v-list-item-content>
      </v-list-item>
     </v-col>
    </v-row>
    <v-row>
     <v-col
      class="text-center"
      cols="12">
      <v-btn icon color="blue darken-4" href="https://www.instagram.com/frankcf08/?hl=en" target="_blank">
       <v-icon x-large>mdi-facebook</v-icon>
      </v-btn>
      <v-btn icon large color="pink" href="https://www.instagram.com/frankcf08/?hl=en" target="_blank">
       <v-icon x-large>mdi-instagram</v-icon>
      </v-btn>
      <v-btn icon large color="red">
       <v-icon x-large>mdi-youtube</v-icon>
      </v-btn>
      <v-btn icon large color="cyan">
       <v-icon x-large>mdi-twitter</v-icon>
      </v-btn>
      <v-btn icon large color="black" href="https://github.com/FrankCf08?tab=repositories" target="_blank">
       <v-icon x-large>mdi-github</v-icon>
      </v-btn>
      <v-btn icon large color="blue" href="https://www.linkedin.com/in/frankcruz08/" target="_blank">
       <v-icon x-large>mdi-linkedin</v-icon>
      </v-btn>
     </v-col>
    </v-row>
   </v-container>
  </v-card>
 </div>
</template>

<style scoped>
.profile-photo{
  border-radius: 50%;
  margin: -6rem;
  padding: 5px;
}
.profile-details{
  margin: 5rem 2rem 2rem 2rem;
}

</style>